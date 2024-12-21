import React from 'react'
import './navbar.css'
import menuicon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import moreicon from '../../assets/more.png'
import notification from '../../assets/notification.png'
import profileicon from '../../assets/ammu.png'





const NavBar = ({setSidebar}) => {
    
  return (
   <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menuicon' onClick={()=>{
                setSidebar(prev=>prev===false?true:false)
            }}src={menuicon} alt="" />
             
            <a href='/'> 
            <img className='logo'src={logo} alt="" />
            </a>

        </div>
         
        <div className='nav-middle flex-div'>
            <div className='searchbox flex-div'>
                <input type="text" placeholder='search' />
                <img src={search} alt="" />

            </div>
            
        </div>
        <div className='nav-right flex-div'>
            <img src={upload} alt="" />
            <img src={moreicon} alt="" />
            <img src={notification} alt="" />
            <img className='usericon'src={profileicon} alt="" />

        </div>
      
    </nav>
  )
}

export default NavBar
