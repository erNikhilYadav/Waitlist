# Waitlist Website

A modern, scalable waitlist website for product launches. Built with HTML, SCSS, and JavaScript using Vite as the build tool.

## Project Structure

```
waitlist/
├── public/                 # Public assets and HTML
│   └── index.html         # Main HTML file
├── src/
│   ├── assets/            # Static assets
│   │   ├── images/       # Image files
│   │   └── fonts/        # Font files
│   ├── styles/           # SCSS styles
│   │   └── main.scss     # Main stylesheet
│   ├── scripts/          # JavaScript files
│   │   └── main.js       # Main JavaScript file
│   └── components/       # Reusable components
├── dist/                  # Production build
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## Features

- Modern, responsive design
- Form validation
- API integration
- Animated UI elements
- SCSS for styling
- Modular JavaScript
- Build optimization with Vite

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Development

- The project uses Vite for fast development and optimized builds
- SCSS for maintainable styling
- Modular JavaScript with ES6+ features
- Axios for API requests

## API Integration

The website integrates with the waitlist API at `https://go-backend-chma.onrender.com/api/waitlist`. The API expects a POST request with the following data:

```json
{
    "name": "string",
    "email": "string"
}
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 