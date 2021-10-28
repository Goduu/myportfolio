import MainPanel from "../mainpainel/MainPainel"

const infos = {
    title: "Talesorstory",
    description: "A simple application using the concepts of GraphQL. It allows a user to create a Tale and comment the Tales of other users.",
    stack: ["mongodb", "nodejs", "graphql", "react"],
    github: "https://github.com/Goduu/talesorstory  "

}

function Talesorstory() {
    return (
        <MainPanel infos={infos} />
    )
}

export default Talesorstory