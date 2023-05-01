import { useState } from "react";

const Lab1 = () => {
  let [text, setText] = useState("abc");

  setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    setText(text);
  }, 1000);

  return (
    <p>{text}</p>
  );
}
 
export default Lab1;