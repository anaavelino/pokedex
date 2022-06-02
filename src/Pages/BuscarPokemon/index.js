import styled from '@emotion/styled';
import { Autocomplete, Button, TextField } from '@mui/material';
import { padding } from '@mui/system';
import React, { useEffect, useState } from 'react';
import FlexBox from '../../components/Flexbox';
import api from '../../services/api';
import Card from './Card';
import Loader from '../../components/Load/index';

import { ThemeTypes } from './CustomType';


const CustomDiv = styled('div')(({ theme }) => ({
  showTheme: theme,
  zIndex: theme.zIndex.app,
  borderRadius: '8px',
}));

const CustomAutocomplete = styled('div')(({ theme }) => ({
  showTheme: theme,
  zIndex: theme.zIndex.app,
  borderRadius: '8px',
  backgroundColor: ' #f9f2ec',
  marginBottom: '8px',
}));

export default function BuscarPokemon() {
  const [listPokemon, setListPokemon] = useState([]);
  const [idPokemon, setIdPokemon] = useState();
  const [selectPokemon, setSelectPokemon] = useState([]);
  const [status, setStatus] = useState('LOADING');

  useEffect(() => {
    const array = [];
    var promise1 = new Promise((resolve1, reject1) => {
      api
        .get('pokemon/?limit=251')
        .then((res) => {
          const results = res.data.results;
          results.map((value, index) => {
            array.push({ value: index, label: value.name });
          });
          setStatus('DONE');
          resolve1(array);
        })
        .catch((err) => {
          setStatus('ERROR');
          setListPokemon({ value: 0, label: 'Sem Resultados' });
        });
    });

    Promise.all([promise1])
      .then((values) => {
        setListPokemon(array);
      })
      .catch((err) => {
        reject1(err);
      });
  }, []);

  function search(name) {
    api
      .get(`pokemon/${name}`)
      .then((res) => {
        const array_pokemon = [];
        const array_types = [];
        const dados = [];
        var result = res.data;
        array_pokemon.push(result);
        console.log('>>>>>>', result);
        array_pokemon.map((value, index) => {
          setIdPokemon(value.id);
          const type = value.types;
          const abilitie = value.abilities;
          dados.push({
            id: value.id,
            name: value.name,
            weight: value.weight,
            height: value.height,
            abilitie: abilitie,
            moves: value.moves,
            type: value.types[0].type.name,
            types: type,
            theme: ThemeTypes(value.types[0].type.name),
            img: value.sprites.other.dream_world.front_default,
          });
          array_types.push(...type);
        });
        setSelectPokemon(dados);
        setTimeout(() => {
          setStatus('DONE');
        }, 2000);
      })
      .catch((err) => {
        setStatus('ERROR');
      });
  }

  return (
    <Loader status={status}>
      <FlexBox
        direction={'column'}
        sx={{ height: '100vh', justifyContent: 'center' }}
      >
        <CustomDiv>
          <CustomAutocomplete>
            <Autocomplete
              options={listPokemon}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Pokémons'
                  sx={{
                    width: '20rem',
                    margin: '10px',
                    fontFamily: 'Fredoka One, cursive',
                  }}
                />
              )}
              onChange={(event, selectPokemon) => {
                setStatus('LOADING');
                search(selectPokemon.label);
              }}
            />
          </CustomAutocomplete>
          <Card arrayPokemon={selectPokemon} />
        </CustomDiv>
      </FlexBox>
    </Loader>
  );
}
