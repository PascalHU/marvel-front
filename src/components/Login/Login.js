const Login = ({
  setEmail,
  setPassword,
  setIsLogin,
  handleSubmit,
  setErrorMsg,
  errorMsg,
}) => {
  return (
    <form>
      <h1>Se connecter</h1>
      <div className="form-line">
        <span>Email</span>
        <input
          type="email"
          placeholder="email-adress@domain.com"
          onFocus={() => setErrorMsg("")}
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
          onFocus={() => setErrorMsg("")}
          onChange={(event) => {
            setPassword(event.target.value);
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
          value="Se Connecter"
          onClick={handleSubmit}
        />
        <span
          className="changeForm"
          onClick={() => {
            setErrorMsg("");
            setIsLogin(false);
          }}
        >
          Vous n'avez pas de compte ? Inscrivez vous !
        </span>
      </div>
    </form>
  );
};

export default Login;
