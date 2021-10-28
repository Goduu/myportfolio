import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3),
        width: '10%',
        backgroundColor: 'red'
    }
}))

function Content({children}) {
    const classes = useStyles()
    return (
        <dvi className={classes.root}>
            asd
            {children}
        </dvi>
    )
}

export default Content