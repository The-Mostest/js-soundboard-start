// cached
const wordsEl = document.querySelectorAll('.item');
const divWordsEl = document.querySelector('#container');
const buttonEl = document.querySelector('#bigButton');

// console.log(wordsEl);



// music
divWordsEl.addEventListener('click', (evt) => {
       const audioEl = new Audio(`../sounds/${evt.target.id}.wav`);
     audioEl.play();
 })

//lyrics






//button
bigButton.onclick = function () {
    window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';}
bigButton.addEventListener('mouseover', () => {
        bigButton.style.backgroundColor = '#e08976';
        bigButton.style.color = 'white';
bigButton.addEventListener('mouseout', () => {
    bigButton.style.backgroundColor = '';
    bigButton.style.color = '';
})
    });