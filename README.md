# DocumentProcessing

A responsive Angular banking workspace for reviewing and processing customer identity documents.

## Features

- Sign-in and sign-out flows with guarded dashboard routing
- Responsive document verification dashboard
- Mock Aadhaar and PAN document review queue
- Pending, verified, and needs-review statuses
- Local mock authentication state using browser storage
- Polished desktop and mobile layouts

## Development

Run the application:

```bash
npm install
npm start
```

Open `http://localhost:4200/`. Sign-in accepts any non-empty email and password values.

## Build

```bash
npm run build
```

## Technology

- Angular 17 standalone components
- TypeScript
- Angular Router
- SCSS
- Local mock data only
