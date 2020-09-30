import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function ContentContainer({children}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div style={{ paddingTop: '13%'}} >
            {children}
        </div>
      </Container>
    </React.Fragment>
  );
}