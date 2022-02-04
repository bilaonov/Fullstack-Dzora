//@ts-nocheck
import React from 'react'
import '../../App.scss'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

interface ModalBlockProps {
    title?: string
    children: React.ReactNode
    visible?: boolean
    onClose: () => void
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
        <Dialog
            fullWidth={true}
            scroll={'body'}
            maxWidth={'sm'}
            open={visible}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>
                <div className="dialog__header">
                    <span>{title}</span>
                    <IconButton onClick={onClose} aria-label="close">
                        <CloseIcon style={{ fontSize: 20 }} />
                    </IconButton>
                </div>
                <DialogContent dividers className="dialog__content">
                    {children}
                </DialogContent>
            </DialogTitle>
        </Dialog>
    )
}
