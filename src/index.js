const express = require("express");
const bodyParser = require("body-parser");



const server = express();
server.use(bodyParser.json());

let booksDb = [

];

class BooksModel {
  constructor({title, author, description}){
    this.title = title;
    this.author = author;
    this.description = description;
  }

   save() {
    booksDb.push(this);
    return this;
   }

   static all() {
    return booksDb;
   }

   static update(updateInfo = {}){ 

    booksDb = booksDb.map(book => {
        if(book.title === updateInfo.title) {
            return {...book, ...updateInfo};
        }
    return booksDb;
   });
   }
   static delete([title]) {
        let deleteBook = null;
         booksDb.filter(book => {
           if(book.title !== title){
              
                return true;
           }
            deleteBook = book;
              return false;
   });
    return deleteBook;
}

}


const listBooks = (req, res) => {
  const books = BooksModel.all();
  res.json({data: books});
}

const createBook = (req, res) => {

    const {title, author, description} = req.body;
    const book = new BooksModel({title, author, description});
    book.save();
    res.json({message: "Book created", data: book});
}

const updateBook = (req, res) => {

    const {title, author, description} = req.body;
    const updatedBook = BooksModel.update({title, author, description});
    res.json({message: "Book updated", data: updatedBook});

}

const deleteBook = (req, res) => {  
    
        const {title} = req.body;
        const deletedBook = BooksModel({title});
        res.json({message: "Book deleted", data: deletedBook});
}    

server.get("/book", listBooks); 

server.post("/book", createBook)

server.put("/book", updateBook)

server.delete("/book", deleteBook)


server.listen(3000, () => 
  console.log("server running on port 3000"));