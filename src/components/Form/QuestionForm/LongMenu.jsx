import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


const options = [
    {key:'text',value:'Text',},
    {key:'radio',value:'Radio',},
    {key:'checkbox',value:'CheckBox',}
];

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const optionSelect = (event, index) => {
        console.log(options[index].key)
        props.addNextQuestionField(options[index].key, props.position)
        setAnchorEl(null);
    }

    return (
        <div>
            {/* <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton> */}
            <Button
                variant="contained"
                color="primary"
                size="small"
                // className={classes.button}
                startIcon={<AddIcon />}
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                Add New
            </Button>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option,index) => (
                    <MenuItem key={option} selected={option === 'Text'} onClick={(event)=>optionSelect(event,index)}>
                        {option.value}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}