import styled from "styled-components";
import Button from "../../shared/Button";
import { TextNonItalic } from "../../shared/Text";
import { Title } from "../../shared/Title";

const Container = styled.div`
     box-shadow: 10px 10px #61DBFB;
     border: solid black 2px;
     transition: transform .2s;
     padding: 2rem;
     &:hover{
        transform: scale(1.05);
     }
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
            <Button link={props.link}  />
        </Container>
    )

}

export default Project;