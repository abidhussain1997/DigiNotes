$(document).ready(function() {

  $.ajax({
    type:'POST',
    url:"API/displayfiles.php",
    datatype: 'json',
    encode: true
  }).done(function(data){
    console.log(data);
    var json = JSON.parse(data);
    // console.log(json[1].fileType);

    for (var i = 0; i < json[0]; i++) {
      $('.filecardrow').append('<div id="filecard'+ i +'" class="filecard col-xs-3 filecardsize" />')
      $("#filecard" + i).append('<h5 class="filenamecard' + i +' filenamecard"/>');
      $(".filenamecard" + i).append(json[i+1].fileName);
      $("#filecard" + i).append('<h3 class="fileid' + i +' fileid"/>');
      $(".fileid" + i).append(json[i+1].fileId);
    }
    
    $(".filecard").click(function(){
      console.log("here");
      var status = $(this).attr('id');
      console.log(status);
      var fileid = $("#" + status +" h3").text();
      console.log(fileid);
      
      $.ajax({
        type:'POST',
        url: "API/showfile.php",
        data: { fileid : fileid },
        datatype: 'json',
        // encode: true
      }).done(function(path){
        console.log(path);
        var remslash = path.replace(/\\/g, "");
        console.log(remslash);
        var substr = remslash.substring(3);
        console.log(substr);
        var remquorts = substr.replace('"', '');
        console.log(remquorts);
        var domain = "http://localhost/DigiNotes"
        window.location.href = domain + remquorts
      })
    })
  })
  
  // 
  // $("#filecard0").click(function(e){
  //   e.preventDefault();
  //   console.log("clicked on file");
  // //   var r = confirm("Are you sure you want to delete?");
  // // if (r == true) {
  // //   var status = $(this).attr('id');
  // //   var carddelid = $("#" + status +" p").text();
  // //   console.log(carddelid);
  // // 
  // //   $.ajax({
  // //     type: 'POST',
  // //     url: 'API/delsubject.php',
  // //     data: { carddelid : carddelid },
  // //     datatype:'json',
  // //     encode: true
  // //   }).done(function(){
  // //     console.log("done")
  // //   });
  // // }
  // 
  // });

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
  
  $('.logoutbtn').click(function(){
    $.ajax({
      type: 'POST',
      url: 'API/logout.php',
      encode: true
    }).done(function(){
      window.location.href = "index.html"
    });
  });
  
});
