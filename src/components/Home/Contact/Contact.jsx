import { Formik } from "formik";
import * as Yup from "yup";
import "./Contact.scss";
import SharedComponent from "../../../SharedComponent";

export const Contact = () => {
  return (
    <div className="contact">
      <h1 className="title">Contact Us</h1>
      <SharedComponent.Container fixed className="contact__form">
        <Formik
          initialValues={{ email: "", name: "", message: "" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is Required"),
            email: Yup.string().email().required("Email is Required"),
            message: Yup.string().required("Message is Required"),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <label htmlFor="name" style={{ display: "block" }}>
                  Name
                </label>
                <SharedComponent.TextField
                  variant="outlined"
                  id="name"
                  placeholder="Enter your Name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
                <label htmlFor="email" style={{ display: "block" }}>
                  Email
                </label>
                <SharedComponent.TextField
                  variant="outlined"
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                <label htmlFor="message" style={{ display: "block" }}>
                  Message
                </label>
                <SharedComponent.BaseTextareaAutosize
                  id="message"
                  aria-label="empty textarea"
                  placeholder="Enter message"
                  type="text"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.message && touched.message
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.message && touched.message && (
                  <div className="input-feedback">{errors.message}</div>
                )}

                <button
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </button>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            );
          }}
        </Formik>
      </SharedComponent.Container>
    </div>
  );
};
