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
    photo: './images/second_speaker.jpg',
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

// dynamic page for featured-speaakers section

// access speakers section in html dom

const dynamicSection = document.querySelector('.speakers_section');

// create section title

const speakerSectionTitle = document.createElement('h2');
speakerSectionTitle.innerText = 'Featured Speakers';
speakerSectionTitle.className = 'speakers-sections-header';
dynamicSection.append(speakerSectionTitle);

// create horizontal line under section title

const speakersLine = document.createElement('hr');
speakersLine.classList.add('speakers_underline');
dynamicSection.append(speakersLine);

// create container to hold all speakers inside

const speakersContainer = document.createElement('div');
speakersContainer.className = 'speakers_container';
dynamicSection.append(speakersContainer);

// create all speakers in the same way iside the forloop

for (let k = 0; k < speakersData.length; k += 1) {
  // creat container for each individual speaker
  const speaker = document.createElement('div');
  speaker.classList.add('speaker');

  // create image container for each individual photo
  const speakerImgContainer = document.createElement('div');
  speakerImgContainer.classList.add('speaker_image_container');
  speaker.append(speakerImgContainer);

  // create background and append inside image container for each speaker
  const speakerBackground = document.createElement('img');
  speakerBackground.classList.add('speaker_background');
  speakerBackground.src = './images/iot.webp';
  speakerImgContainer.append(speakerBackground);

  // create photo ind append inside imagecontainer for each speakers
  const speakerPhoto = document.createElement('img');
  speakerPhoto.classList.add('speaker_image');
  speakerPhoto.src = speakersData[k].photo;
  speakerImgContainer.append(speakerPhoto);

  // creat container to hold all datas of
  // the speaker other than photo, like name, title, and description
  const speakerInfo = document.createElement('div');
  speakerInfo.classList.add('speaker_data');
  speaker.append(speakerInfo);

  // create h2 element for name of the speaker
  const speakerName = document.createElement('h2');
  speakerName.classList.add('speaker_name');
  speakerName.innerText = speakersData[k].name;
  speakerInfo.append(speakerName);

  // create h3 element for title of the speaker
  const speakerTitle = document.createElement('h3');
  speakerTitle.classList.add('speaker_title');
  speakerTitle.innerText = speakersData[k].title;
  speakerInfo.append(speakerTitle);

  // create horizontal line under title
  const speakerLine = document.createElement('hr');
  speakerLine.classList.add('speaker_underline');
  speakerInfo.append(speakerLine);

  // create p element for description of the speaker
  const speakerText = document.createElement('p');
  speakerText.classList.add('speaker_description');
  speakerText.innerText = speakersData[k].description;
  speakerInfo.append(speakerText);

  speakersContainer.append(speaker);
}
