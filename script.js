$(document).ready(function() {

    $('#submit').on('click', function() {

        $('.list').html('');

        if($('#searchBar').val()) {

            //Wikipedia API https://www.mediawiki.org/wiki/API:Main_page
            var jqxhr = $.getJSON('https://en.wikipedia.org/w/api.php?' +
                'action=opensearch&format=json&limit=10&profile=classic&callback=?' +
                '&search=' + $('#searchBar').val())
                .done(function(response) {

                    for (var i = 0; i < response[1].length; i++) {
                        $('.list').append('<dl> <dt> <a href="' + response[3][i] + '" target="_blank">' + response[1][i] + '</a></dt> <dd>' + response[2][i] + '</dd>  </dl>')
                    }
            });
        }

    });

})
