import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --theme: ${props => props.theme.colors.background}; 
    }
    
    body{
        background: ${props => props.theme.colors.background}; 
    }

    html{
        scroll-behavior: smooth;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    button{
        cursor: pointer;
        border: none;
    }

    *:focus {
        outline: none;
    }

    .icon-button{
        position: absolute;
        margin-left: 20px;
    }

    *::-webkit-scrollbar {
        width: 10px;
    }
    *::-webkit-scrollbar-track {
        background: #CC0033;
    }
    *::-webkit-scrollbar-thumb {
        background: #8A0023;
    }
    *::-webkit-scrollbar-thumb:hover {
        background: #8A0023;
    }

    .close-side{
        visibility: hidden;
        position: fixed;
        right: 90px;        
        top: 20px;
        cursor: pointer;
        background-color: #FF0040;
        padding: 1px;
        border-radius: 100px;
        z-index: 1;

        @media screen and (max-width: 877px){
            visibility: visible;
        }
    }

    .close-side-left{
        visibility: hidden;
        position: fixed ;
        left: 20px;
        top: 20px;
        cursor: pointer;
        background-color: #FF0040;
        padding: 1px;
        border-radius: 100px;
        z-index: 1;

        transform: rotateY(180deg);

        @media screen and (max-width: 877px){
            visibility: visible;
        }
    }
`;