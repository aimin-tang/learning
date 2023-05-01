function animate_string(id) 
{
  // const element = document.getElementById(id);
  // const textNode = element.childNodes[0]; // assuming no other children
  let text = "w3resource";

  setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    // textNode.data = text;
    console.log(text);
  }, 100);
}


