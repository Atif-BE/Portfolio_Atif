import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
`

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`

export const Left = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1px;
`

export const Right = styled.div`
    flex: 2;
`