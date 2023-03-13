import { Btn } from "../../styles/Btn";

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