import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const rdnColor = randomColor({ luminosity: argv[3], hue: argv[2] });

const layout = `#############################,#############################,#############################,#####                   #####,#####      ${rdnColor}      #####,#####                   #####,#############################,#############################,#############################`;

const printRandomColor = chalk.hex(rdnColor)(layout.split(',').join('\r\n'));

console.log(printRandomColor);
