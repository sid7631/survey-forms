import React from 'react'
import './Header.scss'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import { IconButton, Avatar } from '@material-ui/core'
import { IoDocumentTextOutline } from 'react-icons/io5'


const Header = () => {
    return (
        <div className='header'>
            <div className="header-info">
                <IconButton>
                    <IoDocumentTextOutline color='#6E2594' />
                </IconButton>
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
