# MultiAuthify

**MultiAuthify** is a simple yet powerful JWT-based authentication package for Node.js that supports multiple authentication strategies. It allows developers to secure their APIs with robust authentication and authorization mechanisms. Whether you're building a RESTful API or any other type of Node.js application, MultiAuthify provides the tools you need to manage user sessions efficiently.


## Features

- **JWT-Based Authentication**: Use JSON Web Tokens (JWT) to create, verify, and manage user tokens.
- **Role-Based Authorization**: Define access control based on user roles.
- **Extensible Middleware**: Includes built-in middleware to authenticate users and protect routes.
- **TypeScript Ready**: Fully compatible with TypeScript.
- **Easy to Integrate**: Simple API with clear documentation.

## Getting Started

### Prerequisites

Before you start, make sure you have Node.js and npm (Node Package Manager) installed on your system.

1. **Install Node.js**: [Node.js Download](https://nodejs.org/)
2. **Install npm**: npm comes bundled with Node.js, so if you have Node.js, you also have npm.

### Installation

To install `MultiAuthify`, you can use npm:

```bash
npm install multiauthify
```

Or, if you're using Yarn:

```bash
yarn add multiauthify
```
## Basic Usage

To get started with MultiAuthify, follow these steps:

**1. Setup Environment Variables:**

Create a .env file in the root of your project and add the following:
```bash
    JWT_SECRET=your_secret_key
    TOKEN_EXPIRY=1h  # Token expiration time

```

**2. Require and Use MultiAuthify in Your Express Application:**

```bash
const express = require('express');
const { generateToken, authMiddleware, roleMiddleware } = require('multiauthify');

const app = express();
app.use(express.json());

// Login route
app.post('/login', (req, res) => {
    const { username, role } = req.body;
    if (!username) return res.status(400).json({ error: 'Username required' });

    const token = generateToken({ username, role });
    res.json({ token });
});

// Protected route
app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Welcome!', user: req.user });
});

// Admin route with role-based access
app.get('/admin', authMiddleware, roleMiddleware('admin'), (req, res) => {
    res.json({ message: 'Welcome Admin!' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

```

**3. Creating Tokens:**

You can create tokens using the generateToken function:
```bash
    const token = generateToken({ username: 'testUser', role: 'user' });
    console.log('Generated Token:', token);

```

**4. Authentication Middleware:**

Use the authMiddleware to protect routes:

```bash
const express = require('express');
const { authMiddleware } = require('multiauthify');

const app = express();
app.use(express.json());

app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Welcome!', user: req.user });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

```

**5. Role-Based Authorization:**

Implement role-based access control using roleMiddleware. Only users with the required role can access certain routes.

```bash
const express = require('express');
const { roleMiddleware } = require('multiauthify');

const app = express();
app.use(express.json());

app.get('/admin', authMiddleware, roleMiddleware('admin'), (req, res) => {
    res.json({ message: 'Welcome Admin!' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

```

## Contributing

We welcome contributions from the community! If you find a bug or want to add a feature, please [open an issue](https://github.com/arsalanahmad123/multiauthify/issues) or submit a pull request.

## Links 

- **Repository**: [Github Repository](https://github.com/arsalanahmad123/multiauthify)
- **Homepage**: [MulitAuthify Homepage](https://github.com/arsalanahmad123/multiauthify#readme)