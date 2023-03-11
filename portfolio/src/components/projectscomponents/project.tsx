import styled from "styled-components";
import { TextNonItalic } from "../../shared/Text";
import { Title } from "../../shared/Title";

const Container = styled.div`

`

type ProjectProps = {
    name: string;
    link: any;
    desc: string;
}

const Project = (props:ProjectProps) => {
    return (
        <Container>
            <Title>{props.name}</Title>
            <TextNonItalic>{props.desc}</TextNonItalic>
            <button onClick={location.href=props.link}>
                Go to Github
            </button>
        </Container>
    )

}

export default Project;