
const tweetContainer = document.querySelector('.container');


const form = document.querySelector('#tweetForm');
const authorInput = document.querySelector('#authorInput');
const contentInput = document.querySelector('#contentInput');


let tweets = [];


function renderTweets() {

  tweetContainer.innerHTML = '';


  for (const tweet of tweets) {
    const tweetElement = document.createElement('div');
    tweetElement.classList.add('tweet');

    const authorElement = document.createElement('div');
    authorElement.classList.add('author');
    authorElement.textContent = tweet.author;

    const contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.textContent = tweet.content;

    tweetElement.appendChild(authorElement);
    tweetElement.appendChild(contentElement);

    tweetContainer.appendChild(tweetElement);
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  const author = authorInput.value.trim();
  const content = contentInput.value.trim();


  if (author === '' || content === '') {
    alert('Please enter both author and content.');
    return;
  }

  const newTweet = {
    author,
    content,
  };


  tweets.push(newTweet);


  authorInput.value = '';
  contentInput.value = '';

  renderTweets();
}


form.addEventListener('submit', handleFormSubmit);
