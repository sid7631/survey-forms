import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const ViewRadio = ({ question, i }) => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    if (question.open) {
        return ''
    }
    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend" className='question-top'>
                    <div className='question-text'>{question.questionText}</div>
                </FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} className='question-body'>
                    {question.options.map((option, j) => (
                        <FormControlLabel value={option.optionText} control={<Radio size='small' />} label={option.optionText} className='text-input' disabled />
                    ))}
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default ViewRadio
