let largestBridgesInUS = [39.8283, -98.5795] // will have the whole US
let zoomLevel = 5

// creating the map
let map = L.map('bridge-map').setView(largestBridgesInUS, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


let bridgeNames = [] // empty array
let bridgeSpans = [] // empty array

for (let bridgeArray = 0; bridgeNames.length; bridgeArray++) {
    bridgeNames.push(bridgeData[bridgeArray].name)
    bridgeSpans.push(bridgeData[bridgeArray].span)
}


let bridgeData = [
    {
        "name": 'Verrazao-Narrow Bridge',
        cityState: 'New York, NY',
        span: 1298.4,
        location: [40.6066, -74.0447] // array of lat, long
    },  
    {
    name: 'Golden Gate Bridge',
    cityState: 'San Francisco and Marin, CA',
    span: 1280.2,
    location: [37.8199, -122.4783] // array of lat, long
    },  
    {
    name: 'Mackinac Bridge',
    cityState: 'Mackinaw and St Ignace, MI',
    span: 1158.0,
    location: [45.8174, -84.7278] // array of lat, long
    },  
    {
    name: 'George Washington Bridge',
    cityState: 'New York, NY and New Jersey, NJ	',
    span: 1067.0,
    location: [40.8517, -73.9527] // array of lat, long
    },  
    {
    name: 'Tacoma Narrows Bridge',
    cityState: 'Tacoma and Kitsap, WA',
    span: 853.44,
    location: [47.2690, -122.5517] // array of lat, long
    }
]

let bridgeIcon = L.icon({ // this will add the bridge icon to the maps
    iconUrl: 'bdg.png',

    iconSize:     [35, 20], // size of the icon
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    
});


bridgeData.forEach(function(bridgeLocation) { // this will add all of the bridges to each map by using an array of objects
    let bridgeText = `<b>${bridgeLocation.name}</b><br><b>${bridgeLocation.cityState}</b><b>${bridgeLocation.span}</b>`
    L.marker(bridgeLocation.location, {icon: bridgeIcon}).bindPopup(bridgeText).addTo(map)
})


let canvas = document.querySelector('#bridge-chart')
let context = canvas.getContext('2d')

let bridgeChart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ['Verrazao-Narrow Bridge', 'Golden Gate Bridge', 'Mackinac Bridge', 'George Washington Bridge', 'Tacoma Narrows Bridge'],
        datasets: [ {
            label: 'Bridge in Length',
            data: [1298.4, 1280.2, 1158.0, 1067.0, 853.4],
            backgroundColor: ['blue', 'yellow', 'red', 'orange', 'green']
        }]
    },
    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginsAtZero: true
                }
            }]
        }
    }
})
