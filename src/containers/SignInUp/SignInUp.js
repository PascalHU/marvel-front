import "./SignInUp.css";
import { useState } from "react";
import Login from "../../components/Login/Login";
import SignUp from "../../components/Signup/Signup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInUp = ({ isLogged, setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isLogin) {
        const response = await axios.post(
          "https://marvel-backend-ph.herokuapp.com/login",
          {
            email: email.toLowerCase(),
            password: password,
          }
        );
        if (response.data.token) {
          isLogged(response.data);
        }
      } else {
        const response = await axios.post(
          "https://marvel-backend-ph.herokuapp.com/signup",
          {
            email: email.toLowerCase(),
            username: username,
            password: password,
          }
        );
        if (response.data.token) {
          isLogged(response.data);
        }
      }
      navigate("/");
    } catch (error) {
      if (error.response.data.error.message === "Duplicate email") {
        setErrorMsg("Adresse email déjà utilisé");
      }
      if (
        error.response.data.error.message === "Incorrect password" ||
        "Email not exist"
      ) {
        setErrorMsg("Identifiant incorrect");
      }
    }
  };
  return (
    <div className="login-page ">
      <div className="form container">
        {isLogin ? (
          <Login
            setEmail={setEmail}
            setIsLogin={setIsLogin}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
            errorMsg={errorMsg}
            setErrorMsg={setErrorMsg}
          />
        ) : (
          <SignUp
            setEmail={setEmail}
            setIsLogin={setIsLogin}
            password={password}
            setPassword={setPassword}
            setUsername={setUsername}
            handleSubmit={handleSubmit}
            errorMsg={errorMsg}
            setErrorMsg={setErrorMsg}
          />
        )}
      </div>
    </div>
  );
};

export default SignInUp;
