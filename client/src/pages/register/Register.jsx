import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { useAxiosPublic } from "../../Hooks/useAxiosPublic";

const Register = () => {
  const [formvalue, setFormvalue] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  // const [setMessage] = useState("");
  const handleInput = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const { user, signUp } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    user && navigate("/");
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: formvalue.username,
      email: formvalue.email,
      password: formvalue.password,
      name: formvalue.name,
    };
    // const res= await axios.post("http://localhost/Social-Media-main/api/user.php",formData);
    //let jsonres= res.data.json();
    // if(res.data.success)
    // {
    //  setMessage(res.data.success);

    // }
    signUp(formData.email, formData.password)
      .then(() => axiosPublic.post("/user", formData))
      .then(() => navigate("/"));
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>
            Social
            <br />
            Hub.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formvalue.username}
              onChange={handleInput}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formvalue.email}
              onChange={handleInput}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formvalue.password}
              onChange={handleInput}
              required
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formvalue.name}
              onChange={handleInput}
            />
            <button name="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
