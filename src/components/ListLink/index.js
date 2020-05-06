import React from 'react';
import { Link } from 'gatsby';

import { Li } from './styles';

export default function ListLink({ to, children }) {
    return (
        <Li>
            <Link to={to}>{children}</Link>
        </Li>
    )
}