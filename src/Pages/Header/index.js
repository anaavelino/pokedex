import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const CustomDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyItems: 'left',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  padding: '3px',
  paddingLeft: '5px',
  //  borderBottom: '5px solid',
  //borderColor: theme.palette.secondary.main,
}));

export default function Header({ title }) {
  return (
    <CustomDiv onClick={() => {}}>
      <CatchingPokemonIcon
        sx={(theme) => ({
          width: '55px',
          height: '55px',
          color: theme.palette.secondary.main,
        })}
      />
      <Typography
        sx={(theme) => ({
          fontSize: theme.typography.h3.fontSize,
          textStyle: 'none',
          fontFamily: 'Fredoka One, cursive',
          textShadow: `2px 3px ${theme.palette.secondary.main}`,
        })}
      >
        <Link to='/' style={{ textDecoration: 'none', color: '#f9f2ec' }}>
          {title}
        </Link>
      </Typography>
    </CustomDiv>
  );
}
