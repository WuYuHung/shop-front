  $( function() {
    var availableTags = [
      "Man's shoes 1",
      "Man's shoes 2",
      "Man's shoes 3",
      "Man's shoes 4",
      "Man's shoes 5",
      "Woman's shoes 1",
      "Woman's shoes 2",
      "Woman's shoes 3",
      "Woman's shoes 4",
      "Woman's shoes 5",
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
