import React from "react";


function Header() {

     const title = "Design" ;

     let client = {
          fName : "emad" ,
          lName : "mohamed"
     }  

    return (
    <div className="navbar bg-dark text-white">
     {/* Hello  {client.fName +" "+ client.lName} */}
     Hello  {`${client.fName} ${client.lName}`}
         <h1>{title === "Design" ? "Design is my life" : "Programming is my life"}</h1>
    </div>
   );
}

export default Header;

