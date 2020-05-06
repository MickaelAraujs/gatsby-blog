import styled from 'styled-components';

const Container = styled.div`
    max-width: 750px;
    margin: 0 auto;
`;

const Header = styled.header`
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
`;


export { Container, Header, List };