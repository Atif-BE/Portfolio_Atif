import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
`

export const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`
export const ChildSection = styled.div`
    margin: 20px 50px;
    flex: 1 0 33%;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`