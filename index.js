const hambergerBtn = document.querySelector('.hamburger_icon');
const xIcon = document.querySelector('.close_icon');
const popupList = document.querySelector('.popup_menu');
const programSection = document.querySelector('.prgram_link');
const speakersSection = document.querySelector('.speakers_link');
const partnersSection = document.querySelector('.partners_link');

function toggleActive() {
  hambergerBtn.classList.toggle('inactive');
  xIcon.classList.toggle('inactive');
  popupList.classList.toggle('inactive');
}

hambergerBtn.addEventListener('click', toggleActive);

xIcon.addEventListener('click', () => {
  toggleActive();
  window.location.assign('#');
});

programSection.addEventListener('click', toggleActive);

speakersSection.addEventListener('click', toggleActive);

partnersSection.addEventListener('click', toggleActive);
