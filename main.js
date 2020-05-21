$(document).ready(function() {
  var source   = $("#template").html();
  var template = Handlebars.compile(source);
  var container = $(".cds-container");
  var select = $('select');

  var disco = {
    titolo : "" ,
    img : "" ,
    autore : "",
    anno : "",
    genere : ""
  };

  select.on('change', function() {
    var value_select = this.value;
    console.log(value_select);
    $(".cd").each(function(){
      var corrente = $(this)
      corrente.addClass("disabled")
      if (corrente.hasClass(value_select)) {
        corrente.removeClass("disabled")
      } else if (value_select == "All") {
        corrente.removeClass("disabled")
      };
    });
  });

  $.ajax({
    "url" : "https://flynn.boolean.careers/exercises/api/array/music" ,
    "method" : "GET" ,
    "success" : function (data) {
      var disk = data.response;

      for (var i = 0; i < disk.length; i++) {

       var disk_corrente = disk[i];

       disco.titolo = disk_corrente.title;
       disco.img = disk_corrente.poster;
       disco.autore = disk_corrente.author;
       disco.anno = disk_corrente.year;
       disco.genere = disk_corrente.genre;

       var html = template(disco);
       container.append(html);

      }
    },
    "error" : function () {
      alert("IL SITO NON RISPONDE");
    }
  });
});
