let canvas = document.querySelector('#bridge-chart') // this will create the bridge chart
let context = canvas.getContext('2d')

let bridgeChart = new bridgeChart(context, {
    type: 'bar',
    data: {
        bridges: ['Verrazao-Narrow Bridge', 'Golden Gate Bridge', 'Mackinac Bridge', 'George Washington Bridge', 'Tacoma Narrows Bridge'],
        datasets: [ {
            label: 'Bridge in Length',
            data: [1298.4, 1280.2, 1158.0, 1067.0, 853.44],
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