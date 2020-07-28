import styled from 'styled-components'

export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 14px;
    margin-bottom: 8px;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.6);

    &:focus, &:active {
        border: 1px solid rebeccapurple;
    }
`;