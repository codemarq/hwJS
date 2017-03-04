$(function () {
  $('#load').click(function () {
    $.when(
      $.get('content1.html', function (result) {
        $('#section1').html(result);
      }, 'html'),
      $.get('content2.html', function (result) {
        $('#section2').html(result);
      }, 'html'),
      $.get('content3.html', function(result) {
        $('#section3').html(result);
      }, 'html')
    )
    .then(function () {
      $('#proceed').removeAttr('disabled');
    })
  });
});
