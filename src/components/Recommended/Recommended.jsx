import React, { useEffect } from 'react'
import './Recommended.css'

import { useState } from 'react'
import { APIKEY, valueconverter } from '../../data'
import { Link } from 'react-router-dom'

const Recommended = ({categoryId}) => {
   
    const [apiData,setapiData]=useState([]);

    const fetchData = async () =>{
        const relatedvideourl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${APIKEY} `
        await fetch(relatedvideourl).then(response=>response.json()).then(data=>setapiData(data.items))
    }

    useEffect(()=>{
        fetchData();

    },[])

  return (
    <div className='recommended'>

        {apiData.map((item,index)=>{
            return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key='index' className="sidevideolist">
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <div className="videoinfo">
                    <h4>{item.snippet.title}</h4>
                    <p>{item.snippet.channelTitle}</p>
                    <p>{valueconverter(item.statistics.viewCount)}Views</p>
                </div>
            </Link>

            )
        })}
       

    </div>
  )
}

export default Recommended
