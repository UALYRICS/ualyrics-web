import React, { FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FirstLetterToolbar from '../../componenets/FirstLetterToolbar/FirstLetterToolbar';
import './Page.css';
import { Logo } from '../../componenets/Logo/Logo';
import { Footer } from '../../componenets/Footer/Footer';
import { SearchBar } from '../../componenets/SearchBar/SearchBar';

export const Page: FunctionComponent<{}> = ({ children }) => (
  <>
  <Container maxWidth="md" className="content">
    <Logo />
    <FirstLetterToolbar/>
    <SearchBar/>
    <Box>{ children }</Box>
  </Container>
  <Footer/>
  </>
);