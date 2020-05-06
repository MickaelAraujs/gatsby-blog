import React from 'react';

import ListLink from '../ListLink';
import { Container, Header, List } from './styles';

export default function Layout({ children }) {
    return (
        <Container>
            <Header>
                <div>
                    <h1>My Gatsby Blog</h1>
                    <h2>some cool description here for the blog</h2>
                </div>
                
                <List>
                    <ListLink to='/'>Home</ListLink>
                    <ListLink to='/contact'>Contact</ListLink>
                    <ListLink to='/about'>About</ListLink>
                </List>
            </Header>
            
            <hr />

            {children}
        </Container>
    )
}