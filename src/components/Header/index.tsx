import { styled } from "styled-components";

const Header = () => {
    return (
        <>
            <HeaderCointainer>
                <HeaderLogo>LOGO</HeaderLogo>
                <HeaderBTN href="/login">Login</HeaderBTN>
            </HeaderCointainer>
        </>
    );
};

const HeaderCointainer = styled.header`
    width: 100%;
    padding: 16px 60px;
    display: flex;
    justify-content: space-between;
    background-color: #bd0000;
`;

const HeaderLogo = styled.div`
    font-size: 48px;
    font-weight: bold;
    color: #f0f0f0;
`;

const HeaderBTN = styled.a`
    display: flex;
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

export default Header;