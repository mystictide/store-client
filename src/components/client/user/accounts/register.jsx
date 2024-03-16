"use client";

import { checkExistingEmail, register } from "@/actions/auth/actions";
import Logo from "@/assets/img/logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

export default function Register({ setRegState, setModal }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [formValidation, setFormValidation] = useState({
    vPassword: true,
  });
  const [emailExists, setEmailExists] = useState(false);
  const { firstname, lastname, email, password } = formData;
  const { vPassword } = formValidation;

  useEffect(() => {
    const validateMail = setTimeout(async () => {
      if (email.length > 0) {
        let res = await checkExistingEmail(email);
        setEmailExists(res);
      }
    }, 2000);
    return () => clearTimeout(validateMail);
  }, [email, setEmailExists]);

  useEffect(() => {
    const validatePassword = setTimeout(() => {
      if (password.length > 6) {
        setFormValidation((prevState) => ({
          ...prevState,
          vPassword: false,
        }));
      } else {
        setFormValidation((prevState) => ({
          ...prevState,
          vPassword: true,
        }));
      }
    }, 2000);
    return () => clearTimeout(validatePassword);
  }, [password]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const userData = { id: 0, firstname, lastname, email, password };
    if (
      !vPassword &&
      firstname.length > 0 &&
      lastname.length > 0 &&
      !emailExists
    ) {
      await register(userData);
    }
  };

  return (
    <div className="modal-container flex-column flex-center">
      <div
        className="modal-overlay"
        onClick={() => {
          setModal(false);
        }}
      ></div>
      <div className="modal-content">
        <div className="flex-row flex-center logo no-select">
          <Image alt="homie logo" src={Logo} />
          <h1>omie</h1>
        </div>
        <div className="bg padding radius w-400">
          <h1 className="text-center no-select">Sign up</h1>
          <form className="flex-column" onSubmit={onSubmit}>
            <div className="flex-row">
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={firstname}
                placeholder="First Name"
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={lastname}
                placeholder="Last Name"
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            {lastname.length < 1 || lastname.length < 1 ? (
              <label className="text-small error">Name can not be empty</label>
            ) : (
              ""
            )}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            {emailExists ? (
              <label className="text-small error">
                Email address already registered
              </label>
            ) : (
              ""
            )}
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            {vPassword ? (
              <label className="text-small error">
                Password requires more than 6 characters
              </label>
            ) : (
              ""
            )}
            <div className="flex-column">
              {vPassword ||
              firstname.length < 1 ||
              lastname.length < 1 ||
              emailExists ? (
                <BarLoader
                  color="#ffd86b"
                  height={10}
                  loading
                  speedMultiplier={0.6}
                  width={335}
                />
              ) : (
                <button
                  aria-label="sign up"
                  type="submit"
                  className="no-select"
                >
                  Sign up
                </button>
              )}
              <span
                className="function self-end text-small no-select"
                onClick={() => setRegState(false)}
              >
                ..or sign in
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
