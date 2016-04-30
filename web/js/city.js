
var cities = {
    "Melbourne": {"lat": "-37.8141", "lng": "144.9633", "job_variety": "216", "job_popularity": "6784" , "job_volume":"1126"},
    "Sydney": {"lat": "-33.8675", "lng": "151.207", "job_variety": "221", "job_popularity": "5645" , "job_volume":"1054"},
    "Brisbane": {"lat": "-27.471", "lng": "153.0234", "job_variety": "171", "job_popularity": "5271" , "job_volume":"615"},
    "Perth": {"lat": "-31.953", "lng": "115.8575", "job_variety": "155", "job_popularity": "4863" , "job_volume":"953"},
    "Adelaide": {"lat": "-34.9286", "lng": "138.6", "job_variety": "126", "job_popularity": "3211" , "job_volume":"520"},
    "Canberra": {"lat": "-35.282", "lng": "149.1287", "job_variety": "58", "job_popularity": "594" , "job_volume":"231"},
    "Newcastle": {"lat": "-32.9185", "lng": "151.6071", "job_variety": "68", "job_popularity": "1433" , "job_volume":"412"},
    "Tasmania": {"lat": "-41.365", "lng": "146.6285", "job_variety": "31", "job_popularity": "118" , "job_volume":"15"},
    "Darwin": {"lat": "-12.4628", "lng": "130.8418", "job_variety": "58", "job_popularity": "744" , "job_volume":"226"}
};

$(document).ready(function()
{
     //console.log(jobAttributeMark('Melbourne','popularity'));

    /**
     * @param attrName - variety, popularity or volume
     * @returns {number} -  the total number of variety, popularity or volume
     *                       which used as a number of mark 10(the full mark)
     */
    function getNumberEqualsToFullMark(attrName)
    {
        var numberOfAttr = 0;
        if(attrName == 'variety')
        {
            numberOfAttr = getNumberByAttribute('variety');
        }
        else if(attrName == 'popularity')
        {
            numberOfAttr = getNumberByAttribute('popularity');
        }
        else if(attrName == 'volume')
        {
            numberOfAttr = getNumberByAttribute('volume');
        }

        var numberOfCity = getNumberOfCity();

        var points = Math.ceil(numberOfAttr/numberOfCity);

        return points*2;
    }


    /**
     * @param attrName - variety, popularity or volume
     * @returns {number} - the total number of variety, popularity or volume of all cities
     */
    function getNumberByAttribute(attrName)
    {
        var numberOfAttr = 0;

        $.each(cities,function(key,value)
        {
            if(attrName == 'variety')
            {
                numberOfAttr += parseInt(value.job_variety);
            }
            else if(attrName == 'popularity')
            {
                numberOfAttr += parseInt(value.job_popularity);
            }
            else if(attrName == 'volume')
            {
                numberOfAttr += parseInt(value.job_volume);
            }

        });

        return numberOfAttr;
    }


    /**
     * @returns {number}
     */
    function getNumberOfCity()
    {
        var number = 0;
        $.each(cities,function()
        {
            number++;
        });

        return number;
    }


    /**
     * @param cityName
     * @param attrName
     * @returns {number} -  calculate a point of a city by a attribute (variety, popularity or volume)
     */
    function jobAttributeMark(cityName,attrName)
    {
        var mark = -1;
        var numberOfAttr = 0;
        var assessNumber = getNumberEqualsToFullMark(attrName);
        $.each(cities,function(key,value)
        {
            if(key == cityName)
            {
                if(attrName == 'variety')
                {
                    numberOfAttr = value.job_variety;
                }
                else if(attrName == 'popularity')
                {
                    numberOfAttr = value.job_popularity;
                }
                else if(attrName == 'volume')
                {
                    numberOfAttr = value.job_volume;
                }
            }
        });

        if(numberOfAttr >= assessNumber)
        {
            mark =10;
        }
        else
        {
            mark = (numberOfAttr/assessNumber).toFixed(2);
        }
        return mark;
    }

});




