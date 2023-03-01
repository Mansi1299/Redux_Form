import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  useParams, useSearchParams,} from "react-router-dom";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { addUser } from "./store/slice/UserInfoSlice";
function Infouser() {
    const uerInfo = useSelector((state) => state.userInfo.users);
  
  const [searchParams] = useSearchParams();
  const age = searchParams.get("age");
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const classm = searchParams.get("classm");
  const subject = searchParams.get("subject");
  const school = searchParams.get("school");


  const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname, params) =>
      navigate({ pathname, search: `?${createSearchParams(params)}` });
  };

  const navigateSearch = useNavigateSearch();

  useEffect(() => {
    console.log(uerInfo);
  }, [uerInfo]);

//   const handleNavigate = (data) => {
//     console.log();
//     navigateSearch("/infouser"
//     , {
//       id: data.id + 1,
//       name: data.name,
//       age: data.age,
//       classm: data.classm,
//       subject: data.subject,
//       school: data.school,
//     }
//     );
//   };
  const handlehome= (data) => {
    console.log();
    navigateSearch("/home"
    
    );
  };
  const handleback= (data) => {
    console.log();
    navigateSearch("/about"
    
    );
  };
  return (
    <div className="App">
 <h1>This is About </h1>
     <h1>   id= {id} </h1> 
     <h1>   name= {name} </h1> 
     <h1>    age= {age} </h1> 
     <h1>    subject= {subject} </h1> 
     <h1>    classm= {classm} </h1> 
     <h1>    school= {school} </h1> 
     <button type="button" onClick={handleback}>back</button>
     <button type="button" onClick={handlehome}>Home Page</button>
    </div>
  );
}

export default Infouser;
