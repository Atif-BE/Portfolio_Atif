import { Title } from "../styles/Title";
import { SubTitle } from "../styles/SubTitle";
import { TextItalic } from "../styles/Text";
import { Container, Right, Left, Section } from "../styles/landingPageStyle";
import NavBar from "./NavBar";
import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";
import Bb8 from "./gltfcomponents/Bb8"


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
                    <Canvas>
                        <Stage environment="city">
                            {/* <Bb8/> */}
                        </Stage>
                    </Canvas>
                </Right>
            </Section>
        </Container>
    )
}

export default Landing;