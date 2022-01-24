//@ts-nocheck
import React from 'react'
import '../../App.scss'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

interface ModalBlockProps {
    title?: string
    children: React.ReactNode
    visible?: boolean
    onClose: () => void
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '4px',
    boxShadow: 24,
    p: 3,
}

export const ModalBlock: React.FC<ModalBlockProps> = ({
    title,
    onClose,
    visible = false,
    children,
}: ModalBlockProps): React.ReactElement | null => {
    if (!visible) {
        return null
    }

    return (
        <Modal
            open={visible}
            onClose={onClose}
            className="modal"
            aria-labelledby="form-dialog-title"
        >
            <Box sx={style}>
                <div id="form-block">
                    <DialogTitle >{title}</DialogTitle>
                    <IconButton onClick={onClose} color="secondary" aria-label="close">
                        <CloseIcon style={{ fontSize: 20 }} color="secondary" />
                    </IconButton>
                </div>
                <div>{children}</div>
            </Box>
        </Modal>
    )
}
