#!/usr/bin/env node

// Adapted from:
// http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/

var sys		= require('sys');
var exec	= require('child_process').exec;

exec('phonegap restore plugins --experimental',
	function (error, stdout) {
		sys.puts(stdout);
	}
);

