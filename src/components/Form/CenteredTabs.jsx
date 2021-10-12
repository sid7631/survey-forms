import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core'
import QuestionForm from './QuestionForm/QuestionForm';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                {children}
                </>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    tab: {
        fontSize: 12,
        color: '#5f6368',
        textTransform: 'capitalize',
        height: 10,
        fontWeight: '600',
        fontFamily: 'Google Sans,Roboto,Arial,sans-serif',
    },
    tabs: {
        height: 10,
    }
})

const CenteredTabs = () => {

    const classes = useStyles()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor='primary'
                indicatorColor='primary'
                centered
                className={classes.tabs}
            >
                <Tab label='Questions' className={classes.tab}></Tab>
                <Tab label='Responses' className={classes.tab}></Tab>
            </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
        <QuestionForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
        </>
        
    )
}

export default CenteredTabs
