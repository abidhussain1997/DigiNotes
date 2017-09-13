$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "API/Studentcarddisplay.php",
    datatype: 'json',
    encode: true
  }).done(function(num) {
    console.log(num);
    var json = JSON.parse(num);
    console.log(json[1].subjectname);
    //[5,{"subjectname":"GGG"},{"subjectname":"OR"},{"subjectname":"SAM"},{"subjectname":"ABID"},{"subjectname":"ERR"}]
    for(i = 0; i < json[0]; i++) {
      $('.row').append(' <a href="StudentFilesDashboard.html" <div id="card'+ i +'" class="cardee col-xs-3 cardsize" />'); 
      $("#card" + i).append('<h3 class="cardcourse' + i +' cardcourse col-xs-9"/>');
      $(".cardcourse" + i).append(json[i+1].subjectcourse);
      $("#card" + i).append('<h3 id="cardoption' + i +'" class="cardoption col-xs-3"/>');

      $("#cardoption" + i).append('<p class="carddelid' + i +' carddelid"/>');
      $(".carddelid" + i).append(json[i+1].subjectid);
      $("#card" + i).append('<h5 class="cardsubject' + i +' cardsubject"/>');
      $(".cardsubject" + i).append(json[i+1].subjectname);
      $("#card" + i).append('<h6 class="cardsem' + i +' cardsem"/>');
      $(".cardsem" + i).append(json[i+1].subjectsem);
      $("#card" + i).append('<h2 class="cardid' + i +' cardid"/>');
      $(".cardid" + i).append(json[i+1].subjectid);

      // // To change font size of the subject
      // var sublength = $('.cardsubject' + i).text().length;
      // console.log("length is" + sublength);
      //
      // if (sublength > 9) {
      //   $('.cardsubject' + i).css('font-size', '20px');
      // }
      //
      // $('#card' + i).mouseover(function(){
      //   $('.cardoption').fadeIn(600).css("display","inline-block");
      // })
      //
      // $('#card' + i).mouseout(function(){
      //   $('.cardoption').fadeOut(600).css("display","none");
      // })

    }



    $('.logoutbtn').click(function(){
      $.ajax({
        type: 'POST',
        url: 'API/logout.php',
        encode: true
      }).done(function(){
        window.location.href = "index.html"
      });
    });
  })
});
