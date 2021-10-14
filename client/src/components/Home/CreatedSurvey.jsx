import React, { useState } from 'react'
import './CreatedSurvey.scss'
import { IconButton } from '@material-ui/core'
import StorageIcon from '@material-ui/icons/Storage'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { IoDocumentTextOutline } from 'react-icons/io5'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import classNames from 'classnames'




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 228,
        width: 190,
    },
    paperCard: (props) => ({
        display: 'flex',
        flexDirection: props.isGrid ? 'column' : 'row',
        boxSizing: 'border-box',
        width: props.isGrid ? 190 : '100%',
        height: props.isGrid ? '100%' : 50,
        '&:hover': {
            cursor: 'pointer'
        },
        '& .paper-image': {
            display: props.isGrid ? 'block' : 'none',
            boxSizing: 'border-box',
            height: 120,
            width: 190,
            backgroundColor: '#e9e9f3'
        },
        '& .paper-content': {
            display: 'flex',
            flexDirection: props.isGrid ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: props.isGrid ? 'flex-start' : 'center',
            padding: 10,
            borderTop: props.isGrid ? '1px solid #eaeaea' : 'none',
            width: '100%',

        },
        '& .paper-name': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        '& .paper-icon': {
            display: props.isGrid ? 'none' : 'block',
        },
        '& .paper-header': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
            padding: '10px 0',
            width: props.isGrid ? '100%' : '50%'
        },
        '& .paper-info': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',

        },
        '& .paper-activity': {
            display: props.isGrid ? 'none' : 'block',
        },

    }),
    item: (props) => ({
        padding: props.isGrid ? '8px !important' : '2px !important'
    }),
    menuItem: {
        fontSize: 11,
    }
}));

const CreatedSurvey = () => {

    const [isGrid, setisGrid] = useState(true)

    return (
        <div className='body'>
            <div className="body-top">
                <div className="body-top-left" style={{ fontSize: '16px', fontWeight: '500' }}>
                    <span>Recent Forms</span>
                </div>
                <div className="body-top-right">
                    <div className="body-top-right-center" style={{ fontSize: '14px', marginRight: '125px' }}>
                        All My Forms <ArrowRightAltIcon />
                    </div>
                    <div>
                        <IconButton onClick={() => setisGrid(false)}>
                            <StorageIcon style={{ fontSize: '16px', color: 'black' }} />
                        </IconButton>
                        <IconButton onClick={() => setisGrid(true)}>
                            <FolderOpenIcon style={{ fontSize: '16px', color: 'black' }} />
                        </IconButton>
                    </div>

                </div>
            </div>
            <Grid container justifyContent="flex-start" spacing={isGrid ? 3 : 1} direction={isGrid ? 'row' : 'column'} style={{marginTop:'8px'}}>
                {[0, 1, 2,].map((value) => (
                    <CardWrapper isGrid={isGrid} value={value} />
                ))}
            </Grid>
        </div>
    )
}

export default CreatedSurvey



const CardWrapper = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles(props);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid key={props.value} item>
            <Paper className={classNames(classes.paper, classes.paperCard)}>
                <div className='paper-image' ></div>
                <div className="paper-content">
                    <div className='paper-name'>
                        <IconButton className='paper-icon'>
                            <IoDocumentTextOutline color='#6E2594' />
                        </IconButton>
                        <div style={{ fontSize: '14px', color: 'grey' }}>Untitled Form{props.value + 1}</div>
                    </div>
                    <div className="paper-header" style={{ fontSize: '11px', color: 'grey' }}>
                        <div className="paper-info">
                            0 responses
                        </div>
                        <div className="paper-activity">
                            Opened 6 Jan 2021
                        </div>
                        <MoreVertIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ fontSize: '16px', color: 'grey' }} />
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem classes={{ root: classes.menuItem }} onClick={handleClose}>Edit</MenuItem>
                            <MenuItem classes={{ root: classes.menuItem }} onClick={handleClose}>Delete</MenuItem>
                        </Menu>
                    </div>
                </div>
            </Paper>
        </Grid>
    )



}
