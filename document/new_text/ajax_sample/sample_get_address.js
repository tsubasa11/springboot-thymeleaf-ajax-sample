$(function() {
  // ［検索］ボタンクリックで検索開始
  $('#get_address_btn').on("click",function() {
    $.ajax({
        url: "http://zipcoda.net/api",
        dataType: "jsonp",
        data: { 
          zipcode: $('#zipcode').val() 
        },
        async: true
    }).done(function(data) {
      // 検索成功時にはページに結果を反映
      // コンソールに取得データを表示
      console.log(data);
      console.dir(JSON.stringify(data));
      $("#address").val(data.items[0].address);
    }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
      // 検索失敗時には、その旨をダイアログ表示
      alert('正しい結果を得られませんでした。');
      console.log("XMLHttpRequest : " + XMLHttpRequest.status);
      console.log("textStatus     : " + textStatus);
      console.log("errorThrown    : " + errorThrown.message);
    });
  });
});
