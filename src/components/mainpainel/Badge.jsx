import { Box, makeStyles, Paper, Typography } from "@material-ui/core"
import Image from "next/image";
import { Textfit } from 'react-textfit';
import Tooltip from '@material-ui/core/Tooltip';

const badges = {
    "graphql": { name: "GraphQL", colors: ["#DC009A", "#E535AB"] },
    "flask": { name: "Flask", colors: ["#FFCD74", "#FFCA72", '#000000'] },
    "heroku": { name: "Heroku", colors: ["#5F478A", "#574284"] },
    "java": { name: "Java", colors: ["#5382A1", "#6C95B2"] },
    "js": { name: "JavaScript", colors: ["#F0DB4F", "#EEE953"] },
    "ts": { name: "TypeScript", colors: ["#007ACC", "#065AAA"] },
    "materialui": { name: "MaterialUI", colors: ["#0288D1", "#29B6F6"] },
    "mongodb": { name: "MongoDB", colors: ["#599636", "#6CAC48"] },
    "nextjs": { name: "Next.js", colors: ["#599636", "#6CAC48"] },
    "nodejs": { name: "Node.js", colors: ["#63B546", "#72C54E"] },
    "python": { name: "Python", colors: ["#FFC331", "#FFE052"] },
    "spring": { name: "Spring", colors: ["#69AC17", "#77BC1F"] },
    "react": { name: "React", colors: ["#0BCAF8", "#6ED9FA"] },
    "rest": { name: "Rest", colors: ["#0BCAF8", "#6ED9FA"] },
    "chartsjs": { name: "Charts.js", colors: ["#0BCAF8", "#6ED9FA"] },
    "recharts": { name: "Recharts", colors: ["#0BCAF8", "#6ED9FA"] },
    "reactrouter": { name: "ReactRouter", colors: ["#0BCAF8", "#6ED9FA"] },
}

function Badge(props) {
    const { type } = props
    const { name } = badges[type]
    const useStyles = makeStyles((theme) => ({
        wrapper: {
            margin: theme.spacing(1)
        }
    }))

    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Image src={'/svg/' + name + '.svg'} title={name} alt="me" width="50" height="50" />
        </div>

    )
}

export default Badge
