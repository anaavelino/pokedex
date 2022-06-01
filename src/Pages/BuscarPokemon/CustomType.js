import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import ElectricBoltSharpIcon from '@mui/icons-material/ElectricBoltSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import AutoFixHighSharpIcon from '@mui/icons-material/AutoFixHighSharp';
import GrassSharpIcon from '@mui/icons-material/GrassSharp';
import ScienceSharpIcon from '@mui/icons-material/ScienceSharp';
import BugReportSharpIcon from '@mui/icons-material/BugReportSharp';
import WaterSharpIcon from '@mui/icons-material/WaterSharp';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import DehazeSharpIcon from '@mui/icons-material/DehazeSharp';

const DivTypes = styled('div')(({ theme }) => ({
  display: 'flex',
  direction: 'row',
  justifyContent: 'center',
  color: 'white',
  marginTop: '1rem',
  marginRight: '4px',
  borderRadius: '8px',
  padding: '5px',
  textTransform: 'capitalize',

  // flex:'1 1',
}));

function CustomTypes(types) {
  switch (types) {
    case 'water':
      return (
        <DivTypes sx={{ backgroundColor: '#71A1C1' }}>
          <Typography>{types}</Typography>
          <WaterSharpIcon sx={{ height: '22px', weight: '19px' }} />
        </DivTypes>
      );
    case 'grass':
      return (
        <DivTypes sx={{ backgroundColor: '#86D5BC' }}>
          <Typography>{types}</Typography>
          <GrassSharpIcon sx={{ height: '22px', weight: '19px' }} />
        </DivTypes>
      );
    case 'poison':
      return (
        <DivTypes sx={{ backgroundColor: '#E949DB' }}>
          <Typography>{types}</Typography>
          <ScienceSharpIcon sx={{ height: '22px', weight: '19px' }} />
        </DivTypes>
      );
    case 'bug':
      return (
        <DivTypes sx={{ backgroundColor: '#89BE8B' }}>
          <Typography>{types}</Typography>
          <BugReportSharpIcon sx={{ height: '22px', weight: '19px' }} />
        </DivTypes>
      );

    case 'fire':
      return (
        <DivTypes sx={{ backgroundColor: '#F16A6A' }}>
          <Typography>{types}</Typography>
          <WhatshotSharpIcon sx={{ height: '22px', weight: '19px' }} />
        </DivTypes>
      );
    case 'fairy':
      return (
        <DivTypes sx={{ backgroundColor: '#F466B7' }}>
          <Typography>{types}</Typography>
          <AutoFixHighSharpIcon sx={{ height: '22px', weight: '19px' }} />
        </DivTypes>
      );
    case 'flying':
      return <DivTypes sx={{ backgroundColor: '#D0BC39' }}>{types}</DivTypes>;
    case 'electric':
      return (
        <DivTypes sx={{ backgroundColor: '#F0CD94' }}>
          <Typography>{types}</Typography>
          <ElectricBoltSharpIcon
            sx={{ height: '22px', weight: '19px', margin: '2px' }}
          />
        </DivTypes>
      );
    case 'normal':
      return (
        <DivTypes sx={{ backgroundColor: '#503D42' }}>
          <Typography>{types}</Typography>
          <CircleSharpIcon
            sx={{ height: '22px', weight: '19px', margin: '2px' }}
          />
        </DivTypes>
      );
    case 'ice':
      return (
        <DivTypes sx={{ backgroundColor: '#92D3DD' }}>
          <Typography>{types}</Typography>
          <AcUnitSharpIcon
            sx={{ height: '22px', weight: '19px', margin: '2px' }}
          />
        </DivTypes>
      );
    case 'psychic':
      return (
        <DivTypes sx={{ backgroundColor: '#F0D36A' }}>
          <Typography>{types}</Typography>
          <DehazeSharpIcon
            sx={{ height: '22px', weight: '19px', margin: '2px' }}
          />
        </DivTypes>
      );
    default:
      return <DivTypes sx={{ backgroundColor: 'gray' }}>{types}</DivTypes>;
  }
}

function ThemeTypes(type) {
  const colors = [];
  switch (type) {
    case 'water':
      colors.push({ card: '#4B84AA', cardPoke: '#71A1C1' });
      return colors;
    case 'grass':
      colors.push({ card: '#41B491', cardPoke: '#86D5BC' });
      return colors;
    case 'poison':
      colors.push({ card: '#BB17AE', cardPoke: '#E949DB' });
      return colors;
    case 'bug':
      colors.push({ card: '#6FB072', cardPoke: '#89BE8B' });
      return colors;
    case 'fire':
      colors.push({ card: '#EE4444', cardPoke: '#F16A6A' });
      return colors;
    case 'fairy':
      colors.push({ card: '#F02B9A', cardPoke: '#F466B7' });
      return colors;
    case 'flying':
      colors.push({ card: '#C6B22F', cardPoke: '#D0BC39' });
      return colors;
    case 'electric':
      colors.push({ card: '#EABA6B', cardPoke: '#F0CD94' });
      return colors;
    case 'ice':
      colors.push({ card: '#79CAD6', cardPoke: '#92D3DD' });
      return colors;
    case 'psychic':
      colors.push({ card: '#EECD57', cardPoke: '#F0D36A' });
      return colors;
    case 'ground':
      colors.push({ card: '#FCA253', cardPoke: '#FDB372' });
      return colors;
    default:
      colors.push({ card: '#BDB7AC', cardPoke: '#E1D2B7' });
      return colors;
  }
}

export { CustomTypes, ThemeTypes };
