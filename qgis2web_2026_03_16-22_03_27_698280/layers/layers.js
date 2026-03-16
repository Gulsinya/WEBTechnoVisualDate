var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'Яндекс Спутник',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.927.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                popuplayertitle: 'lab1',
                interactive: false,
                title: '<img src="styles/legend/lab1_2.png" /> lab1'
            });
var format_building_house_3 = new ol.format.GeoJSON();
var features_building_house_3 = format_building_house_3.readFeatures(json_building_house_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_3.addFeatures(features_building_house_3);
var lyr_building_house_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_3, 
                style: style_building_house_3,
                popuplayertitle: 'building_house',
                interactive: false,
                title: '<img src="styles/legend/building_house_3.png" /> building_house'
            });
var format_highway_bus_stop_4 = new ol.format.GeoJSON();
var features_highway_bus_stop_4 = format_highway_bus_stop_4.readFeatures(json_highway_bus_stop_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_bus_stop_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_bus_stop_4.addFeatures(features_highway_bus_stop_4);
var lyr_highway_bus_stop_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_bus_stop_4, 
                style: style_highway_bus_stop_4,
                popuplayertitle: 'highway_bus_stop',
                interactive: false,
                title: '<img src="styles/legend/highway_bus_stop_4.png" /> highway_bus_stop'
            });
var format_highway_path_5 = new ol.format.GeoJSON();
var features_highway_path_5 = format_highway_path_5.readFeatures(json_highway_path_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_path_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_path_5.addFeatures(features_highway_path_5);
var lyr_highway_path_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_path_5, 
                style: style_highway_path_5,
                popuplayertitle: 'highway_path',
                interactive: false,
                title: '<img src="styles/legend/highway_path_5.png" /> highway_path'
            });
var format_highway_path_6 = new ol.format.GeoJSON();
var features_highway_path_6 = format_highway_path_6.readFeatures(json_highway_path_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_path_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_path_6.addFeatures(features_highway_path_6);
var lyr_highway_path_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_path_6, 
                style: style_highway_path_6,
                popuplayertitle: 'highway_path',
                interactive: false,
                title: '<img src="styles/legend/highway_path_6.png" /> highway_path'
            });
var format_highway_steps_7 = new ol.format.GeoJSON();
var features_highway_steps_7 = format_highway_steps_7.readFeatures(json_highway_steps_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_steps_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_steps_7.addFeatures(features_highway_steps_7);
var lyr_highway_steps_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_steps_7, 
                style: style_highway_steps_7,
                popuplayertitle: 'highway_steps',
                interactive: false,
                title: '<img src="styles/legend/highway_steps_7.png" /> highway_steps'
            });

lyr__0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_building_house_3.setVisible(true);lyr_highway_bus_stop_4.setVisible(true);lyr_highway_path_5.setVisible(true);lyr_highway_path_6.setVisible(true);lyr_highway_steps_7.setVisible(true);
var layersList = [lyr__0,lyr_OSMStandard_1,lyr_lab1_2,lyr_building_house_3,lyr_highway_bus_stop_4,lyr_highway_path_5,lyr_highway_path_6,lyr_highway_steps_7];
lyr_lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_house_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway_bus_stop_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'bench': 'bench', 'public_transport': 'public_transport', 'bus': 'bus', 'name:ru': 'name:ru', 'name': 'name', });
lyr_highway_path_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ford': 'ford', 'name': 'name', });
lyr_highway_path_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', 'name': 'name', 'description': 'description', 'foot': 'foot', });
lyr_highway_steps_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', });
lyr_lab1_2.set('fieldImages', {'fid': '', 'name': 'TextEdit', });
lyr_building_house_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': 'TextEdit', });
lyr_highway_bus_stop_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'bench': '', 'public_transport': '', 'bus': '', 'name:ru': '', 'name': '', });
lyr_highway_path_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'ford': '', 'name': '', });
lyr_highway_path_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'surface': '', 'name': '', 'description': '', 'foot': '', });
lyr_highway_steps_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'ramp': '', 'incline': '', 'handrail': '', 'foot': '', });
lyr_lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_house_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway_bus_stop_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'bench': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'name:ru': 'no label', 'name': 'no label', });
lyr_highway_path_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ford': 'no label', 'name': 'no label', });
lyr_highway_path_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', 'name': 'no label', 'description': 'no label', 'foot': 'no label', });
lyr_highway_steps_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', });
lyr_highway_steps_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});