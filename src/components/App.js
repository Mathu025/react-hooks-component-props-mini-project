import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header name="Blog App" />
     <About 
      image="https://via.placeholder.com/215"
      about="My Blog App"
     />
     <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
