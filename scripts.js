//To display a pop up when the location link is chosen

$("document").ready(function () {
    // var x = 2;
    // if (x == 2)
    //     $("div.shape").css({ "background-color": "rgba(100, 141, 21, 0.3)" });
    $(".shape").click(function () {
        $("#displayDiv").slideToggle(200);
    });
});


var modal = document.getElementById("simpleModal");
var modalBtn = document.getElementById("about");
var closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
//window.addEventListener('click', clickOutside);
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}
//function to close modal if outside click
// function clickOutside(e) {
//     if (e.target == modal)
//         modal.style.display = 'none';
// }

//To load map
var map, marker;

function display_kmlmap() {
    // Map Options and a place to put them on the web page
    var map_options = {
        zoom: 13,
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
            'styled_map'],
        heading: 90,
        tilt: 45,
        center: { lat: 17.401048, lng: 78.444095 },

    };

    var styledMapType = new google.maps.StyledMapType(
        [
            { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#c9b2a6' }]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#dcd2be' }]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#ae9e90' }]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#93817c' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{ color: '#a5b076' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#447530' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#f5f1e6' }]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{ color: '#fdfcf8' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#f8c967' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#e9bc62' }]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{ color: '#e98d58' }]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#db8555' }]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#806b63' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#8f7d77' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#ebe3cd' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{ color: '#dfd2ae' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{ color: '#b9d3c2' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#92998d' }]
            }
        ],
        { name: 'Styled Map' });
    map = new google.maps.Map(document.getElementById("map_canvas"), map_options);
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    //KML file uploaded to the github whose URL is needed to set here

    // var kmlUrl = 'https://raw.githubusercontent.com/nehachoutapelly/kmlrep/master/kml.kml';
    // var kmlOptions = { map: map }

    // var kmlLayer = new google.maps.KmlLayer(kmlUrl, kmlOptions);
    // var myLatLng = [[17.415061, 78.464829],
    // [17.411595, 78.462041],
    // [17.408377, 78.468265],
    // [17.391636, 78.440065],
    // [17.370234, 78.44731],
    // [17.4360955, 78.469752999],
    // [17.425061, 78.464829],
    // [17.384561, 78.438749],
    // [17.378546, 78.4187459],
    // [17.3671245, 78.4025487],
    // [17.4098657, 78.464829],
    // [17.4287545, 78.425871],
    // [17.3387461, 78.68745],
    // [17.3253261, 78.444879]
    // ];//{ lat: 17.415061,  78.464829 };

    var myLatLng = [
        [17.401048, 78.444095],
        [17.366710, 78.444901],
        [17.408663, 78.394638],
        [17.405311, 78.399407],
        [17.432227, 78.444254],
        [17.413717, 78.400596],
        [17.388781, 78.401306],
        [17.430476, 78.447825],
        [17.408880, 78.405114],
        [17.392552, 78.407217],
        [17.359648, 78.449871],
        [17.389537, 78.410147],
        [17.408195, 78.412829],
        [17.360481, 78.450085],
        [17.410028, 78.414910],
        [17.401323, 78.450761]
    ];

    //     var secretMessages = ['This', 'is', 'the', 'secret', 'message'];

    //     // Add 5 markers to map at random locations.
    //     // For each of these markers, give them a title with their index, and when
    //     // they are clicked they should open an infowindow with text from a secret
    //     // message.
    //     var secretMessages = ['This', 'is', 'the', 'secret', 'message'];
    //     var lngSpan = bounds.east - bounds.west;
    //     var latSpan = bounds.north - bounds.south;
    //     for (var i = 0; i < secretMessages.length; ++i) {
    //         var marker = new google.maps.Marker({
    //             position: {
    //                 lat: bounds.south + latSpan * Math.random(),
    //                 lng: bounds.west + lngSpan * Math.random()
    //             },
    //             map: map
    //         });
    //         attachSecretMessage(marker, secretMessages[i]);
    //     }
    // }
    //Placing a marker on top the all the locations
    for (i = 0; i < myLatLng.length; i++) {
        marker = new google.maps.Marker(
            {
                position: new google.maps.LatLng(myLatLng[i][0], myLatLng[i][1]),
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
            });
        // The following to display the required information

        var contentString = `<div id="content">
                            <table border=1>
                                <tr>
                                    <td style="padding:3px;">Lattitude</td>
                                    <td style="padding:3px;">${myLatLng[i][0]}</td>
                                </tr>
                                <tr>
                                    <td style="padding:3px;">Lattitude</td>
                                    <td style="padding:3px;">${myLatLng[i][1]}</td>
                                </tr>
                            </table>
                            </div>`;
        attachSecretMessage(marker, contentString);
    }
}

// Attaches an info window to a marker with the provided message. When the
// marker is clicked, the info window will open with the secret message.
function attachSecretMessage(marker, contentString) {
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', function () {
        infowindow.open(marker.get('map'), marker);
    });
}