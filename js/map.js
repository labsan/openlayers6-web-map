// Step 2
window.onload = init;

// Step 1
function init() {
    const map = new ol.Map({
        view: new ol.View({
            center: [12541424.19473917, -832509.6516970707],
            maxZoom: 16,
            zoom: 11.5,
            minZoom: 8
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'js-map'
    });

    // For Coordinate Checked
    map.on('click', e => {
        console.log(e.coordinate);
    })

    // Initialize Basemap OSM Standard
    const OSM_standard = new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: true,
        title: 'OSMStandard'
    });

    // Initialize Basemap OSM Humatarian
    const OSM_humanitarian = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        }),
        visible: false,
        title: 'OSMHumanitarian'
    });

    // Initialize Basemap Stamen Terrain
    const stamen_terrain = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
            attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        }),
        visible: false,
        title: 'StamenTerrain'
    });

    // Initialize Basemap Stamen Watercolor
    const stamen_watercolor = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
            attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
        }),
        visible: false,
        title: 'StamenWatercolor'
    });

    // Initialize Basemap Stamen Watercolor
    const stamen_toner = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
        }),
        visible: false,
        title: 'StamenToner'
    });
    

    // Layer Group 
    const baseLayerGroup = new ol.layer.Group({
        layers: [
            OSM_standard, OSM_humanitarian, stamen_terrain, stamen_watercolor, stamen_toner
        ]
    });

    // Show Layer Group
    map.addLayer(baseLayerGroup);

    // Layer Switcher Logic for Basemaps
    const baseLayerElements = document.querySelectorAll('.sidebar > form > input[type=radio]');

    for (let baseLayerElement of baseLayerElements) {
        baseLayerElement.addEventListener('change', function() {
            let baseLayerElementValue = this.value;

            baseLayerGroup.getLayers().forEach((element, index, array) => {
                let baseLayerTitle = element.get('title');

                element.setVisible(baseLayerTitle === baseLayerElementValue);

                // Console for Check Logic Layer Switcher
                // console.log(baseLayerTitle === baseLayerElementValue);
                // console.log(`
                //     baseLayerTitle: ${baseLayerTitle},
                //     baseLayerElementValueSelect: ${baseLayerElementValue}
                // `);
                console.log(element.get('title'), element.get('visible'));
            });
        })
        
    }

}