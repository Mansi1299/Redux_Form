import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ListDisplay = () => {
  const uerInfo = useSelector((state) => state.userInfo.users);
  return (
    <>
      <h4>List</h4>
      <ul>
        {uerInfo.map((users, id) => (
          <li key={id}>{users}</li>
        ))}
      </ul>
    </>
  );
};
export default ListDisplay;
