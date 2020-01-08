const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

const whiteKeySet = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const blackKeySet = ['s', 'd', 'g', 'h', 'j'];

document.addEventListener('keydown', e => {
  if(e.repeat) return;

  const key = e.key;
  const whiteKeyIndex = whiteKeySet.indexOf(key);
  const blackKeyIndex = blackKeySet.indexOf(key);

  if(whiteKeyIndex > -1) playKey(whiteKeys[whiteKeyIndex]);
  if(blackKeyIndex > -1) playKey(blackKeys[blackKeyIndex]);
});

keys.forEach(key => {
  key.addEventListener('click', () => playKey(key))
});

const playKey = (key) => {
  console.log('Playing key: '+ key.dataset.note)
  const audio = document.getElementById(key.dataset.note);
  audio.currentTime = 0;
  audio.play();
  key.classList.add('active');
  audio.addEventListener('ended', () => {
    key.classList.remove('active');
  })
}
