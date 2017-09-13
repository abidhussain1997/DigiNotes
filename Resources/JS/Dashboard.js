$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "API/displaycard.php",
    datatype: 'json',
    encode: true
  }).done(function(num) {
    console.log(num);
    var json = JSON.parse(num);
    console.log(json[1].subjectname);
    //[5,{"subjectname":"GGG"},{"subjectname":"OR"},{"subjectname":"SAM"},{"subjectname":"ABID"},{"subjectname":"ERR"}]
    for(i = 0; i < json[0]; i++) {
      $('.subjectcard').append(' <a href="TeacherFilesDashboard.html" <div id="card'+ i +'" class="cardee col-xs-3 cardsize" />'); 
      $("#card" + i).append('<h3 class="cardcourse' + i +' cardcourse col-xs-9"/>');
      $(".cardcourse" + i).append(json[i+1].subjectcourse);
      $("#card" + i).append('<h3 id="cardoption' + i +'" class="cardoption col-xs-3"/>');
      $('#cardoption' + i).append("x");
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

    $('.cardoption').click(function(e){
      e.preventDefault();

      var r = confirm("Are you sure you want to delete?");
    if (r == true) {
      var status = $(this).attr('id');
      var carddelid = $("#" + status +" p").text();
      console.log(carddelid);

      $.ajax({
        type: 'POST',
        url: 'API/delsubject.php',
        data: { carddelid : carddelid },
        datatype:'json',
        encode: true
      }).done(function(){
        console.log("delete operation")
        location.reload().delay(2000);
      });
    }

    });

    $('.cardee').click(function(event) {
        var status = $(this).attr('id');
        var cardsubid = $("#" + status +" h2").text();
        console.log(cardsubid);

        $.ajax({
          type: 'POST',
          url: 'API/teacherFilesLoactionSearch.php',
          data: { cardsubid : cardsubid },
          datatype:'json',
          encode: true
        }).done(function(location){
          console.log("done with h2")

        });

    });
  })
  
  $('.logoutbtn').click(function(){
    $.ajax({
      type: 'POST',
      url: 'API/logout.php',
      encode: true
    }).done(function(){
      window.location.href = "index.html"
    });
  });
});



$(document).ready(function() {


  $("#addsub").click(function(event) {
    event.preventDefault();
    if ($('input[type=text]#subname').val() == "") {
      $('.errfill').css('display', 'block');
    } else if ($('input[type=text]#course').val() == "") {
      $('.errfill').css('display', 'block');
    } else if (!$('input[type=number]#sem').val()) {
      $('.errfill').css('display', 'block');
      $('.successsubject').css('display', 'none');
    } else {

      var FormData = {
        subject_name: $('#subname').val().toUpperCase(),
        subject_course: $('#course').val().toUpperCase(),
        subject_sem: $('#sem').val().toUpperCase()
      };
      $.ajax({
        type: 'POST',
        url: 'API/TeacherDashboard.php',
        data: FormData,
        datatype: 'json',
        encode: true
      }).done(function() {
        console.log("done");
        // $('#cardholder').fadeOut(1000).fadeIn(500);
        // $("#cardholder").load(location.href + "#cardholder");
        $('input[type=text]#subname').val("");
        $('input[type=text]#course').val("");
        $('input[type=number]#sem').val("");
        $('.errfill').css('display', 'none');
        $('.successsubject').css('display', 'block');

        setTimeout(function(){
          location.reload();
        },1500);

      })
    }
  });
});

var btnbool = false;
$(function() {
  $('.show-form').click(function(event) {
    console.log(btnbool);
    if (btnbool == false) {
      $(".add-form").delay(100).fadeIn(400);
      $('.show-form').css('background', '#F44336');
      $('.btntext').text("CANCEL");
      $('.add-form').css('box-shadow', '0 4px 6px -6px #232323');
      $('.errfill').css('display', 'none');
      $('.successsubject').css('display', 'none');
      btnbool = true;
    } else {
      $(".add-form").delay(10).fadeOut(400);
      $('.show-form').css('background', '#01579B');
      $('.btntext').text("ADD SUBJECT");
      btnbool = false;
    }

    event.preventDefault();
  });
});
