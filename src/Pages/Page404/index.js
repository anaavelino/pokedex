import React from 'react';
import Psyduck from '../../assets/psyduck404.jpg';
import { Link, Outlet } from 'react-router-dom';
import FlexBox from '../../components/Flexbox';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import './styles.css';
const CustomImg = styled('img')({
  height: '16rem',
  width: '16rem',
  backgroundColor: '#F9BE00',
  borderRadius: '50%',
  outline: '3px solid white',
  outlineOffset: '-5px',
});

export default function Page404() {
  return (
    <FlexBox
      direction={'column'}
      sx={{
        height: '100vh',
        justifyContent: 'center',
        backgroundColor: '#FFE799',
      }}
    >
      <CustomImg className='animation' src={Psyduck} />
      <Typography
        sx={{ fontSize: '20px', marginTop: '7px', fontWeight: 'bold', color: '#666666'}}
      >
        Psyduck confuso, página não encontrada
      </Typography>
      <Link
        to='/'
        className='back-home'
        style={{
          textDecoration: 'none',
          marginTop: '1rem',
          backgroundColor: 'white',
          padding: '1rem',
          borderRadius: '8px',
        }}
      >
        <Typography
          sx={{
            fontSize: '15px',
            marginTop: '7px',
            fontWeight: 'bold',
            color: '#666666',
          }}
        >
          Voltar para página Principal
        </Typography>
      </Link>
    </FlexBox>
  );
}
