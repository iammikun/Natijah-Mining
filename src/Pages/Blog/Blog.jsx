import React from "react";
import Hero from "../../Components/Blog/Hero/Hero";
import Nav from "../../Components/Blog/Nav/Nav";
import News from "../../Components/Blog/News/News";

const Blog = () => {
  return (
    <div>
      <div>
        <Hero />
        <Nav />
        <News />
      </div>
    </div>
  );
};

export default Blog;
