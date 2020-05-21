$(document).ready(function() {
  var source   = $("#template").html();
  var template = Handlebars.compile(source);
  var container = $(".cds-container");

  $.ajax({
    "url" : "https://flynn.boolean.careers/exercises/api/array/music" ,
    "method" : "GET" ,
    "success" : function (data) {
      var disk = data.response;
      console.log(disk);
      for (var i = 0; i < disk.length; i++) {
       var disk_corrente = disk[i];
       console.log(disk_corrente);
       var html = template(disk_corrente);
       container.append(html);


      }

    },
    "error" : function () {
      alert("IL SITO NON RISPONDE");
    }
  });
});
