/**
 * Created by bryan on 30/04/2016.
 */

function initCityDetailsModel(cityName){
    $("#cityDetailModalHeader").html(cityName);

    initCityDetailTopContent(cityName);
    initCityDetailLeftSpider(cityName);
}

function initCityDetailTopContent(cityName){

    $(".cityDetailList").click(function(){
        $(".cityDetailList").removeClass("active");
        $(this).addClass("active");
        if($(this).index() == 0){
            initCityDetailRightPie(topJobClassification, cityName, "Top 5 job variety and volume");
        }else if($(this).index() == 1){
            initCityDetailRightPie(topJobClassificationClicks, cityName, "Top 5 job variety and popularity");
        }
    });

    $(".cityDetailList:first").trigger("click");
}

function initCityDetailLeftSpider(cityName){
    var cityDetailRightSpiderHTML = "";

    var spiderCategory = ["Job Variety", "Job Popularity", "Job Volume"];

    var dataArr = [];

    dataArr.push(jobAttributeMark(cityName,'variety'));
    dataArr.push(jobAttributeMark(cityName,'popularity'));
    dataArr.push(jobAttributeMark(cityName,'volume'));

    var seriesData = [{
        name: cityName,
        data: dataArr,
        pointPlacement: 'on'
    }];
    createSpider(cityName, spiderCategory, seriesData);

}

function initCityDetailRightPie(cityDataSouce, cityName, chartTitle){
    var cityDetailData = cityDataSouce[cityName];
    var totalNum = parseInt(cityDetailData["Total"]);
    var dataArr = [];

    for(var attr in cityDetailData){
        if(attr == "Total"){
            continue;
        }
        var num = parseInt(cityDetailData[attr]);
        dataArr.push({
            name: attr,
            y: num,
            showVal: num + "/" + totalNum
        });
    }
    var pieData = [{
        name: 'Job number/total',
        colorByPoint: true,
        data: dataArr
    }];

    createPieChart(cityName, chartTitle, pieData);
}

function createSpider(cityName, spiderCategory, seriesData){
    $('#cityDetailModalSpider').highcharts({
        chart: {
            polar: true,
            type: 'line',
            marginTop: 80,
            width: 400
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        title: {
            align: 'center',
                text: cityName + ' Jobs Data'
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
            enabled: false,
                align: 'center',
                verticalAlign: 'top',
                y: 30,
                x: 150,
                layout: 'vertical'
        },

        series: seriesData

    });

}

function createPieChart(cityName, chartTitle, pieData){
    $('#cityDetailModalDonut').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            width: 400
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        title: {
            text: cityName + " " + chartTitle
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.showVal}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: pieData
    });
}