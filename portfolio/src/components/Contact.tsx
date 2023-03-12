import { Container, Section, Left, Right, Wrapper } from "../styles/contactPageStyle";
import { Title } from "../styles/Title";
import { SubTitle } from "../styles/SubTitle";
import { TextNonItalic } from "../styles/Text";
import Form from "../reusablecomponents/Form";


const Contact = () => {
    return(
        <Container>
            <Wrapper>
                <Section style={{justifyContent:"center"}}>
                    <Title style={{ backgroundColor: "white", color: "black", borderRadius: "5px" }}>Contact Me Form</Title>
                </Section>
                <Section>
                    <Left>
                        <Form/>
                    </Left>
                    <Right>

                    </Right>
                </Section>
            </Wrapper>
        </Container>
    )
}

export default Contact;