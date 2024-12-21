import React from 'react'
import './Home.css'
import {useState} from 'react'


import AppSidebar from '../../components/sidebar/AppSidebar';
import Feed from '../../components/Feed/Feed';

const Home = ({sidebar}) => {
  const [category,setCategory] = useState(0);
  return (
    <>
    <AppSidebar  sidebar={sidebar} category={category} setCategory={setCategory}/>
    <div className={`container ${sidebar?"":'largecontainer'}`}>
      <Feed category={category}/>

    </div>
       
      
    </>
  )
}

export default Home
