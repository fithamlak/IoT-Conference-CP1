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

// javascript variable for array of objects that hold speakers data
const speakersData = [
  {
    name: 'Simon Anderson',
    title: 'International Futurist Speaker and Strategic Foresight Consultant',
    description: 'Simon J. Anderson is an international futurist speaker and emerging technology and trends consultant.',
    photo: './images/first_speaker.jpg',
  },

  {
    name: 'Daniel Burrus',
    title: 'Futurist, Technology Strategist, and Trends Forecaster',
    description: 'A leading technology forecaster and strategist, Daniel Burrus has established an international reputation for accurately predicting the future of technological change and its direct impact on the business world.',
    photo: '"./images/second_speaker.jpg"',
  },

  {
    name: 'Adam Cheyer',
    title: 'Top Technology and AI Speakert',
    description: 'Currently, Adam Cheyer is co-Founder and VP Engineering of Viv Labs, a startup simplifying the world by providing an intelligent interface to everything.',
    photo: './images/third_speaker.jpg',
  },

  {
    name: 'Shawn DuBravac',
    title: 'Global Futurist and Trendsetter',
    description: 'Dr. Shawn DuBravac is author of the New York Times Best Seller Digital Destiny: How the New Age of Data Will Transform the Way We Work, Live, and Communicate.',
    photo: './images/fourth_speaker.jpg',
  },

  {
    name: 'Nikki Greenberg',
    title: 'World Leading Futurist',
    description: 'Nikki Greenberg is a world-leading futurist and innovation strategist, focused on preparing organizations for a tech-enabled future.',
    photo: './images/fifth_speaker.jpg',
  },

  {
    name: 'Jessica Groopman',
    title: 'Industry Analyst & Founding Partner, Kaleido Insights',
    description: 'Jessica Groopman is Founding Partner & Industry Analyst at Kaleido Insights, a boutique research and advisory firm analyzing the impacts of emerging technologies on people, businesses, and society.',
    photo: './images/sixth_speaker.jpg',
  },

];
