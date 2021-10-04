import React from 'react'
import './Body.scss'
import { IconButton } from '@material-ui/core'
import StorageIcon from '@material-ui/icons/Storage'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import tshirt from '../../images/tshirt400.png'

const Body = () => {
    return (
        <div className='body'>
            <div className="body-top">
                <div className="body-top-left" style={{fontSize:'16px', fontWeight:'500'}}>
                    Recent forms
                </div>
                <div className="body-top-right">
                    <div className="body-top-right-center" style={{fontSize:'14px', marginRight: '125px'}}>
                        Owned by anyone <ArrowDropDownIcon />
                    </div>
                    <IconButton>
                        <StorageIcon style={{fontSize:'16px', color:'black'}} />
                    </IconButton>
                    <IconButton>
                        <FolderOpenIcon style={{fontSize:'16px', color:'black'}} />
                    </IconButton>
                </div>
            </div>
            <div className="body-docs">
                <div className="doc-card">
                    <img src={tshirt} alt="" className='doc-card-image' />
                    <div className="doc-card-content">
                            <div style={{fontSize: '12px', color: 'grey'}}>untitled form</div>
                            <div className="doc-content" style={{fontSize: '12px', color: 'grey'}}>
                                <div className="content-left">
                                    <StorageIcon style={{color:'white', fontSize: '12px', backgroundColor: '#6E2594', padding: '3px', marginRight: '3px', borderRadius: '2px'}} />
                                    Opened 6 Jan 2021
                                </div>
                                <MoreVertIcon style={{fontSize: '16px', color: 'grey'}} />
                            </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Body
