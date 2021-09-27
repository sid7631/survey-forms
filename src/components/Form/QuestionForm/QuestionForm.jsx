import React, { useState } from 'react'

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

import './QuestionForm.scss'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const mockQuestions = [
    {
        questionText: 'What is your favourite color',
        questionType: 'radio',
        options: [
            { optionText: 'Red' },
            { optionText: 'Green' },
            { optionText: 'Blue' },
            { optionText: 'Acqua' },
        ],
        open: true,
        required: false
    },
]

const QuestionForm = () => {

    const [questions, setquestions] = useState(mockQuestions)


    const changeQuestion = (text, i) => {
        let newQuestion = [...questions]
        newQuestion[i].questionText = text
        setquestions(newQuestion)
        console.log(newQuestion)
    }


    const addQuestionType = (type, i) => {
        let newQuestion = [...questions]
        newQuestion[i].questionType = type
        setquestions(newQuestion)
    }

    const changeOptionValue = (text, i, j) => {
        let newQuestion = [...questions]
        newQuestion[i].options[j].optionText = text
        setquestions(newQuestion)
    }

    const removeOption = (i, j) => {
        let newQuestion = [...questions]
        if (newQuestion[i].options.length > 1) {
            newQuestion[i].options.splice(j, 1)
            setquestions(newQuestion)
        }
    }

    const addOption = (i) => {
        let newQuestion = [...questions]
        if (newQuestion[i].options.length < 5) {
            newQuestion[i].options.push({ optionText: 'Option' + (newQuestion[i].options.length + 1) })
        } else {
            console.log('max 5 options')
        }
        setquestions(newQuestion)
    }

    const copyQuestion = (i) => {
        expandCloseAll()
        let newQuestion = [...questions]
        let tempQuestion = {...newQuestion[i]}
        setquestions([...questions, tempQuestion])
    }

    const deleteQuestion = (i) => {
        let newQuestion = [...questions]
        if (newQuestion.length > 1) {
            newQuestion.splice(i, 1)
        }
        setquestions(newQuestion)
    }

    const requiredQuestion = (i) => {
        let newQuestion = [...questions]
        newQuestion[i].required = !newQuestion[i].required
        setquestions(newQuestion)
    }

    const addMoreQuestionField = () => {
        expandCloseAll()
        let newQuestion = {
            questionText: 'Question',
            questionType: 'radio',
            options: [
                { optionText: 'Option 1' },
            ],
            open: true,
            required: false
        }

        setquestions([...questions, newQuestion])
    }

    const onDragEnd = (result) => {
        if (!result.destination) {
            return
        }
        let itemgg = [...questions]
        const itemF = reorder(
            itemgg,
            result.source.index,
            result.destination.index
        )
        setquestions(itemF)

    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        return result
    }

    const expandCloseAll = () => {
        let qs = [...questions]
        for (let j = 0; j < qs.length; j++) {
            qs[j].open = false
        }
        setquestions(qs)
    }

    const handleExpand = (i) => {
        let qs = [...questions]
        for (let j = 0; j < qs.length; j++) {
            if (i === j) {
                qs[i].open = true
            } else {
                qs[j].open = false
            }
        }
        setquestions(qs)
    }



    const questionsUI = (params) => {
        return questions.map((question, i) => (
            <Draggable key={i} draggableId={i + 'id'} index={i}>
                {(provider, snapshot) => (
                    <div
                        ref={provider.innerRef}
                        {...provider.draggableProps}
                        {...provider.dragHandleProps}
                    >
                        <div>
                            <div style={{ marginBottom: '0px' }}>
                                <div style={{ width: '100%', marginBottom: '0px' }}>
                                    <DragIndicatorIcon
                                        style={{ transform: 'rotate(-90deg)', color: '#DAE0E2', position: 'relative', left: '300px' }}
                                        fontSize='small'
                                    />
                                </div>
                                <Accordion
                                    expanded={question.open}
                                    className={question.open ? 'add-border' : ''}
                                    onChange={() => handleExpand(i)}
                                >
                                    <AccordionSummary
                                        aria-controls='panelia-content'
                                        id='panelia-content'
                                        elevation={1}
                                        style={{ width: '100%' }}
                                    >
                                        {!question.open ? (
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
                                        ) : ('')}
                                    </AccordionSummary>
                                    {question.open ? (
                                        <div className="question-boxes">
                                            <AccordionDetails className='add-question'>
                                                <div className="add-question-top">
                                                {i + 1}.<input type="text"
                                                        className='question'
                                                        placeholder='Question'
                                                        value={question.questionText}
                                                        onChange={(e) => changeQuestion(e.target.value, i)}
                                                    />
                                                    <CropOriginalIcon style={{ color: '#5f6368' }} />
                                                    <Select className='select' style={{ color: '#5f6368', fontSize: '13px' }}>
                                                        <MenuItem id='text' value='Text' className='menuitem' onClick={() => addQuestionType('text', i)}>
                                                            <SubjectIcon style={{ marginRight: '10px' }} />
                                                            Paragraph
                                                        </MenuItem>
                                                        <MenuItem id='checkbox' value='checkbox' className='menuitem' onClick={() => addQuestionType('checkbox', i)}>
                                                            <CheckBoxIcon style={{ marginRight: '10px', color: '#70757a' }} checked />
                                                            Checkboxes
                                                        </MenuItem>
                                                        <MenuItem id='radio' value='Radio' className='menuitem' onClick={() => addQuestionType('radio', i)}>
                                                            <Radio style={{ marginRight: '10px', color: '#70757a' }} checked />
                                                            Multiple Choices
                                                        </MenuItem>
                                                    </Select>
                                                </div>
                                                {question.options.map((option, j) => (
                                                    <div className="add-question-body" key={j}>
                                                        {
                                                            question.questionType !== 'text' ?
                                                                <input type={question.questionType} style={{ marginRight: '10px' }} />
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
                                            <div className="question-edit">
                                                <AddCircleOutlineIcon className='edit' onClick={addMoreQuestionField} />
                                                <OndemandVideoIcon className='edit' />
                                                <CropOriginalIcon className='edit' />
                                                <TextFieldsIcon className='edit' />
                                            </div>
                                        </div>
                                    ) : ''}
                                </Accordion>
                            </div>
                        </div>

                    </div>
                )}
            </Draggable>
        ))
    }


    return (
        <div>
            <div className="question-form">
                <br />
                <div className="section">
                    <div className="question-title-section">
                        <div className="question-form-top">
                            <input type="text" className='question-form-top-name' style={{ color: 'black' }} placeholder='Untitled document' />
                            <input type="text" className='question-form-top-desc' placeholder='Form Description' />
                        </div>
                    </div>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId='dropabble' >
                            {(provider, snapshot) => (
                                <div
                                    {...provider.droppableProps}
                                    ref={provider.innerRef}
                                >
                                    {questionsUI()}
                                    {provider.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>

                </div>
            </div>
        </div>
    )
}

export default QuestionForm
