import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography} from "@mui/material";
import React from "react";
import {createTheme} from "@mui/material/styles";
import {makeStyles} from "@mui/styles";

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

const cards = [1, 2, 3, 4, 5, 6 , 7, 8 , 9];

function MainComponent() {
    const classes = useStyles();
    return(
        <main>
            <Paper className={classes.MainFeaturesPost}
                   style={{backgroundImage: 'url(https://images4.newscred.com/Zz1kNmFkYmFmNzhlNGIxMWViYTU1ZDFmYjg0ZWI5MTc4Zg=='}}>
                <Container fixed>
                    <div className={classes.overlay} />
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturesPostContent}>
                                <Typography
                                    component="h1"
                                    variant="h3"
                                    color="inherit"
                                    gutterBottom>

                                    Вариации

                                </Typography>
                                <Typography
                                    variant="h5"
                                    color="inherit"
                                    paragraph>
                                    Ах, давно ли гулял я с тобой! <br/>
                                    Так отрадно шумели леса! <br/>
                                    И глядел я с любовью немой <br/>
                                    Всё в твои голубые глаза. <br/>


                                </Typography>
                                <Button variant="contained" color="secondary"> Learn More</Button>

                            </div>
                        </Grid>
                    </Grid>

                </Container>

            </Paper>
            <div className={classes.mainContent}>
                <Container maxWidth="sm">
                    <Typography variant="h2" align="center" color="textPrimary" className={classes.textMain} getterBottom> Web Lesson</Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        День весенний, пленительный день!<br/>
                        Так приветно журчали ручьи,<br/>
                        А в лесу, в полусветлую тень<br/>
                        Так светло западали лучи!<br/>
                    </Typography>
                    <div className={classes.mainButtons}>
                        <Grid container spacing={5} justifyContent="center">
                            <Grid item>
                                <Button variant="contained" color="primary"> Стартуем</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary"> Пиздуем</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia}
                                           image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/9c/3e/7e/caption.jpg?w=500&h=400&s=1"
                                           title="image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" gutterBottom>
                                        Blog post
                                    </Typography>
                                    <Typography>
                                        Post Description
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        View
                                    </Button>
                                    <Button size="small" color="primary">
                                        Edit
                                    </Button>

                                </CardActions>


                            </Card>

                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    )
}

export default MainComponent;