"use client";

import { useEffect } from "react";

/**
 * Component that displays a security warning in the browser console.
 * This is a common practice to prevent Self-XSS attacks.
 */
export default function ConsoleWarning() {
  useEffect(() => {
    // Clear the console and display the warning
    console.clear();
    console.log("Alexander:");
    console.log(
      "%cStop!",
      "color: red; font-size: 50px; font-weight: bold; -webkit-text-stroke: 1px black;"
    );
    console.log(
      "%cDo not run JavaScript code here! It could be dangerous.\nPreserve your data, do not blindly trust anyone!",
      "font-size: 18px; font-weight: bold;"
    );
  }, []);

  return null;
}
