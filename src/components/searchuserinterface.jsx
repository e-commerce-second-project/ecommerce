import React from "react";
import NavbarWithSidebar from "./navsidebar.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
const Searchuserinterface=()=>{

const {target}=useParams()
const [searchResults, setSearchResults] = useState([]);
console.log(searchResults);
useEffect(() => {
    const search = async () => {
      try {
        let response;
        // Check if the target contains only letters (assuming category names don't contain spaces)
        if (target.match(/^[A-Za-z]+$/)) {
          // If it's letters, assume it's a category
          response = await axios.get(`http://localhost:3300/user/search`, {
            params: { category: target },
          });
        } else {
          // Otherwise, assume it's a name
          response = await axios.get(`http://localhost:3300/user/search`, {
            params: { name : target },
          });
        }
        // Set the search results in state
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error searching:", error);
      }
    };

    // Call the search function when the component mounts
    search();
  }, [target]);

    return(
    <div>
        <NavbarWithSidebar/>
        <div>hello</div>
    </div>
) 
}
export default Searchuserinterface