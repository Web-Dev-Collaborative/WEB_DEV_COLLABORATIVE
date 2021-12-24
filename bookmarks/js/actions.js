$(document).ready(function() {
    var level = '';
    $('.btn').click(function() {
	if ($(this).parent().hasClass('first-level')) {
	    level = 'first';
	    setLevel(level, $(this));

	    // disable third-level
	    disableLevel('third');

	    // enable second-level
	    enableLevel('second', 'first');
	} else if ($(this).parent().hasClass('second-level')) {
	    level = 'second';
	    setLevel(level, $(this));

	    // enable third-level
	    enableLevel('third', 'second');
	} else if ($(this).parent().hasClass('third-level')) {
	    level = 'third';
	    setLevel(level, $(this));
	}

	// enable btn-danger class
	if ($(this).hasClass('btn-danger')) {
	    clearButton(level);
	    clearLevel(level);
	} else {
	    clearButton(level);
	    $(this).addClass('btn-danger');
	}

	// enable list-group-item
	enableUrls();
    });
});

function clearButton(level) {
    $('.'+level+'-level > .btn').removeClass('btn-danger');
}

function setLevel(level, element) {
    clearLevel(level);
    $('.'+level+'-level').attr('tag', element.html());
}

function clearLevel(level) {
    $('.'+level+'-level').attr('tag', '');
    if (level == 'first') {
	disableLevel('second');
	disableLevel('third');
    } else if (level == 'second') {
	disableLevel('third');
    }
}

function disableLevel(level) {
    $('.'+level+'-level').addClass('hidden');
    $('.'+level+'-level').attr('tag', '');
    $('.'+level+'-level > .btn').addClass('hidden');
}

function enableLevel(level,previous) {
    // enable button
    $('.'+level+'-level > .btn').removeClass('btn-danger');
    $('.'+level+'-level > .btn').each(function() {
	if ($(this).hasClass($('.'+previous+'-level').attr('tag')) && !alreadyUsed($(this).html())) {
	    $(this).removeClass('hidden');
	} else {
	    $(this).addClass('hidden');
	}
    });

    // enable layer
    $('.'+level+'-level').removeClass('hidden');
}

function alreadyUsed(tag) {
    // only third-level
    if (tag == clearTag($('.first-level').attr('tag'))) {
	return true;
    }
    return false;
}

function enableUrls() {
    var first = clearTag($('.first-level').attr('tag'));
    var second = clearTag($('.second-level').attr('tag'));
    var third = clearTag($('.third-level').attr('tag'));

    $('.list-group-item').each(function() {
	if (hasClasses($(this), first, second, third)) {
	    $(this).removeClass('hidden');
	} else {
	    $(this).addClass('hidden');
	}
    });
}

function clearTag(tag) {
    if (tag == '' || tag == undefined) {
	return '';
    }
    return tag;
}

function hasClasses(btn, first, second, third) {
    if ((first != '' && btn.hasClass(first) || first == '')
	&& ((second != '' && btn.hasClass(second)) || second == '')
	&& ((third != '' && btn.hasClass(third)) || third == '')
       ) {
	return true;
    }
    return false;
}
