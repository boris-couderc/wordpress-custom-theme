
// import test from "./test";

import Navbar from "./modules/Navbar";

const html = document.documentElement;
const body = document.body;

window.onload = (event) => {
  init();
};

function init() {
  html.classList.add("is-loaded", "is-ready");
  html.classList.remove("is-loading");
  html.classList.remove("has-no-js");

  // console.log('app is init !');

  // test();

  const navbar = new Navbar();

}
