import styled from "styled-components";
import Button from "../reusablecomponents/Button";
import { TextNonItalic } from "../../styles/Text";
import { Title } from "../../styles/Title";

const Container = styled.div`
     box-shadow: 10px 10px #61DBFB;
     background-color: #020a1c;
     border: solid black 2px;
     border-radius: 5px;
     display: flex;
     flex-direction: column;
     width: 100%;
     gap: 10px;
     align-items: center;
     transition: transform .2s;
     padding: 1rem;
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
            <Title style={{ color:"#61DBFB", fontSize:"20px"}}>{props.name}</Title>
            <TextNonItalic style={{fontSize:"16px"}}>{props.desc}</TextNonItalic>
            <Button link={props.link}  />
        </Container>
    )

}

export default Project;