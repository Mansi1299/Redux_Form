import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import { createSearchParams } from "react-router-dom";
import "./App.css";
import { addUser } from "./store/slice/UserInfoSlice";
function Home() {
  const uerInfo = useSelector((state) => state.userInfo.users);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [state, setState] = useState({
    id: 0,
    name: "",
    age: "",
    school: "",
    classm: "",
    subject: "",
  });

  const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname, params) =>
      navigate({ pathname, search: `?${createSearchParams(params)}` });
  };

  const navigateSearch = useNavigateSearch();

  const goToPosts = () =>
    navigateSearch(
      "/about"
      // {
      //   id: state.id + 1,
      //   name: state.name,
      //   age: state.age,
      //   classm: state.classm,
      //   subject: state.subject,
      //   school: state.school,
      // }
    );

  const changehandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    alert("Submitted");
    e.preventDefault();
    dispatch(
      addUser({
        id: uerInfo?.length ?? 0 + 1,
        name: state.name,
        age: state.age,
        school: state.school,
        classm: state.classm,
        subject: state.subject,
      })
    );
  };

  return (
    <div className="App">
      <form action="">
        <div className="mb-3 mt-3">
          <label for="email" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            placeholder="Enter Name"
            value={state?.name}
            onChange={changehandle}
            name="name"
          />
        </div>

        <div className="mb-3 mt-3">
          <label for="email" className="form-label">
            Age:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter age"
            value={state?.age}
            onChange={changehandle}
            name="age"
          />
        </div>
        <div className="mb-3 mt-3">
          <label for="email" className="form-label">
            School:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter School"
            value={state?.school}
            onChange={changehandle}
            name="school"
          />
        </div>
        <div className="mb-3 mt-3">
          <label for="email" className="form-label">
            Class:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter className"
            value={state?.classm}
            onChange={changehandle}
            name="classm"
          />
        </div>
        <div className="mb-3 mt-3">
          <label for="email" className="form-label">
            Subject:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter subject"
            value={state?.subject}
            onChange={changehandle}
            name="subject"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      <button
        type="click"
        className="btn btn-primary"
        // onClick={()=>navigation("goToPost")}
        onClick={goToPosts}
      >
        next Page
      </button>
    </div>
  );
}

export default Home;
