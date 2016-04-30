
$(document).ready(function(){

    var cityNames = [];
    var jobVariety = [];
    var jobPopularity = [];
    var jobVolume = [];

    var spiderCategory = ["Job Variety", "Job Popularity", "Job Volume"];

    var seriesData = [];
    for(var city in cities){

        var dataArr = [];

        dataArr.push(jobAttributeMark(city,'variety'));
        dataArr.push(jobAttributeMark(city,'popularity'));
        dataArr.push(jobAttributeMark(city,'volume'));

        seriesData.push({
            name: city,
            data: dataArr,
            pointPlacement: 'on'
        });
    }


    $('#spider').highcharts({

        chart: {
            polar: true,
            type: 'line',
            marginTop: 80
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        title: {
            align: 'center',
            text: 'City Jobs Data'
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: spiderCategory,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.2f}</b><br/>'
        },

        legend: {
            align: 'center',
            verticalAlign: 'top',
            y: 30,
            x: 150,
            layout: 'vertical'
        },

        series: seriesData

    });



});

