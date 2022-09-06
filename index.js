import { argv } from 'node:process';

import chalk from 'chalk';
import randomColor from 'randomcolor';

const rdnColor = randomColor();



const layout = `#############################,#############################,#############################,#####                   #####,#####      ${rdnColor}      #####,#####                   #####,#############################,#############################,#############################`;
console.log(chalk.hex(randomColor())(layout.split(',').join('\r\n')));


if(argv[1]){
      console.log(rdnColor);
  }