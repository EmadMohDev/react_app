import React from "react";


function Header() {

     const title = "Design" ;
    return (
    <div className="navbar bg-dark">
         <h1 className="text-white" >{title == "Design" ? "Design is my life" : "Programming is my life"}</h1>
    </div>
   );
}

export default Header;

