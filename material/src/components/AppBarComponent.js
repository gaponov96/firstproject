import {
    AppBar,
    Box,
    Button,
    Container,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    IconButton, TextField,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from 'react';
import {makeStyles} from "@mui/styles";
import {createTheme} from "@mui/material/styles";

let theme = createTheme({

});

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    menuButton: {

        marginRight: 20
    },
    title: {
        flexGrow: 1
    },
    mainFeaturesPost : {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center"

    },
    mainFeaturesPostContent : {
        position: "relative",
        marginBottom: theme.spacing(5),
        marginTop: theme.spacing(10),
        padding: theme.spacing(6)


    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: "rgba(0,0,0,.9)"
    },
    cardMedia: {
        paddingTop: "70%"
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(11)
    },
    textMain: {
        paddingTop: "1em"
    }


});

function AppBarComponent() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };
return (
    <AppBar position="fixed">
        <Container fixed>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>Web lesson</Typography>
                <Box mr={3}>
                    <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Login</Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                        <DialogContent>
                            <DialogContentText> Залогиньтесь чтобы просмотреть больше</DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Adress"
                                type="email"
                                fullWidth

                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="pass"
                                label="Password"
                                type="password"
                                fullWidth

                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary"> Cancel</Button>
                            <Button onClick={handleClose} color="primary"> Log in</Button>
                        </DialogActions>
                    </Dialog>

                </Box>
                <Button color="secondary" variant="contained">Sign Up</Button>
            </Toolbar>
        </Container>
    </AppBar>
)
}

export default AppBarComponent;