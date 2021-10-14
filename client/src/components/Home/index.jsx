import { Divider, makeStyles } from '@material-ui/core'
import React from 'react'
import CreatedSurvey from './CreatedSurvey'
import Header from './Header'
import PendingSurveys from './PendingSurveys'
import Template from './Template'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme =>({
    container: {
        '& > :first-child':{
            marginTop:theme.spacing(3),
        }
    },
    divider:{
        marginTop:theme.spacing(4),
        marginBottom:theme.spacing(3)
    }
}))

const Home = () => {

    const classes = useStyles()

    return (
        <div>
            <Header />
            <Template />
            <CssBaseline />
            <Container maxWidth="lg" disableGutters className={classes.container} >
                <CreatedSurvey />
                <Divider className={classes.divider} />
                <PendingSurveys />
            </Container>
        </div>
    )
}

export default Home
