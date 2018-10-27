const ansi = require('ansi-escape-sequences');

setup();

function setup() {
  const interval = setInterval(function() {
    makeAText();
  }, 1200);

  setTimeout(function() {
    clearInterval(interval);
  }, 70000)
}

function makeAText() {

  let colors = ["yellow", "magenta", "cyan", "blue", "green"];

  let meme = [
    'has anyone', 'really been',
    'far', 'even as',
    'decided to use',
    'even go','want to do', 'look more like?'
  ];

  let sentences = [
    'has anyone won the mega millions',
    'ive really been on a bender lately and it shows',
    'how far is a click',
    'even as your soul prospers',
    'who decided to use bc and ad',
    'i even go to work',
    'i want to download',
    'do i look more like i do in the mirror or in pictures?'
  ];

  const ranColor = randomizeArray(colors);
  const ranPhrase = randomizeArray(meme);
  const ranSentence = randomizeArray(sentences);

  process.stdout.write(antsyPosition(soRandom(20), soRandom(120)));
  process.stdout.write(antsyFormat(ranSentence, 'gray'));

	process.stdout.write(antsyPosition(soRandom(20), soRandom(80)));
  process.stdout.write(antsyFormat(ranPhrase, 'gray'));

  setTimeout(function() {
    switch(ranPhrase) {
      case 'has anyone':
        highlightPhrase(5,53,'has anyone','red', 12000);
        writeBackgroundText(5,53,'has anyone');
        break;
      case 'really been':
        highlightPhrase(7,57,'really been','green', 16000);
        writeBackgroundText(7,57,'really been');
        break;
      case 'far':
        highlightPhrase(9,55,'far','yellow', 19000);
        writeBackgroundText(9,55,'far');
      case 'even as':
        highlightPhrase(11,60,'evan as','blue', 22000);
        writeBackgroundText(11,60,'evan as');
      case 'decided to use':
        highlightPhrase(13,58,'decided to use','magenta', 25000);
        writeBackgroundText(13,58,'decided to use');
      case 'even go':
        highlightPhrase(15,62,'even go','cyan', 29000);
        writeBackgroundText(15,62,'even go');
      case 'want to do':
        highlightPhrase(17,62,'want to do','red', 35000);
        writeBackgroundText(17,62,'want to do');
      case 'look more like?':
        highlightPhrase(18,50,'look more like?','green', 40000);
        writeBackgroundText(18,50,'look more like?');
    }
  })
}

function highlightPhrase(col, row, phrase, color, delay) {
  setTimeout(function() {
    process.stdout.write(antsyPosition(col, row));
    process.stdout.write(antsyFormat(phrase, color));
  }, delay)
}

function writeBackgroundText(col, row, phrase) {
  process.stdout.write(antsyPosition(col, row));
  process.stdout.write(antsyFormat(phrase, 'gray'));
}

function randomizeArray(array) {
  const index = Math.floor(Math.random() * array.length);
	return array[index];
}

function soRandom(no) {
	return Math.floor((Math.random() * no) + 1);
}

function antsyFormat(char, style) {
  let format = ansi.format(` ${char} \n\r `, [style]);

  return format;
}

function antsyPosition(row, col) {
  let position = ansi.cursor.position(row, col);

  return position;
}
