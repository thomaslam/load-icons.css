(function() {

  $('.btn-clipboard').on('click', function(e) {
    // e.preventDefault();
    console.log('Is clicked');
    var $flashMessage = $(this).parent().parent().parent().find('.alert');

    $flashMessage.slideDown(function() {
      setTimeout(function() {
        $flashMessage.slideUp();
      }, 1000);
    })
  }).zclip({
    path: 'http://www.steamdev.com/zclip/js/ZeroClipboard.swf',
    copy: function() {
      return $(this).parent().parent().parent().find('.to-copy').html();
    },
    afterCopy: function() {
      console.log('COPIED');
    }
  });

  $('.btn-clipboard').hover(function() {
    $(this).toggleClass('btn-clipboard-hover');
  });

})();
