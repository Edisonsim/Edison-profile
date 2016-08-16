(function($) {

  // 2. changing to jquery format, notice we don't define the XHR class anymore

  var $bio = $('#bio');
  var $loader = $('.loader');

  var server_url = 'https://shielded-woodland-72080.herokuapp.com/edison';

  $.ajax({
    url: server_url,
    method: "Get",
    dataType: 'json',
    // show the loader before making the request
    beforeSend: function() {
      $loader.show();
    }
  }).done(successFunction)
    .fail(failFunction)
    .always(alwaysFunction);

    function successFunction(data) {
    $bio.css('border', '1px solid #e8e8e8');
    // if data exists
    console.log(data);

    $bio.text(data.name);
  }

  function failFunction(request, textStatus, errorThrown){
    $bio.text('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
  }

  // always function
  function alwaysFunction() {
    // hide the loader
    $loader.hide();
    // $body.css('overflow', 'hidden');
  }

})(jQuery);
