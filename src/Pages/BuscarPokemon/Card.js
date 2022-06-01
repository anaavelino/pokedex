import React, { useState } from 'react';
import { Typography } from '@mui/material';
import FlexBox from '../../components/Flexbox';
import { styled } from '@mui/system';
import Background from '../../assets/pokedex-background.svg';
import imageNotFound from '../../assets/pokebola-removebg-preview.png';
import { CustomTypes } from './CustomType';

const CustomImg = styled('img')({
  height: '10rem',
  width: '10rem',
  padding: '5px',
});

const CustomDiv = styled('div')(({ theme }) => ({
  width: '91%',
  position: 'relative',
  padding: '1rem',
  fontFamily: theme.typography.fontFamily,
  borderRadius: '5px',
  color: '#F6F5F3',
}));

export default function Card({ arrayPokemon }) {
  const [pokemon, setIdPokemon] = useState(arrayPokemon);
  const [theme, setTheme] = useState([]);
  console.log('THEMEE', arrayPokemon);

  selectTheme();
  function selectTheme() {
    switch (theme) {
      case 'water':
        theme.push({ colorCard: '#4B84AA', colorImg: '#71A1C1' });
        return theme;

      default:
        return 'a';
    }
  }

  return (
    <>
      {pokemon.length === 0 ? (
        <FlexBox
          direction={'column'}
          align={'center'}
          sx={{
            minHeight: '340px',
            borderRadius: '8px',
            backgroundColor: '#f9f2ec',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={(theme) => ({
              fontSize: theme.typography.h5.fontSize,
              fontWeight: 'bold',
            })}
          >
            Procurando um pokémon?
          </Typography>
          <CustomImg
            sx={{ backgroundColor: '#f9f2ec' }}
            src={imageNotFound}
          ></CustomImg>
        </FlexBox>
      ) : (
        <FlexBox
          direction={'column'}
          sx={(theme) => ({
            borderRadius: '8px',
            backgroundColor: pokemon[0].theme[0].card,
            padding: '8px',
            //backgroundImage: `url(${Background})`,
            // border: '2px solid',
            // borderColor:theme.palette.primary.main,
          })}
        >
          <Typography
            sx={(theme) => ({
              fontSize: theme.typography.h5.fontSize,
              textAlign: 'start',
              marginBottom: '1rem',
              textTransform: 'capitalize',
              paddingLeft: '1rem',
              width: '95%',
              // backgroundColor: 'white',
              borderRadius: '8px',
              fontWeight: 'bold',
              color: '#F6F5F3',
            })}
          >
            {pokemon[0].name}
          </Typography>
          <FlexBox
            direction={'column'}
            sx={{
              backgroundColor: pokemon[0].theme[0].cardPoke,
              borderRadius: '50%',
              padding: '15px',
            }}
          >
            <CustomImg src={pokemon[0].img}></CustomImg>
          </FlexBox>
          <CustomDiv>
            <FlexBox direction={'row'} align={'space-around'}>
              <Typography sx={{ textAlign: 'center', width: '100%' }}>
                Altura:{pokemon[0].height}m
              </Typography>
              <Typography sx={{ textAlign: 'center', width: '100%' }}>
                Peso: {pokemon[0].weight}Kg
              </Typography>
            </FlexBox>
            <FlexBox direction={'row'} align={'flex-end'}>
              {pokemon[0].types.map((val) => {
                return (
                  <Typography sx={{ textAlign: 'center' }}>
                    {CustomTypes(val.type.name)}
                  </Typography>
                );
              })}
            </FlexBox>
          </CustomDiv>
        </FlexBox>
      )}
    </>
  );
}

Card.defaultProps = {
  arrayPokemon: [{ name: 'testes', id: 0 }],
};
