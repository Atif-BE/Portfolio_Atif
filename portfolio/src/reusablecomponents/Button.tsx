import styled from "styled-components";

const Btn = styled.button`
    background-color: #61DBFB;
    color: white;
    width: 6rem;
    padding: .5rem;
    border: none;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        bacground-color: #081214;
    }
`

type ButtonProps = {
    link: any;
}

const Button = (props:ButtonProps) => {
    return (
        <>
            <a href={props.link}>
                <Btn>Go to github</Btn>
            </a>
        </>
    )
}

export default Button;