var ctx = document.getElementById("myChart").getContext('2d');
var ctx2 = document.getElementById("myChart2").getContext('2d');


var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Amzius',
            data: [],
            borderColor: [],
            borderWidth: 1,
            backgroundColor:[],
            },{
            label: 'Atlyginimas',
            data: [],
            borderWidth: 1,
            backgroundColor: [],

            // Changes this dataset to become a line
            type: 'bar'
        }]
    }
});
var myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['rr','tt','yy'],
        datasets: [{
            label: 'Amzius',
            data: [1,2,3,],
            borderColor: [],
            borderWidth: 1,
            backgroundColor:['red', 'blue', 'green'],
        }]
    }
});

function chartData() {
    myChart.data.labels.push(document.getElementById('name').value);
    myChart.data.datasets[0].data.push(document.getElementById('age').value);
    myChart.data.datasets[1].data.push(document.getElementById('sel').value);
    myChart.data.datasets[0].backgroundColor.push(document.getElementById('spalva').value);

    myChart.update();
}

function c_Data() {
    myChart.data.labels.pop();
    myChart.data.datasets[0].data.pop();
    myChart.data.datasets[1].data.pop();

    myChart.update();
}

function chartClier() {
    myChart.data.labels = [];
    myChart.data.datasets[0].data = [];
    myChart.data.datasets[1].data = [];


    myChart.update();
}
