import { Title } from "../styles/Title";
import { TextNonItalic } from "../styles/Text";
import { Container, Section, Wrapper } from "../styles/whoPageStyle";
import { SubTitle } from "../styles/SubTitle";
import { Left, Right } from "../styles/whoPageStyle";

const Who = () => {
    const skills = ["TypeScript", "JavaScript", "ReactJS/TS", "NodeJs", "ExpressJs", "MongoDB", "MySQL", "C# ASP.NET", "Java"]


    return (
        <Container>
            <Wrapper>
                <Section style={{justifyContent:"center"}}>
                    <Title style={{backgroundColor:"white", color:"black", borderRadius:"5px"}}>Enthusiast Web Developer!</Title>
                </Section>
                <Section>
                    <Left>
                        <p>hi</p>
                    </Left>
                    <Right>
                        <SubTitle>Education and Experience</SubTitle>
                        <TextNonItalic>3 year Bachelors Electronics-ICT <br /> 2 years Graduate Programming</TextNonItalic>
                        <TextNonItalic>6 months Full Stack Developer Internship at Amotek Technologies</TextNonItalic>
                        <SubTitle>Skills</SubTitle>
                        {skills.map(e => <TextNonItalic>{e}</TextNonItalic>)}
                    </Right>
                </Section>
            </Wrapper>
        </Container>
    )
}

export default Who;