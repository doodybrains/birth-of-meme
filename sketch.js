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

setup();

function setup() {
  const interval = setInterval(function() {
    const ranSentence = randomizeArray(all);
    
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
      highlightPhrase(14,33,'has anyone','red');
      break;
    case 'really been':
      highlightPhrase(15,37,'really been','green');
      break;
    case 'far':
      highlightPhrase(16,35,'far','yellow');
    case 'even as':
      highlightPhrase(17,40,'evan as','blue');
    case 'decided to use':
      highlightPhrase(18,45,'decided to use','magenta');
    case 'even go':
      highlightPhrase(19,42,'even go','cyan');
    case 'want to do':
      highlightPhrase(20,42,'want to do','red');
    case 'look more like?':
      highlightPhrase(21,30,'look more like?','green');
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
