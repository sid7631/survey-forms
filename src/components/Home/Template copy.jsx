import React from 'react'
import { IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import './Template.scss'

import blank from '../../images/forms-blank-googlecolors.png'
import party from '../../images/party-invite400.png'
import contact from '../../images/contact400.png'
import uuid from 'react-uuid'
import { useHistory } from 'react-router-dom'



const Template = () => {
    const history = useHistory()

    const createForm = (params) => {
        const id = uuid()
        history.push('/form/'+id)
    }
    

    return (
        <div className='template-section'>
            <div className="template-top">
                <div className="template-left">
                    <span style={{fontSize:'16px', color:'#202124'}}>New Form </span>
                </div>
                <div className="template-right">
                    <div className="gallery-button">
                        Template gallery
                        <UnfoldMoreIcon />
                    </div>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="template-body">
                <div className="card" onClick={createForm}>
                    <img src={blank} alt='template'  className='card-image' />
                    <p className="card-title">Blank</p>
                </div>
                <div className="card">
                    <img src={party} alt='template'  className='card-image' />
                    <p className="card-title">Party Invite</p>                
                </div>
                <div className="card">
                    <img src={contact} alt='template' className='card-image' />
                    <p className="card-title">Contact Information</p>                
                </div>

            </div>
        </div>
    )
}

export default Template
