import {React , useEffect, useState} from 'react'
import "./style.css"
import Ui from './Ui';
const Covid = () => {
    
    const [data,setData] = useState([]);

    const getCovidData = async () => {
    try{
        const res = await fetch('https://api.covid19india.org/data.json')
        const actualData = await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0])
    }catch(err){
        console.log(err);
    }
    }

    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
        <div className="h">
        <h1>🔴Live</h1>
        <h2>COVID-19 TRACKER</h2>
        </div>
                 <Ui o="Our" name=" COUNTRY"
                     value="INDIA"
                 />
                   <Ui o="Total" name=" CONFIRMED"
                     value={data.confirmed}
                 />
                   <Ui o="Total" name=" DEATHS"
                     value={data.deaths}
                 />
                    <Ui o="Total " name=" RECOVERED"
                     value={data.recovered}
                 />
                    <Ui o="Total" name=" ACTIVE"
                     value={data.active}
                 />
                    <Ui o="Last" name=" UPDATED"
                     value={data.lastupdatedtime}
                 />
                 
        </>
    )
}

export default Covid
