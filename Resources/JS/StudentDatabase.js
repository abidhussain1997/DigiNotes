$(document).ready(function() {
  $.ajax({
    type: 'POST',
    url: 'API/checkSession.php',
    encode: true
  }).done(function(flag){
    if(flag == 2){
      console.log("Student session found");
      window.location.href = "StudentDashboard.html"
    } else {
      console.log("Student session does not exists");
    }
  });

  $("#submit").click(function(event) {
    event.preventDefault();

if  ( $('#studentname').val().match('^[a-zA-Z ]{3,16}$') ){
  $('.errordiv1').css('display', 'none');
  name = true;
} else {
  $('.errordiv1').css('display', 'block');
  name =false;
}
if ($('#studentpassord').val()== 0 || null || undefined || $('#studentpassord').val().length < 8){
  $('.errordiv3').css('display', 'inline-block');
  passwrd = false;
} else {
  $('.errordiv3').css('display', 'none');
  passwrd=true;
}
if ($('#studentcourse').val().match('^[a-zA-Z]')){
  $('.errordiv5').css('display', 'none');
  course = true;
} else {
  $('.errordiv5').css('display', 'block');
  course=false;
}
if ($('#studentsem').val().match(/\(?([1-6]{1})\)?/)){
  $('.errordiv6').css('display', 'none');
  sem=true;
} else {
  $('.errordiv6').css('display', 'block');
  sem=false;
}
if ($('#studentclgcode').val()== 0 || null){
  $('.errordiv7').css('display', 'inline-block');
  clgcode=false;
} else {
  $('.errordiv7').css('display', 'none');
  clgcode=true;
}

var password = $("#studentpassord").val();
            var confirmPassword = $("#studentconpassord").val();
            if (password != confirmPassword) {
                $('.errordiv4').css('display', 'inline-block');
                return false;
                conpassword= false;
              }
              else {
                  $('.errordiv4').css('display', 'none');
                    conpassword= true;
              }

$('#studentemail').filter(function(){
                  var emil=$('#studentemail').val();
             var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
           if( !emailReg.test( emil ) ) {
                 $('.errordiv2').css('display', 'inline-block');
                 email=false;
               } else if ($('#studentemail').val()== 0 || undefined || null) {
                    $('.errordiv2').css('display', 'inline-block');
                    email=false;
               }
                else {
               $('.errordiv2').css('display', 'none');
               email=true;

               }
             });

if (name && email && passwrd && course && sem && conpassword && clgcode == true){
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
  }).done(function(checkuser) {
      if (checkuser == 1) {
          alert("user already exists")
      } else {
          $('.alert').css('display', 'block');
          setTimeout(function() {
         window.location.href = "login.html";
       }, 2000); 
      }
    })
}
else {
console.log("error not entered in db");
}
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
