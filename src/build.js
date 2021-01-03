const fs = require('fs/promises');
const path = require('path');
const pug = require('pug');

const events = require('./events.json');

const root = path.resolve(__dirname, '..');
const input = path.join(root, 'src', 'index.pug');
const output = path.join(root, 'public', 'index.html');

console.log('Generating html...');

const html = pug.renderFile(
  input,
  { events }
);

fs.writeFile(
  output,
  html,
  'utf8'
)
  .then(() => {
    console.log('Done');
    return 0;
  })
  .catch((err) => {
    console.error('Error');
    console.error(err);
    return 1;
  })
  .then(process.exit);
