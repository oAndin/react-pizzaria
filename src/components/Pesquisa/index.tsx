import { MagnifyingGlass } from "@phosphor-icons/react";
import { styled } from "styled-components";
import {useState} from 'react';

const Pesquisa = () => {
    const [pesquisaFocus, setPesquisaFocus] = useState(false);

    return (
        <>
            <PesquisaContainer className={ pesquisaFocus ? "active" : ""}>
                <PesquisaInput 
                    onFocus={ ()=>{setPesquisaFocus(true);console.log("Focus") }} 
                    onBlur={ ()=>{setPesquisaFocus(false);console.log("Blur") }} 
                    placeholder="Quero uma pizza..." />
                <PesquisaBtn>
                    <MagnifyingGlass color="#fff" size={24} />
                </PesquisaBtn>
            </PesquisaContainer>
        </>
    );
};

const PesquisaContainer = styled.div`
    width: 600px;
    height: 60px;
    border-radius: 35px;
    border: 3px solid #f4796b;
    display: flex;
    align-items: center;
    margin: 80px auto;
    overflow: hidden;
    transition: .5s ease-in-out;
    &.active {
        border-color:#000;
    }
`;

const PesquisaInput = styled.input`
    flex:1;
    height: 40px;
    padding-left: 32px;
`;

const PesquisaBtn = styled.button`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    transition: 0.5s ease-in-out;
    &:hover {
        cursor: pointer;
        background-color: #252525;
    }
`;

export default Pesquisa;