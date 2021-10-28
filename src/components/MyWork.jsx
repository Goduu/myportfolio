import { makeStyles, Typography } from "@material-ui/core"
import InsetContainer from "@mui-treasury/layout/components/InsetContainer"
import StocksStudies from "./cards/StocksStudies"
import Talesorstory from "./cards/Talesorstory"

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3),
        width: '90%',
        marginRight: 'auto'
    }
}))

function MyWork() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography align='center' variant='h3'>
                My works
            </Typography>
            <Talesorstory />
            <StocksStudies />
        </div>
    )
}

export default MyWork