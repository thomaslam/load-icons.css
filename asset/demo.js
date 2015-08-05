(function() {

  $('.btn-clipboard').on('click', function(e) {
    // e.preventDefault();
    console.log('Is clicked');
  }).zclip({
    path: 'http://www.steamdev.com/zclip/js/ZeroClipboard.swf',
    copy: function() {
      return $(this).parent().parent().next().html();
    },
    afterCopy: function() {
      console.log('COPIED');
    }
  });

  $('.btn-clipboard').hover(function() {
    $(this).toggleClass('btn-clipboard-hover');
  });

  

})();
