$(document).ready(function() {
    var jqxhr = $.getJSON('https://en.wikipedia.org/w/api.php?' +
        'action=opensearch&format=json&limit=10&profile=classic&callback=?' +
        '&search=' + $("#searchBar").val())
        .done(function(response) {
            console.log(response);
    });

})
