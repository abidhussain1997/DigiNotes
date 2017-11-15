$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: "API/checkSession.php",
        datatype: 'json',
        encode: true
    }).done(function(flag){
        if (flag == 0) {
             window.location.href = "index.html"
        } else {
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
                $(".cardsem" + i).append(json[i+1].subsem);
                $("#card" + i).append('<h2 class="cardid' + i +' cardid"/>');
                $(".cardid" + i).append(json[i+1].subjectid);

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
          }

            })
        }
    });
});

$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

$(document).ready(function(){
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
  $("#sem1").click(function(){
      $("#sem").val("1");
  });
  $("#sem2").click(function(){
      $("#sem").val("2");
  });
  $("#sem3").click(function(){
      $("#sem").val("3");
  });
  $("#sem4").click(function(){
      $("#sem").val("4");
  });
  $("#sem5").click(function(){
      $("#sem").val("5");
  });
  $("#sem6").click(function(){
      $("#sem").val("6");
  });

  $("#sem").click(function(event) {
    event.preventDefault();

    var FormData = {
      stu_sem: $("#sem").val(),
    };
    console.log(FormData);
    $.ajax({
      type: 'POST',
      url: 'API/ChangeSem.php',
      data: FormData,
      datatype: 'json',
      encode: true
    }).done(function(flag) {

      console.log("the value of "+ flag);
      if (flag == 1) {

        $.ajax({
          type: 'POST',
          url: 'API/logout.php',
          encode: true
        }).done(function(){
          setTimeout(function() {
         window.location.href = "login.html";
       }, 6000);

        });

$('.errorsem').css('display', 'inline-block');
      } else if (flag == 0) {
        alert("Failed to change subject");
      }
    })
  });

});
