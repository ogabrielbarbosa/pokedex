import styled from "styled-components";

export const ContainerSidebar = styled.div`
    display: flex;
    width: 400px;
    background-color: #CC0033;  
    padding: 30px;
    flex-direction: column;
    gap: 20px;
    height: 100vh;
    overflow-y: auto;
    position: fixed;
    visibility: visible;

    @media screen and (max-width: 877px){
        width: 85vw;
    }
    
`;

export const ContainerPokeball = styled.div`
    display: flex;
    height: 15vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Svg = styled.svg`
    filter: drop-shadow(0 0 0.75rem rgb(0 0 0 / 0.4));
`;

export const ContainerTitle = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 5px;
`;

export const Title = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    color: #fff;
`;

export const SubTitle = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #FFB8B8;
`;

export const InputText = styled.input`
    height: 50px;
    width: 100%;
    border-radius: 10px;
    background-color: #8A0023;
    border: none;
    padding-left: 20px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    color: #FFB8B8;

    &::placeholder{
        color: #FFB8B8;
    }
`;

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
`;

export const GridPokemons = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
`;

export const BoxPokemon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: #1C1C1C;
    border-radius: 10px;
    padding: 20px;
    transition: transform .3s ease-in-out;
    transform: translateY(-5px);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    border: 1px solid #1C1C1C;

    &:hover, :focus{
        transform: translateY(0px);
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0);
        cursor: pointer;
    }
`;

export const TitlePokemon = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    text-transform: capitalize;
`;

export const IdPokemon = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #FF0040;
`;

export const ContainerImage = styled.div`
    display: flex;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const SubContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const ContainerTypes = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const ButtonMore = styled.button`
    display: flex;
    padding: 15px 20px;
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
`;

export const TextMore = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #CC0033;
`;

export const TextTypes = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #B3B3B3;
    text-transform: capitalize;
`;

export const Img = styled.img`
    width: 100px;
    image-rendering: pixelated;
`;