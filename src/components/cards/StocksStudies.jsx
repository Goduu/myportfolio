import MainPanel from "../mainpainel/MainPainel"

const infos = {
    title: "Stocks Studies",
    description: "This is an web application with user management features that allows you to create a customized dashboard to make it easyer to study stocks.",
    stack: ["heroku","mongodb", "java", "spring", "rest", "react", "materialui", "chartsjs", "recharts"],
    github: "https://github.com/Goduu/stocks-studies-dashboard",
    link: "https://stocks-studies-java.herokuapp.com/",
    images: ['stocksstudy1', 'stocksstudy2', 'stocksstudy3']

}

function StocksStudies() {
    return (
        <MainPanel infos={infos} />
    )
}

export default StocksStudies