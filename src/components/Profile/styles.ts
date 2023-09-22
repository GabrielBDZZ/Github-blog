import styled from "styled-components";

export const ProfileContainer = styled.div`
    height: 13.25rem;
    width: 54rem;
    border-radius: 10px;

    background: ${props => props.theme['base-profile']};

    display: flex;
    justify-content: center;
    margin: 0 auto;

    margin-top: -100px;
    position: relative;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.5);
`