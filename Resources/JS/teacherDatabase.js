$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();

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
