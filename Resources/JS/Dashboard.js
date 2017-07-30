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
