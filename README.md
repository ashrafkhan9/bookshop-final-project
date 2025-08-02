# Bookshop Final Project

A comprehensive Node.js Express API for managing a bookshop with user authentication, book management, and review system.

## Features

### Public Endpoints (Tasks 1-5)
- ✅ Get all books
- ✅ Get book details by ISBN
- ✅ Get books by author
- ✅ Get books by title
- ✅ Get book reviews

### User Management (Tasks 6-7)
- ✅ User registration
- ✅ User login with JWT authentication

### Authenticated Features (Tasks 8-9)
- ✅ Add/modify book reviews (authenticated users only)
- ✅ Delete book reviews (authenticated users only)

### Async/Promise Implementation (Tasks 10-13)
- ✅ Get all books using Promise
- ✅ Get book by ISBN using async-await
- ✅ Get books by author using Promise
- ✅ Get books by title using async-await

### Repository Management (Task 14)
- ✅ GitHub repository setup and deployment

## Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/bookshop-final-project.git
cd bookshop-final-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Public Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all books |
| GET | `/isbn/:isbn` | Get book by ISBN |
| GET | `/author/:author` | Get books by author |
| GET | `/title/:title` | Get books by title |
| GET | `/review/:isbn` | Get book reviews |
| POST | `/register` | Register new user |

### Async Public Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/async` | Get all books (Promise) |
| GET | `/async/isbn/:isbn` | Get book by ISBN (async-await) |
| GET | `/async/author/:author` | Get books by author (Promise) |
| GET | `/async/title/:title` | Get books by title (async-await) |

### Authenticated Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/customer/login` | User login |
| PUT | `/customer/auth/review/:isbn` | Add/modify review |
| DELETE | `/customer/auth/review/:isbn` | Delete review |

## Usage Examples

### Register User
```bash
POST /register
Content-Type: application/json

{
  "username": "testuser",
  "password": "testpass"
}
```

### Login
```bash
POST /customer/login
Content-Type: application/json

{
  "username": "testuser",
  "password": "testpass"
}
```

### Add Review
```bash
PUT /customer/auth/review/1?review=Great book!
```

### Get Book by ISBN
```bash
GET /isbn/1
```

## Available Books (ISBN 1-10)

1. "Things Fall Apart" by Chinua Achebe
2. "Fairy tales" by Hans Christian Andersen
3. "The Divine Comedy" by Dante Alighieri
4. "The Epic Of Gilgamesh" by Unknown
5. "The Book Of Job" by Unknown
6. "One Thousand and One Nights" by Unknown
7. "Njál's Saga" by Unknown
8. "Pride and Prejudice" by Jane Austen
9. "Le Père Goriot" by Honoré de Balzac
10. "Molloy, Malone Dies, The Unnamable, the trilogy" by Samuel Beckett

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **JWT** - Authentication
- **Express-session** - Session management
- **Axios** - HTTP client
- **Nodemon** - Development server

## Project Structure

```
final_project/
├── index.js              # Main server file
├── package.json          # Dependencies and scripts
├── router/
│   ├── general.js        # Public routes
│   ├── auth_users.js     # Authenticated routes
│   └── booksdb.js        # Book database
└── README.md            # Project documentation
```

## License

MIT License

