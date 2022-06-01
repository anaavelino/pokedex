import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { React, useState, useEffect } from 'react';
import PikachuGif from '../../assets/pikachu.gif';
import PikachuErro from '../../assets/error.gif';

import FlexBox from '../Flexbox';

const CustomDiv = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  border: '2px solid',
  borderColor: 'gray',
  borderRadius: '12px',
}));

const CustomImg = styled('img')(({ theme }) => ({
  height: '14rem',
  width: '18rem',
  backgroundColor: '#232323',
  borderColor: 'gray',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
}));
export default function Loader({ status, children }) {
  const [current, setCurrent] = useState(status);
  useEffect(() => {
    setTimeout(() => {
      setCurrent(status);
    }, 1000);
  }, [status]);

  switch (current) {
    case 'LOADING':
      return (
        <FlexBox
          direction={'column'}
          sx={{ height: '100vh', justifyContent: 'center' }}
        >
          <CustomDiv>
            <CustomImg src={PikachuGif} />
            <Typography sx={{ fontSize: '30px', fontWeight: '40px' }}>
              Carregando..
            </Typography>
          </CustomDiv>
        </FlexBox>
      );
    case 'ERROR':
      return (
        <FlexBox direction={'column'}  sx={{ height: '100vh', justifyContent: 'center' }}>
          <CustomDiv>
            <CustomImg src={PikachuErro} />
            <Typography sx={{ fontSize: '30px', fontWeight: '40px' }}>
              Error
            </Typography>
          </CustomDiv>
        </FlexBox>
      );
    default:
      return children;
  }
}
