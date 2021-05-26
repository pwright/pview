#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var dir = __dirname;
const exec = require("child_process").execSync;


const argv = require("yargs").command(
  "$0 <source file>",
  "converts AsciiDoc file to HTML using pantheon styles",
  () => {},
  function ({ sourcefile, destinationfile }) {
    console.log({ sourcefile, destinationfile });

    //destinationfile not implemented

var hamlPath = __dirname + '/haml';


exec(`asciidoctor -T ${hamlPath} ${sourcefile}`, {});

  }
  ).argv;