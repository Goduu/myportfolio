import { Box, makeStyles, Paper, Typography } from "@material-ui/core"
import Image from "next/image";
import { Textfit } from 'react-textfit';



function Hexagon() {
    const useStyles = makeStyles((theme) => ({
        root: {
            position: 'relative',
            width: '150px',
            height: '150px',
            margin: theme.spacing(1)
        },
        hexagon: {
            position: 'absolute',
            color: '#707285',
            fontSize: '3.54em',
            top: 0,
            left: 0,
        },
        hexagonIn: {
            position: 'absolute',
            color: '#5B5C6C',
            fontSize: '3.1em',
            top: '0.1em',
            left: '0.055em',
        },
        bandIn: {
            top: '2.7em',
            left: '0.1em',
            width: '1.85em',
            position: 'absolute',
            height: '1em',
            backgroundColor: '#0288D1',
            borderRadius: 8,
            paddingTop: '3px',
            padding: '2px'
        },
        band: {
            top: '2.7em',
            left: '0.1em',
            width: '2em',
            position: 'absolute',
            height: '1em',
            backgroundColor: '#29B6F6',
            borderRadius: 8,
            paddingTop: '3px'
        },
        text: {
            top: '4.5em',
            left: '1.1em',
            width: '1.9em',
            position: 'absolute',
            paddingTop: '3px'
        },
        icon: {
            top: '1.7em',
            left: '0.8em',
            position: 'absolute',
        }
    }))

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.hexagon} >&#11043;</div>
            <div className={classes.hexagonIn} >&#11043;</div>
            <div className={classes.icon}>
                <Image src="/svg/mongodb.svg" alt="me" width="30" height="30" />
            </div>
            <Box className={classes.band} component="div" m={1} alignItems='center' />

            <Box className={classes.bandIn} component="div" m={1} alignItems='center' >
                <Textfit mode="single" >
                    Next.js
                </Textfit>
            </Box>

        </div>
    )
}

export default Hexagon