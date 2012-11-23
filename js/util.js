define( function () {
    function pad2( num ) {
        return ('0' + num).slice( -2 );
    }

    function formatDate( date, formatStr ) {
        return formatStr
            .replace('%Y', date.getFullYear() )
            .replace('%m', pad2( date.getMonth() + 1 ) )
            .replace('%d', pad2( date.getDate() ) )
            .replace('%H', pad2( date.getHours() ) )
            .replace('%M', pad2( date.getMinutes() ) )
            .replace('%S', pad2( date.getSeconds() ) )
        ;
    }

    return {
        formatDate: formatDate
    };
});