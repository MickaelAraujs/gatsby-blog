import React from 'react';

import { Card } from './styles';

export default function PostCard({ children }) {
    return (
        <Card>
            {children}
        </Card>
    )
}