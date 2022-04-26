import React, { useState } from "react";
import Styles from "./ClipboardCopy.module.scss";

export default function ClipboardCopy({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  /**
   *
   * @param {string} text
   * @returns
   */
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return navigator.clipboard("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    console.log(copyText);
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <fieldset className={Styles.fieldInput}>
      <input
        type="text"
        className={Styles.form_input}
        value={copyText}
        readOnly
      />
      <button className={Styles.form_submit} onClick={handleCopyClick}>
        <span>{isCopied ? "Copié!" : "Copie"}</span>
      </button>
    </fieldset>
  );
}
