let r_DOM = document.querySelector("#r_input"),
  g_DOM = document.querySelector("#g_input"),
  b_DOM = document.querySelector("#b_input"),
  convert_btn_DOM = document.querySelector("#convert_button"),
  reset_btn_DOM = document.querySelector("#reset_button"),
  colored_area_DOM = document.querySelector(".color-area"),
  result_area_DOM = document.querySelector("#result_area");

let convert = () => {
  
  console.log(parseInt(r_DOM.value));
  console.log(parseInt(g_DOM.value));
  console.log(parseInt(b_DOM.value));
  let new_color = rgbToHex(
    parseInt(r_DOM.value),
    parseInt(g_DOM.value),
    parseInt(b_DOM.value)
  );
  result_area_DOM.style.backgroundColor = new_color;
  result_area_DOM.innerHTML = new_color;
};
let reset = () => {
  location.reload();
};

convert_btn_DOM.addEventListener("click", convert);
reset_btn_DOM.addEventListener("click", reset);

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
