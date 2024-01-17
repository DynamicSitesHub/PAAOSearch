var size = 0;
var placement = 'point';
function categories_IOU_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'CITIZENS ELECTRIC CO - (PA)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(74,202,115,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'DUQUESNE LIGHT CO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(224,84,18,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'METROPOLITAN EDISON CO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(71,101,233,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PECO ENERGY CO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,175,63,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PENNSYLVANIA ELECTRIC CO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(120,231,211,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PENNSYLVANIA POWER CO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(208,191,114,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PIKE COUNTY LIGHT & POWER CO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(145,222,128,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PPL ELECTRIC UTILITIES CORP':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(208,79,237,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'UGI UTILITIES, INC':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,26,163,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'WELLSBOROUGH ELECTRIC CO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(221,13,51,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'WEST PENN POWER COMPANY':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(45,162,221,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_IOU_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAME");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_IOU_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
