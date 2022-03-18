import { Form, Formik } from "formik";
import Router from "next/router";
import React, { useState } from "react";
import * as Yup from "yup";
import { loginUser, signupUser } from "../utils/api";
import FieldComponent from "./FieldComponent";

const Signup = () => {
  const [signup, setSignup] = useState(false);
  const singupInitialValues = {
    name: "",
    school: "",
    username: "",
    class: "",
    disabilities: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const loginInitialValues = {
    username: "",
    password: "",
  };
  const signupFields = [
    { name: "name" },
    { name: "username" },
    { name: "school" },
    { name: "class" },
    { name: "email", type: "email" },
    { name: "disabilities" },
    { name: "password", type: "password" },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "enter password again",
    },
  ];
  const loginFields = [
    { name: "username" },
    { name: "password", type: "password" },
  ];

  const signupValidationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    username: Yup.string().required("Please enter your username"),
    school: Yup.string().required("School is required"),
    class: Yup.string().required("Class is required"),
    disabilities: Yup.string().notRequired(),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required!"),
    password: Yup.string()
      .required("Password is required!")
      .min(6, "Password too short!"),
  });

  const loginValidationSchema = Yup.object({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string()
      .required("Password is required!")
      .min(6, "Password too short!"),
  });

  return (
    <div className="bg-gradient-to-b from-[#FF3624] to-[#FF8C4A] md:h-screen w-2/5 flex flex-col items-center justify-center text-white z-20">
      <h2 className="text-4xl">Register Here</h2>
      <Formik
        initialValues={signup ? singupInitialValues : loginInitialValues}
        validationSchema={
          signup ? signupValidationSchema : loginValidationSchema
        }
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const abc = values.disabilities;
          if (abc) values.disabilities = abc.split(",");

          console.log(values);
          const res = signup
            ? await signupUser(values)
            : await loginUser(values);
          console.log(res);
          if (res) {
            resetForm();
            Router.reload();
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, resetForm }) => (
          <Form className="flex flex-col gap-1 w-10/12 mx-auto items-center form-signup">
            <h1 className="font-bold text-white text-center my-8">
              {signup ? "Sign Up" : "Login"}
            </h1>
            {signup
              ? signupFields.map((field, id) => (
                  <FieldComponent key={id} {...field} />
                ))
              : loginFields.map((field, id) => (
                  <FieldComponent key={id} {...field} />
                ))}

            <button
              className=" px-5 py-2 text-white rounded-3xl border-2 border-white w-min mx-auto mt-2"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
            <div className="flex gap-2 py-2 mb-4 text-white font-medium justify-center">
              <h3 className=" opacity-60 ">
                {signup ? "Already have an account" : "Don't have an account?"}
              </h3>
              <div
                className="inline-block cursor-pointer"
                onClick={() => {
                  resetForm();
                  setSignup(!signup);
                }}
              >
                {signup ? "Login" : "Sign Up"}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
