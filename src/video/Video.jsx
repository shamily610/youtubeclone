import React from 'react'
import video from './video.css'
import Playvideo from '../components/playvideo/playvideo'
import Recommended from '../components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {videoId,categoryId} = useParams();
  return (
    <div className='playcontainer'>
      <Playvideo videoId={videoId} />
      <Recommended categoryId={categoryId}/>
      
    </div>
  )
}

export default Video
