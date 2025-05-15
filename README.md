Here’s a solid starter **README.md** for your auth API project:

---

# Auth API

A simple Node.js authentication API using Express, MongoDB, JWT, and bcrypt.

---

## Features

* User registration (signup)
* User login (signin) with JWT authentication
* Password reset
* Secure password hashing with bcrypt
* Protected routes using JWT middleware

---

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password_or_app_password
```

### 4. Start the server

```bash
npm run dev
```

Server will start on `http://localhost:5000`

---

## API Routes

| Method | Endpoint                   | Description             |
| ------ | -------------------------- | ----------------------- |
| POST   | `/api/auth/signup`         | Register a new user     |
| POST   | `/api/auth/signin`         | Login and receive a JWT |
| POST   | `/api/auth/reset-password` | Reset user password     |

---

## Usage

### Sign up

```bash
POST /api/auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

### Sign in

```bash
POST /api/auth/signin
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

Response:

```json
{
  "token": "jwt-token-here"
}
```

### Reset Password

```bash
POST /api/auth/reset-password
Content-Type: application/json

{
  "email": "user@example.com",
  "newPassword": "newpassword123"
}
```

---

## License

MIT © Oluwatobi Adeogun


