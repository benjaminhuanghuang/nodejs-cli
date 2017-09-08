/*
$ hello --args1=tom
$ hello --args2 tom
$ hello -n tom
*/
var argv = require('yargs').alias('n', 'args1').argv

console.log('hello ', argv.n);