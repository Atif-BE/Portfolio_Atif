import { Container } from "../styles/projectsPageStyle";
import Project from "./projectscomponents/project";

const Projects = () => {
    return (
        <Container>
            <Project name="Project 1" desc="This is Project 1" link={"https://www.google.com"}></Project>
        </Container>
    )
}

export default Projects;