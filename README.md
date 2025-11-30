# Scover

Discover underrepresented, high-school-solvable community issues across U.S. counties.

## Overview

Scover is a lightweight, client-side web application that helps users search U.S. counties and instantly view curated lists of local community issues affecting vulnerable populations. Each issue includes specific micro-intervention ideas that high school students can implement.

## Features

- **Real-time search**: Filter 30+ counties by name
- **Categorized issues**: Youth, Elderly, LGBTQ+, Disabled, Veterans, Immigrant, Rural Low-Income
- **Impact tiers**: Visualize reach from 50 people to 20,000+
- **Actionable ideas**: 5 micro-interventions per issue
- **Zero dependencies**: Runs entirely in the browser (uses CDN for Tailwind CSS)

## How to Run

Simply open `index.html` in any modern web browser. No build step, no server required.

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server (optional)
python3 -m http.server 8000
# Then navigate to http://localhost:8000
```

## Project Structure

```
.
├── index.html    # Main HTML structure and Tailwind CSS
├── data.js       # Hardcoded county issue dataset (30+ counties, 60+ issues)
├── app.js        # Search and rendering logic
└── README.md     # This file
```

## Data Methodology

Issues were selected based on:

1. **High-school solvability** - Can be addressed with youth-led initiatives
2. **Uniqueness** - Underrepresented problems not commonly highlighted
3. **Locality** - Specific to geographic and cultural contexts
4. **Measurability** - Community can track impact

Data sources include patterns from U.S. Census, County Health Rankings, EPA EJScreen, CDC PLACES, USDA ERS, NCES, and local journalism.

## Usage

1. Type any county name in the search bar (e.g., "Apache County, AZ")
2. View issues categorized by affected population
3. Read impact tier estimates
4. Explore micro-intervention ideas
5. Take action in your community

## License

MIT
