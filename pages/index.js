/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Login from "./auth/login";

export default function Index() {
  return (
    <>
      <Login />
      <Footer />
    </>
  );
}
