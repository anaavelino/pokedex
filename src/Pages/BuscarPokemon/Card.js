import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import FlexBox from '../../components/Flexbox';
import { styled } from '@mui/system';
import Background from '../../assets/pokedex-background.svg';
import imageNotFound from '../../assets/pokebola-removebg-preview.png';
import { CustomTypes } from './CustomType';
import './styles.css'

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
  const [abilitie, setAbilitie] = useState('none');
  console.log('card', pokemon);
  console.log('abilitie', abilitie);

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
          <FlexBox direction={'row'} sx={{width:'100%', justifyContent:'right'}}>
            {!abilitie ? (
              <Button
                sx={(theme) => ({
                  color: '#F6F5F3',
                  backgroundColor: pokemon[0].theme[0].card,
                })}
                onClick={() => {
                  setAbilitie(true);
                }}
              >
                abilitie
              </Button>
            ) : (
              <Button
                sx={(theme) => ({
                  color: '#F6F5F3',
                  background: pokemon[0].theme[0].card,
                })}
                onClick={() => {
                  setAbilitie(false);
                }}
              >
                Info
              </Button>
            )}
          </FlexBox>
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
          <div
            direction={'column'}
            style={{
              backgroundColor: pokemon[0].theme[0].cardPoke,
              borderRadius: '50%',
              padding: '15px',
            }}
            className='card-pokemon'
          >
            <CustomImg src={pokemon[0].img}></CustomImg>
          </div>
          <CustomDiv>
            <FlexBox direction={'row'} align={'space-around'}>
              {!abilitie ? (
                pokemon[0].abilitie.map((val) => {
                  return (
                    <Typography sx={{ textAlign: 'center', width: '100%' }}>
                      {val.ability.name}
                    </Typography>
                  );
                })
              ) : (
                <>
                  <Typography sx={{ textAlign: 'center', width: '100%' }}>
                    height:{pokemon[0].height}m
                  </Typography>
                  <Typography sx={{ textAlign: 'center', width: '100%' }}>
                    weight: {pokemon[0].weight}Kg
                  </Typography>
                </>
              )}
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
