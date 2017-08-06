$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "displaycard.php",
    datatype: 'json',
    encode: true
  }).done(function(num) {
    console.log(num);
    var json = JSON.parse(num);
    console.log(json[1].subjectname);
    //[5,{"subjectname":"GGG"},{"subjectname":"OR"},{"subjectname":"SAM"},{"subjectname":"ABID"},{"subjectname":"ERR"}]
    for(i = 0; i < json[0]; i++) {
      $('.row').append(' <a href="TeacherFilesDashboard.html" <div id="card'+ i +'" class="cardee col-xs-3 cardsize" />'); //<a href="login.html"
      $("#card" + i).append('<h3 class="cardcourse' + i +' cardcourse"/>');
      $(".cardcourse" + i).append(json[i+1].subjectcourse);
      $("#card" + i).append('<h5 class="cardsubject' + i +' cardsubject"/>');
      $(".cardsubject" + i).append(json[i+1].subjectname);
      $("#card" + i).append('<h6 class="cardsem' + i +' cardsem"/>');
      $(".cardsem" + i).append(json[i+1].subjectsem);
      $("#card" + i).append('<p class="cardid' + i +' cardid"/>');
      $(".cardid" + i).append(json[i+1].subjectid);

    }
    $('.cardee').click(function(event) {
        var status = $(this).attr('id');
        var cardsubid = $("#" + status +" p").text();
        console.log(cardsubid);

        $.ajax({
          type: 'POST',
          url: 'teacherFilesLoactionSearch.php',
          data: { cardsubid : cardsubid },
          datatype:'json',
          encode: true
        }).done(function(location){
          console.log("done with p")
        });

    });
  })
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
        url: 'TeacherDashboard.php',
        data: FormData,
        datatype: 'json',
        encode: true
      }).done(function() {
        console.log("done");
        $('.cardholder').fadeOut(1000).fadeIn(500);
        $('input[type=text]#subname').val("");
        $('input[type=text]#course').val("");
        $('input[type=number]#sem').val("");
        $('.errfill').css('display', 'none');
        $('.successsubject').css('display', 'block');

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
