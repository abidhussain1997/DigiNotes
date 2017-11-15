$(document).ready(function() {

    $.ajax({
      type: "GET",
      url: "API/checkSession.php",
      datatype: 'json',
      encode: true
  }).done(function(flag){
      if (flag == 0) {
          window.location.href = "index.html"
      } else if (flag == 2) {
          $.ajax({
            type:'POST',
            url:"API/displayfiles.php",
            datatype: 'json',
            encode: true
          }).done(function(data){
            console.log(data);
            var json = JSON.parse(data);
            for (var i = 0; i < json[0]; i++) {
              $('.filecardrow').append('<div id="filecard'+ i +'" class="filecard col-xs-3 filecardsize" />')
              $('#filecard' + i).append('<div id="filecardbanner' + i + '" class="filecardbanner" />')
              if(json[i+1].fileType == "pdf"){
                $('#filecardbanner' + i).css('background-color','#DF4430');
              } else if (json[i+1].fileType == "ppt") {
                $('#filecardbanner' + i).css('background-color','#FF7300');
              } else if (json[i+1].fileType == "docx" || "doc") {
                $('#filecardbanner' + i).css('background-color','#3980FB');
              }
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
      }
  })

});
  $('.logoutbtn').click(function(){
    $.ajax({
      type: 'POST',
      url: 'API/logout.php',
      encode: true
    }).done(function(){
      window.location.href = "index.html"
    });
  });
