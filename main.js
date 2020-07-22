//voglio fare in modo che cliccando sull'hamburger si apra una pagina web
//che venga richiusa solo cliccando sul tasto x

$('.fa-bars').click(function(){
  $('.hamburger-menu').show();
})

$('.fa-times').click(function(){
  $('.hamburger-menu').hide();
})
