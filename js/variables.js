// Adding variables for checkboxes 
var informant = L.geoJson(informant, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#000066',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b>
                <br>County: ${props.County}<br>
            `
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000066'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000066'
            });
        });
    }
})

var age = L.geoJson(age, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#FFA500',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b> (<b>${props.County}</b>)
                <br>Age: ${props.Age}<br>
                <br>Gender: ${props.Sex}</br>
            `
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FFA500'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FFA500'
            });
        });
    }
})

var education_level = L.geoJson(education_level, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#0D98BA',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b> (<b>${props.County}</b>)
                <br>Education: ${props.Education}<br> (<b>${props.Sex}</b>)
            `
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#0D98BA'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#0D98BA'
            });
        });
    }
})

var occupation = L.geoJson(occupation, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#198754',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b> (<b>${props.County}</b>)
                <br>Occupation: ${props.Occupation}<br> (<b>${props.Sex}</b>)
            `
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#198754'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#198754'
            });
        });
    }
})

var ethnicity = L.geoJson(ethnicity, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#000000',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b> (<b>${props.County}</b>)
                <br>Ethnicity: ${props.Ethnicity}<br> (<b>${props.Sex}</b>)
            `
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000000'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#000000'
            });
        });
    }
})