$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();

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
        window.location.href = "./API/howto.php";
      }
    })

  });
});
