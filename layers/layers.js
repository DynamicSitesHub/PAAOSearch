var wms_layers = [];


        var lyr_ESRIGray_0 = new ol.layer.Tile({
            'title': 'ESRI Gray',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleImagery_2 = new ol.layer.Tile({
            'title': 'Google Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_IOU_4 = new ol.format.GeoJSON();
var features_IOU_4 = format_IOU_4.readFeatures(json_IOU_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IOU_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IOU_4.addFeatures(features_IOU_4);
var lyr_IOU_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IOU_4, 
                style: style_IOU_4,
                interactive: true,
    title: 'IOU<br />\
    <img src="styles/legend/IOU_4_0.png" /> CITIZENS ELECTRIC CO - (PA)<br />\
    <img src="styles/legend/IOU_4_1.png" /> DUQUESNE LIGHT CO<br />\
    <img src="styles/legend/IOU_4_2.png" /> METROPOLITAN EDISON CO<br />\
    <img src="styles/legend/IOU_4_3.png" /> PECO ENERGY CO<br />\
    <img src="styles/legend/IOU_4_4.png" /> PENNSYLVANIA ELECTRIC CO<br />\
    <img src="styles/legend/IOU_4_5.png" /> PENNSYLVANIA POWER CO<br />\
    <img src="styles/legend/IOU_4_6.png" /> PIKE COUNTY LIGHT & POWER CO<br />\
    <img src="styles/legend/IOU_4_7.png" /> PPL ELECTRIC UTILITIES CORP<br />\
    <img src="styles/legend/IOU_4_8.png" /> UGI UTILITIES, INC<br />\
    <img src="styles/legend/IOU_4_9.png" /> WELLSBOROUGH ELECTRIC CO<br />\
    <img src="styles/legend/IOU_4_10.png" /> WEST PENN POWER COMPANY<br />'
        });
var format_Cooperative_5 = new ol.format.GeoJSON();
var features_Cooperative_5 = format_Cooperative_5.readFeatures(json_Cooperative_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cooperative_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cooperative_5.addFeatures(features_Cooperative_5);
var lyr_Cooperative_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cooperative_5, 
                style: style_Cooperative_5,
                interactive: true,
                title: '<img src="styles/legend/Cooperative_5.png" /> Cooperative'
            });
var format_Municipal_6 = new ol.format.GeoJSON();
var features_Municipal_6 = format_Municipal_6.readFeatures(json_Municipal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipal_6.addFeatures(features_Municipal_6);
var lyr_Municipal_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipal_6, 
                style: style_Municipal_6,
                interactive: true,
                title: '<img src="styles/legend/Municipal_6.png" /> Municipal'
            });
var format_NotPreviouslySearched_7 = new ol.format.GeoJSON();
var features_NotPreviouslySearched_7 = format_NotPreviouslySearched_7.readFeatures(json_NotPreviouslySearched_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NotPreviouslySearched_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NotPreviouslySearched_7.addFeatures(features_NotPreviouslySearched_7);
var lyr_NotPreviouslySearched_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NotPreviouslySearched_7, 
                style: style_NotPreviouslySearched_7,
                interactive: true,
                title: '<img src="styles/legend/NotPreviouslySearched_7.png" /> Not Previously Searched'
            });
var format_PreviouslySearched_8 = new ol.format.GeoJSON();
var features_PreviouslySearched_8 = format_PreviouslySearched_8.readFeatures(json_PreviouslySearched_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PreviouslySearched_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PreviouslySearched_8.addFeatures(features_PreviouslySearched_8);
var lyr_PreviouslySearched_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PreviouslySearched_8, 
                style: style_PreviouslySearched_8,
                interactive: true,
                title: '<img src="styles/legend/PreviouslySearched_8.png" /> Previously Searched'
            });
var format_NotPreviouslySearched_9 = new ol.format.GeoJSON();
var features_NotPreviouslySearched_9 = format_NotPreviouslySearched_9.readFeatures(json_NotPreviouslySearched_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NotPreviouslySearched_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NotPreviouslySearched_9.addFeatures(features_NotPreviouslySearched_9);
var lyr_NotPreviouslySearched_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NotPreviouslySearched_9, 
                style: style_NotPreviouslySearched_9,
                interactive: true,
                title: '<img src="styles/legend/NotPreviouslySearched_9.png" /> Not Previously Searched'
            });
var format_PreviouslySearched_10 = new ol.format.GeoJSON();
var features_PreviouslySearched_10 = format_PreviouslySearched_10.readFeatures(json_PreviouslySearched_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PreviouslySearched_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PreviouslySearched_10.addFeatures(features_PreviouslySearched_10);
var lyr_PreviouslySearched_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PreviouslySearched_10, 
                style: style_PreviouslySearched_10,
                interactive: true,
                title: '<img src="styles/legend/PreviouslySearched_10.png" /> Previously Searched'
            });
var format_TransmissionLines_11 = new ol.format.GeoJSON();
var features_TransmissionLines_11 = format_TransmissionLines_11.readFeatures(json_TransmissionLines_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransmissionLines_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransmissionLines_11.addFeatures(features_TransmissionLines_11);
var lyr_TransmissionLines_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TransmissionLines_11, 
                style: style_TransmissionLines_11,
                interactive: true,
    title: 'Transmission Lines<br />\
    <img src="styles/legend/TransmissionLines_11_0.png" /> -999999 - 69<br />\
    <img src="styles/legend/TransmissionLines_11_1.png" /> 69 - 69<br />\
    <img src="styles/legend/TransmissionLines_11_2.png" /> 69 - 115<br />\
    <img src="styles/legend/TransmissionLines_11_3.png" /> 115 - 138<br />\
    <img src="styles/legend/TransmissionLines_11_4.png" /> 138 - 1000<br />'
        });
var format_Substations_12 = new ol.format.GeoJSON();
var features_Substations_12 = format_Substations_12.readFeatures(json_Substations_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Substations_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Substations_12.addFeatures(features_Substations_12);
var lyr_Substations_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Substations_12, 
                style: style_Substations_12,
                interactive: true,
                title: '<img src="styles/legend/Substations_12.png" /> Substations'
            });
var format_PALeadslastupdated11624_13 = new ol.format.GeoJSON();
var features_PALeadslastupdated11624_13 = format_PALeadslastupdated11624_13.readFeatures(json_PALeadslastupdated11624_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PALeadslastupdated11624_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PALeadslastupdated11624_13.addFeatures(features_PALeadslastupdated11624_13);
var lyr_PALeadslastupdated11624_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PALeadslastupdated11624_13, 
                style: style_PALeadslastupdated11624_13,
                interactive: true,
                title: '<img src="styles/legend/PALeadslastupdated11624_13.png" /> PA Leads (last updated 11/04/24)'
            });
var format_PAOpportunitieslastupdated11624_14 = new ol.format.GeoJSON();
var features_PAOpportunitieslastupdated11624_14 = format_PAOpportunitieslastupdated11624_14.readFeatures(json_PAOpportunitieslastupdated11624_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAOpportunitieslastupdated11624_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAOpportunitieslastupdated11624_14.addFeatures(features_PAOpportunitieslastupdated11624_14);
var lyr_PAOpportunitieslastupdated11624_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAOpportunitieslastupdated11624_14, 
                style: style_PAOpportunitieslastupdated11624_14,
                interactive: true,
                title: '<img src="styles/legend/PAOpportunitieslastupdated11624_14.png" /> PA Opportunities (last updated 11/04/24)'
            });
var format_PennsylvaniaCounties_15 = new ol.format.GeoJSON();
var features_PennsylvaniaCounties_15 = format_PennsylvaniaCounties_15.readFeatures(json_PennsylvaniaCounties_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PennsylvaniaCounties_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PennsylvaniaCounties_15.addFeatures(features_PennsylvaniaCounties_15);
var lyr_PennsylvaniaCounties_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PennsylvaniaCounties_15, 
                style: style_PennsylvaniaCounties_15,
                interactive: true,
                title: '<img src="styles/legend/PennsylvaniaCounties_15.png" /> Pennsylvania Counties'
            });
var format_Pennsylvania_16 = new ol.format.GeoJSON();
var features_Pennsylvania_16 = format_Pennsylvania_16.readFeatures(json_Pennsylvania_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pennsylvania_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pennsylvania_16.addFeatures(features_Pennsylvania_16);
var lyr_Pennsylvania_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pennsylvania_16, 
                style: style_Pennsylvania_16,
                interactive: false,
                title: '<img src="styles/legend/Pennsylvania_16.png" /> Pennsylvania'
            });
var group_Tier1Buffers = new ol.layer.Group({
                                layers: [lyr_NotPreviouslySearched_9,lyr_PreviouslySearched_10,],
                                title: "Tier 1 Buffers"});
var group_Tier2Buffers = new ol.layer.Group({
                                layers: [lyr_NotPreviouslySearched_7,lyr_PreviouslySearched_8,],
                                title: "Tier 2 Buffers"});
var group_Utilities = new ol.layer.Group({
                                layers: [lyr_IOU_4,lyr_Cooperative_5,lyr_Municipal_6,],
                                title: "Utilities"});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_ESRIGray_0,lyr_GoogleTerrain_1,lyr_GoogleImagery_2,lyr_OpenStreetMap_3,],
                                title: "Basemaps"});

lyr_ESRIGray_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_GoogleImagery_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_IOU_4.setVisible(true);lyr_Cooperative_5.setVisible(true);lyr_Municipal_6.setVisible(true);lyr_NotPreviouslySearched_7.setVisible(true);lyr_PreviouslySearched_8.setVisible(true);lyr_NotPreviouslySearched_9.setVisible(true);lyr_PreviouslySearched_10.setVisible(true);lyr_TransmissionLines_11.setVisible(true);lyr_Substations_12.setVisible(true);lyr_PALeadslastupdated11624_13.setVisible(true);lyr_PAOpportunitieslastupdated11624_14.setVisible(true);lyr_PennsylvaniaCounties_15.setVisible(true);lyr_Pennsylvania_16.setVisible(true);
var layersList = [group_Basemaps,group_Utilities,group_Tier2Buffers,group_Tier1Buffers,lyr_TransmissionLines_11,lyr_Substations_12,lyr_PALeadslastupdated11624_13,lyr_PAOpportunitieslastupdated11624_14,lyr_PennsylvaniaCounties_15,lyr_Pennsylvania_16];
lyr_IOU_4.set('fieldAliases', {'NAME': 'NAME', 'STATE': 'STATE', 'TYPE': 'TYPE', 'NAICS_DESC': 'NAICS_DESC', 'CNTRL_AREA': 'CNTRL_AREA', 'PLAN_AREA': 'PLAN_AREA', 'HOLDING_CO': 'HOLDING_CO', });
lyr_Cooperative_5.set('fieldAliases', {'NAME': 'NAME', 'STATE': 'STATE', 'TYPE': 'TYPE', 'NAICS_DESC': 'NAICS_DESC', 'CNTRL_AREA': 'CNTRL_AREA', 'PLAN_AREA': 'PLAN_AREA', 'HOLDING_CO': 'HOLDING_CO', });
lyr_Municipal_6.set('fieldAliases', {'NAME': 'NAME', 'STATE': 'STATE', 'TYPE': 'TYPE', 'NAICS_DESC': 'NAICS_DESC', 'CNTRL_AREA': 'CNTRL_AREA', 'PLAN_AREA': 'PLAN_AREA', 'HOLDING_CO': 'HOLDING_CO', });
lyr_NotPreviouslySearched_7.set('fieldAliases', {'name': 'name', 'city': 'city', 'zip': 'zip', 'Prev T2': 'Prev T2', 'Prev T1': 'Prev T1', 'Utility': 'Utility', 'county': 'county', });
lyr_PreviouslySearched_8.set('fieldAliases', {'name': 'name', 'city': 'city', 'zip': 'zip', 'Prev T2': 'Prev T2', 'Prev T1': 'Prev T1', 'Utility': 'Utility', 'county': 'county', });
lyr_NotPreviouslySearched_9.set('fieldAliases', {'name': 'name', 'city': 'city', 'zip': 'zip', 'Prev T2': 'Prev T2', 'Prev T1': 'Prev T1', 'Utility': 'Utility', 'county': 'county', });
lyr_PreviouslySearched_10.set('fieldAliases', {'name': 'name', 'city': 'city', 'zip': 'zip', 'Prev T2': 'Prev T2', 'Prev T1': 'Prev T1', 'Utility': 'Utility', 'county': 'county', });
lyr_TransmissionLines_11.set('fieldAliases', {'OWNER': 'OWNER', 'VOLTAGE': 'VOLTAGE', 'SUB_1': 'SUB_1', 'SUB_2': 'SUB_2', });
lyr_Substations_12.set('fieldAliases', {'name': 'name', 'city': 'city', 'zip': 'zip', 'Prev T2': 'Prev T2', 'Prev T1': 'Prev T1', 'Utility': 'Utility', });
lyr_PALeadslastupdated11624_13.set('fieldAliases', {'Site #': 'Site #', 'Site Tier': 'Site Tier', 'POI Voltage': 'POI Voltage', 'First Name': 'First Name', 'Last Name': 'Last Name', 'Company / Account': 'Company / Account', 'APN/PIN': 'APN/PIN', 'Buildable Area (acres)': 'Buildable Area (acres)', 'Lot Size': 'Lot Size', 'Site Municipal': 'Site Municipal', 'Site County': 'Site County', 'Substation': 'Substation', 'AO Link': 'AO Link', 'AO Project': 'AO Project', 'Site Lat/Long Coordinates (Latitude)': 'Site Lat/Long Coordinates (Latitude)', 'Site Lat/Long Coordinates (Longitude)': 'Site Lat/Long Coordinates (Longitude)', 'Robust ID': 'Robust ID', 'Site Address': 'Site Address', 'Site State': 'Site State', 'Market': 'Market', });
lyr_PAOpportunitieslastupdated11624_14.set('fieldAliases', {'Owner Role': 'Owner Role', 'Opportunity Owner': 'Opportunity Owner', 'Account Name': 'Account Name', 'Stage': 'Stage', 'Lead Source': 'Lead Source', 'Type': 'Type', 'AO Link': 'AO Link', 'APN/PIN': 'APN/PIN', 'Site County': 'Site County', 'Site #': 'Site #', 'Robust ID': 'Robust ID', 'Site Lat/Long Coordinates (Latitude)': 'Site Lat/Long Coordinates (Latitude)', 'Site Lat/Long Coordinates (Longitude)': 'Site Lat/Long Coordinates (Longitude)', 'Site Address': 'Site Address', });
lyr_PennsylvaniaCounties_15.set('fieldAliases', {'NAMELSAD': 'NAMELSAD', });
lyr_Pennsylvania_16.set('fieldAliases', {'STATE': 'STATE', 'NAME': 'NAME', 'FIPS': 'FIPS', 'LON': 'LON', 'LAT': 'LAT', });
lyr_IOU_4.set('fieldImages', {'NAME': 'TextEdit', 'STATE': 'TextEdit', 'TYPE': 'TextEdit', 'NAICS_DESC': 'TextEdit', 'CNTRL_AREA': 'TextEdit', 'PLAN_AREA': 'TextEdit', 'HOLDING_CO': 'TextEdit', });
lyr_Cooperative_5.set('fieldImages', {'NAME': 'TextEdit', 'STATE': 'TextEdit', 'TYPE': 'TextEdit', 'NAICS_DESC': 'TextEdit', 'CNTRL_AREA': 'TextEdit', 'PLAN_AREA': 'TextEdit', 'HOLDING_CO': 'TextEdit', });
lyr_Municipal_6.set('fieldImages', {'NAME': 'TextEdit', 'STATE': 'TextEdit', 'TYPE': 'TextEdit', 'NAICS_DESC': 'TextEdit', 'CNTRL_AREA': 'TextEdit', 'PLAN_AREA': 'TextEdit', 'HOLDING_CO': 'TextEdit', });
lyr_NotPreviouslySearched_7.set('fieldImages', {'name': 'TextEdit', 'city': 'TextEdit', 'zip': 'TextEdit', 'Prev T2': 'TextEdit', 'Prev T1': 'TextEdit', 'Utility': 'TextEdit', 'county': 'TextEdit', });
lyr_PreviouslySearched_8.set('fieldImages', {'name': 'TextEdit', 'city': 'TextEdit', 'zip': 'TextEdit', 'Prev T2': 'TextEdit', 'Prev T1': 'TextEdit', 'Utility': 'TextEdit', 'county': 'TextEdit', });
lyr_NotPreviouslySearched_9.set('fieldImages', {'name': 'TextEdit', 'city': 'TextEdit', 'zip': 'TextEdit', 'Prev T2': 'TextEdit', 'Prev T1': 'TextEdit', 'Utility': 'TextEdit', 'county': 'TextEdit', });
lyr_PreviouslySearched_10.set('fieldImages', {'name': 'TextEdit', 'city': 'TextEdit', 'zip': 'TextEdit', 'Prev T2': 'TextEdit', 'Prev T1': 'TextEdit', 'Utility': 'TextEdit', 'county': 'TextEdit', });
lyr_TransmissionLines_11.set('fieldImages', {'OWNER': 'TextEdit', 'VOLTAGE': 'TextEdit', 'SUB_1': 'TextEdit', 'SUB_2': 'TextEdit', });
lyr_Substations_12.set('fieldImages', {'name': 'TextEdit', 'city': 'TextEdit', 'zip': 'TextEdit', 'Prev T2': '', 'Prev T1': '', 'Utility': '', });
lyr_PALeadslastupdated11624_13.set('fieldImages', {'Site #': 'TextEdit', 'Site Tier': 'TextEdit', 'POI Voltage': 'TextEdit', 'First Name': 'TextEdit', 'Last Name': 'TextEdit', 'Company / Account': 'TextEdit', 'APN/PIN': 'TextEdit', 'Buildable Area (acres)': 'TextEdit', 'Lot Size': 'TextEdit', 'Site Municipal': 'TextEdit', 'Site County': 'TextEdit', 'Substation': 'TextEdit', 'AO Link': 'TextEdit', 'AO Project': 'TextEdit', 'Site Lat/Long Coordinates (Latitude)': 'TextEdit', 'Site Lat/Long Coordinates (Longitude)': 'TextEdit', 'Robust ID': 'TextEdit', 'Site Address': 'TextEdit', 'Site State': 'TextEdit', 'Market': 'TextEdit', });
lyr_PAOpportunitieslastupdated11624_14.set('fieldImages', {'Owner Role': 'TextEdit', 'Opportunity Owner': 'TextEdit', 'Account Name': 'TextEdit', 'Stage': 'TextEdit', 'Lead Source': 'TextEdit', 'Type': 'TextEdit', 'AO Link': 'TextEdit', 'APN/PIN': 'TextEdit', 'Site County': 'TextEdit', 'Site #': 'TextEdit', 'Robust ID': 'TextEdit', 'Site Lat/Long Coordinates (Latitude)': 'TextEdit', 'Site Lat/Long Coordinates (Longitude)': 'TextEdit', 'Site Address': 'TextEdit', });
lyr_PennsylvaniaCounties_15.set('fieldImages', {'NAMELSAD': 'TextEdit', });
lyr_Pennsylvania_16.set('fieldImages', {'STATE': 'TextEdit', 'NAME': 'TextEdit', 'FIPS': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', });
lyr_IOU_4.set('fieldLabels', {});
lyr_Cooperative_5.set('fieldLabels', {});
lyr_Municipal_6.set('fieldLabels', {});
lyr_NotPreviouslySearched_7.set('fieldLabels', {});
lyr_PreviouslySearched_8.set('fieldLabels', {});
lyr_NotPreviouslySearched_9.set('fieldLabels', {});
lyr_PreviouslySearched_10.set('fieldLabels', {});
lyr_TransmissionLines_11.set('fieldLabels', {'OWNER': 'header label', 'VOLTAGE': 'inline label', 'SUB_1': 'inline label', 'SUB_2': 'inline label', });
lyr_Substations_12.set('fieldLabels', {'name': 'no label', 'city': 'no label', 'zip': 'no label', 'Prev T2': 'no label', 'Prev T1': 'no label', 'Utility': 'no label', });
lyr_PALeadslastupdated11624_13.set('fieldLabels', {'Site #': 'header label', 'Site Tier': 'inline label', 'POI Voltage': 'inline label', 'First Name': 'inline label', 'Last Name': 'inline label', 'Company / Account': 'inline label', 'APN/PIN': 'inline label', 'Buildable Area (acres)': 'inline label', 'Lot Size': 'inline label', 'Site Municipal': 'inline label', 'Site County': 'inline label', 'Substation': 'inline label', 'AO Link': 'inline label', 'AO Project': 'inline label', 'Site Lat/Long Coordinates (Latitude)': 'inline label', 'Site Lat/Long Coordinates (Longitude)': 'inline label', 'Robust ID': 'inline label', 'Site Address': 'inline label', 'Site State': 'inline label', 'Market': 'inline label', });
lyr_PAOpportunitieslastupdated11624_14.set('fieldLabels', {'Owner Role': 'inline label', 'Opportunity Owner': 'header label', 'Account Name': 'inline label', 'Stage': 'inline label', 'Lead Source': 'inline label', 'Type': 'inline label', 'AO Link': 'inline label', 'APN/PIN': 'inline label', 'Site County': 'inline label', 'Site #': 'inline label', 'Robust ID': 'inline label', 'Site Lat/Long Coordinates (Latitude)': 'inline label', 'Site Lat/Long Coordinates (Longitude)': 'inline label', 'Site Address': 'inline label', });
lyr_PennsylvaniaCounties_15.set('fieldLabels', {'NAMELSAD': 'header label', });
lyr_Pennsylvania_16.set('fieldLabels', {'STATE': 'no label', 'NAME': 'no label', 'FIPS': 'no label', 'LON': 'no label', 'LAT': 'no label', });
lyr_Pennsylvania_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});