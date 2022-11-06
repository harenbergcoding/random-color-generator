import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const randomColorInput = randomColor({ luminosity: argv[3], hue: argv[2] });
const layout = ` ,#############################,#############################,#############################,#####                   #####,#####      ${randomColorInput}      #####,#####                   #####,#############################,#############################,#############################`;

const printRandomColor = chalk.hex(randomColorInput)(
  layout.split(',').join('\r\n'),
);

console.log(printRandomColor);
