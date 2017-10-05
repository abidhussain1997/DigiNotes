$(document).ready(function() {

  $.ajax({
    type: 'POST',
    url: 'API/TeacherCheckSession.php',
    encode: true
  }).done(function(flag){
    if(flag == 1){
      console.log("session exists");
      window.location.href = "TeacherDashboard.html"
    } else {
      console.log("Teacher session does not exists");
    }
  });

  $("#submit").click(function(event) {
    event.preventDefault();

    if ($('#teachername').val()== 0){
      $('.errordiv1').css('display', 'inline-block');
      console.log("empty");
    } else {
      $('.errordiv1').css('display', 'none');
    }
    if ($('#teacherpassord').val()== 0){
      $('.errordiv3').css('display', 'inline-block');
      console.log("empty");
    } else {
      $('.errordiv3').css('display', 'none');
    }
    if ($('#teacherclgcode').val()== 0){
      $('.errordiv5').css('display', 'inline-block');
      console.log("empty");
    } else {
      $('.errordiv5').css('display', 'none');
    }
    $('#teacheremail').filter(function(){
                      var emil=$('#teacheremail').val();
                 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
               if( !emailReg.test( emil ) ) {
                     $('.errordiv2').css('display', 'inline-block');
                   } else {
                   $('.errordiv2').css('display', 'none');
                   }
                 });

                 var password = $("#teacherpassord").val();
                             var confirmPassword = $("#teacherconpassord").val();
                             if (password != confirmPassword) {
                                 $('.errordiv4').css('display', 'inline-block');
                                 return false;
                               }
                               else {
                                   $('.errordiv4').css('display', 'none');
                               }

    var FormData = {
      teachername: $('#teachername').val(),
      teacherusername: $('#teacherusername').val(),
      teacherpassword: $('#teacherpassord').val(),
      teacheremail: $('#teacheremail').val(),
      teacherclgcode: $('#teacherclgcode').val(),
    };
    $.ajax({
      type: 'POST',
      url: 'API/teacherSignupDatabase.php', //http://192.168.1.8:8082/
      data: FormData,
      datatype: 'json',
      encode: true
    }).done(function() {
      console.log("done");
    })

  });
});

$(document).ready(function() {
  $("#teacher-login-btn").click(function(event) {
    event.preventDefault();

    var FormData = {
      teacher_username: $("#teacher-username").val(),
      teacher_password: $("#teacher-password").val()
    };

    $.ajax({
      type: 'POST',
      url: 'API/teacherSigninDatabase.php',
      data: FormData,
      datatype: 'json',
      encode: true
    }).done(function(flag) {
      console.log("done");
      console.log("Value of flag is: " + flag);

      if (flag == 1) {
        $('.errordiv').css('display', 'inline-block');
      } else if (flag == 0) {
        $('.errordiv').css('display', 'none');
        window.location.href = "TeacherDashboard.html";
      }
    })

  });
});
