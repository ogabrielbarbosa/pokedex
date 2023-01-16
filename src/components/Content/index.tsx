import React, { useState, useEffect } from 'react'
import { ContainerContent, Header, TitlePokemon, IdPokemon, Img, ContainerPokemon, ContainerTexts, ContainerImage, ContainerGrid, ContainerDatas, TextTitleDatas, SubContainerDatas, StatusBox, TextSubDatas, BoxProgresos, BoxBorder } from './styles';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

interface Props {
  passId: string;
}

interface Pokemon {
  name: string;
  game_index: string;
  sprite: string;

  stats: Array<{ base_stat: string }>;
  types: Array<{ name: string }>;

  weight: number;
  height: number;

  flavor_text: string;
  genera: string;

  base_experience: number;
  base_happiness: number;
  growth_rate: string;
  capture_rate: number;
}

const Content: React.FC<Props> = ({ passId }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(passId === '' ? `https://pokeapi.co/api/v2/pokemon/1` : `https://pokeapi.co/api/v2/pokemon/${passId}`);
      const data = await res.json();

      const res1 = await fetch(passId === '' ? `https://pokeapi.co/api/v2/pokemon-species/1` : `https://pokeapi.co/api/v2/pokemon-species/${passId}`);
      const data2 = await res1.json();
      setPokemon({
        name: data.name,
        game_index: data.id,
        sprite: data.sprites.other?.["official-artwork"].front_default,
        stats: data.stats.map((stat: any) => stat.base_stat),
        types: data.types.map((type: any) => type.type.name),
        weight: data.weight,
        height: data.height,
        flavor_text: data2.flavor_text_entries[0].flavor_text,
        genera: data2.genera[7].genus,
        base_experience: data.base_experience,
        base_happiness: data2.base_happiness,
        growth_rate: data2.growth_rate.name,
        capture_rate: data2.capture_rate
      });
    }
    fetchData();
  }, [passId]);

  return (

    <ContainerContent>
      <Header></Header>

      {pokemon ? (
        <ContainerPokemon>
          <ContainerTexts>
            <IdPokemon>#{pokemon.game_index}</IdPokemon>
            <TitlePokemon>{pokemon.name}</TitlePokemon>
          </ContainerTexts>

          <ContainerGrid>
            <ContainerImage>
              <Img src={pokemon.sprite} alt={pokemon.name} />
            </ContainerImage>

            <ContainerDatas>
              <TextTitleDatas>Status</TextTitleDatas>

              <SubContainerDatas>
                <StatusBox>
                  <TextSubDatas>HP: {pokemon.stats[0].toString()}</TextSubDatas>
                  <BoxBorder>
                    <BoxProgresos style={{ width: pokemon.stats[0].toString() + '%' }} />
                  </BoxBorder>
                </StatusBox>
                <StatusBox>
                  <TextSubDatas>Ataque: {pokemon.stats[1].toString()}</TextSubDatas>
                  <BoxBorder>
                    <BoxProgresos style={{ width: pokemon.stats[1].toString() + '%' }} />
                  </BoxBorder>
                </StatusBox>
                <StatusBox>
                  <TextSubDatas>Defesa: {pokemon.stats[2].toString()}</TextSubDatas>
                  <BoxBorder>
                    <BoxProgresos style={{ width: pokemon.stats[2].toString() + '%' }} />
                  </BoxBorder>
                </StatusBox>
                <StatusBox>
                  <TextSubDatas>Super Ataqe: {pokemon.stats[3].toString()}</TextSubDatas>
                  <BoxBorder>
                    <BoxProgresos style={{ width: pokemon.stats[3].toString() + '%' }} />
                  </BoxBorder>
                </StatusBox>
                <StatusBox>
                  <TextSubDatas>Super Defesa: {pokemon.stats[4].toString()}</TextSubDatas>
                  <BoxBorder>
                    <BoxProgresos style={{ width: pokemon.stats[4].toString() + '%' }} />
                  </BoxBorder>
                </StatusBox>
                <StatusBox>
                  <TextSubDatas>Velocidade: {pokemon.stats[5].toString()}</TextSubDatas>
                  <BoxBorder>
                    <BoxProgresos style={{ width: pokemon.stats[5].toString() + '%' }} />
                  </BoxBorder>
                </StatusBox>
              </SubContainerDatas>
            </ContainerDatas>

            <ContainerDatas>
              <TextTitleDatas>Dados da Pokédex</TextTitleDatas>
              <StatusBox>
                <TextSubDatas>Sobre: {pokemon.flavor_text}</TextSubDatas>
                <TextSubDatas>Especie: {pokemon.genera}</TextSubDatas>
                <TextSubDatas>Altura: {Math.floor(pokemon.height * 10) / 100}m</TextSubDatas>
                <TextSubDatas>Peso: {Math.floor(pokemon.weight * 10) / 100}kg</TextSubDatas>
              </StatusBox>
            </ContainerDatas>

            <ContainerDatas>
              <TextTitleDatas>Treinamento</TextTitleDatas>
              <StatusBox>
                <TextSubDatas>Base XP: {pokemon.base_experience}</TextSubDatas>
                <TextSubDatas>Amigável: {pokemon.base_happiness}</TextSubDatas>
                <TextSubDatas>Taxa de captura: {Math.floor(pokemon.capture_rate * 0.393)}%</TextSubDatas>
                <TextSubDatas>Taxa de crescimento: {pokemon.growth_rate}</TextSubDatas>
              </StatusBox>
            </ContainerDatas>
          </ContainerGrid>

        </ContainerPokemon>
      ) : (
        <ContainerPokemon>
          <ContainerTexts>
            <IdPokemon>Carregando...</IdPokemon>
            <TitlePokemon>Carregando...</TitlePokemon>
          </ContainerTexts>

          <ContainerImage>
          </ContainerImage>
        </ContainerPokemon>
      )}

    </ContainerContent >
  );
}

export default Content;
