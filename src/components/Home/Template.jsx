import React, { useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import './Template.scss'
import uuid from 'react-uuid'
import { useHistory } from 'react-router-dom'
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme=>({
    root: {
        backgroundColor: 'transparent'
    },
    summary: {
        padding: 0,
    },
    expandIcon: {
        transform: 'unset',
        transition: 'unset',
        padding:0,
        '&.Mui-expanded': {
            transform: 'unset'
        }
    },
    expanded: {
        transform: 'unset',
        transition: 'unset'
    }
}))

const Template = () => {
    const history = useHistory()
    const classes = useStyles()
    const [expanded, setexpanded] = useState(false)

    const createForm = (params) => {
        const id = uuid()
        history.push('/form/' + id)
    }


    return (
        <div className='template-section'>
            <div className="template-top">
            </div>
            <div className='template-summary'>
                <Accordion
                    elevation={0}
                    square
                    className={classes.root}
                    expanded={expanded}
                    onChange={() => setexpanded(!expanded)}
                >
                    <AccordionSummary
                        aria-controls='panelia-content'
                        id='panelia-content'
                        elevation={0}
                        style={{ width: '100%' }}
                        className={classes.summary}
                        classes={{ expandIcon: classes.expandIcon, expanded: classes.expanded }}
                        expandIcon={<ExpandedIcon expanded={expanded} />}
                    >
                        <div
                            className="template-top"
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                        >
                            {expanded ? (
                                <div className="template-left">
                                    <span style={{ fontSize: '16px', color: '#202124' }}>New Form </span>
                                </div>
                            ) : (
                                <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                className={classes.button}
                                startIcon={<AddIcon />}
                                onClick={createForm}
                              >
                                New Form
                              </Button>
                            )}

                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="template-body">
                            <div className="card" onClick={createForm}>
                                <img src={'https://images.unsplash.com/photo-1559311648-d46f5d8593d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1450&q=80'} alt='template' className='card-image' />
                                {/* <div className='card-image'></div> */}
                                
                                <p className="card-title">Blank</p>
                            </div>
                            <div className="card">
                                <img src={'https://images.unsplash.com/photo-1631084857067-9b7491fc69bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'} alt='template' className='card-image' />
                                {/* <div className='card-image'></div> */}
                                <p className="card-title">Invite</p>
                            </div>
                            <div className="card">
                                <img src={'https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80'} alt='template' className='card-image' />
                                {/* <div className='card-image'></div> */}
                                <p className="card-title">Contact Information</p>
                            </div>
                        </div>
                    </AccordionDetails>

                </Accordion>
            </div>
        </div>
    )
}

export default Template


const ExpandedIcon = ({ expanded }) => {
    if (expanded) {
        return (
            <div className="gallery-button">
                Hide Templates
                <UnfoldLessIcon fontSize='small' />
            </div>
        )
    }
    return (
        <div className="gallery-button">
            Show Templates
            <UnfoldMoreIcon fontSize='small' />
        </div>
    )
}
