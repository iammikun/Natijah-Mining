import React, { useEffect } from "react";
import Hero from "../../Components/Blog/Hero/Hero";
import Nav from "../../Components/Blog/Nav/Nav";
import News from "../../Components/Blog/News/News";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
