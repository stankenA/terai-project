//Функция для соединения значений слайдера и инпута

function connectSlider(slider, result) {

  slider.oninput = () => {
    result.value = slider.value;
  };

  result.oninput = () => {
    slider.value = result.value;
  };
};

// Слайдеры

const sliderRam = document.querySelector('#ram');
const ramResult = document.querySelector('#ram-result');

connectSlider(sliderRam, ramResult);

const sliderCores = document.querySelector('#cores');
const coresResult = document.querySelector('#cores-result');

connectSlider(sliderCores, coresResult);

const sliderHddSsd = document.querySelector('#hdd-ssd');
const hddSsdResult = document.querySelector('#hdd-ssd-result');

connectSlider(sliderHddSsd, hddSsdResult);

const sliderNvme = document.querySelector('#nvme');
const nvmeResult = document.querySelector('#nvme-result');

connectSlider(sliderNvme, nvmeResult);



