from flask import Flask, render_template, request
from datetime import datetime
from selenium import webdriver
from selenium_stealth import stealth
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time, logging, os, urllib.request

app = Flask(__name__)
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

URL = "http://115.246.138.10/aktiv"
options = Options()
options.add_argument("--disable-extensions")
options.add_argument("--disable-gpu")
options.add_argument("--headless=new")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--remote-debugging-port=9222")

options.add_experimental_option('prefs', {
    "download.default_directory": "/Users/aranyoray/Downloads",  # Change default directory for downloads
    "download.prompt_for_download": False,  # To auto-download the file
    "download.directory_upgrade": True,
    "plugins.always_open_pdf_externally": True  # It will not show PDF directly in Chrome
})

def enter_username(driver):
    try:
        id_input = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, 'MainContent_TxtUserId')))
        id_input.clear()
        id_input.send_keys("Guddu")
        id_input.send_keys(Keys.ENTER)
    except Exception as e:
        logging.error(f"Error entering username: {str(e)}")
        enter_username(driver)

def enter_password(driver):
    try:
        pass_input = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, 'MainContent_TxtPassword')))
        pass_input.clear()
        pass_input.send_keys(Keys.ENTER)
    except Exception as e:
        logging.error(f"Error entering password: {str(e)}")
        enter_password(driver)

def click_login_button(driver):
    try:
        login_button = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.ID, 'MainContent_BtnLogin')))
        login_button.click()
    except Exception as e:
        logging.error(f"Error clicking login button: {str(e)}")
        click_login_button(driver)

def download_pdf(from_date, to_date):
    driver = None
    try:
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
        stealth(driver,
                languages=["en-US", "en"],
                vendor="Google Inc.",
                platform="Win32",
                webgl_vendor="Intel Inc.",
                renderer="Intel Iris OpenGL Engine",
                fix_hairline=True,)
        driver.get(URL)
        enter_username(driver)
        enter_password(driver)
        click_login_button(driver)
        
        driver.get(f'{URL}/ReportBillRegisterDeptPrint.aspx?FD={from_date}&TD={to_date}&SB=1&BDTLS=1&SDA=0&SBS=0&GBSD=0&GBM=0&GBD=0&CBR=0&CPIT=0&Z=0&Z_TEXT=&U=0&U_TEXT=&SHAR=0&B=1&B_TEXT=ANUBHAV%20LIFE%20CARE%20,2/8%20JESSORE%20ROAD%20(EAST),BANAMALI%20PUR,GANJI%20MILL%20&RD=0&RD_TEXT=&ORG=0&ORG_TEXT=&COLL=0&COLL_TEXT=&DEPTSTR=&SUBDEPTSTR=')
        try:   
            open_button = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.ID, "open-button")))
            open_button.click()
            logging.info("Open button clicked successfully")
        except Exception as e:
            print(f"Open button not found. Trying alternative methods. Error: {str(e)}")

            try:
                driver.execute_script("document.querySelector('pdf-viewer#viewer').shadowRoot.querySelector('div#toolbar').shadowRoot.querySelector('viewer-download-controls#downloads').shadowRoot.querySelector('cr-icon-button#download').click()")
                logging.info("PDF download initiated through JavaScript")
            except Exception as js_e:
                logging.warning(f"JavaScript method failed. Error: {str(js_e)}")

                # Switch to iframe if it exists and click the show button if no toolbar is found
                try:
                    WebDriverWait(driver, 20).until(EC.frame_to_be_available_and_switch_to_it((By.CSS_SELECTOR, "iframe[src*='ReportBillRegisterDeptPrint']")))
                    fallback_show_button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "MainContent_BtnShow")))
                    fallback_show_button.click()
                    logging.info("Fallback show button clicked successfully")
                except Exception as fallback_e:
                    logging.error(f"All download methods failed. Error: {str(fallback_e)}")

                pdf_url = driver.find_element(By.TAG_NAME, 'iframe').get_attribute("src")
                download_directory = "/Users/aranyoray/Downloads/Bill.pdf"
                urllib.request.urlretrieve(pdf_url, download_directory)
                print("PDF downloaded using fallback method successfully!")

                # Add a delay to ensure the file download completes
                time.sleep(10)

    except Exception as e:
        if(str(e)=="Message: element not interactable"):
            print(f"An error occurred: {str(e)}")
            download_pdf(from_date, to_date)
        else:
            print(f"An error occurred: {str(e)}")

    finally:
        driver.quit()

@app.route('/')
def index():
    current_date = datetime.today().strftime('%Y-%m-%d')
    return render_template('index.html', current_date=current_date)

@app.route('/download', methods=['POST'])
def download():
    from_date = request.form['from_date']
    to_date = request.form['to_date']
    try:
        download_pdf(from_date, to_date)
        return "PDF Downloaded Successfully!"
    except Exception as e:
        logging.error(f"Unexpected error, download failed: {str(e)}")
        return "An unexpected error occurred. Please check the logs for more information.", 500

if __name__ == "__main__":
    port = 5000
    while True:
        try:
            app.run(debug=True, port=port)
            print(port)
            break
        except OSError:
            port += 1
