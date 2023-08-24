import { ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import { styled } from "styled-components";


const Header = () => {

    const [cartVisible, setCartVisible] = useState<boolean>(false);


    return (
        <>
            <HeaderCointainer>
                <HeaderActions>
                <HeaderLogo>LOGO</HeaderLogo>
                <HeaderMenu>
                    <li>
                        <a href="/">Início</a>
                    </li>
                    <li>
                        <a href="/cardapio">Cardápio</a>
                    </li>
                    <li>
                        <a href="/promocoes">Promoções</a>
                    </li>
                </HeaderMenu>   
                </HeaderActions>
                <HeaderActions>
                <HeaderBTN href="/login">Entrar</HeaderBTN>
                < ShoppingCart
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
    background-color: #bd0000;
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

        &:hover {
            cursor: pointer;
            color: #c4c4c4;
        }
    }
`;

const HeaderCart = styled.div`
    width: 250px;
    height: 300px;
    background-color: #8b0000;
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
        border-bottom-color:#8b0000;
        position: absolute;
        bottom:100%;
        right: 5px;
    }
`;

export default Header;