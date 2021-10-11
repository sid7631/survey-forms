import React from 'react'
import { Select, Switch, IconButton, AccordionDetails, Button, Radio, FormControlLabel, MenuItem } from '@material-ui/core'
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
// import DragIndicatorIcon from '@material-ui/icons/DragIndicator'
import { BsTrash } from 'react-icons/bs'
import { FcRightUp } from 'react-icons/fc'

const EditQuestions = ({ question, i, changeQuestion, addQuestionType, changeOptionValue, removeOption, addOption, copyQuestion, deleteQuestion, requiredQuestion, addMoreQuestionField }) => {

    if (question.open) {
        return (
            <div className="question-boxes">
                <AccordionDetails className='add-question'>
                    <div className="add-question-top">
                        {i + 1}.<input type="text"
                            className='question'
                            placeholder='Question'
                            value={question.questionText}
                            onChange={(e) => changeQuestion(e.target.value, i)}
                        />
                    </div>
                    {question.options.map((option, j) => (
                        <div className="add-question-body" key={j}>
                            {
                                question.questionType !== 'text' ?
                                    <input type={question.questionType} style={{ marginRight: '10px' }} disabled />
                                    :
                                    <ShortTextIcon style={{ marginRight: '10px' }} />
                            }
                            <div>
                                <input
                                    type="text"
                                    className='text-input'
                                    placeholder='option'
                                    value={option.optionText}
                                    onChange={(e) => changeOptionValue(e.target.value, i, j)}
                                />
                            </div>
                            <CropOriginalIcon style={{ color: '#5f6368' }} />
                            <IconButton aria-label='delete' onClick={() => removeOption(i, j)} >
                                <CloseIcon />
                            </IconButton>
                        </div>
                    ))}

                    {question.options.length < 5 ? (
                        <div className="add-question-body">
                            <FormControlLabel
                                disabled
                                control={
                                    (question.questionType !== 'text') ?
                                        <input
                                            type={question.questionType}
                                            color='primary'
                                            inputProps={{ 'aria-label': 'secondary checkbbox' }}
                                            style={{ marginLeft: '10px', marginRight: '10px' }}
                                            disabled
                                        />
                                        :
                                        <ShortTextIcon style={{ marginRight: '10px' }} />
                                }
                                label={
                                    <div>
                                        <input
                                            type="text"
                                            className='text-input'
                                            style={{ fontSize: '13px', width: '60px' }}
                                            placeholder='Add other'
                                        />
                                        <Button
                                            size='small'
                                            style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}
                                            onClick={() => addOption(i)}
                                        >
                                            Add option
                                        </Button>
                                    </div>
                                }
                            />
                        </div>
                    ) : ''}
                    <div className="add-question-footer">
                        <div className="add-question-bottom-left">
                            <Button size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }} >
                                <FcRightUp style={{ border: '2px solid #4285f4', padding: '2px', marginRight: '8px' }} />
                                Answer key
                            </Button>
                        </div>
                        <div className="add-question-bottom">
                            <IconButton aria-label='copy' onClick={() => copyQuestion(i)}>
                                <FilterNoneIcon />
                            </IconButton>
                            <IconButton aria-label='delete' onClick={() => deleteQuestion(i)}>
                                <BsTrash />
                            </IconButton>
                            <span style={{ color: '#5f6368', fontSize: '13px' }}>
                                Required
                            </span>
                            <Switch name='checkedA' color='primary' checked={question.required} onClick={() => requiredQuestion(i)} />
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </div>
                    </div>
                </AccordionDetails>
                {/* <div className="question-edit">
                    <AddCircleOutlineIcon className='edit' onClick={addMoreQuestionField} />
                    <OndemandVideoIcon className='edit' />
                    <CropOriginalIcon className='edit' />
                    <TextFieldsIcon className='edit' />
                </div> */}
            </div>
        )
    }

    return ''
}

export default EditQuestions
