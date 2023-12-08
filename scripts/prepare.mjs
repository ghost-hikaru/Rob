import * as esbuild from 'esbuild'
import shell from 'shelljs'

// setup & copy over css & html to public
shell.mkdir('-p', './public');
shell.cp('-fr', './static/*.css', './public/');
shell.cp('-fr', './static/*.html', './public');