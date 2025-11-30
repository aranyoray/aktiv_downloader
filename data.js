const COUNTY_DATA = [
    {
        county: "Apache County, AZ",
        issues: [
            {
                label: "Youth",
                description: "Limited STEM pathways in remote Navajo Nation districts with inconsistent internet access",
                impact: "1,000–10,000",
                ideas: "Host weekend robotics camp, Start mobile maker cart, Asynchronous Python tutoring, Set up school WiFi repeater, Student-led equipment repair drives"
            },
            {
                label: "Elderly",
                description: "Isolated seniors lack transportation to medical facilities across 200+ mile distances",
                impact: "100–1,000",
                ideas: "Coordinate volunteer driver network, Organize telehealth setup workshops, Create medication delivery co-op, Map community wellness check-ins, Build simple appointment reminder system"
            }
        ]
    },
    {
        county: "Loving County, TX",
        issues: [
            {
                label: "Rural Low-Income",
                description: "Smallest US county lacks basic grocery access, nearest store 50 miles away",
                impact: "50–100",
                ideas: "Start traveling pantry service, Organize bulk buying co-op, Create garden seed library, Map water well sharing network, Build community solar dehydrator"
            },
            {
                label: "Youth",
                description: "Single school serves K-12, no advanced coursework or electives available",
                impact: "50–100",
                ideas: "Launch virtual college course program, Create peer tutoring exchange, Start online debate club, Organize skill-swap workshops, Build digital maker space"
            }
        ]
    },
    {
        county: "Owsley County, KY",
        issues: [
            {
                label: "Rural Low-Income",
                description: "Poorest US county struggles with flood recovery documentation for FEMA assistance",
                impact: "1,000–10,000",
                ideas: "Create disaster photo documentation guide, Organize paperwork help sessions, Build simple damage tracker app, Map vulnerable households, Train community navigators"
            },
            {
                label: "Youth",
                description: "Coal economy decline leaves teens with no visible career pathways",
                impact: "1,000–10,000",
                ideas: "Launch renewable energy training, Create apprenticeship matching platform, Start entrepreneurship incubator, Map remote job opportunities, Build resume workshop series"
            }
        ]
    },
    {
        county: "Holmes County, MS",
        issues: [
            {
                label: "Elderly",
                description: "Aging Delta farmers lack knowledge of conservation program eligibility",
                impact: "1,000–10,000",
                ideas: "Create plain-language USDA guide, Organize farm succession planning workshops, Build soil health workshop, Map water rights information, Start intergenerational farming mentorship"
            },
            {
                label: "Disabled",
                description: "Rural disabled residents lack accessible public buildings and sidewalks",
                impact: "1,000–10,000",
                ideas: "Audit and map accessibility gaps, Create simple ramp-building guide, Organize community build days, Start accessible transportation co-op, Build disability rights awareness campaign"
            }
        ]
    },
    {
        county: "McDowell County, WV",
        issues: [
            {
                label: "Youth",
                description: "Former coal towns have abandoned buildings attracting dangerous activities",
                impact: "1,000–10,000",
                ideas: "Launch creative space reclamation project, Start community mural program, Create safety audit map, Organize demolition volunteer corps, Build pocket park initiative"
            },
            {
                label: "Veterans",
                description: "Appalachian veterans unaware of specialized benefits for coal-worker exposure",
                impact: "1,000–10,000",
                ideas: "Create veterans benefits navigation guide, Organize claims assistance workshops, Map local VSO resources, Start peer support network, Build black lung screening awareness"
            }
        ]
    },
    {
        county: "Bronx County, NY",
        issues: [
            {
                label: "Youth",
                description: "High asthma rates in Mott Haven correlate with truck routes through residential areas",
                impact: "10,000–20,000",
                ideas: "Create air quality monitoring network, Map traffic pattern alternatives, Start bike lane advocacy campaign, Organize green roof workshops, Build asthma trigger education program"
            },
            {
                label: "Immigrant",
                description: "Undocumented families avoid reporting housing code violations due to deportation fears",
                impact: "10,000–20,000",
                ideas: "Create anonymous reporting toolkit, Launch know-your-rights workshops, Build tenant solidarity network, Map trusted legal resources, Start multilingual housing hotline"
            }
        ]
    },
    {
        county: "Oglala Lakota County, SD",
        issues: [
            {
                label: "Youth",
                description: "Lakota youth disconnected from traditional ecological knowledge and language",
                impact: "1,000–10,000",
                ideas: "Launch elder storytelling video project, Create Lakota plant identification app, Start traditional foods cooking series, Map sacred sites education program, Build youth language immersion camp"
            },
            {
                label: "Rural Low-Income",
                description: "Pine Ridge Reservation families face 90%+ unemployment with limited entrepreneurship support",
                impact: "10,000–20,000",
                ideas: "Create business planning workshop series, Start artisan cooperative marketplace, Build micro-loan navigator tool, Map remote work training, Organize social enterprise incubator"
            }
        ]
    },
    {
        county: "Starr County, TX",
        issues: [
            {
                label: "Immigrant",
                description: "Border colonias lack basic water infrastructure and colonia residents fear reporting contamination",
                impact: "10,000–20,000",
                ideas: "Create water testing kit distribution, Launch community science monitoring, Build contamination reporting app, Map well safety resources, Start clean water advocacy training"
            },
            {
                label: "Youth",
                description: "Rio Grande Valley students lack college counselors (2,500:1 ratio)",
                impact: "10,000–20,000",
                ideas: "Launch peer college application mentorship, Create FAFSA completion workshops, Build scholarship database, Map university visit carpools, Start financial aid myth-busting campaign"
            }
        ]
    },
    {
        county: "Presidio County, TX",
        issues: [
            {
                label: "Elderly",
                description: "Desert-dwelling seniors face extreme heat vulnerability without cooling centers",
                impact: "1,000–10,000",
                ideas: "Create cooling center location map, Organize wellness check phone tree, Build heat emergency preparedness guide, Start shade structure installation, Map vulnerable household registry"
            },
            {
                label: "LGBTQ+",
                description: "Isolated border town LGBTQ+ youth lack safe community spaces and mental health access",
                impact: "100–1,000",
                ideas: "Create virtual support group platform, Launch anonymous mental health hotline, Build safe space directory, Start LGBTQ+ library program, Organize ally training workshops"
            }
        ]
    },
    {
        county: "Aleutians West, AK",
        issues: [
            {
                label: "Youth",
                description: "Island students lack marine science education despite living in world's richest fishing grounds",
                impact: "1,000–10,000",
                ideas: "Launch citizen science kelp monitoring, Create fishing sustainability curriculum, Start youth fisheries observer program, Map ocean literacy workshops, Build marine biology mentorship"
            },
            {
                label: "Rural Low-Income",
                description: "Subsistence hunters struggle with changing migration patterns affecting food security",
                impact: "1,000–10,000",
                ideas: "Create wildlife movement tracking app, Launch traditional knowledge documentation, Build hunting season advisory system, Map food preservation workshops, Start community freezer network"
            }
        ]
    },
    {
        county: "Imperial County, CA",
        issues: [
            {
                label: "Youth",
                description: "Desert agricultural town youth face highest asthma hospitalization rates in California",
                impact: "10,000–20,000",
                ideas: "Launch dust storm alert system, Create indoor air filter distribution, Build asthma self-management program, Map clean air shelter locations, Start respiratory health education"
            },
            {
                label: "Immigrant",
                description: "Farmworker families lack transportation to WIC appointments during harvest season",
                impact: "10,000–20,000",
                ideas: "Organize mobile WIC clinic advocacy, Create ride-share matching system, Build benefits application assistance, Map flexible appointment campaign, Start farmworker family navigator program"
            }
        ]
    },
    {
        county: "Malheur County, OR",
        issues: [
            {
                label: "Immigrant",
                description: "Latinx farmworker children serve as family translators for complex medical situations",
                impact: "1,000–10,000",
                ideas: "Create medical interpreter volunteer corps, Launch language line awareness campaign, Build multilingual health literacy program, Map translation services directory, Start cultural competency training"
            },
            {
                label: "Rural Low-Income",
                description: "Remote ranching families lack access to mental health crisis services",
                impact: "1,000–10,000",
                ideas: "Create agricultural stress hotline, Launch rural mental health first aid, Build peer support rancher network, Map telehealth setup assistance, Start crisis text line awareness"
            }
        ]
    },
    {
        county: "Shannon County, MO",
        issues: [
            {
                label: "Disabled",
                description: "Ozark residents with disabilities lack accessible trails despite tourism economy",
                impact: "1,000–10,000",
                ideas: "Audit and map trail accessibility, Create adaptive outdoor equipment library, Launch accessible tourism guide, Build volunteer trail improvement corps, Start disability outdoor adventure program"
            },
            {
                label: "Elderly",
                description: "Isolated seniors lack reliable internet access for SSA and Medicare management",
                impact: "1,000–10,000",
                ideas: "Create digital navigator volunteer program, Launch low-cost internet advocacy, Build device donation and setup, Map public WiFi locations, Start benefits management workshops"
            }
        ]
    },
    {
        county: "Kusilvak Census Area, AK",
        issues: [
            {
                label: "Youth",
                description: "Yup'ik villages face youth suicide crisis with limited culturally-grounded prevention",
                impact: "1,000–10,000",
                ideas: "Create peer listening circle program, Launch traditional activities mentorship, Build crisis text support in Yup'ik, Map cultural healing practices, Start youth leadership council"
            },
            {
                label: "Rural Low-Income",
                description: "Tundra villages face food insecurity as permafrost thaw disrupts subsistence hunting",
                impact: "1,000–10,000",
                ideas: "Document changing hunting patterns, Create climate adaptation knowledge base, Launch community freezer network, Map traditional food alternatives, Build food sovereignty workshops"
            }
        ]
    },
    {
        county: "Maverick County, TX",
        issues: [
            {
                label: "Youth",
                description: "Border town students lack exposure to professional careers beyond retail and service",
                impact: "10,000–20,000",
                ideas: "Launch virtual career shadowing program, Create professional mentorship matching, Build skills bootcamp series, Map internship opportunities, Start entrepreneurship pitch competition"
            },
            {
                label: "Immigrant",
                description: "Mixed-status families avoid health services due to public charge fears",
                impact: "10,000–20,000",
                ideas: "Create public charge myth-busting campaign, Launch trusted navigator network, Build know-your-rights workshops, Map safe health resources, Start multilingual information hotline"
            }
        ]
    },
    {
        county: "Baltimore City, MD",
        issues: [
            {
                label: "Youth",
                description: "West Baltimore students face lead exposure from row house water systems",
                impact: "20,000+",
                ideas: "Launch water filter distribution program, Create lead testing education, Build home remediation guide, Map high-risk housing, Start tenant advocacy training"
            },
            {
                label: "Disabled",
                description: "Aging row houses lack wheelchair accessibility trapping disabled residents",
                impact: "10,000–20,000",
                ideas: "Create ramp-building volunteer corps, Launch accessibility audit program, Build home modification microgrants, Map accessible housing resources, Start universal design education"
            }
        ]
    },
    {
        county: "Todd County, SD",
        issues: [
            {
                label: "Youth",
                description: "Rosebud Reservation teens lack driver's education preventing job access",
                impact: "1,000–10,000",
                ideas: "Launch volunteer driving instructor program, Create driver's ed fundraising campaign, Build online practice test platform, Map transportation alternatives, Start driver mentorship matching"
            },
            {
                label: "Veterans",
                description: "Native American veterans face cultural disconnect in mainstream VA services",
                impact: "1,000–10,000",
                ideas: "Create culturally-adapted peer support, Launch traditional healing integration, Build Native veteran navigator program, Map tribal veterans services, Start talking circle facilitation"
            }
        ]
    },
    {
        county: "Hidalgo County, NM",
        issues: [
            {
                label: "Rural Low-Income",
                description: "Mining ghost towns lack broadband infrastructure for remote work opportunities",
                impact: "1,000–10,000",
                ideas: "Launch community broadband feasibility study, Create mobile hotspot lending library, Build digital skills training, Map remote job opportunities, Start internet access advocacy"
            },
            {
                label: "Elderly",
                description: "Desert seniors face extreme isolation with nearest neighbor miles away",
                impact: "1,000–10,000",
                ideas: "Create volunteer check-in phone tree, Launch emergency alert system, Build friendly visitor program, Map isolated household registry, Start satellite phone lending"
            }
        ]
    },
    {
        county: "Quitman County, MS",
        issues: [
            {
                label: "Youth",
                description: "Delta students lack access to AP courses and college preparation",
                impact: "1,000–10,000",
                ideas: "Launch virtual AP course program, Create peer tutoring network, Build college application workshop series, Map scholarship opportunities, Start SAT prep bootcamp"
            },
            {
                label: "Elderly",
                description: "Aging African American farmers losing land due to heirs property legal complexity",
                impact: "1,000–10,000",
                ideas: "Create heirs property legal clinic, Launch land retention workshops, Build estate planning assistance, Map family land preservation resources, Start agricultural succession planning"
            }
        ]
    },
    {
        county: "Kenedy County, TX",
        issues: [
            {
                label: "Rural Low-Income",
                description: "Tiny ranching county lacks basic emergency services and volunteer recruitment",
                impact: "50–100",
                ideas: "Create emergency response training program, Launch volunteer EMT recruitment, Build mutual aid coordination system, Map emergency resources, Start community disaster preparedness"
            },
            {
                label: "Youth",
                description: "Isolated ranch youth lack peer socialization and extracurricular opportunities",
                impact: "50–100",
                ideas: "Launch virtual club platform, Create regional activity carpools, Build pen pal exchange program, Map shared interest groups, Start quarterly teen gathering events"
            }
        ]
    },
    {
        county: "Orleans Parish, LA",
        issues: [
            {
                label: "Youth",
                description: "Lower Ninth Ward students lack flood emergency preparedness training",
                impact: "10,000–20,000",
                ideas: "Create youth disaster preparedness program, Launch flood safety education, Build emergency kit assembly workshops, Map evacuation resources, Start community resilience training"
            },
            {
                label: "LGBTQ+",
                description: "LGBTQ+ youth of color face compounded discrimination in housing and employment",
                impact: "10,000–20,000",
                ideas: "Launch LGBTQ+ job skills program, Create safe housing navigator, Build anti-discrimination reporting tool, Map affirming employers, Start workplace ally training"
            }
        ]
    },
    {
        county: "Hudspeth County, TX",
        issues: [
            {
                label: "Rural Low-Income",
                description: "Desert county residents lack access to fresh produce with nearest grocery 80+ miles",
                impact: "1,000–10,000",
                ideas: "Launch mobile farmers market, Create community garden network, Build food preservation workshops, Map bulk buying co-op, Start greenhouse starter program"
            },
            {
                label: "Immigrant",
                description: "Border checkpoint creates healthcare access barrier for immigrant families",
                impact: "1,000–10,000",
                ideas: "Map checkpoint-free healthcare routes, Create mobile health clinic advocacy, Build telehealth access program, Launch medical travel fund, Start health navigator service"
            }
        ]
    },
    {
        county: "Wayne County, MI",
        issues: [
            {
                label: "Youth",
                description: "Detroit students lack access to computer science pathways despite tech job growth",
                impact: "20,000+",
                ideas: "Launch coding bootcamp network, Create tech mentorship matching, Build device lending program, Map tech apprenticeships, Start girls-in-tech initiative"
            },
            {
                label: "Disabled",
                description: "Disabled residents face inaccessible DDOT bus stops and broken infrastructure",
                impact: "20,000+",
                ideas: "Create accessibility audit campaign, Launch transit advocacy training, Build accessible route mapping app, Map barrier reporting system, Start universal design education"
            }
        ]
    },
    {
        county: "Zapata County, TX",
        issues: [
            {
                label: "Youth",
                description: "Border town youth lack swimming skills despite living on Rio Grande reservoir",
                impact: "1,000–10,000",
                ideas: "Launch community swim lesson program, Create water safety education, Build lifeguard training initiative, Map safe swimming locations, Start drowning prevention campaign"
            },
            {
                label: "Elderly",
                description: "Aging Mexican-American residents lack Spanish-language dementia care resources",
                impact: "1,000–10,000",
                ideas: "Create bilingual dementia education, Launch caregiver support groups, Build respite care navigator, Map Spanish-speaking providers, Start memory cafe program"
            }
        ]
    },
    {
        county: "Aroostook County, ME",
        issues: [
            {
                label: "Rural Low-Income",
                description: "Potato farming families face climate-driven crop failures without adaptation support",
                impact: "10,000–20,000",
                ideas: "Launch climate-resilient farming workshops, Create crop diversification guide, Build soil health program, Map agricultural extension resources, Start farmer peer learning network"
            },
            {
                label: "Youth",
                description: "Northernmost US county youth face seasonal affective disorder without mental health access",
                impact: "10,000–20,000",
                ideas: "Create SAD awareness campaign, Launch light therapy lending library, Build peer support groups, Map mental health telehealth, Start winter wellness program"
            }
        ]
    },
    {
        county: "Cook County, IL",
        issues: [
            {
                label: "Youth",
                description: "South Side students lack access to mental health counseling despite trauma exposure",
                impact: "20,000+",
                ideas: "Launch school-based therapy expansion, Create trauma-informed educator training, Build peer counseling program, Map youth mental health resources, Start healing circles initiative"
            },
            {
                label: "LGBTQ+",
                description: "Trans youth face unsafe school environments and lack affirming healthcare",
                impact: "20,000+",
                ideas: "Create safe schools audit campaign, Launch trans health navigator program, Build gender-affirming care map, Start GSA leadership training, Organize pronoun education workshops"
            }
        ]
    },
    {
        county: "Issaquena County, MS",
        issues: [
            {
                label: "Rural Low-Income",
                description: "Second-smallest US county lacks any commercial grocery store",
                impact: "100–1,000",
                ideas: "Launch traveling market service, Create food co-op feasibility study, Build community garden network, Map bulk buying program, Start meal delivery co-op"
            },
            {
                label: "Elderly",
                description: "Aging Delta residents lack access to specialists requiring 100+ mile trips",
                impact: "100–1,000",
                ideas: "Create medical travel coordination, Launch telehealth literacy program, Build specialist visit carpools, Map mobile clinic schedule, Start health navigator service"
            }
        ]
    },
    {
        county: "Alger County, MI",
        issues: [
            {
                label: "Youth",
                description: "Upper Peninsula students lack exposure to environmental careers despite forest economy",
                impact: "1,000–10,000",
                ideas: "Launch forestry career pathways program, Create conservation internship matching, Build outdoor skills bootcamp, Map environmental jobs, Start youth land stewardship corps"
            },
            {
                label: "Rural Low-Income",
                description: "Seasonal tourism economy leaves families unemployed during long winters",
                impact: "1,000–10,000",
                ideas: "Create winter skills training program, Launch year-round income diversification, Build remote work training, Map off-season opportunities, Start cooperative business incubator"
            }
        ]
    },
    {
        county: "Mora County, NM",
        issues: [
            {
                label: "Elderly",
                description: "Hispanic seniors lack Spanish-language Medicare enrollment assistance",
                impact: "1,000–10,000",
                ideas: "Create bilingual Medicare navigator program, Launch enrollment workshop series, Build benefits comparison tool, Map Spanish-speaking counselors, Start SHIP volunteer training"
            },
            {
                label: "Youth",
                description: "Mountain valley students lack reliable school bus service due to road conditions",
                impact: "1,000–10,000",
                ideas: "Launch safe routes mapping project, Create carpool coordination system, Build weather alert network, Map alternative transportation, Start school attendance barrier study"
            }
        ]
    },
    {
        county: "Clay County, WV",
        issues: [
            {
                label: "Youth",
                description: "Appalachian students lack dental care access with children's oral health crisis",
                impact: "1,000–10,000",
                ideas: "Launch school-based dental sealant program, Create oral health education, Build dental care navigation, Map mobile dentistry advocacy, Start toothbrush distribution campaign"
            },
            {
                label: "Rural Low-Income",
                description: "Hollers residents lack cell phone service preventing emergency 911 calls",
                impact: "1,000–10,000",
                ideas: "Create emergency communication map, Launch signal booster lending program, Build community alert system, Map coverage gaps advocacy, Start satellite phone network"
            }
        ]
    },
    {
        county: "Esmeralda County, NV",
        issues: [
            {
                label: "Rural Low-Income",
                description: "Desert mining county lacks basic childcare preventing parent workforce participation",
                impact: "100–1,000",
                ideas: "Launch community babysitting co-op, Create childcare provider recruitment, Build home daycare startup guide, Map childcare subsidy assistance, Start family care cooperative"
            },
            {
                label: "Youth",
                description: "Isolated students lack extracurricular activities and sports programs",
                impact: "100–1,000",
                ideas: "Create virtual club platform, Launch regional sports league, Build activity supply library, Map regional program transportation, Start youth leadership council"
            }
        ]
    }
];
