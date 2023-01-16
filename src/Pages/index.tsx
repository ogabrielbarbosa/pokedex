import React, { useState, useEffect } from 'react'

import GlobalStyle from '../styles/global';
import Content from '../components/Content';

import { BsArrowRightCircleFill } from "react-icons/bs";

import { ContainerSidebar, ContainerPokeball, Svg, ContainerTitle, Title, SubTitle, InputText, Img, ContainerInput, GridPokemons, BoxPokemon, IdPokemon, TitlePokemon, ContainerImage, ContainerText, SubContainerText, ContainerTypes, ButtonMore, TextMore, TextTypes } from './styles';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

interface Props {

}

interface Pokemon {
  url: string;
  name: string;
  sprite: string;
  game_index: string;
  types: Array<{ name: string }>;
}

function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`);
      const data = await res.json();
      const pokemonData = data.results;
      if (!pokemonData.length) {
        setHasMore(false);
        return;
      }
      const newPokemonList = await Promise.all(pokemonData.map(async (pokemon: any) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return { url: pokemon.url, name: pokemon.name, sprite: data.sprites.front_default, game_index: data.id, types: data.types.map((type: any) => type.type.name) };
      }));
      setPokemonList(prevPokemonList => [...prevPokemonList, ...newPokemonList]);
    }

    fetchData();
  }, [offset]);

  const searchResults = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || pokemon.game_index.toString().includes(searchTerm.toLowerCase())
  );

  function toggleSide() {
    setToggle(toggle => !toggle);
  }

  const passId = (game_index: string) => {
    setId(game_index);
  }

  return (
    <div className='App'>
      <GlobalStyle />

      <ContainerSidebar style={toggle ? { visibility: "hidden" } : { visibility: "visible" }}>
        <ContainerPokeball>
          <Svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
            <g filter="url(#filter0_d_2_18)">
              <circle cx="65" cy="65" r="50" transform="rotate(-180 65 65)" fill="url(#paint0_linear_2_18)" />
              <circle cx="65" cy="65" r="55" transform="rotate(-180 65 65)" stroke="#1C1C1C" stroke-width="10" />
            </g>
            <rect x="115" y="71" width="100" height="14" transform="rotate(-180 115 71)" fill="#1C1C1C" />
            <circle r="15" transform="matrix(1 8.74228e-08 8.74228e-08 -1 65 65)" fill="white" stroke="#1C1C1C" stroke-width="10" />
            <defs>
              <filter id="filter0_d_2_18" x="0" y="0" width="130" height="130" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_18" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_18" result="shape" />
              </filter>
              <linearGradient id="paint0_linear_2_18" x1="65" y1="15" x2="65" y2="115" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" />
                <stop offset="0.494692" stop-color="#FCEEF2" />
                <stop offset="0.494792" stop-color="#F5CCD6" />
                <stop offset="0.512876" stop-color="#D94167" />
                <stop offset="1" stop-color="#FF0040" />
              </linearGradient>
            </defs>
          </Svg>

          <BsArrowRightCircleFill color='#fff' size={30} className={toggle ? "close-side-left" : "close-side"} onClick={toggleSide} />
        </ContainerPokeball>

        <ContainerTitle>
          <Title>Pokédex</Title>
          <SubTitle>Procure o seu Pokémon pelo nome ou usando o Número da Pokédex Nacional</SubTitle>
        </ContainerTitle>

        <ContainerInput>
          <InputText placeholder='Qual pokémon você está procurando?' type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </ContainerInput>

        <GridPokemons>
          {searchResults.map((item) => {
            return (
              <BoxPokemon key={item.name} onClick={() => passId(item.game_index.toString())}>
                <ContainerText>
                  <SubContainerText>
                    <IdPokemon>#{item.game_index}</IdPokemon>
                    <TitlePokemon>{item.name}</TitlePokemon>
                  </SubContainerText>
                  <ContainerTypes>
                    <TextTypes>{item.types.join(', ')}</TextTypes>
                  </ContainerTypes>
                </ContainerText>
                <ContainerImage>
                  <Img src={item.sprite} alt={item.name} />
                </ContainerImage>
              </BoxPokemon>
            );
          })}
        </GridPokemons>
        {hasMore &&
          <ButtonMore onClick={() => setOffset(offset + 10)}>
            <TextMore>Carregar mais</TextMore>
          </ButtonMore>
        }

      </ContainerSidebar >

      <Content passId={id} />
    </div>
  );
}

export default Home;
