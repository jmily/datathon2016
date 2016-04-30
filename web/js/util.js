/**
 * Created by bryan on 30/04/2016.
 */


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
        mark = ((numberOfAttr/assessNumber)*10).toFixed(2);
    }
    return parseFloat(mark);
}
