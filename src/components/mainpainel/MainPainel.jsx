import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import GitHubIcon from '@material-ui/icons/GitHub';
import Image from 'next/image'
import Hexagon from './Hexagon'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MainPanel() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        <Image src="/svg/graphql.svg" alt="me" width="60" height="60" />
                        <Image src="/svg/flask.svg" alt="me" width="60" height="60" />
                        <Image src="/svg/heroku.svg" alt="me" width="60" height="60" />
                        <Image src="/svg/java.svg" alt="me" width="60" height="60" />
                        <Image src="/svg/js.svg" alt="me" width="60" height="60" />
                        <Image src="/svg/materialui.svg" alt="me" width="60" height="60" />
                        <Image src="/svg/mongodb.svg" alt="me" width="60" height="60" />
                        <Image src="/svg/nextjs.svg" alt="me" width="60" height="60" />
                        <Image src="/svg/nodejs.svg" alt="me" width="60" height="60" />
                        <Image src="/svg/python.svg" alt="me" width="60" height="60" />
                        <Image src="/svg/hexagon.svg" alt="me" width="60" height="60" />
                        <Hexagon/>
                        <Hexagon/>
                        Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="previous">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image="/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
            />
        </Card>
    );
}