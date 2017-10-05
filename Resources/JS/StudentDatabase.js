$(document).ready(function() {
  $.ajax({
    type: 'POST',
    url: 'API/StudentCheckSession.php',
    encode: true
  }).done(function(flag){
    if(flag == 1){
      console.log("session exists");
      window.location.href = "StudentDashboard.html"
    } else {
      console.log("Student session does not exists");
    }
  });

  $("#submit").click(function(event) {
    event.preventDefault();

if ($('#studentname').val()== 0){
  $('.errordiv1').css('display', 'inline-block');
  console.log("empty");
} else {
  $('.errordiv1').css('display', 'none');
}
if ($('#studentpassord').val()== 0){
  $('.errordiv3').css('display', 'inline-block');
  console.log("empty");
} else {
  $('.errordiv3').css('display', 'none');
}
if ($('#studentcourse').val()== 0){
  $('.errordiv5').css('display', 'inline-block');
  console.log("empty");
} else {
  $('.errordiv5').css('display', 'none');
}
if ($('#studentsem').val()== 0){
  $('.errordiv6').css('display', 'inline-block');
  console.log("empty");
} else {
  $('.errordiv6').css('display', 'none');
}
if ($('#studentclgcode').val()== 0){
  $('.errordiv7').css('display', 'inline-block');
  console.log("empty");
} else {
  $('.errordiv7').css('display', 'none');
}

var password = $("#studentpassord").val();
            var confirmPassword = $("#studentconpassord").val();
            if (password != confirmPassword) {
                $('.errordiv4').css('display', 'inline-block');
                return false;
              }
              else {
                  $('.errordiv4').css('display', 'none');
              }

$('#studentemail').filter(function(){
                  var emil=$('#studentemail').val();
             var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
           if( !emailReg.test( emil ) ) {
                 $('.errordiv2').css('display', 'inline-block');
               } else {
               $('.errordiv2').css('display', 'none');
               }
             });

    var FormData = {
      studentname: $('#studentname').val(),
      studentusername: $('#studentusername').val(),
      studentpassword: $('#studentpassord').val(),
      studentemail: $('#studentemail').val(),
      studentclgcode: $('#studentclgcode').val(),
      studentcourse: $('#studentcourse').val(),
      studentsem: $('#studentsem').val(),

    };
    $.ajax({
      type: 'POST',
      url: 'API/StudentSignupDatabase.php', //http://192.168.1.8:8082/
      data: FormData,
      datatype: 'json',
      encode: true
    }).done(function() {
      console.log("done");
    })

  });
});

$(document).ready(function() {
  $("#student-login-btn").click(function(event) {
    event.preventDefault();

    var FormData = {
      student_username: $("#student-username").val(),
      student_password: $("#student-password").val(),
    };

    $.ajax({
      type: 'POST',
      url: 'API/studentSigninDatabase.php',
      data: FormData,
      datatype: 'json',
      encode: true
    }).done(function(flag) {
      console.log("done");
      console.log("Value of flag is: " + flag);

      if (flag == 1) {
        $('.errordiv1').css('display', 'inline-block');
      } else if (flag == 0) {
        $('.errordiv1').css('display', 'none');
        window.location.href = "./StudentDashboard.html";
      }
    })

  });
});
