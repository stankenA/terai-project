// Константы слайдеров

const sliderRam = document.querySelector('#ram');
const ramResult = document.querySelector('#ram-result');

const sliderCores = document.querySelector('#cores');
const coresResult = document.querySelector('#cores-result');

const sliderHddSsd = document.querySelector('#hdd-ssd');
const hddSsdResult = document.querySelector('#hdd-ssd-result');

const sliderNvme = document.querySelector('#nvme');
const nvmeResult = document.querySelector('#nvme-result');

// Функция расчёта финальной стоимости с учётом чекбоксов

const calcResult = document.querySelector('.calculate__list-item-price');

const sqlCheck = document.querySelector('#sql');
const msLicenseCheck = document.querySelector('#ms-license');

function calcPrice() {

  let result = (parseInt(sliderRam.value, 10) * 190) + (parseInt(sliderCores.value, 10) * 510) + (parseInt(sliderHddSsd.value, 10) * 4) + (parseInt(sliderNvme.value, 10) * 10);

  if (sqlCheck.checked && msLicenseCheck.checked) {
    result += 950 + 250;
  } else if (msLicenseCheck.checked) {
    result += 950;
  } else if (sqlCheck.checked) {
    result += 250;
  };

  calcResult.textContent = result;
}

// Обработка событий для чекбоксов

const checkBoxes = document.querySelectorAll('.calculate__checkmark');

checkBoxes.forEach(function () {
  sqlCheck.addEventListener('change', () => calcPrice());
  msLicenseCheck.addEventListener('change', () => calcPrice());
})

//Функция для соединения значений слайдера, инпута и калькулятора

function connectSlider(slider, result) {

  slider.oninput = () => {
    result.value = slider.value;
    calcPrice();
  };

  result.oninput = () => {
    slider.value = result.value;
    calcPrice();
  };

};

// Вызов функций

connectSlider(sliderRam, ramResult);
connectSlider(sliderCores, coresResult);
connectSlider(sliderHddSsd, hddSsdResult);
connectSlider(sliderNvme, nvmeResult);

//Попап

const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-button');
const allPopupButtons = document.querySelectorAll('.button_popup');
const contactsForm = document.querySelector('.contacts__form');

function openPopup() {
  popup.classList.add('popup_opened');
};

function closePopup() {
  popup.classList.remove('popup_opened');
};

allPopupButtons.forEach(function (item) {
  item.addEventListener('click', () => openPopup());
});

popupCloseBtn.addEventListener('click', () => closePopup());
contactsForm.addEventListener('submit', () => closePopup());


