import { Formik } from "formik";
import * as Yup from "yup";
import "./SignUp.scss";
import SharedComponent from "../../SharedComponent";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupUser } from "../../Redux/Actions";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
  confirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Must match the password"
  ),
});

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleSignUp = (val) => {
    let user = {
      name: val.name,
      email: val.email,
      password: val.password,
    };
    dispatch(signupUser(val));
    if (JSON.parse(localStorage.getItem("users")) != null) {
      let users = JSON.parse(localStorage.getItem("users"));
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      localStorage.setItem("users", JSON.stringify([user]));
    }
    navigateToLogin();
  };
  return (
    <div className="signUpForm">
      <SharedComponent.Container>
        <Formik
          validationSchema={schema}
          initialValues={{ email: "", password: "", confirm: "" }}
          onSubmit={handleSignUp}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div className="signup">
              <div className="form">
                <form noValidate onSubmit={handleSubmit}>
                  <h1>Sign Up</h1>
                  <label htmlFor="name" style={{ display: "block" }}>
                    Name
                  </label>
                  <SharedComponent.TextField
                    variant="outlined"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Enter username"
                    className="form-control inp_text"
                    id="name"
                  />
                  <p className="error">
                    {errors.name && touched.name && errors.name}
                  </p>

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
                  <label htmlFor="confirm" style={{ display: "block" }}>
                    Confirm Password
                  </label>
                  <SharedComponent.TextField
                    type="password"
                    name="confirm"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirm}
                    placeholder="Enter confirm password"
                    className="form-control"
                  />
                  <p className="error">
                    {errors.confirm && touched.confirm && errors.confirm}
                  </p>
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                  <div>
                    <SharedComponent.Button type="submit">
                      Sign Up
                    </SharedComponent.Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </SharedComponent.Container>
    </div>
  );
};
export default SignUp;
