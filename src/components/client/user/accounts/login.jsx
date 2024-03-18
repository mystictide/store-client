"use client";

import { login } from "@/actions/auth/actions";
import Logo from "@/assets/img/logo.svg";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login({ setRegState, setModal }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    let res = await login(userData);
    toast(res);
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
          <h1 className="text-center no-select">Sign in</h1>
          <section>
            <form className="flex-column" onSubmit={onSubmit}>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="enter your email address"
                onChange={onChange}
              />
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="enter your password"
                onChange={onChange}
              />
              <div className="flex-column">
                <button
                  aria-label="sign in"
                  className="no-select"
                  type="submit"
                >
                  Sign in
                </button>
                <span
                  className="function self-end text-small no-select"
                  onClick={() => setRegState(true)}
                >
                  ..or sign up
                </span>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
