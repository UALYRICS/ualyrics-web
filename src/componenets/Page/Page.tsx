import React, { FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FirstLetterToolbar from './FirstLetterToolbar';
import './Page.css';
import { Logo } from './Logo';
import { Footer } from './Footer';
import { SearchBar } from '../Search/SearchBar';

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