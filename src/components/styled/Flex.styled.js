import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > descent-override,
    & > ul {
        flex: 1;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
        text-align: center;
    }
`