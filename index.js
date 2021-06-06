#!/usr/bin/env node

var fs = require("fs");
var path = require("path");
var dir = __dirname;
const { exec } = require("child_process");

var myOption = process.argv.slice(2, 3).join("");
var myArgs = process.argv.slice(3).join(" ");

// console.log("Using option: " + myOption);

var hamlPath = __dirname + "/haml";
var runCheck = __dirname + "/check.sh";
var runAsciidoc = "asciidoctor -T " + hamlPath + " " + myArgs;
var runNebel = __dirname + "/nebel.sh " + myArgs;

switch (myOption) {
  case "check":
    exec(runCheck, (error, data, getter) => {
      if (error) {
        console.log("error", error.message);
        return;
      }
      if (getter) {
        console.log("Running check\n", data);
        return;
      }
      console.log("", data);
    });
    break;
	case "nebel":
		exec(runNebel, (error, data, getter) => {
		  if (error) {
			console.log("error", error.message);
			return;
		  }
		  if (getter) {
			console.log("Running nebel\n", data);
			return;
		  }
		  console.log("", data);
		});
		break;
	
  case "asciidoc":
    console.log("test");
    exec(runAsciidoc, (error, data, getter) => {
      if (error) {
        console.log("error", error.message);
        return;
      }
      if (getter) {
        console.log("g", data);
        return;
      }
      console.log("Running asciidoctor", data);
      console.log(
        "NOTE: If an html file is not created, try running: " + runAsciidoc
      );
    });
    break;

  default:
    greeting = `no option specified, options \nasciidoc - convert a file using asciidoctor and pantheon CSS \ncheck - check requirements \nnebel - run nebel first to include attributes`;
    console.log(greeting);
}


const util = require('util');
const exec1 = util.promisify(require('child_process').exec);

lsExample();
async function lsExample() {
  const {
    stdout,
    stderr
  } = await exec1('~/nebel/bin/nebel -v');
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}