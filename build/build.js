import { buildScripts } from './scripts.js';
import { concatVendors } from './concat.js';
import { compileStyles } from './styles.js' ;

buildScripts();
concatVendors();
compileStyles();