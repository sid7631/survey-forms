import React, { useState } from 'react'

import { Accordion, AccordionSummary} from '@material-ui/core'
// import CropOriginalIcon from '@material-ui/icons/CropOriginal'
// import CheckBoxIcon from '@material-ui/icons/CheckBox'
// import ShortTextIcon from '@material-ui/icons/ShortText'
// import SubjectIcon from '@material-ui/icons/Subject'
// import MoreVertIcon from '@material-ui/icons/MoreVert'
// import FilterNoneIcon from '@material-ui/icons/FilterNone'
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
// import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
// import TextFieldsIcon from '@material-ui/icons/TextFields'
// import CloseIcon from '@material-ui/icons/Close'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'
// import { BsTrash } from 'react-icons/bs'
// import { FcRightUp } from 'react-icons/fc'

import './QuestionForm.scss'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ViewQuestions from '../ViewQuestions'
import EditQuestions from '../EditQuestions'

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
        let tempQuestion = { ...newQuestion[i] }
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
                                    {/* {questionsUI()} */}
                                    {questions.map((question, i) => (
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
                                                                    <ViewQuestions question={question} i={i} />
                                                                </AccordionSummary>
                                                                <EditQuestions
                                                                    question={question} i={i}
                                                                    changeQuestion={changeQuestion}
                                                                    addQuestionType={addQuestionType}
                                                                    changeOptionValue={changeOptionValue}
                                                                    removeOption={removeOption}
                                                                    addOption={addOption}
                                                                    copyQuestion={copyQuestion}
                                                                    deleteQuestion={deleteQuestion}
                                                                    requiredQuestion={requiredQuestion}
                                                                    addMoreQuestionField={addMoreQuestionField}
                                                                />
                                                            </Accordion>
                                                        </div>
                                                    </div>

                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
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




