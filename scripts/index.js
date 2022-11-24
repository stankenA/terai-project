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

//Функция расчёт количества пользователей

const usersResult = document.querySelector('.calculate__users-result');

function calcUsers() {

  let result = 0;
  if (parseInt(sliderRam.value, 10) === 256 && parseInt(sliderCores.value, 10) === 64 && parseInt(sliderHddSsd.value, 10) === 10240 && parseInt(sliderNvme.value, 10) === 2048) {
    result = 80;
  } else if (parseInt(sliderRam.value, 10) > 192 && parseInt(sliderCores.value, 10) > 48 && parseInt(sliderHddSsd.value, 10) > 7680 && parseInt(sliderNvme.value, 10) > 1536) {
    result = 60;
  } else if (parseInt(sliderRam.value, 10) > 128 && parseInt(sliderCores.value, 10) > 33 && parseInt(sliderHddSsd.value, 10) > 5120 && parseInt(sliderNvme.value, 10) > 1024) {
    result = 40;
  } else if (parseInt(sliderRam.value, 10) > 64 && parseInt(sliderCores.value, 10) > 17 && parseInt(sliderHddSsd.value, 10) > 2560 && parseInt(sliderNvme.value, 10) > 512) {
    result = 20;
  } else if (parseInt(sliderRam.value, 10) > 1 && parseInt(sliderCores.value, 10) > 1 && parseInt(sliderHddSsd.value, 10) > 1 && parseInt(sliderNvme.value, 10) > 1) {
    result = 10;
  }

  usersResult.value = result;
}

//Функция ручного ввода количества пользователей

function inputUsers() {

  if (usersResult.value > 79) {
    sliderRam.value = 256;
    sliderCores.value = 64;
    sliderHddSsd.value = 10240;
    sliderNvme.value = 2048;
  } else if (usersResult.value >= 60) {
    sliderRam.value = 192;
    sliderCores.value = 48;
    sliderHddSsd.value = 7680;
    sliderNvme.value = 1536;
  } else if (usersResult.value >= 40) {
    sliderRam.value = 128;
    sliderCores.value = 33;
    sliderHddSsd.value = 5120;
    sliderNvme.value = 1024;
  } else if (usersResult.value >= 20) {
    sliderRam.value = 64;
    sliderCores.value = 17;
    sliderHddSsd.value = 2560;
    sliderNvme.value = 512;
  } else if (usersResult.value < 20) {
    sliderRam.value = 32;
    sliderCores.value = 8;
    sliderHddSsd.value = 1280;
    sliderNvme.value = 256;
  }
  //   sliderRam.value = 0;
  //   sliderCores.value = 0;
  //   sliderHddSsd.value = 0;
  //   sliderNvme.value = 0;
  // }
}

// Обработка событий для чекбоксов

const checkBoxes = document.querySelectorAll('.calculate__checkmark');

checkBoxes.forEach(function () {
  sqlCheck.addEventListener('change', () => calcPrice());
  msLicenseCheck.addEventListener('change', () => calcPrice());
})

//Функция для соединения значений слайдера, инпута и калькулятора

function connectValues(item, result) {

  item.oninput = () => {
    result.value = item.value;
    calcPrice();
    calcUsers();
  };

  result.oninput = () => {
    item.value = result.value;
    calcPrice();
    calcUsers();
  };

};

// Вызов функций

connectValues(sliderRam, ramResult);
connectValues(sliderCores, coresResult);
connectValues(sliderHddSsd, hddSsdResult);
connectValues(sliderNvme, nvmeResult);

usersResult.addEventListener('change', () => {
  inputUsers();
  calcPrice();
})

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

// Свайпер

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 120,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
