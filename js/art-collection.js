/* art-collection.js */

 var artCollection = [
      {
        "id":1,
        "title":"Donna",
        "year":"2012",
        "medium":"drawing",
        "imgPath":"img/drawing/donna.M.414x500.png",
        "smallPath":"img/drawing/donna.S.248x300.png",
        "size":"12x14\"",
        "details":[{"detail":"Exhibition of Small Works 2012, Manhattan Borough President's Office"}],
        "aspect":"248x300"
      },
      {
        "id":2,
        "title":"Emma",
        "year":"2012",
        "medium":"drawing",
        "imgPath":"img/drawing/emma.M.516x500.png",
        "smallPath":"img/drawing/emma.S.310x300.png",
        "size":"11x11\"",
        "details":[{"detail":"Merit Scholarship 2013-14, The Art Students League of New York"}],
        "aspect":"310x300"
      },
      {
        "id":3,
        "title":"Maria",
        "year":"2012",
        "medium":"drawing",
        "imgPath":"img/drawing/maria.M.650x500.png",
        "smallPath":"img/drawing/maria.S.390x300.png",
        "size":"11x14\"",
        "details":[{"detail":""}],
        "aspect":"390x300"
      },
      {
        "id":4,
        "title":"Raven",
        "year":"2013",
        "medium":"drawing",
        "imgPath":"img/drawing/raven.M.398x500.png",
        "smallPath":"img/drawing/raven.S.239x300.png",
        "size":"",
        "details":[{"detail":""}],
        "aspect":"239x300"
      }
    ];

    $(function(){
      var template = $("#slideTemplate").html();
      $.each(artCollection, function(index, data) {
        //console.log(template);
        var html = Mustache.to_html(template,data);
        $("#carousel-content-drawing").append(html);
      });
    });