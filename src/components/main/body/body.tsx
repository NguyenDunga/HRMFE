import styled from "styled-components";

const StyledBody = styled.div`
    background-color: greenyellow;
    height: 100%;
    width: 100%;
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
`;

function Body(props: { children: React.ReactNode }) {

    return <StyledBody>
        {props.children}
    </StyledBody>
};

export default Body;