
$(document).ready(function(){

    var cityNames = [];
    var jobVariety = [];
    var jobPopularity = [];
    var jobVolume = [];

    for(var city in cities){
        cityNames.push(city);
        jobVariety.push(parseInt(cities[city].job_variety));
        jobPopularity.push(parseInt(cities[city].job_popularity));
        jobVolume.push(parseInt(cities[city].job_volume));
    }

    var seriesData = [];
    seriesData.push({
        name: 'Job Variety',
        data: jobVariety,
        pointPlacement: 'on'
    });
    seriesData.push({
        name: 'Job Popularity',
        data: jobPopularity,
        pointPlacement: 'on'
    });
    seriesData.push({
        name: 'Job Volume',
        data: jobVolume,
        pointPlacement: 'on'
    });


    $('#spider').highcharts({

        chart: {
            polar: true,
            type: 'line'
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'City Jobs Data',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: cityNames,
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
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'center',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: seriesData

    });



});

