import { ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";


const Header = () => {

    const [cartVisible, setCartVisible] = useState<boolean>(false);
    const location = useLocation();
    console.log(location);
    

    return (
        <>
            <HeaderCointainer>
                <HeaderActions>
                <HeaderLogo>LOGO</HeaderLogo>
                <HeaderMenu>
                    <li>
                        <a 
                        href="/" className={location.pathname === '/' ? "active" : ""}>Início
                        </a>
                    </li>
                    <li>
                        <a 
                        href="/cardapio" className={location.pathname === '/cardapio' ? 'active' : ""
                    }>
                        Cardápio
                    </a></li>
                    <li>
                        <a 
                        href="/promocoes"
                        className={location.pathname === '/promocoes' ? 'active' : ""}
                        >
                            Promoções
                        </a></li>
                </HeaderMenu>   
                </HeaderActions>
                <HeaderActions>
                <HeaderBTN href="/login">Entrar</HeaderBTN>
                < ShoppingCart
                color='#000'
                size={24} 
                className="icon"
                onClick={()=> {setCartVisible(!cartVisible)}}/>
                <HeaderCart className={cartVisible ? "active" : ""}/> 
                </HeaderActions>
            </HeaderCointainer>
        </>
    );
};

const HeaderCointainer = styled.header`
    width: 100%;
    padding: 16px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #f4796b;
    background-color: #6b0504;

    & .icon{
        width: 40px;
        height: 40px;
        padding: 8px;
        background-color: #fff;
        border-radius: 50%;
        transition: 0.5s ease-in-out;
        cursor: pointer;
    &:hover{
        background-color:#c4c4c4;
    }
    }
`;

const HeaderLogo = styled.div`
    font-size: 48px;
    font-weight: bold;
    color: #f0f0f0;
`;

const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;
`;

const HeaderBTN = styled.a`
    display: flex;
    height: 3rem;
    line-height: 46px;
    justify-content: center;
    align-items: center;
    padding: 0 26px;
    background-color: #fff;
    color: #bd0000;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 12px;
    transition: 0.5s ease-in-out;
    &:hover {
        cursor: pointer;
        background-color: #880101;
        color: #fff;
    }
`;

const HeaderMenu = styled.ul`
    display:flex;
    gap: 16px;  

    & li a {
        font: 16px;
        color: #fff;
        line-height: 40px;
        display: block;
        transition: 0.5s ease-in-out;
        position: relative;

        &:hover {
            cursor: pointer;
            color: #c4c4c4;
        }

        &.active::after{
            content: '';
            width: 100%;
            height: 4px;
            border-radius: 8px;
            background-color: #f4796b;
            position: absolute;
            top: 85%;
            left: 0;
        }
    }

    &.active {
        color: #f4796b;
    }
`;

const HeaderCart = styled.div`
    width: 250px;
    height: 300px;
    background-color: #c4c4c4;
    position: absolute;
    top: calc(100% + 16px);
    right: 0%;
    transition: 0.3s ease-in-out;
    opacity: 0;
    visibility: hidden;

    &.active{
        opacity: 1;
        visibility: visible;
    }

    &::before {
        content:'';
        border: 6px solid transparent;
        border-top:0;
        border-bottom-color:#c4c4c4;
        position: absolute;
        bottom:100%;
        right: 5px;
    }
`;

export default Header;