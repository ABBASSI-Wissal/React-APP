import axios from "axios";
import React, { useEffect, useState } from "react";
import { Books } from "./components/books/book";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookDetails } from "./components/book-details/details";
import "./App.css";
import { API } from "./environment";





function App() {
  
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
     <div className='slider'>  <h1 className='slider-title'>REACT APP</h1></div>
      <section className='blog-area section'>
          <div className='container'>
            <div className='row' >
                <BrowserRouter>
                  <Routes>
                    <Route
                      path="/"
                      element={books.map((book) => {
                        return <Books key={book.isbn} book={book} />;
                      })}
                    ></Route>
                    <Route path="/:isbn" element={<BookDetails/>}>
                      </Route>
                  </Routes>
                </BrowserRouter>
   
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
