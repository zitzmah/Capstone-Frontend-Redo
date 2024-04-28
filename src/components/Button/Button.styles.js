import styled from 'styled-components';

export const StyledButton = styled.button.attrs((props) => ({
 
    variant: undefined,
}))`
    border: 2px solid #ff0500;
    background-color: ${(props) => (props.variant === 'outline' ? '#FFF' : '#ff6865')};
    color: ${(props) => (props.variant === 'outline' ? '#ff4fab' : '#FFF')};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s all ease-out;
    border-radius: 20px;
    &:hover {
        background-color: ${(props) => (props.variant !== 'outline' ? '#FFF' : '#ffb3b2')};
        color: ${(props) => (props.variant !== 'outline' ? '#ffb3b2' : '#FFF')};
    }
`;

export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
`;
