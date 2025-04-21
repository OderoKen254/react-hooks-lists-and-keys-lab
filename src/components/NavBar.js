import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>
      <a href="#home" key="home">home</a>
      <a href="#about" key="about">about</a>
      <a href="#projects" key="projects">projects</a>
  </nav>


  //   <nav>
  //   {links.map((link) => (
  //     <a key={link} href={`/${link}`} className="nav-link">
  //       {link.charAt(0).toUpperCase() + link.slice(1)}
  //     </a>
  //   ))}
  // </nav>
  );
}

export default NavBar;
