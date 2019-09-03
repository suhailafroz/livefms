var payload = [{
    "confirmed": false,
    "cr_used": "4/5",
    "dataFrame": "ASQAAA==",
    "decrypted": true,
    "devaddr": 1639911,
    "device_redundancy": 1,
    "dr_used": "SF12BW125",
    "fcnt": 1,
    "freq": 865572500,
    "id": 1566285858784,
    "port": 2,
    "rssi": -88,
    "session_id": "26bdaa23-fb59-495f-9007-02138a04991e",
    "sf_used": 12,
    "snr": 0,
    "time_on_air_ms": 1319,
    "timestamp": "2019-08-20T07:24:18.784Z",
    "gtw_info": [
        {
            "ant": 0,
            "foff": 0,
            "gtw_id": "000070b3d5078037",
            "rssi": -88,
            "snr": 0
        }
    ]
},
{
    "confirmed": false,
    "cr_used": "4/5",
    "dataFrame": "ASQAAA==",
    "decrypted": true,
    "devaddr": 1639911,
    "device_redundancy": 1,
    "dr_used": "SF12BW125",
    "fcnt": 1,
    "freq": 865572500,
    "id": 1566285858784,
    "port": 2,
    "rssi": -88,
    "session_id": "26bdaa23-fb59-495f-9007-02138a04991e",
    "sf_used": 12,
    "snr": 0,
    "time_on_air_ms": 1319,
    "timestamp": "2019-08-20T07:24:18.784Z",
    "gtw_info": [
        {
            "ant": 0,
            "foff": 0,
            "gtw_id": "000070b3d5078037",
            "rssi": -88,
            "snr": 0
        }
    ]
},
{
    "confirmed": false,
    "cr_used": "4/5",
    "dataFrame": "ASQAAA==",
    "decrypted": true,
    "devaddr": 1639911,
    "device_redundancy": 1,
    "dr_used": "SF12BW125",
    "fcnt": 1,
    "freq": 865572500,
    "id": 1566285858784,
    "port": 2,
    "rssi": -88,
    "session_id": "26bdaa23-fb59-495f-9007-02138a04991e",
    "sf_used": 12,
    "snr": 0,
    "time_on_air_ms": 1319,
    "timestamp": "2019-08-20T07:24:18.784Z",
    "gtw_info": [
        {
            "ant": 0,
            "foff": 0,
            "gtw_id": "000070b3d5078037",
            "rssi": -88,
            "snr": 0
        }
    ]
},
{
    "confirmed": false,
    "cr_used": "4/5",
    "dataFrame": "ASQAAA==",
    "decrypted": true,
    "devaddr": 1639911,
    "device_redundancy": 1,
    "dr_used": "SF12BW125",
    "fcnt": 1,
    "freq": 865572500,
    "id": 1566285858784,
    "port": 2,
    "rssi": -88,
    "session_id": "26bdaa23-fb59-495f-9007-02138a04991e",
    "sf_used": 12,
    "snr": 0,
    "time_on_air_ms": 1319,
    "timestamp": "2019-08-20T07:24:18.784Z",
    "gtw_info": [
        {
            "ant": 0,
            "foff": 0,
            "gtw_id": "000070b3d5078037",
            "rssi": -88,
            "snr": 0
        }
    ]
},
{
    "confirmed": false,
    "cr_used": "4/5",
    "dataFrame": "ASQAAA==",
    "decrypted": true,
    "devaddr": 1639911,
    "device_redundancy": 1,
    "dr_used": "SF12BW125",
    "fcnt": 1,
    "freq": 865572500,
    "id": 1566285858784,
    "port": 2,
    "rssi": -88,
    "session_id": "26bdaa23-fb59-495f-9007-02138a04991e",
    "sf_used": 12,
    "snr": 0,
    "time_on_air_ms": 1319,
    "timestamp": "2019-08-20T07:24:18.784Z",
    "gtw_info": [
        {
            "ant": 0,
            "foff": 0,
            "gtw_id": "000070b3d5078037",
            "rssi": -88,
            "snr": 0
        }
    ]
}];
var labelsArray = new Array();
for (i = 0; i < payload.length; i++) {
    var time = payload[i].timestamp;
    var timePoint = time.split("T")[0] + " " + time.split("T")[1].split("Z")[0];
    labelsArray.push(timePoint);
}
var labelsOnChart = labelsArray;
var ctx = document.getElementById('myLineChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: labelsOnChart,//['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Single Sensor',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 2, 1, 0, 3]
        }]
    },

    // Configuration options go here
    options: {
        backgroundColor: 'red'
    }
});
var ctx = document.getElementById('myBarChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: labelsOnChart, //['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 2, 1, 0, 3]
        }]
    },

    // Configuration options go here
    options: {}
});