#!/usr/bin/env node

'use strict';

const meow = require('meow');
const RegexTrie = require('regex-trie');

const cli = meow(`
	Usage
	  $ regex-trie string1 string2 string3 …

	Examples
	  $ regex-trie foo bar baz qux quux corge grault
	  (?:foo|ba[rz]|qu(?:x|ux)|corge|grault)
`);

if (cli.input.length == 0) {
	console.error('Please supply some strings to be matched.');
	process.exit(1);
}

const trie = new RegexTrie();
console.log(
	trie.add(cli.input).toString()
);
