import { useEffect, useState } from "react";
import { Users } from "./users";
import "./App.css";
import Table from "./table";
//import axios from "axios";


 //////////////////////BASIC SEARCH
 // function App() {
 //   const [query, setQuery] = useState("");
 //   return (
 //     < className="app">
      //       <input
      //         className="search"
      //         placeholder="Search..."
      //         onChange={(e) => setQuery(e.target.value.toLowerCase())}
      //       />
      //      <ul className="list">
      //            {Users.filter((user) =>
      //              user.first_name.toLowerCase().includes(query)
      //            ).map((user) => (
      //              <li key={user.id} className="listItem">
      //                {user.first_name}
      //              </li>
      //            ))}
      //          </ul>
      //  <div/>        

///////////////////////SEARCH ON A DATATABLE

 function App() {
   const [query, setQuery] = useState("");
   const keys = ["first_name", "last_name", "email"];
   const search = (data) => {
     return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
     );
   };
 return (
   <div className="app">
       <input
         className="search"
        placeholder="Search..."
       onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
     {<Table data={search(Users)} />}
   </div>
 );
}




export default App;