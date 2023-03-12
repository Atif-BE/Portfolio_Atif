import { Container, Section, Left, Right, Wrapper } from "../styles/contactPageStyle";
import { Title } from "../styles/Title";
import { SubTitle } from "../styles/SubTitle";
import { TextNonItalic } from "../styles/Text";


const Contact = () => {
    return(
        <Container>
            <Wrapper>
                <Section>
                    <Title style={{ backgroundColor: "white", color: "black", borderRadius: "5px" }}>Enthusiast Web Developer!</Title>
                </Section>
                <Section>
                    <Left>
                        
                    </Left>
                    <Right>

                    </Right>
                </Section>
            </Wrapper>
        </Container>
    )
}

export default Contact;