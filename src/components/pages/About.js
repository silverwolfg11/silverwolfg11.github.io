import React from 'react';
import ContentContainer from "../style/ContentContainer";
import { Header2 } from '../style/Headers';
import Paragraph from '../style/Paragraph';

const About = () => (
    <ContentContainer>
        <Header2 align-center>
            About Me!
        </Header2>
        <Paragraph>
            Well, I'm a college student currently majoring in Computer Science, so I like to do a lot of computey stuff.
        </Paragraph>
        <Paragraph>
            My main and most used language is Java since I use it to develop against the Bukkit API. But I do know
            other programming languages like HTML, YAML, XML, JSON, TOML, etc. I also know some of those like configuration languages like
            PHP, Python, Javascript, C++, and dabbled in other minor ones. 
        </Paragraph>
    </ContentContainer>
);

export default About;