import styled from "styled-components";

type ButtonProps = {
    link: any;
}

const Button = (props:ButtonProps) => {
    return (
        <>
            <a href={props.link}>
                <button>Go to github</button>
            </a>
        </>
    )
}

export default Button;