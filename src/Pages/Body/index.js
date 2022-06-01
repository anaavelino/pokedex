import styled from '@emotion/styled';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Pokedex from '../../assets/background.svg';
import Header from '../Header';

const CustomDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'stretch',
  position: 'relative',
  minWidth: '100vw',
  maxWidth: '100vh',
  minHeight: '100vh',
  maxHeight: '100vh',
  overflow: 'auto',
  //backgroundColor: '#232323',
  backgroundImage: `url(${Pokedex})`,
});

export default function Body() {
  return (
    <CustomDiv>
     <Header title='Pokedex'/>
      <Outlet />
    </CustomDiv>
  );
}
