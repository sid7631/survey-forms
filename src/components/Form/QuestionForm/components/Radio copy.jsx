import React from 'react'
// import CropOriginalIcon from '@material-ui/icons/CropOriginal'
import { Button, FormControlLabel, IconButton, Divider, Switch } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
// import ShortTextIcon from '@material-ui/icons/ShortText'
import { BsTrash } from 'react-icons/bs'
import { FcRightUp } from 'react-icons/fc'
import FilterNoneIcon from '@material-ui/icons/FilterNone'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';


const Radio = ({ question, i, changeQuestion, addQuestionType, changeOptionValue, removeOption, addOption, copyQuestion, deleteQuestion, requiredQuestion, addMoreQuestionField }) => {
    return (
        <>
            <div className="question-top">
                <div>{i + 1}.</div><input type="text"
                    className='question-text'
                    placeholder='Question'
                    value={question.questionText}
                    onChange={(e) => changeQuestion(e.target.value, i)}
                />
            </div>
            <div className='question-body'>
                {question.options.map((option, j) => (
                    <div className="question-option" key={j}>
                        <input type={question.questionType} style={{ marginRight: '10px' }} disabled />
                        <div>
                            <input
                                type="text"
                                className='text-input'
                                placeholder='option'
                                value={option.optionText}
                                onChange={(e) => changeOptionValue(e.target.value, i, j)}
                            />
                        </div>

                        {/* <CropOriginalIcon style={{ color: '#5f6368' }} /> */}
                        <IconButton aria-label='delete' onClick={() => removeOption(i, j)} style={{marginLeft:10}} >
                            <DeleteIcon fontSize='small' />
                        </IconButton>

                    </div>
                ))}

                {question.options.length < 5 ? (
                    <div className="question-option">
                        <FormControlLabel
                            disabled
                            control={
                                <input
                                    type={question.questionType}
                                    color='primary'
                                    inputProps={{ 'aria-label': 'secondary checkbbox' }}
                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                    disabled
                                />
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
            </div>

            <Divider style={{ marginTop: '20px' }} />
            <div className="question-footer">
                <div className="footer-left">
                    <IconButton aria-label='copy' onClick={() => copyQuestion(i)}>
                        <FileCopyOutlinedIcon fontSize='small' />
                    </IconButton>
                    <IconButton aria-label='delete' onClick={() => deleteQuestion(i)}>
                        <DeleteOutlineOutlinedIcon fontSize='small' />
                    </IconButton>
                </div>
                <div className="footer-right">

                    <span style={{ color: '#5f6368', fontSize: '13px' }}>
                        Required
                    </span>
                    <Switch name='checkedA' size='small' color='primary' checked={question.required} onClick={() => requiredQuestion(i)} />
                    <IconButton>
                        <MoreVertIcon fontSize='small' />
                    </IconButton>
                </div>
            </div>
        </>
    )
}

export default Radio
