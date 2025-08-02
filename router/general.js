const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!isValid(username)) { 
      users.push({"username":username,"password":password});
      return res.status(200).json({message: "User successfully registred. Now you can login"});
    } else {
      return res.status(404).json({message: "User already exists!"});    
    }
  } 
  return res.status(404).json({message: "Unable to register user."});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  res.send(JSON.stringify(books,null,4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  res.send(books[isbn]);
});
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const author = req.params.author;
  let filtered_books = {};
  
  Object.keys(books).forEach(key => {
    if(books[key].author === author) {
      filtered_books[key] = books[key];
    }
  });
  
  res.send(filtered_books);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const title = req.params.title;
  let filtered_books = {};
  
  Object.keys(books).forEach(key => {
    if(books[key].title === title) {
      filtered_books[key] = books[key];
    }
  });
  
  res.send(filtered_books);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  res.send(books[isbn].reviews);
});

// Task 10: Get all books using Promise
public_users.get('/async',function (req, res) {
  const get_books = new Promise((resolve, reject) => {
    resolve(res.send(JSON.stringify({books}, null, 4)));
  });
  get_books.then(() => console.log("Promise for Task 10 resolved"));
});

// Task 11: Get book by ISBN using async-await
public_users.get('/async/isbn/:isbn', async function (req, res) {
  const isbn = req.params.isbn;
  try {
    const book = await new Promise((resolve) => {
      resolve(books[isbn]);
    });
    res.send(book);
  } catch (error) {
    res.status(500).json({message: "Error fetching book"});
  }
});

// Task 12: Get books by author using Promise
public_users.get('/async/author/:author',function (req, res) {
  const author = req.params.author;
  const get_books_by_author = new Promise((resolve, reject) => {
    let filtered_books = {};
    Object.keys(books).forEach(key => {
      if(books[key].author === author) {
        filtered_books[key] = books[key];
      }
    });
    resolve(filtered_books);
  });
  
  get_books_by_author.then((result) => res.send(result));
});

// Task 13: Get books by title using async-await
public_users.get('/async/title/:title', async function (req, res) {
  const title = req.params.title;
  try {
    const filtered_books = await new Promise((resolve) => {
      let result = {};
      Object.keys(books).forEach(key => {
        if(books[key].title === title) {
          result[key] = books[key];
        }
      });
      resolve(result);
    });
    res.send(filtered_books);
  } catch (error) {
    res.status(500).json({message: "Error fetching books"});
  }
});

module.exports.general = public_users;
