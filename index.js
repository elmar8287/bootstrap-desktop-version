// Create an JS object

const DATA = [
  {
    title: 'Tonic',
    image: 'images/snapshots/tonic.svg',
    captions: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javaScript'],
    sourceCode: 'https://https://github.com/elmar8287/bootstrap-desktop-version',
    liveLink: 'https://elmar8287.github.io/bootstrap-desktop-version/',
  },
  {
    title: 'Multi-Post Stories',
    image: 'images/snapshots/stories.svg',
    captions: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
    sourceCode: 'https://github.com/elmar8287/bootstrap-desktop-version',
    liveLink: 'https://elmar8287.github.io/bootstrap-desktop-version/',
  },
  {
    title: 'Facebook 360',
    image: 'images/snapshots/facebook.svg',
    captions: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
    sourceCode: 'https://github.com/elmar8287/bootstrap-desktop-version',
    liveLink: 'https://elmar8287.github.io/bootstrap-desktop-version/',
  },
  {
    title: 'Uber Navigation',
    image: 'images/snapshots/uber.svg',
    captions: ['Uber', 'Lead Developer', '2018'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
    sourceCode: 'https://github.com/elmar8287/bootstrap-desktop-version',
    liveLink: 'https://elmar8287.github.io/bootstrap-desktop-version/',
  },
];
// end of JS object
const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const navLinks = document.getElementById('mobile-nav');
const modalContainer = document.getElementById('modal-container');
const portfolio = document.getElementById('portfolio');
const appBar = document.querySelector('.app-bar');
const menu = document.querySelector('.mobile-menu');
const container = document.querySelector('.container');