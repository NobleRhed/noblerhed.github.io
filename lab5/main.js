// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide button');
const commentWrapper = document.querySelector('.comment-wrapper');
const transcriptBtn = document.querySelector(".transcript-control button");
const transcript = document.querySelector(".audiotext")

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

//button and js code found in another example provided at mdn, 
//found at https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/ in the source HTML/CSS/JS
//as suggested at this accessibility>Multimedia teaching page: https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia


transcriptBtn.onclick = function() {
  let transOnoff = transcriptBtn.textContent;
  if (transOnoff === 'Show Transcript') {
    transcript.style.height = '150px';
    transcriptBtn.textContent = 'Hide Transcript';
  } else {
    transcript.style.height = '0';
    transcriptBtn.textContent = 'Show Transcript';
  }
}
// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
