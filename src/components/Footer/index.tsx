import styled from 'styled-components';

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterUnorderedList>
                    <FooterItemList><a href="#">Contato</a></FooterItemList>
                </FooterUnorderedList>
            </FooterContainer>
        </>
    );
};

const FooterContainer = styled.div`
    background-color: #550100;
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
    padding:2rem;
`;

const FooterUnorderedList = styled.ul`
    background-color: #c4c4c4;
    width: 100px ;
    height: 100px;
`;

const FooterItemList = styled.li`
    color: #550100;
`;

export default Footer;