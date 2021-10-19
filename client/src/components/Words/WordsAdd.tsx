import React from 'react'


import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    
    bgcolor: 'background.paper',
    borderRadius: 1,
    pt: 2,
    px: 4,
    pb: 3,
    '& .MuiTextField-root': { m: 1, width: '400' },
  };

const WordsAdd = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
            <Button 
            onClick={handleOpen}
            variant="contained" 
            color="success"
            >
                Добавить слово
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box 
                sx={style}
                component="form"
                >
                    <TextField
                    fullWidth
                    id="standard-textarea"
                    label="Добавить слово на дигорском"
                    placeholder="Введите слово на дигорском"
                    
                    variant="standard"
                    />
                    <TextField
                    fullWidth
                    id="standard-textarea"
                    label="Добавить слово на русском"
                    placeholder="Введите слово на русском"
                    
                    variant="standard"
                    />
                    <Button 
                    sx={{mt: 3, mr: 2}}
                    variant="outlined"
                    onClick={handleClose}
                    >
                        Отменить
                    </Button>
                    <Button 
                    sx={{mt: 3}}
                    variant="contained" 
                    color="success">
                        Добавить
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}

export default WordsAdd
