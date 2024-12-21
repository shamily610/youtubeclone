 export const APIKEY='AIzaSyDoHyBZUZ0LVZN9_g9-wvu6g1CIYDyLm0k';

 export const valueconverter=(value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K"
    }
    else
    {
    return value;
    }

 }