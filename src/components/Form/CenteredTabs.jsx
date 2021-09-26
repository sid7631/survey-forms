import React from 'react'
import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        flexGrow:1,
    },
    tab: {
        fontSize:12,
        color:'#5f6368',
        textTransform:'capitalize',
        height:10,
        fontWeight:'600',
        fontFamily:'Google Sans,Roboto,Arial,sans-serif',
    },
    tabs: {
        height: 10,
    }
})

const CenteredTabs = () => {

    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <Tabs
                textColor='primary'
                indicatorColor='primary'
                centered
                className={classes.tabs}
            >
                <Tab label='Questions' className={classes.tab}></Tab>
                <Tab label='Responses' className={classes.tab}></Tab>
            </Tabs>
        </Paper>
    )
}

export default CenteredTabs
