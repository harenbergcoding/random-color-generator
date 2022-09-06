import { argv } from 'node:process';

import chalk from 'chalk';
import randomColor from 'randomcolor';

const rdnColor = randomColor();

let layout = `#############################,#############################,#############################,#####                   #####,#####      ${rdnColor}      #####,#####                   #####,#############################,#############################,#############################`;

let printRandomColor = chalk.hex(rdnColor)(layout.split(',').join('\r\n'));


if(argv[1]){
     console.log(printRandomColor);
    } 
    
    else if (argv[2] && argv[3]) {
    
        const initialColor = {luminosity: 'light', hue: 'blue'};
        initialColor.hue = argv[2];
        initialColor.luminosity = argv[3];
        const hexGenerated = randomColor(initialColor);
        layout = `#############################,#############################,#############################,#####                   #####,#####      ${hexGenerated}      #####,#####                   #####,#############################,#############################,#############################`;
        printRandomColor = chalk.hex(hexGenerated)(layout.split(',').join('\r\n'));
        console.log(printRandomColor);
      }
      
      else {
    const initialColor = {hue: 'blue'};
    initialColor.hue = argv[2];
    const hexGenerated = randomColor(initialColor);
    layout = `#############################,#############################,#############################,#####                   #####,#####      ${hexGenerated}      #####,#####                   #####,#############################,#############################,#############################`;
    printRandomColor = chalk.hex(hexGenerated)(layout.split(',').join('\r\n'));
    console.log(printRandomColor);
  } 
  

