require( ['config', 'component'], function ( config, clock) {
    var label = document.getElementById('label');
    label.textContent = config.label;

    var container = document.getElementById('clock');
    clock.render( container );
});
