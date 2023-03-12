import { Title } from "../styles/Title";
import { SubTitle } from "../styles/SubTitle";
import { TextItalic } from "../styles/Text";
import { Container, Right, Left, Section } from "../styles/landingPageStyle";
import NavBar from "./NavBar";

const Landing = () => {
    return (
        <Container>
            <NavBar />
            <Section>
                <Left>
                    <Title>Hi, I am Atif Khalil</Title>
                    <SubTitle>Full Stack Developer</SubTitle>
                    <TextItalic>Contact me here!</TextItalic>
                </Left>
                <Right>

                </Right>
            </Section>
        </Container>
    )
}

export default Landing;