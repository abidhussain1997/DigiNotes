$(document).ready(function() {

    $.ajax({
      type: "GET",
      url: "API/checkSession.php",
      datatype: 'json',
      encode: true
  }).done(function(flag){
      if (flag == 0) {
          window.location.href = "index.html"
      } else if (flag == 1) {
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
              $('#filecard' + i).append('<div id="filecardbanner' + i + '" class="filecardbanner" />')
              if(json[i+1].fileType == "pdf"){
                $('#filecardbanner' + i).css('background-color','#DF4430');
              } else if (json[i+1].fileType == "ppt") {
                $('#filecardbanner' + i).css('background-color','#FF7300');
              } else if (json[i+1].fileType == "doc"|| "docx") {
                $('#filecardbanner' + i).css('background-color','#3980FB');
              }
              $("#filecardbanner" + i).append('<h5 id="fileoption' + i +'" class="fileoption col-xs-3 pull-right"/>');
              $('#fileoption' + i).append("x");
              $("#fileoption" + i).append('<p class="filedelid' + i +' filedelid"/>');
              $(".filedelid" + i).append(json[i+1].fileId);
              $("#filecard" + i).append('<h5 id="filenamecard' + i +'" class="filenamecard"/>');
              $("#filenamecard" + i).append(json[i+1].fileName);
              $("#filenamecard" + i).append('<h3 class="fileid' + i +' fileid"/>');
              $(".fileid" + i).append(json[i+1].fileId);
              var width = $(".filecard").width();
              $('#filecardbanner' + i).height(width * 25 / 100);
              $('#filenamecard' + i).height(width * 75 / 100)
            }

            $(".fileoption").click(function(e){
              e.preventDefault();

              var r = confirm("Are you sure you want to delete?");
            if (r == true) {
              var status = $(this).attr('id');
              console.log(status);
              var filedelid = $("#" + status +" p").text();
              console.log(filedelid);
              
              $.ajax({
                type: 'POST',
                url: 'API/delfile.php',
                data: { filedelid : filedelid },
                datatype:'json',
                encode: true
              }).done(function(){
                console.log("file delete operation")
                location.reload().delay(2000);
              });
              
            }
            })

            $(".filenamecard").click(function(){
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
      }
  });



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
