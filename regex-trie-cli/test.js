import test from 'ava';
import execa from 'execa';

test(async t => {
	t.is(
		(await execa('./cli.js', 'foo bar baz qux quux corge grault'.split(' '))).stdout,
		'(?:foo|ba[rz]|qu(?:x|ux)|corge|grault)'
	);
});
