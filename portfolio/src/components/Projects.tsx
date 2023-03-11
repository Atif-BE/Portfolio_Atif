import { Title } from "../shared/Title";
import { ChildSection, Container, Section, Wrapper } from "../styles/projectsPageStyle";
import Project from "./projectscomponents/project";

const Projects = () => {
    return (
        <Container>
            <Wrapper>
                <Section>
                    <Title>These are my Projects</Title>
                </Section>
                <Section style={{flexWrap:"wrap"}}>
                    <ChildSection style={{width:"40%"}}>
                        <Project name="My Portfolio" desc="This is my latest personal project and showcases most of my knowledge using React" link={""} />
                    </ChildSection>
                    <ChildSection style={{ width: "40%" }}>
                        <Project name="Headless CMS" desc="Using Gatsby and Wordpress I created a website to showcase laptops" link={""} />
                    </ChildSection>
                    <ChildSection style={{ width: "40%" }}>
                        <Project name="React Native Game" desc="This was a Higher or Lower type of game that was created by me and 2 others using React Native" link={""} />
                    </ChildSection>
                    <ChildSection style={{ width: "40%" }}>
                        <Project name="OAuth" desc="Created a authentication system using MSAL 2.0 (This was created for use in other applications)" link={""} />
                    </ChildSection>
                </Section>
            </Wrapper>
        </Container>
    )
}

export default Projects;