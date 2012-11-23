define( ['config', 'util'], function ( config, util ) {
    function display( elem ){
        elem.textContent = util.formatDate( new Date(), config.format );
    }

    function render( elem ) {
        display( elem );
        setInterval( function () {
            display( elem );
        }, 1000 );
    }

    return {
        render : render
    };
});