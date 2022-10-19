let hex_DOM = document.querySelector("#hex_input"),
  convert_btn_DOM = document.querySelector("#hex_convert_button"),
  reset_btn_DOM = document.querySelector("#hex_reset_button"),
  colored_area_DOM = document.querySelector(".color-area"),
  result_hex_area_DOM = document.querySelector("#result_hex_area");

let convert = () => {
  let new_color = hex_DOM.value.convertToRGB();
  result_hex_area_DOM.innerHTML = new_color;
  result_hex_area_DOM.style.backgroundColor ="#"+ hex_DOM.value ;
  
};
let reset = () => {
  location.reload();
};

convert_btn_DOM.addEventListener("click", convert);
reset_btn_DOM.addEventListener("click", reset);

String.prototype.convertToRGB = function () {
  if (this.length != 6) {
    alert("Only six-digit hex colors are allowed.") ;
  }

  var aRgbHex = this.match(/.{1,2}/g);
  var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
  return aRgb;
};

