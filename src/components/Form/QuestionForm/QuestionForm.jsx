import React, { useState } from 'react'

import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton, makeStyles, Container } from '@material-ui/core'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator'
import './QuestionForm.scss'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ViewQuestions from '../ViewQuestions'
import EditQuestions from '../EditQuestions'
import AddIcon from '@material-ui/icons/Add';
import LongMenu from './LongMenu'
import Text from './components/Text'
import Radio from './components/Radio'
import Checkbox from './components/Checkbox'
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import Grow from '@material-ui/core/Grow';
import classNames from 'classnames'
import ViewText from './components/ViewText'
import ViewRadio from './components/ViewRadio'
import ViewCheckbox from './components/ViewCheckbox'

const textQuestion = {
    questionText: 'Enter Your Question',
    questionType: 'text',
    options: [
        { optionText: '' },
    ],
    open: true,
    required: false
}

const radioQuestion = {
    questionText: 'Enter Your Question',
    questionType: 'radio',
    options: [
        { optionText: 'Option 1' },
        { optionText: 'Option 2' },
    ],
    open: true,
    required: false
}

const checkboxQuestion = {
    questionText: 'Enter Your Question',
    questionType: 'checkbox',
    options: [
        { optionText: 'Option 1' },
        { optionText: 'Option 2' },
    ],
    open: true,
    required: false
}

const mockQuestions = [

]

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'transparent'
    },
    root: {
        height: '100%',
    },
    container: {
        '& > :first-child': {
            marginTop: theme.spacing(3),
        }
    },
    divider: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(3)
    },
    formTitle: {
        backgroundColor: 'white',
        borderTop: '8px solid rgb(103, 58, 183)',
        borderRadius: 8,
        padding: '30px 25px',
        textTransform: 'capitalize',

        '& .form-name': {
            boxSizing: 'border-box',
            fontSize: 32,
            fontWeight: 400,
            lineHeight: 1,
            width: '100%',
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid #F4F4F9',
            color: 'black',
            height: 35,
        },
        '& .form-desc': {
            boxSizing: 'border-box',
            fontSize: 13,
            fontWeight: 400,
            lineHeight: 1,
            width: '100%',
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid #F4F4F9',
            color: 'black',
            height: 20,
            marginTop: 10,
        }
    },
    editQuestion: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',

        "& .question": {
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 0,
            textTransform: 'capitalize',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        },
        "& .question-top": {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            padding: '0 10px',
        },
        "& .question-number": {
            boxSizing: 'border-box',
            fontSize: 15,
            fontWeight: 400,
            width: 16,
        },
        "& .question-text": {
            boxSizing: 'border-box',
            fontSize: 15,
            fontWeight: 400,
            flex: 1,
            lineHeight: 1,
            // width:'40%',
            border: 'none',
            outline: 'none',
            color: 'black',
            height: 40,
            lineHeight: 1,
            padding: 10,
            '&:focus': {
                borderBottom: '1px solid rgb(103, 58, 183)',
                backgroundColor: '#F4F4F9',
            }
        },
        "& .question-body": {
            width: '100%',
            boxSizing: 'border-box',
            padding: 10,
            paddingLeft: '26px',
        },
        "& .question-option": {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box',
            // padding:10,
        },
        "& .text-input": {
            outline: 'none',
            border: 'none',
            height: 40,
            fontSize: 13,
            fontWeight: 400,
            letterSpacing: 0.2,
            color: '#202124',
            width: '100%',
            padding: 10,
            boxSizing: 'border-box',
            '&:focus': {
                borderBottom: '1px solid rgb(103, 58, 183)',
                // backgroundColor:'#F4F4F9',
            }
        },
        "& .question-footer": {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

        }


    },
    active: {
        borderTop: '6px solid #4285f4',
        marginBottom: '72px !important'
    },
    inactive: {
        borderTop: '6px solid transparent',
    },
    summaryRoot: {
        padding: 0,
    },
    summaryExpanded: {
        minHeight: '0 !important',
    },
    summaryContent: {
        display: 'flex',
        // alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '12px 0 !important'
    },
    summaryContentExpanded: {
        margin: '0 !important',
    },
    viewQuestion: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',

        "& .question": {
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 0,
            textTransform: 'capitalize',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        },
        "& .question-top": {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            padding: '0 10px',
        },
        "& .question-number": {
            boxSizing: 'border-box',
            fontSize: 15,
            fontWeight: 400,
            width: 16,
        },
        "& .question-text": {
            boxSizing: 'border-box',
            fontSize: 15,
            fontWeight: 400,
            flex: 1,
            lineHeight: 1,
            // width:'40%',
            border: 'none',
            outline: 'none',
            color: 'black',
            height: 40,
            lineHeight: 1,
            padding: 10,
            '&:focus': {
                borderBottom: '1px solid rgb(103, 58, 183)',
                backgroundColor: '#F4F4F9',
            }
        },
        "& .question-body": {
            width: '100%',
            boxSizing: 'border-box',
            padding: 10,
            paddingLeft: '26px',
        },
        "& .question-option": {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box',
            // padding:10,
        },
        "& .text-input": {
            outline: 'none',
            border: 'none',
            height: 40,
            fontSize: 13,
            fontWeight: 400,
            letterSpacing: 0.2,
            color: '#202124',
            width: '100%',
            padding: 10,
            boxSizing: 'border-box',
            '&:focus': {
                borderBottom: '1px solid rgb(103, 58, 183)',
                // backgroundColor:'#F4F4F9',
            }
        },
        "& .question-footer": {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

        }


    },

}))


const QuestionForm = () => {
    const classes = useStyles()

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

    const addNextQuestionField = (type, index) => {
        expandCloseAll()
        let oldQuestions = [...questions]

        let questionToAdd = {}

        if (type === 'text') {
            questionToAdd = {...textQuestion}
        } else if (type === 'radio') {
            questionToAdd = {...radioQuestion}
        } else if (type === 'checkbox') {
            questionToAdd = {...checkboxQuestion}
        }


        oldQuestions.splice(index + 1, 0, questionToAdd)

        setquestions(oldQuestions)
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

        <div className={classes.root}>
            <Container maxWidth="md" disableGutters className={classes.container} >
                <div className={classes.formTitle} style={{ marginBottom: '24px' }}>
                    <input type="text" className='form-name' placeholder='Untitled document' />
                    <input type="text" className='form-desc' placeholder='Form Description' />
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
                                                    <div style={{ marginBottom: '20px' }}>
                                                        <Accordion
                                                            expanded={question.open}
                                                            className={question.open ? classes.active : classes.inactive}
                                                            onChange={() => handleExpand(i)}
                                                            style={{ position: 'relative', }}
                                                            TransitionComponent={Fade}
                                                            TransitionProps={{ unmountOnExit: true }}

                                                        >

                                                            <AccordionSummary
                                                                aria-controls='panelia-content'
                                                                id='panelia-content'
                                                                elevation={1}
                                                                style={{ width: '100%' }}
                                                                classes={{ content: classes.summaryContent, root: classes.summaryRoot, expanded: classes.summaryExpanded, }}
                                                            >
                                                                <div style={{ width: '100%', marginBottom: '0px', display: 'flex', justifyContent: 'center' }}>
                                                                    <DragIndicatorIcon
                                                                        style={{ transform: 'rotate(-90deg)', color: '#DAE0E2', }}
                                                                        fontSize='small'
                                                                    />
                                                                </div>
                                                                {/* <ViewQuestions question={question} i={i} /> */}
                                                                <div className={classes.viewQuestion}>
                                                                    <ViewHandler question={question} i={i} />
                                                                </div>
                                                            </AccordionSummary>
                                                            <div className={classes.editQuestion}>
                                                                <AccordionDetails className='question'>
                                                                    <EditHandler
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
                                                                </AccordionDetails>
                                                            </div>

                                                            <div style={{ position: 'absolute', left: '0', marginTop: '10px' }}>
                                                                <LongMenu addNextQuestionField={addNextQuestionField} position={i} />
                                                            </div>
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
                {questions.length === 0 ? (<div >
                    <LongMenu addNextQuestionField={addNextQuestionField} position={questions.length} />
                </div>
                ) : ''}
            </Container>
        </div>
    )
}

export default QuestionForm

const ViewHandler = (props) => {
    const renderProps = () => {
        switch (props.question.questionType) {
            case 'text':
                return <ViewText {...props} />
                break;
            case 'radio':
                return <ViewRadio {...props} />
                break;
            case 'checkbox':
                return <ViewCheckbox  {...props} />
                break;

            default:
                return ''
        }
    }
    return (
        renderProps()
    )
}

const EditHandler = (props) => {
    const renderProps = () => {
        switch (props.question.questionType) {
            case 'text':
                return <Text {...props} />
                break;
            case 'radio':
                return <Radio {...props} />
                break;
            case 'checkbox':
                return <Checkbox  {...props} />
                break;

            default:
                return ''
        }
    }
    return (
        renderProps()
    )
}

