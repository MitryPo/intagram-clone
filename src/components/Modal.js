import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import Login from './Login'
import SignUp from './SignUp'


function ModalComponent({ open, setOpen }) {
    function getModalStyle() {
        const top = 50
        const left = 50
        
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }
    
    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 350,
            backgroundColor: theme.palette.background.paper,
            borderRadius: '3px',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    
    const classes = useStyles()
    const [modalStyle] = useState(getModalStyle)
    const [login, setLogin] = useState(true)
    
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <div style={modalStyle} className={classes.paper}>
                {login? <Login login={setLogin}/> : <SignUp login={setLogin}/>}
            </div>
        </Modal>
    )
}

export default ModalComponent
