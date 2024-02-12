var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cdmx_4326_1 = new ol.format.GeoJSON();
var features_cdmx_4326_1 = format_cdmx_4326_1.readFeatures(json_cdmx_4326_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cdmx_4326_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cdmx_4326_1.addFeatures(features_cdmx_4326_1);
var lyr_cdmx_4326_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cdmx_4326_1, 
                style: style_cdmx_4326_1,
                interactive: true,
    title: 'cdmx_4326<br />\
    <img src="styles/legend/cdmx_4326_1_0.png" /> <br />\
    <img src="styles/legend/cdmx_4326_1_1.png" /> Ãlvaro ObregÃ³n<br />\
    <img src="styles/legend/cdmx_4326_1_2.png" /> Azcapotzalco<br />\
    <img src="styles/legend/cdmx_4326_1_3.png" /> Benito JuÃ¡rez<br />\
    <img src="styles/legend/cdmx_4326_1_4.png" /> CoyoacÃ¡n<br />\
    <img src="styles/legend/cdmx_4326_1_5.png" /> Cuajimalpa de Morelos<br />\
    <img src="styles/legend/cdmx_4326_1_6.png" /> CuauhtÃ©moc<br />\
    <img src="styles/legend/cdmx_4326_1_7.png" /> Gustavo A. Madero<br />\
    <img src="styles/legend/cdmx_4326_1_8.png" /> Iztacalco<br />\
    <img src="styles/legend/cdmx_4326_1_9.png" /> Iztapalapa<br />\
    <img src="styles/legend/cdmx_4326_1_10.png" /> La Magdalena Contreras<br />\
    <img src="styles/legend/cdmx_4326_1_11.png" /> Miguel Hidalgo<br />\
    <img src="styles/legend/cdmx_4326_1_12.png" /> Milpa Alta<br />\
    <img src="styles/legend/cdmx_4326_1_13.png" /> TlÃ¡huac<br />\
    <img src="styles/legend/cdmx_4326_1_14.png" /> Tlalpan<br />\
    <img src="styles/legend/cdmx_4326_1_15.png" /> Venustiano Carranza<br />\
    <img src="styles/legend/cdmx_4326_1_16.png" /> Xochimilco<br />'
        });
var format_estaciones_del_metro_2 = new ol.format.GeoJSON();
var features_estaciones_del_metro_2 = format_estaciones_del_metro_2.readFeatures(json_estaciones_del_metro_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estaciones_del_metro_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estaciones_del_metro_2.addFeatures(features_estaciones_del_metro_2);
var lyr_estaciones_del_metro_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estaciones_del_metro_2, 
                style: style_estaciones_del_metro_2,
                interactive: true,
    title: 'estaciones_del_metro<br />\
    <img src="styles/legend/estaciones_del_metro_2_0.png" /> Linea 1<br />\
    <img src="styles/legend/estaciones_del_metro_2_1.png" /> Linea 12<br />\
    <img src="styles/legend/estaciones_del_metro_2_2.png" /> Linea 2<br />\
    <img src="styles/legend/estaciones_del_metro_2_3.png" /> Linea 3<br />\
    <img src="styles/legend/estaciones_del_metro_2_4.png" /> Linea 4<br />\
    <img src="styles/legend/estaciones_del_metro_2_5.png" /> Linea 5<br />\
    <img src="styles/legend/estaciones_del_metro_2_6.png" /> Linea 6<br />\
    <img src="styles/legend/estaciones_del_metro_2_7.png" /> Linea 7<br />\
    <img src="styles/legend/estaciones_del_metro_2_8.png" /> Linea 8<br />\
    <img src="styles/legend/estaciones_del_metro_2_9.png" /> Linea 9<br />\
    <img src="styles/legend/estaciones_del_metro_2_10.png" /> Linea A<br />\
    <img src="styles/legend/estaciones_del_metro_2_11.png" /> Linea B<br />\
    <img src="styles/legend/estaciones_del_metro_2_12.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_cdmx_4326_1.setVisible(true);lyr_estaciones_del_metro_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_cdmx_4326_1,lyr_estaciones_del_metro_2];
lyr_cdmx_4326_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_estaciones_del_metro_2.set('fieldAliases', {'_id': '_id', 'id': 'id', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'name': 'name', 'descrpt': 'descrpt', 'lon': 'lon', 'lat': 'lat', 'line_st': 'line_st', });
lyr_cdmx_4326_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_estaciones_del_metro_2.set('fieldImages', {'_id': 'Range', 'id': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'name': 'TextEdit', 'descrpt': 'TextEdit', 'lon': 'TextEdit', 'lat': 'TextEdit', 'line_st': 'TextEdit', });
lyr_cdmx_4326_1.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'header label', });
lyr_estaciones_del_metro_2.set('fieldLabels', {'_id': 'no label', 'id': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'name': 'header label', 'descrpt': 'header label', 'lon': 'no label', 'lat': 'no label', 'line_st': 'header label', });
lyr_estaciones_del_metro_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});