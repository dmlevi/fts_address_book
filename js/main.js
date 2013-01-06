$(document).ready(function () {

  

  $(window).ftsBook({
    url: 'data/contacts.json',
    query: '#q',
    output: '#output'
  });

  var $container = $('#am-container').hide(),
    $imgs = $container.find('img'),
    totalImgs = $imgs.length,
    cnt = 0;
  $imgs.each(function (i) {
    var $img = $(this);
    $('<img/>').load(function () {
      ++cnt;
      if (cnt === totalImgs) {
        $imgs.show();
        $container.montage({
          liquid: 'true',
          margin: '1',
          minw: '140',
          minh: '200',
          maxh: '350',
          alternateHeight: 'true',
          alternateHeightRange: {
            min: '200',
            max: '400'
          },
          fixedHeight: 'null',
          minsize: 'false',
          fillLastRow: 'false'
        });
      }
    }).attr('src', $img.attr('src'));
  });
}); //ready