export default function slider() {
  const slider = document.querySelector('.wrapper-slider__item_input');
  const output = document.querySelector('.wrapper-slider__item_output');
  output.innerHTML = slider.value + ' %'; 
  slider.oninput = function() {
      output.innerHTML = this.value + ' %';
  }
}