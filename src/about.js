import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Infouser from './Infouser';
import { useMemo } from "react";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const About = () => {

  let query = useQuery();



  const uerInfo = useSelector((state) => state.userInfo.users);
  const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname, params) =>
      navigate({ pathname, search: `?${createSearchParams(params)}` });
  };

  const navigateSearch = useNavigateSearch();

  useEffect(() => {
    console.log(uerInfo);
  }, [uerInfo]);

  const handleNavigate = (data) => {
    console.log();
    navigateSearch("/infouser"
    , {
      id: data.id + 1,
      name: data.name,
      age: data.age,
      classm: data.classm,
      subject: data.subject,
      school: data.school,
    }                                                                                                                                                                                                  
    );
  };

  const handleback= (data) => {
    console.log();
    navigateSearch("/home"
    
    );
  };
  

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>S.N</th>
            <th> Name</th>
            <th>age</th>
            <th>class</th>
            <th>subject</th>
            <th>school</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {uerInfo.map((state, id) => {
            return (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{state.name}</td>
                <td>{state.age}</td>
                <td>{state.classm}</td>
                <td>{state.subject}</td>
                <td>{state.school}</td>
                <td>
                  <button type="Button" onClick={() => handleNavigate(state)}>
                    click me
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button type="button" onClick={handleback}>back</button>
    </div>
  );
};

export default About;
