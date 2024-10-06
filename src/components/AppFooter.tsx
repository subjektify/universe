import React from 'react';
import { Box, Link, Typography, Container } from '@mui/material';

const AppFooter: React.FC = () => {
    return (
        <footer>
            <Container maxWidth="sm">
                <Typography variant="body1">
                    Footer
                </Typography>
                <Copyright />
            </Container>
        </footer>
    );
};

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {"Copyright © Subjektify Labs Ltd. "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default AppFooter;
