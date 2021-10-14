import React from 'react'
import './FormHeader.scss'
import formImage from '../../images/forms_2020q4_48dp.png';
import { FiStar, FiSettings } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import { IoMdFolderOpen } from 'react-icons/io'
import { IconButton, Button, Avatar } from '@material-ui/core'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import MoreVertIcon from '@material-ui/icons/MoreVert'


const FormHeader = () => {
    return (
        <div className='form-header'>
            <div className="form-header-left">
                <img src={formImage} alt="" style={{height: '45px', width: '40px'}} />
                <input type="text" placeholder='untitled form' className='form-name'></input>
                <IoMdFolderOpen className='form-header-icon' style={{marginRight: '10px'}} ></IoMdFolderOpen>
                <FiStar className='form-header-icon' style={{marginRight: '10px'}} />
                <span style={{fontSize: '12px', fontWeight: '600'}}>All changes saved in Drive</span>
            </div>
            <div className="form-header-right">
                <IconButton>
                    <ColorLensIcon fontSize='small' className='form-header-icon' />
                </IconButton>
                <IconButton>
                    <AiOutlineEye className='form-header-icon' />
                </IconButton>
                <IconButton>
                    <FiSettings className='form-header-icon' />
                </IconButton>
                <Button variant='contained' color='primary' href='#contained-buttons' >Send</Button>
                <IconButton>
                    <MoreVertIcon className='form-header-icon' />
                </IconButton>
                <IconButton>
                    <Avatar className='form-header-icon' />
                </IconButton>
            </div>
        </div>
    )
}

export default FormHeader
