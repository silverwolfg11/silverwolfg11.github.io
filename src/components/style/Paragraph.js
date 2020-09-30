import React from 'react';
import Typography from '@material-ui/core/Typography';

const Paragraph = ({ children, ...props }) => (
    <Typography variant="body1" style={{ padding: "2%" }} gutterBottom {...props}>
        {children}
    </Typography>
);

export default Paragraph;