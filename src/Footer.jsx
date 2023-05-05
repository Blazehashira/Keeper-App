import React from "react";

const date = new Date();
let year = date.getFullYear();

export default function Footer() {
  return (
    <footer>
      <p> Copyright © {year}.</p>
    </footer>
  );
}
