import React from 'react'
import { FormControlLabel, Typography } from '@material-ui/core'
import './QuestionForm/QuestionForm.scss'

const ViewQuestions = ({ question, i }) => {
    if (question.open) {
        return ''
    }
    return (
        <div className="saved-questions">
            <Typography style={{ fontSize: '15px', fontWeight: '400', letterSpacing: '.1px', lineHeight: '24px', paddingBottom: '8px' }} >
                {i + 1}. {question.questionText}
            </Typography>
            {question.options.map((option, j) => (
                <div key={j}>
                    <div style={{ display: 'flex' }}>
                        <FormControlLabel
                            style={{ marginLeft: '5px', marginBottom: '5px' }}
                            disabled
                            control={
                                <input type={question.questionType} color='primary' style={{ marginRight: '3px' }} required={question.required} />
                            }
                            label={
                                <Typography style={{ fontFamily: 'Roboto,Arial,sans-serif', fontSize: '13px', fontWeight: '400', letterSpacing: '.2px', color: '#202124' }}>
                                    {option.optionText}
                                </Typography>
                            }
                        >
                        </FormControlLabel>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ViewQuestions


