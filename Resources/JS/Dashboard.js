$(document).ready(function(){
  $("#addsub").click(function(event){
    event.preventDefault();

    var FormData={
      subject_name:$('#subname').val(),
      subject_course:$('#course').val(),
      subject_sem:$('#sem').val()
    };
    $.ajax({
      type: 'POST',
      url: 'TeacherDashboard.php',
      data: FormData,
      datatype: 'json',
      encode: true
    }).done(function(){
        console.log("done");
    })

  });
});

var btnbool = false;
$(function() {
  $('.show-form').click(function(event) {
    console.log(btnbool);
    if (btnbool == false) {
      $(".add-form").delay(100).fadeIn(400);
      $('.show-form').css('background','#F44336');
      $('.btntext').text("CANCEL");
      $('.add-form').css('box-shadow','0 4px 6px -6px #232323');
      btnbool = true;
    } else {
      $(".add-form").delay(10).fadeOut(400);
      $('.show-form').css('background','#01579B');
      $('.btntext').text("ADD SUBJECT");
      btnbool = false;
    }
		event.preventDefault();
	});
});
