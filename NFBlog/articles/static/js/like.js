function like(url) {
  var heart = $("#heart")

  $.get(url).done(function(data){
    $('#likes_count').text(data.like_count)
    if(heart.hasClass('text-danger')) {
      heart.removeClass('text-danger');
      heart.addClass('text-muted');
    } else {
      heart.removeClass('text-muted');
      heart.addClass('text-danger');
    }
  });
}
