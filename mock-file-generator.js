const fs = require( 'fs' );
const path = require( 'path' );

const MAX_FILE = 100;
const FIRST_FILE_INDEX = 0;
const LAST_FILE_INDEX = MAX_FILE - 1;


const filePatternPart = ( `
const f1 = ()=> Math.random();
const f2 = ()=> Math.random();
const f3 = ()=> Math.random();
` );

const OUTPUT_FILE_PATH = path.join( process.cwd(), 'src' );

for(let i = 0; i < MAX_FILE; i++){
    let importTemplatePart = i === LAST_FILE_INDEX ? `` : `import {f as f0} from "./file_${i + 1}";`;
    let exportTemplatePart = i === LAST_FILE_INDEX ?
        `export const f = ()=>[f1,f2, f3].reduce((result,current)=> result + current(), 0)`  :
        `export const f = ()=>[f0, f1,f2, f3].reduce((result,current)=> result + current(), 0)`;

    let path = `${OUTPUT_FILE_PATH }/file_${i}.ts`;

    let template = importTemplatePart + filePatternPart + exportTemplatePart;

    fs.writeFileSync( path, template );
}