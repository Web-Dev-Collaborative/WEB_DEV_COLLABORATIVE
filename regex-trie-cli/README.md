# regex-trie-cli [![Build status](https://travis-ci.org/mathiasbynens/regex-trie-cli.svg?branch=master)](https://travis-ci.org/mathiasbynens/regex-trie-cli)

regex-trie-cli is a command-line interface for [regex-trie](https://github.com/alexeld/regex-trie). Easily create regular expression patterns based on a list of strings to match from the command line!

## Installation

```bash
$ npm install -g regex-trie-cli
```

## Usage

```
$ regex-trie --help

  Usage
    $ regex-trie string1 string2 string3 …

  Examples
    $ regex-trie foo bar baz qux quux corge grault
    (?:foo|ba[rz]|qu(?:x|ux)|corge|grault)
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_regex-trie-cli_ is available under the [MIT](https://mths.be/mit) license.
