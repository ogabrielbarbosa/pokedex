import styled from "styled-components";

export const ContainerContent = styled.div`
    display: flex;
    background-color: #fff;
    margin-left: 400px;
    height: 100vh;
    padding: 30px;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 877px){
        margin-left: 0;
    }

    @media screen and (max-width: 1300px){
        height: auto;
    }
`;

export const Header = styled.div`
    display: flex;
    background-color: #fff;
    height: 130px;
    width: 100%;
`;

export const ContainerTexts = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitlePokemon = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    color: #484848;
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
    background-color: #1C1C1C;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const ContainerPokemon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;

    @media screen and (max-width: 470px){
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const ContainerDatas = styled.div`
    display: flex;
    background-color: #1C1C1C;
    border-radius: 10px;
    border-top: 10px solid #FF0040;
    padding: 20px;
    flex-direction: column;
    gap: 20px;
`;

export const TextTitleDatas = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    color: #fff;
    text-transform: capitalize;
`;

export const SubContainerDatas = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const StatusBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const TextSubDatas = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
`;

export const BoxBorder = styled.div`
    display: flex;
    width: 100%;
    background-color: #000;
    border-radius: 100px;
`;

export const BoxProgresos = styled.div`
    height: 15px;
    background: linear-gradient(270deg, #FF0040 0%, rgba(255, 0, 64, 0.38) 100%);
    border-radius: 100px;
`;

export const Img = styled.img`
    image-rendering: pixelated;
    height: 80%;

    @media screen and (max-width: 470px){
        width: 80%;
        height: auto;
    }
`;
