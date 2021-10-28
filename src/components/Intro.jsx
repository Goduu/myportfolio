import { makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3)
    }
}))
function Intro() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="h2" align="center" paragraph>
                Hi, I'm Igor
            </Typography>
            <Typography variant="h4" align="center" paragraph>
                Software Engineer
            </Typography>
        </div>
    )
}

export default Intro