import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";
import { addUser } from "./store/slice/UserInfoSlice";

const About = () => {
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
    navigateSearch("/about", {
      id: data.id + 1,
      name: data.name,
      age: data.age,
      classm: data.classm,
      subject: data.subject,
      school: data.school,
    });
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
    </div>
  );
};

export default About;
