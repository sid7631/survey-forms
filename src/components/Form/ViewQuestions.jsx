import React from 'react'
import { Select, Switch, IconButton, Accordion, AccordionSummary, AccordionDetails, Button, Radio, FormControlLabel, Typography, MenuItem } from '@material-ui/core'
import CropOriginalIcon from '@material-ui/icons/CropOriginal'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import ShortTextIcon from '@material-ui/icons/ShortText'
import SubjectIcon from '@material-ui/icons/Subject'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FilterNoneIcon from '@material-ui/icons/FilterNone'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import CloseIcon from '@material-ui/icons/Close'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'
import { BsTrash } from 'react-icons/bs'
import { FcRightUp } from 'react-icons/fc'

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


