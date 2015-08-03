(function() {
  // $('#test-clipboard').click(function() {
  //   var pre = $(this).parent().next();

  //   console.log(pre.html());

  //   $(this).zclip({
  //     path: 'http://www.steamdev.com/zclip/js/ZeroClipboard.swf',
  //     copy: function() {
  //       return pre.html();
  //     },
  //     afterCopy: function() {
  //       console.log("Is copied");
  //     }
  //   });

  // });

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

})();
