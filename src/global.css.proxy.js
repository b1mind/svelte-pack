// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root {\n  --clr: skyblue;\n  --clr-white: #fff;\n  --clr-bg: #0b0b0b;\n}\n\nbody {\n  color: var(--clr-white);\n  background-color: var(--clr-bg);\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}