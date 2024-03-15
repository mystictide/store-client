"use client";

import { useState } from "react";
import { RiAccountPinBoxFill } from "react-icons/ri";
import Login from "./login";
import Register from "./register";

export default function AuthClient() {
  const [modal, setModal] = useState(false);
  const [regState, setRegState] = useState(true);

  return (
    <>
      <button
        type="button"
        className="flex-row flex-center account interactive"
        onClick={() => setModal((prev) => !prev)}
      >
        <RiAccountPinBoxFill />
      </button>
      {modal ? (
        regState ? (
          <Register setRegState={setRegState} setModal={setModal} />
        ) : (
          <Login setRegState={setRegState} setModal={setModal} />
        )
      ) : (
        ""
      )}
    </>
  );
}
