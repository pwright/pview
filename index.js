#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var dir = __dirname;
const { exec } = require("child_process");

var myArgs = process.argv.slice(2).join(' ');

console.log(myArgs);

var hamlPath = __dirname + '/haml';
var checkPath = __dirname + '/check.sh';
exec(checkPath, (error, data, getter) => {
	if(error){
		//console.log("error",error.message);
		return;
	}
	if(getter){
		console.log("data",data);
		return;
	}
	console.log("data",data);

});

exec(`asciidoctor -T ${hamlPath} ${myArgs}`, {});
