const main = document.querySelector('#main');

// Wrapper
const scene = document.querySelector('#scene');
const chatbox = document.querySelector('#chatbox');
const msg = document.querySelector('#message');
const answerWrapper = document.querySelector('#answer-wrapper');

// Scene1
const acceptBtn = document.querySelector('#cool');
const rejectBtn = document.querySelector('#no');
const fuckOffBtn = document.querySelector('#fuckoff');
const bicyle = document.querySelector('#cycling');

// Scene2
const okBtn = document.createElement('button');
const howItWorkBtn = document.createElement('button');
const howItWorkLink = document.createElement('a');
const howItWorkText = document.createElement('p');
const fraudBtn = document.createElement('button');
const takingPicture = document.createElement('img');

howItWorkText.innerHTML = 'Wait ✋. How does it work?';
howItWorkLink.href =
  'https://www.google.com/search?q=how+does+a+polaroid+work&sxsrf=APq-WBuXdi7Mv_cYuIame8ZY-vrZUBf0OA%3A1647358386581&ei=srEwYsiBI-HC3LUP-tuYCA&ved=0ahUKEwjIosybuMj2AhVhIbcAHfotBgEQ4dUDCA4&uact=5&oq=how+does+a+polaroid+work&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIICAAQCBAHEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB46BwgAEEcQsAM6BwgAELADEEM6BggAEAcQHkoECEEYAEoECEYYAFDBCVjgCmCxDWgBcAF4AIABbIgBwgGSAQMxLjGYAQCgAQHIAQnAAQE&sclient=gws-wiz';
howItWorkLink.target = 'blank';
howItWorkLink.classList = 'answer';
howItWorkLink.append(howItWorkText);
howItWorkBtn.append(howItWorkLink);
okBtn.classList = 'answer';
okBtn.innerHTML = 'Ok. 🤞';
takingPicture.src = '/assets/guy-taking-picture.svg';
takingPicture.alt = 'guy taking picture';
takingPicture.classList = 'img';

// Scene3
