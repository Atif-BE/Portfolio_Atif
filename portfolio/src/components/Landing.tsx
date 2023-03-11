import { Title } from "../shared/Title";
import { SubTitle } from "../shared/SubTitle";
import { Text } from "../shared/Text";
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
                    <Text>Contact me here!</Text>
                </Left>
                <Right>

                </Right>
            </Section>
        </Container>
    )
}

export default Landing;