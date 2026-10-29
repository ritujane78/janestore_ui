# JaneStore UI

A modern, responsive e-commerce frontend built with React and Vite, integrated with a Spring Boot REST API. JaneStore provides a shopping experience with product discovery, user authentication, shopping cart management, Stripe-powered checkout, customer profiles, and order tracking.


## Related Repository

- **Frontend:** [janestore_ui](https://github.com/ritujane78/janestore_ui)
- **Backend:** [janestore](https://github.com/ritujane78/janestore)

## Features

### Product Browsing
- Browse products and view individual product details.
- Search and sort products.
- Retrieve product information and perform validation through backend APIs.
- Display loading, error, and application error-page states.

### Authentication and Authorization
- User registration and login.
- JWT-based authentication integrated with the backend.
- Protected routes and role-based access checks.
- Handle expired authentication tokens.
- Preserve navigation context when authentication is required.

### Shopping Cart
- Add products to the cart and manage selected items.
- View cart contents and checkout totals.
- Use Redux Toolkit and React Redux for centralized cart state management.
- Prevent checkout submission when required conditions are not satisfied.

### Checkout and Payments
- Integrated Stripe payment components using Stripe.js and React Stripe.js.
- Submit checkout requests to the backend.
- Handle payment-related application states and errors.

### Customer Account
- View and manage profile information.
- Access order history and order details.
- Retrieve contact information from the backend.

### Administration
- View and manage customer orders.
- Confirm or cancel orders through backend APIs.
- View customer contact messages.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| React 19 | Component-based user interface |
| Vite 8 | Development server and production builds |
| React Router 7 | Client-side routing |
| Redux Toolkit | Centralized application state |
| React Redux | React integration for Redux |
| Tailwind CSS 4 | Utility-first styling |
| Axios | HTTP communication with the backend |
| Stripe.js | Payment integration |
| Font Awesome | Icons |
| React Toastify | Notifications |
| ESLint | Code quality and linting |

## Project Structure

```text
janestore_ui/
├── public/
│   └── stickers/
├── screenshots/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Application pages
│   ├── services/         # API communication and services
│   ├── store/            # Redux store and state management
│   ├── App.jsx           # Application routing and composition
│   └── main.jsx          # Application entry point
├── .env                  # Local environment configuration
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

*The directory descriptions above are conceptual; refer to the actual `src` tree for the precise filenames and organization.*

## Prerequisites

- Node.js compatible with the installed Vite version.
- npm.
- The [JaneStore Spring Boot backend](https://github.com/ritujane78/janestore).
- A configured Stripe account and test credentials if testing payments.

### 4. Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.


## Backend Integration

JaneStore UI communicates with the Spring Boot backend for product data, registration and login, customer profiles, orders, contact information, and checkout.

Start the backend and configure the frontend to use its API address before testing features that require server access.

See the [backend README](https://github.com/ritujane78/janestore) for Java, database, security, and Stripe configuration.

## Development Notes

- Keep API communication separate from presentation components where appropriate.
- Use Redux for shared cart state and other state that needs to be accessed across components.
- Keep authentication, protected routes, and role checks consistent with the backend security rules.
- Handle API failures and loading states to provide clear feedback to users.
- Use Stripe test mode when developing and testing payments.
