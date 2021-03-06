const ansi = require('ansi-escape-sequences');

let meme = [
  'has anyone', 'really been',
  'far', 'even as',
  'decided to use',
  'even go','want to do', 'look more like?'
];

let all = [
  'how far is a click', 'even as your soul prospers', 'has anyone',
  'really been', 'decided to use', 'has anyone won the mega millions',
  'even go', 'look more like?', 'ive really been on a bender lately and it shows',
  'want to do',  'who decided to use bc and ad', 'i even go to work', 'far',
  'i want to download', 'even as', 'do i look more like i do in the mirror or in pictures?'
];

let count = 0;

setup();

function setup() {
  const interval = setInterval(function() {
    const ranSentence = randomizeArray(all);
    count ++;

    // position text between 0 and 30 rows, 0 and 80 columns
    process.stdout.write(antsyPosition(soRandom(-30), soRandom(80)));
    process.stdout.write(antsyFormat(ranSentence, 'gray'));
    setTimeout(function() {
      makeAText(ranSentence);
    }, 20000)
  }, 500);
}

function makeAText(ranSentence) {
  switch(ranSentence) {
    case 'has anyone':
      if (count > 20) highlightPhrase(14,33,'has anyone','red');
      break;
    case 'really been':
    if (count > 40) highlightPhrase(15,37,'really been','green');
      break;
    case 'far':
    if (count > 60) highlightPhrase(16,35,'far','yellow');
      break;
    case 'even as':
    if (count > 80) highlightPhrase(17,40,'evan as','blue');
      break;
    case 'decided to use':
    if (count > 90) highlightPhrase(18,45,'decided to use','magenta');
      break;
    case 'even go':
    if (count > 100) highlightPhrase(19,42,'even go','cyan');
      break;
    case 'want to do':
    if (count > 110) highlightPhrase(20,42,'want to do','red');
      break;
    case 'look more like?':
    if (count > 120) highlightPhrase(21,30,'look more like?','green');
      break;
  }
}

function highlightPhrase(col, row, phrase, color) {
  process.stdout.write(antsyPosition(col, row));
  process.stdout.write(antsyFormat(phrase, 'gray'));
  setTimeout(function() {
    process.stdout.write(antsyPosition(col, row));
    process.stdout.write(antsyFormat(phrase, color));
  }, 1000 + col * 5)
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
