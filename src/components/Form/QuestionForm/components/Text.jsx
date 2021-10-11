import { Button, Divider, IconButton, Switch } from '@material-ui/core'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { FcRightUp } from 'react-icons/fc'
import FilterNoneIcon from '@material-ui/icons/FilterNone'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';


const Text = ({ question, i, changeQuestion, addQuestionType, changeOptionValue, removeOption, addOption, copyQuestion, deleteQuestion, requiredQuestion, addMoreQuestionField }) => {
    return (
        <>
            <div className="question-top">
                {/* <div className='question-number'>{i + 1}.</div> */}
                <input type="text"
                    className='question-text'
                    placeholder='Question'
                    value={question.questionText}
                    onChange={(e) => changeQuestion(e.target.value, i)}
                />
            </div>
            <div className='question-body'>
                <div className="question-option" >
                    <div style={{ width: '100%' }}>
                        <input
                            type="text"
                            className='text-input'
                            placeholder='Enter your answer'
                            disabled
                        />
                    </div>
                </div>
            </div>
            <Divider style={{ marginTop: '20px' }} />
            <div className="question-footer">
                <div className="footer-left">
                    <IconButton  aria-label='copy' onClick={() => copyQuestion(i)}>
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

export default Text
