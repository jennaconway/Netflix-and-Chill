import axios from "axios";

export default {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // Gets user
  getUsers: function() {
    return axios.get("/api/");
  },
  create: function(object) {
    return axios.post("/api/", object);
  },

  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
