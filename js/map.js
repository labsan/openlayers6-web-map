// Step 2
window.onload = init;

// Step 1
function init() {
    const map = new ol.Map({
        target: 'idmap',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([37.41, 8.82]),
            zoom: 4
        })
    });

    map.on('click', e => {
        console.log(e);
    })
}