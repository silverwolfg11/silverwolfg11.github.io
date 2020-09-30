import React from 'react';

import ContentContainer from '../style/ContentContainer';
import { Header3, Header5, Header6 } from '../style/Headers';
import Paragraph from '../style/Paragraph';

const Home = () => (
    <ContentContainer>
        <Header3 align-center>
            Welcome to the site!
        </Header3>
        <Paragraph>
            Hi there! How ya doing? Doing good I hope on this fine beautiful day. You're probably wondering what this site is
            for. Well, let me tell you. ABSOLUTELY NOTHING.
        </Paragraph>
        <Header5 align-center>Why does this site exists?</Header5>
        <Paragraph>
            Well I figured that since github is offering free pages, it might as well be used.
            Most likely this site will be used to host javadocs for various projects if neccesary. It may also just contain random
            content wherever.
        </Paragraph>
        <Paragraph>
            Also this site is a React JS app and entirely delivered via javascript, so that's pretty cool.
        </Paragraph>
        <Header5 align-center>Why is this site horribly designed?</Header5>
        <Paragraph>
            Well it's because I decided not to use
            Bootstrap on it which is like the only styling framework I know how to use at all. Since this is a React App,
            I decided to go with Material-UI and I have concluded that this requires much more effort than I'm willing to put in.
        </Paragraph>
        <Paragraph>
            But hey, at least the text is centered right. Like imagine if the text started all the way on the left side
            and continued onto the right. That would be absolutely terrible and I have not totally done that on a site before.
            Except for mobile users because everything looks centered for mobile users anyway. 
        </Paragraph>
        <Header5 align-center>Is there anything to do on this site?</Header5>
        <Paragraph>
            Well, you can read the about page. Also eventually the Pictures page will contain pictures of cats, dogs
            and random things so that's pretty neat.
        </Paragraph>
    </ContentContainer>
);

export default Home;