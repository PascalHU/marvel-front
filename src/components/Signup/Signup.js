import { useState } from "react";
const SignUp = ({
  setEmail,
  password,
  setPassword,
  setUsername,
  setIsLogin,
  handleSubmit,
  errorMsg,
  setErrorMsg,
}) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDisable, setIsDisable] = useState(false);

  const checkPassword = () => {
    if (password !== confirmPassword) {
      setIsDisable(true);
      setErrorMsg("Mot de passe non identique !");
    } else {
      setIsDisable(false);
    }
  };
  return (
    <form>
      <h1>S'inscrire</h1>
      <div className="form-line">
        <span>Pseudonyme</span>
        <input
          type="text"
          placeholder="Votre pseudo"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          required="required"
        />
      </div>
      <div className="form-line">
        <span>Email</span>
        <input
          type="email"
          placeholder="email-adress@domain.com"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required="required"
        />
      </div>
      <div className="form-line">
        <span>Mot de passe</span>
        <input
          type="password"
          placeholder="Votre mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required="required"
        />
      </div>
      <div className="form-line">
        <span>Confirmer votre mot de passe</span>
        <input
          type="password"
          placeholder="Votre mot de passe"
          onFocus={() => {
            setErrorMsg("");
          }}
          onBlur={() => {
            checkPassword();
          }}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
          required="required"
        />
      </div>
      <div className="form-line error-msg">
        <span>{errorMsg}</span>
      </div>
      <div className="form-line">
        <input
          type="button"
          className="login-btn"
          value="S'inscrire"
          onClick={handleSubmit}
          disabled={isDisable ? true : false}
        />
        <span
          className="changeForm"
          onClick={() => {
            setErrorMsg("");
            setIsLogin(true);
          }}
        >
          Vous avez déjà un compte ? Connectez vous !
        </span>
      </div>
    </form>
  );
};

export default SignUp;
