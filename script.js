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
            type: 'bar'
        }]
    }
});
var myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: [],
        datasets: [{
            label: [],
            data: [],
            borderColor: [],
            borderWidth: 1,
            backgroundColor:[],
        }]
    }
});

function chartData() {
    myChart.data.labels.push(document.getElementById('name').value);
    myChart.data.datasets[0].data.push(document.getElementById('age').value);
    myChart.data.datasets[1].data.push(document.getElementById('sel').value);
    myChart.data.datasets[0].backgroundColor.push(document.getElementById('spalva').value);

    myChart.data.datasets[0].backgroundColor.push(document.getElementById('spalva').value);
    myChart2.data.labels.push(document.getElementById('name').value);
    myChart2.data.datasets[0].data.push(document.getElementById('sel').value);
    myChart2.data.datasets[0].backgroundColor.push(
        function rib( seler = document.getElementById('sel').value) {

    if(seler >= 380){
        value = 'green';
    }else{
        value ='red';
    };


);


    myChart.update();
    myChart2.update();
}

function c_Data() {
    myChart.data.labels.pop();
    myChart.data.datasets[0].data.pop();
    myChart.data.datasets[1].data.pop();
    myChart2.data.labels.pop();
    myChart2.data.datasets[0].data.pop();

    myChart.update();
    myChart2.update();
}

function chartClier() {
    myChart.data.labels = [];
    myChart.data.datasets[0].data = [];
    myChart.data.datasets[1].data = [];
    myChart2.data.labels = [];
    myChart2.data.datasets[0].data = [];


    myChart.update();
    myChart2.update();}
