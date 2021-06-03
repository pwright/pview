#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var dir = __dirname;
const { exec } = require("child_process");

var myArgs = process.argv.slice(2).join(' ');

// console.log(myArgs);

var hamlPath = __dirname + '/haml';
var checkPath = __dirname + '/check.sh';
var runAsciidoc = 'asciidoctor -T ' + hamlPath + ' ' + myArgs;


exec(checkPath, (error, data, getter) => {
	if(error){
		console.log("error",error.message);
		return;
	}
	if(getter){
		console.log("Running check\n",data);
		return;
	}
	console.log("",data);

});



exec(runAsciidoc, (error, data, getter) => {
	if(error){
		console.log("error",error.message);
		return;
	}
	if(getter){
		console.log("g",data);
		return;
	}
	console.log("Running asciidoctor",data);

});

console.log('NOTE: If an html file is not created, try running: ' + runAsciidoc);

