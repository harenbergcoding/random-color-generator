import { argv } from 'node:process';

import chalk from 'chalk';
import randomColor from 'randomcolor';

const rdnColor = randomColor();

const layout = `#############################,#############################,#############################,#####                   #####,#####      ${rdnColor}      #####,#####                   #####,#############################,#############################,#############################`;

const printRandomColor = chalk.hex(rdnColor)(layout.split(',').join('\r\n'));


if(argv[1]){
     console.log(printRandomColor);
  }
