import React from 'react';
import Typography from '@material-ui/core/Typography';

const Header = ({type, ...props}) => {
    if (props['align-center'])
        props.style = { textAlign: "center", ...props.style };

     return <Typography variant={type} component={type} {...props} gutterbottom />
}

export const Header1 = (props) => <Header type={"h1"} {...props} />;
export const Header2 = (props) => <Header type={"h2"} {...props} />;
export const Header3 = (props) => <Header type={"h3"} {...props} />;
export const Header4 = (props) => <Header type={"h4"} {...props} />;
export const Header5 = (props) => <Header type={"h5"} {...props} />;
export const Header6 = (props) => <Header type={"h6"} {...props} />;
