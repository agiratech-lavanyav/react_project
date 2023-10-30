import { Formik } from "formik";
import * as Yup from "yup";
import "./Login.scss";
import SharedComponent from "../../SharedComponent";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../Redux/Actions";
import SnackbarMessage from "../../ReusableComponents/SnackbarMessage";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToHome = () => {
    navigate("/");
  };

  const handleOpenSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  const handleLogin = (val) => {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      const matchUser = users.find((e) => e.email === val.email);
      if (matchUser) {
        // Check if matchUser is not null
        if (matchUser.password === val.password) {
          dispatch(loggedInUser(matchUser));
          localStorage.setItem("loggedIn", JSON.stringify(matchUser));
          navigateToHome();
        } else {
          handleOpenSnackbar(
            "Failed to login. Please check your password.",
            "error"
          );
        }
      } else {
        handleOpenSnackbar("User Not Found. Please check your email.", "error");
      }
    } else {
      handleOpenSnackbar("No registered users found. Please sign up.", "error");
    }
  };
  return (
    <div className="loginForm">
      <SharedComponent.Container>
        <Formik
          validationSchema={schema}
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLogin}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div className="login">
              <div className="form">
                <form noValidate onSubmit={handleSubmit}>
                  <h1>Login</h1>
                  <label htmlFor="email" style={{ display: "block" }}>
                    Email
                  </label>
                  <SharedComponent.TextField
                    variant="outlined"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter email id"
                    className="form-control inp_text"
                    id="email"
                  />
                  <p className="error">
                    {errors.email && touched.email && errors.email}
                  </p>
                  <label htmlFor="password" style={{ display: "block" }}>
                    Password
                  </label>
                  <SharedComponent.TextField
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                    className="form-control"
                  />
                  <p className="error">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <p>
                    Don't have an account? <Link to="/sign-up">Sign Up</Link>
                  </p>
                  <div>
                    <SharedComponent.Button type="submit">
                      Login
                    </SharedComponent.Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </SharedComponent.Container>
      <SnackbarMessage
        open={openSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleCloseSnackbar}
        autoHideDuration={5000}
      />
    </div>
  );
};

export default Login;
