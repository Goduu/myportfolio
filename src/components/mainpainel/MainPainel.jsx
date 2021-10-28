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
import Badge from './Badge'
import Carousel from './Carousel';
import LinkIcon from '@material-ui/icons/Link';
import { CardHeader, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        margin: theme.spacing(2),
        padding: theme.spacing(1),
        paddingTop: theme.spacing(3),
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2)
    },
    contentWrapper: {
        marginRight: 'auto',
        display: 'block'
        // [theme.breakpoints.down('sm')]: {
        //     display: 'block'
        // }

    },
    content: {
        display: 'flex',
        alignSelf: 'center'

    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignSelf: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MainPanel(props) {

    const { infos } = props
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <Typography variant="h4" paragraph>
                {infos.title}
            </Typography>

            <div className={classes.contentWrapper}>
                <Carousel imgs={infos.images} />

                <div className={classes.details}>
                    <Typography paragraph>
                        {infos.description}
                    </Typography>
                    <div className={classes.content}>
                        {infos.stack.map(s => {
                            return <Badge type={s} key={infos.title + s} />
                        })}

                    </div>
                    <div className={classes.controls}>
                        <Link href={infos.github} rel="noopener" target="_blank">
                            <IconButton aria-label="previous">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        {infos.link &&
                            <Link href={infos.link} rel="noopener" target="_blank">
                                <IconButton aria-label="play/pause">
                                    <LinkIcon />
                                </IconButton>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </Card>
    );
}



// <Badge type="graphql" colors={["#DC009A", "#E535AB"]} />
// <Badge type="flask" colors={["#FFCD74", "#FFCA72", '#000000']} />
// <Badge type="heroku" colors={["#5F478A", "#574284"]} />
// <Badge type="java" colors={["#5382A1", "#6C95B2"]} />
// <Badge type="js" colors={["#F0DB4F", "#EEE953"]} />
// <Badge type="ts" colors={["#007ACC", "#065AAA"]} />
// <Badge type="materialui" colors={["#0288D1", "#29B6F6"]} />
// <Badge type="mongodb" colors={["#599636", "#6CAC48"]} />
// <Badge type="nextjs" colors={["#599636", "#6CAC48"]} />
// <Badge type="nodejs" colors={["#63B546", "#72C54E"]} />
// <Badge type="python" colors={["#FFC331", "#FFE052"]} />
// <Badge type="spring" colors={["#69AC17", "#77BC1F"]} />
// <Badge type="react" colors={["#0BCAF8", "#6ED9FA"]} />