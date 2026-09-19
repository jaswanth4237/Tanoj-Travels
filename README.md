# Tanoj Travel Agency

A responsive single-page travel website for **Tanoj Travel Agency**, focused on Kerala holiday packages and travel enquiries.

## Overview

The site presents Kerala as "God's Own Country" and promotes a featured **5 Nights / 6 Days** tour package priced at **₹29,999**. Visitors can browse destinations, view the gallery, call the agency, or submit their travel requirements through WhatsApp.

## Features

- Responsive landing page for desktop, tablet, and mobile screens
- Fixed navigation with scroll state and mobile menu
- Hero section with Kerala tour pricing and calls to action
- Featured package with itinerary highlights:
  - Alleppey cruise
  - Munnar tea gardens
  - Thekkady wildlife
  - Backwater houseboat
  - Cochin sightseeing
  - Beaches, accommodation, and meals
- Destination cards for Alleppey, Munnar, Thekkady, Kochi, and Kerala beaches
- Kerala experience and travel benefits sections
- Image gallery using remote Unsplash images
- Contact CTA with phone and WhatsApp links
- Booking form with required field validation
- Booking form that creates a prefilled WhatsApp enquiry
- Scroll reveal animations using `IntersectionObserver`
- Automatic minimum date validation for the travel date field
- Image error fallback styling

## Project Structure

```text
.
├── index.html   # Page structure and content
├── style.css    # Layout, responsive styles, and visual design
├── script.js    # Navigation, animations, date handling, and WhatsApp form logic
├── README.md    # Project documentation
└── .gitignore   # Files excluded from Git
```

## Run Locally

This is a static website and does not require a build step or package installation.

### Option 1: Open the file directly

Open `index.html` in a modern web browser.

### Option 2: Use a local server

From the project directory, run one of the following commands:

```bash
# Python
python -m http.server 8000

# Node.js, if serve is installed
npx serve .
```

Then open the local URL shown by the command, such as `http://localhost:8000`.

Using a local server is recommended because it provides behavior closer to a deployed website and avoids browser restrictions that can affect local files.

## Configuration

The contact number is currently `9390355758`. Update all phone and WhatsApp references when changing the agency contact details:

- `index.html`: phone links, displayed contact number, and the CTA WhatsApp link
- `script.js`: WhatsApp recipient number in the booking form handler

The main package price, duration, descriptions, and destinations are written directly in `index.html`.

## External Resources

- Google Fonts: DM Sans and Playfair Display
- Unsplash: remote destination and travel photography
- WhatsApp: enquiry links and booking form submission

The page needs an internet connection for external fonts, images, and WhatsApp links to work as intended.

## Deployment

Because the project is static, it can be deployed to any static hosting provider, including:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Azure Static Web Apps

Deploy the project root and use `index.html` as the entry page. No server-side environment variables are required.

## Browser Support

Use a current version of Chrome, Edge, Firefox, or Safari. The interactive behavior relies on standard browser APIs including `IntersectionObserver`, `URL` navigation, and HTML date inputs.

## License

No license has been specified for this project. Add a license before redistributing the source or media assets publicly.
