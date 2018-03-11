$(document).ready(function(){

  // クリックイベントも書き方
  $('.Box').on('click',function(){
    alert('押されたよ〜〜〜');
    console.log('押されたよん♪');
  });

  $("#js").on('click',function(){
    var elem = '<a href ="#">次ページ</a>';
    $("#js").html(elem);
    $("#js").text(elem);
    $("#js").css("color","#ff0");
    $("#js").show(4000);
    $("#js").prepend(elem);
    $("#js").append(elem);
    // $("#js").empty();
    // $("#js").remove();
  });



  //ここから演習1だよ↓

  // $("#hide").on('click',function(){
  //   $("#ex").fadeOut(2000);
  // });
  //
  // $("#show").on('click',function(){
  //   $("#ex").fadeIn(2000);
  // });
  //
  // var countup = 0;
  // $("#show").on('click',function(){
  //    countup ++;
  //   $("#ex").html(countup);
  // });
  //
  // $("#show").on('click',function(){
  //   $("#ex").css("border", countup+"px solid #ff0000");
  // });


// ここから演習２だよ。

  $("#ex").fadeIn(4000);
  $("#ex").html("<p>かきくけこ</p>");
  $("#ex").css("backgroundColor","#000000");
  $("#ex").css("color","#ffffff");
  $("#ex").prepend("<p>あいうえお</p>");
  $("#ex").append("<p>さしすせそ</p>");
  // var word4 = '<p>たちつてと</p>';
  // $("#ex").append(word4);

  $("#ex").find("p:nth-child(even)").css("backgroundColor","#ffffff");
  $("#ex").find("p:nth-child(even)").css("color","#000000");




});
