$(document).ready(function(e) {
  $("#uploadfile").on('submit', (function(e) {
    e.preventDefault();
    $("#message").empty();
    $('#loading').show();
    $.ajax({
      url: "API/teacherAddFile.php",
      type: "POST",
      data: new FormData(this),
      contentType: false, // The content type used when sending data to the server.
      cache: false, // To unable request pages to be cached
      processData: false, // To send DOMDocument or non processed data file it is set to false
      success: function(data)
      {
        $('#loading').hide();
        $("#message").html(data);
      }
    });
  }));
});
