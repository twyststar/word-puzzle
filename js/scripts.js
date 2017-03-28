$(function(){
  $('#formOne').submit(function(event) {
    event.preventDefault();

    var user1 = $('input#word').val();

    for (var index = 0; index <= user1.length; index++) {
      var user1 = user1.replace("a","-");
      var user1 = user1.replace("e","-");
      var user1 = user1.replace("i","-");
      var user1 = user1.replace("o","-");
      var user1 = user1.replace("u","-");
      var user1 = user1.replace("y","-");
    }
    alert(user1);


  });
});


//reg ex
// var user1 = user1.replace(/[a|e|i|o|u]/g,"-");
