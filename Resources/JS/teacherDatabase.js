$(document).ready(function() {

  $.ajax({
    type: 'POST',
    url: 'API/checkSession.php',
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

    if ($('#teachername').val().match('^[a-zA-Z ]{3,16}$')){
      $('.errordiv1').css('display', 'none');
      name =true;
    } else {
      $('.errordiv1').css('display', 'block');
      name= false;
    }
    if ($('#teacherpassord').val()== 0 || null || undefined || $('#teacherpassord').val().length < 8){
      $('.errordiv3').css('display', 'inline-block');
      passwrd = false;
    } else {
      $('.errordiv3').css('display', 'none');
        passwrd = true;
    }
    if ($('#teacherclgcode').val()== 0 || null || undefined){
      $('.errordiv5').css('display', 'inline-block');
      clgcode= false;
    } else {
      $('.errordiv5').css('display', 'none');
        clgcode= true;
    }
    $('#teacheremail').filter(function(){
                      var emil=$('#teacheremail').val();
                 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
               if( !emailReg.test( emil ) ) {
                     $('.errordiv2').css('display', 'inline-block');
                     email= false;
                   } else if ($('#teacheremail').val()== 0 || null || undefined) {
                     $('.errordiv2').css('display', 'inline-block');
                     email=false;
                   }
                    else {
                   $('.errordiv2').css('display', 'none');
                   email= true;
                   }
                 });

                 var password = $("#teacherpassord").val();
                             var confirmPassword = $("#teacherconpassord").val();
                             if (password != confirmPassword) {
                                 $('.errordiv4').css('display', 'inline-block');
                                 return false;
                                 conpassword= false;
                               } else if ($("#teacherconpassord").val()==0 || null || undefined) {
                                 $('.errordiv4').css('display', 'inline-block');
                                  conpassword= false;
                               }
                               else {
                                   $('.errordiv4').css('display', 'none');
                                   conpassword= true;
                               }

if (name && passwrd && clgcode && email && conpassword == true) {
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
  console.log("error to enter database");
}
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
