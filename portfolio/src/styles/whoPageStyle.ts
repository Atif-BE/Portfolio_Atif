import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
`

export const Section = styled.div`
    display: flex;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Left = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
`

export const Right = styled.div`
    flex: 3;
    text-align: center
` 