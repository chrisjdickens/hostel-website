
  $('.carousel').carousel({
    interval: 1600
  })

$('#pauser').on('click', function(e) {

  e.preventDefault();
  $('.carousel').carousel('pause')

})
