import styled from "styled-components";
import '../Header.css'

const Header = () => {
    return(
        <div>
            <HeroSection className="hero">
                <div className="heroInner">
                    <span>
                        <StyledLink href="/">Blood Bank Application</StyledLink>
                        
                    </span>
                </div>
            </HeroSection>
        </div>
    )
}

export default Header;

const HeroSection = styled.section`
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),
        url(https://www.tohoku.ac.jp/en/press/images/research20180925_t.jpg);
    background-size: cover;
    height: fit-content;
    color: white;
    padding: 15rem 0rem 6rem;
    margin: 0;
    margin-bottom: 5rem;
    width: 100%;
    box-sizing: border-box;
    .heroInner {
        display: flex;
        max-width: 1200px;
        margin: auto;
    }
    span {
        max-width: 50%;
    }
    h1 {
        font-weight: 900;
        font-size: clamp(2rem, 5.5vw, 3.25rem);
        line-height: 1.2;
        margin-bottom: 1.5rem;
    }
    @media (max-width: 576px) {
        background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
            url(https://www.tohoku.ac.jp/en/press/images/research20180925_t.jpg);
        background-position: center bottom;
        background-size: cover;
        align-items: flex-start;
        padding-top: 7.5 rem;
        height: 75vh;
        max-height: 720px;
    }
    
`

const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    font-size: 3.3rem;
    font-weight: bold;
`