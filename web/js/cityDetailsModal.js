/**
 * Created by bryan on 30/04/2016.
 */

function initCityDetailsModel(cityName){
    $("#cityDetailModalHeader").html(cityName);

    initCityDetailLeftContent(cityName);
    initCityDetailRightSpider(cityName);
}

function initCityDetailLeftContent(cityName){
    $("#cityDetailVarScore").html(jobAttributeMark(cityName,'variety'));
    $("#cityDetailPopScore").html(jobAttributeMark(cityName,'popularity'));
    $("#cityDetailVolScore").html(jobAttributeMark(cityName,'volume'));

    $(".cityDetailList").click(function(){
        $(".cityDetailList").removeClass("active");
        $(this).addClass("active");
    });
}

function initCityDetailRightSpider(cityName){
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