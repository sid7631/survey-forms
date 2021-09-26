import React from 'react'
import './index.scss'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import { IconButton, Avatar } from '@material-ui/core'
import formImage from '../../images/forms_2020q4_48dp.png'


const Header = () => {
    return (
        <div className='header'>
            <div className="header-info">
                <IconButton>
                <MenuIcon />
                </IconButton>
                <img src={formImage} style={{height:'40px', width:'40px'}}  alt='no image' />
                <div className="info">
                    Forms
                </div>
                
            </div>
            <div className="header-search">
                <IconButton><SearchIcon /></IconButton>
                
                <input type='text' name='search' placeholder='Search' />
            </div>
            <div className="header-right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar src="" />
                </IconButton>
            </div>


        </div>
    )
}

export default Header
