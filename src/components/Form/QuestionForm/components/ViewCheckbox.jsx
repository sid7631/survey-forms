import React from 'react'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const ViewCheckbox = ({ question }) => {

    const [state, setState] = React.useState({});

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    if (question.open) {
        return ''
    }
    return (
        <>
            <FormControl
                component="fieldset"
            // className={classes.formControl}
            >
                <FormLabel component="legend" className='question-top'>
                    {/* <div className='question-number'>{i + 1}.</div> */}
                    <div className='question-text'>{question.questionText}</div>
                </FormLabel>
                <FormGroup className='question-body'>
                    {question.options.map((option, j) => (
                        <FormControlLabel
                            control={
                                <Checkbox size='small' 
                                    // checked={option.optionText} 
                                    onChange={handleChange} 
                                    name={option.optionText} 
                                />
                            }
                            label={option.optionText}
                            className='text-input'
                            disabled
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </>
    )
}

export default ViewCheckbox
