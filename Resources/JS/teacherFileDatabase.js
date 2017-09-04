$(document).ready(function() {

  $.ajax({
    type:'POST',
    url:"API/displayfiles.php",
    datatype: 'json',
    encode: true
  }).done(function(data){
    console.log(data);
    var json = JSON.parse(data);
    console.log(json[1].fileType);

    for (var i = 0; i < json[0]; i++) {
      $('.filecardrow').append('<div id="filecard'+ i +'" class="filecard col-xs-3 filecardsize" />')
      $("#filecard" + i).append('<h5 class="filenamecard' + i +' filenamecard"/>');
      $(".filenamecard" + i).append(json[i+1].fileName);
    }
  })

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
        setTimeout(function(){
          location.reload();
        },1500);
      }
    });
  }));
});
