$(function () {
  $("#load").click(function () {
    $("#section1").load('content1.html', function () {
      $("#proceed").removeAttr('disabled');
    });
  });

});
