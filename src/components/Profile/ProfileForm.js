import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const AuthCtx = useContext(AuthContext);
  function submitHandler(event) {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBqkR2-HZHnuGKHd6cI9ijvK62LdahDtVg",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: AuthCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      //////////////////////
    });
  }
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button onClick={submitHandler}>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
