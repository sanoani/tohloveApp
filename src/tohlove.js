webview.executeJavaScript("document.write('JavaScriptをWebview内で実行することができます。')");

$(function () {
  $('#loadButton').click(function () {
    //alert('ほげ');
    //$('#result').load('more.html');
    $.ajax({
      type: 'GET',
      //url: 'http://iwb.jp/s/js/data.json',
      //url: './tohlove_json/list.json',
      //url: 'http://203.104.209.102/kcsapi/api_get_member/ndock',
      cache: true,
      datatype: 'json',
      success: function (json) {
        $.each(json, function (i, item) {
          $('body').prepend(item.codename + '<br>');
        });
      },
      error: function () {
        alert('error');
      }
    });
  });

});
