// what a shit code is tf


const messages = [
  { text: '这是第一条即时消息！', imageUrl: 'path-to-image-1.jpg' },
  { text: '这是第二条即时消息！', imageUrl: 'path-to-image-2.jpg' },
  { text: '这是第三条即时消息！', imageUrl: 'path-to-image-3.jpg' },
];

const liveMessagesContainer = document.getElementById('live-messages');

messages.forEach((message) => {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');

  const img = document.createElement('img');
  img.src = message.imageUrl;
  messageDiv.appendChild(img);

  const text = document.createElement('p');
  text.innerText = message.text;
  messageDiv.appendChild(text);

  liveMessagesContainer.appendChild(messageDiv);
});

/* 當滾動時讓導航欄變成不透明 */
window.onscroll = function() {
  var nav = document.querySelector('nav');
  if (window.pageYOffset > 100) {
      nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  } else {
      nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  }
}

function toggleMenu() {
  var sideNav = document.getElementById('sideNav');
  if (sideNav.classList.contains('open')) {
      sideNav.classList.remove('open');
  } else {
      sideNav.classList.add('open');
  }
}

