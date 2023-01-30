let shadowTarget = document.getElementById("shadow-root");
let shadow = shadowTarget.attachShadow({mode: "open"});

let shadowButton = document.createElement("button");
let shadowParagraph = document.createElement("p");
let shadowStyles = document.createElement("style");
shadowStyles.innerHTML = `
  p {
    color: purple;
    font-weight: bold;
  }
`;
shadowButton.type = "button";
shadowButton.innerHTML = "Click Shadow";
shadowParagraph.innerHTML = "Shadow Paragraph";
shadow.appendChild(shadowStyles);
shadow.appendChild(shadowButton);
shadow.appendChild(shadowParagraph);



