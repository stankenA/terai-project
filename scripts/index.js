// Слайдеры

const sliderRam = document.querySelector('#ram');

function rangeSlider(value) {
  document.querySelector('#ram-result').value = value;
};

sliderRam.addEventListener('mousemove', () => {
  rangeSlider(this.value);
});
