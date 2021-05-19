console.log("watch");

import { buildScripts } from './scripts.js';
import { concatVendors } from './concat.js';
import { compileStyles } from './styles.js' ;
import paths from '../config.json';

// Create an named instance in one file...
import bs from 'browser-sync';

// Start the Browsersync server
bs.init({
    proxy: paths.url,
    open: false,
    notify: false
});

// Build scripts, compile styles, concat vendors and generate the svgs sprite on first hit
buildScripts();
concatVendors();
compileStyles();

// and call any methods on it.
bs.watch(
    [
        paths.views.src,
        paths.scripts.dest + paths.scripts.main + '.js',
        paths.scripts.dest + paths.scripts.vendors.main + '.js',
        paths.styles.dest + paths.styles.main + '.css',
    ]
).on('change', bs.reload);

// Watch scripts 
bs.watch(
    [
        paths.scripts.src + '**/*.js'
    ]
).on('change', () => {
    buildScripts();
});

// Watch scripts vendors
bs.watch(
    [
        paths.scripts.vendors.src + '*.js'
    ]
).on('change', () => {
    concatVendors();
});

// Watch styles
bs.watch(
    [
        paths.styles.src + '**/*.scss'
    ]
).on('change', () => {
    // setTimeout to fix bug in windows
    setTimeout(()=>{
        compileStyles();
    }, 50)
});