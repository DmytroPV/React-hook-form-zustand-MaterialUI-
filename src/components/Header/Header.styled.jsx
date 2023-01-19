import styled, { css } from "styled-components";
import {
    MAIN_LIGHT,
    MAIN_DARK,
    MAIN_BACKGROUND,
    AUTH_TEXT_COLOR,
    TITLES_TEXT_COLOR,
    BACKGROUND_LETTER_NAME,
    SHADOW_CONTAINER_HEADER,
    SHADOW_HEADER_MOBILE,
    DARKENED_HEADER_MOBILE
} from "../../assets/themes/colors";

export const fontRegular = css` 
    font-family: "Montserrat-Regular";
    line-height: 15px;
    font-size: 12px;
    letter-spacing: 0.04em;
`;

export const elementMenu = css` 
    padding-left: 16px;
    padding-right: 16px;
    height: 19px;
    display: grid;
    align-items: center;
    ${fontRegular}
`;

export const DesktopWidth = styled.div`
    @media only screen and (max-width: 870px){
        display: none;
    }
`;

export const DesktopAuthWidth = styled.div`
    @media only screen and (max-width: 531px){
        display: none;
    }
`;

export const TabletWidth = styled.div`
    @media only screen and (min-width: 870px){
        display: none;
    }
    @media only screen and (max-width: 531px){
        display: none;
    }
`;

export const MobileWidth = styled.div`
    @media only screen and (min-width: 531px){
        display: none;
    }
`;

export const LogoHeaderSVG = styled.img` 
    display: grid; 
    align-items: center;
    width: 18px;
    height: 18px;
`;

export const ExitIconWrapper = styled.img` 
    margin-left: 16px; 
    display: grid; 
    align-items: center;
    width: 18px;
    height: 18px;
`;

export const ContainerHeader = styled.div` 
    position: fixed;
    height: 64px;
    top: 0;
    left: 0;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    background-color: ${MAIN_BACKGROUND};
    box-shadow: 0px 2px 4px ${SHADOW_CONTAINER_HEADER};
    width: 100%; 
    z-index: 1;
    @media (max-width: 270px){
        min-width: 270px;
    }
    @media (max-width: 295px){
        padding: 0 10px;
    }
    @media (min-width: 530px){
        padding: 0 20px;
    }
`;

export const LeftBlock = styled.div` 
    min-height: 30px;
    width: min-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoHeader = styled.div` 
    width: 103px;
    min-width: 103px;
    font-family: 'Montserrat-700';
    font-size: 16px;
    letter-spacing: 0.08em;
    color: ${MAIN_DARK};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MenuHeaderBlock = styled.nav` 
    display: flex;
    align-items: center;
    min-width: 160px;
    justify-content: flex-end;
`;

export const MenuAuthorization = styled.div`
    ${elementMenu}
    border-right: 1px solid ${AUTH_TEXT_COLOR};
    color: ${AUTH_TEXT_COLOR};
`;

export const MenuContact = styled.div` 
    ${elementMenu}
`;

export const MenuContactAuth = styled.div` 
    padding: 0px 0px 0px 16px;
    height: 19px;
    display: grid;
    align-items: center;
    ${fontRegular}
`;

export const PointsBalance = styled.div`
    max-width: 85px;                         
    color: ${TITLES_TEXT_COLOR};
    display: flex;
    ${fontRegular}; 
    @media (min-width: 1000px){
        margin-left:130px;
    }
    @media (max-width: 1000px){
        margin-left:40px;
    }
    @media (max-width: 330px){
        margin-left:20px;
    }
`;

export const NumberBalance = styled.div`
    margin-left: 8px;
    display: flex;
    font-family: 'Montserrat-700';
    font-size: 14px;
    line-height: 17px;
    align-items: center;
    letter-spacing: 0.04em;
    color: ${MAIN_DARK};
`;

export const MenuSection = styled.div`
    ${elementMenu}
    border-right: 1px solid ${AUTH_TEXT_COLOR};
`;

export const MenuInitiaLetterCircle = styled.div`
    background: ${BACKGROUND_LETTER_NAME};
    width: 26px;
    height: 26px;
    border-radius: 50%;
    margin-left: 24px;
    display: grid;
    align-items: end;
    @media (max-width: 531px){
        margin-left:20px;
    }
    @media (min-width: 532px){
        margin-left:30px;
    }
`;

export const MenuInitiaLetter = styled.div`
    width: 26px;
    height: 24px;
    font-family: 'Montserrat-700';
    font-size: 17px;
    line-height: 22px;
    display: -ms-flexbox;
    letter-spacing: 0.04em;
    color: ${MAIN_BACKGROUND};
    display: grid;
    align-items: end;
    justify-content: center;
    text-transform: uppercase;
`;

export const MenuName = styled.div`
    margin-left: 8px;
    padding-right: 16px;
    height: 19px;
    display: grid;
    align-items: center;
    font-family: 'Montserrat-700';
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.04em;
    border-right: 1px solid ${AUTH_TEXT_COLOR};
    color: ${AUTH_TEXT_COLOR};
    @media (max-width: 531px){
        border-right: 1px solid ${MAIN_BACKGROUND};
        color: ${MAIN_BACKGROUND};
    }
`;

export const MobileHamburgerLine = styled.div`
    border-bottom: 1px solid ${AUTH_TEXT_COLOR};
`;

export const MobileHamburgerContainer = styled.nav`
    position: relative;
    width: 22px;
    height: 14px;
    border-top: 1px solid ${AUTH_TEXT_COLOR};
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${AUTH_TEXT_COLOR};
    justify-content: center;
    cursor: pointer;
    &:hover {
        width: 23px;
        height: 15px;
        border-top: 1px solid ${MAIN_DARK};
        border-bottom: 1px solid ${MAIN_DARK};
        box-shadow:         
        rgb(0 0 0 / 19%) 1px 3px 20px 0px, 
        inset -10px -10px 15px rgb(255 255 255 / 80%), 
        inset 10px 10px 15px rgb(70 70 70 / 12%);
        ${MobileHamburgerLine}{
            border-bottom: 1px solid ${MAIN_DARK};
        }
    }
    @media (max-width: 300px){
        margin-left:20px;
    }
`;

export const MobileHamburgerDarkened = styled.div`
    background: ${DARKENED_HEADER_MOBILE};
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: -2px;
    z-index: 9;
`;

export const MobileHamburgerbackground = styled.nav`
    position: fixed;
    width: 274px;
    height: 100%;
    right: 0px;
    top: 0px;
    background: ${MAIN_LIGHT};
    box-shadow: -15px 0px 20px ${SHADOW_HEADER_MOBILE};
    Z-index: 10;
    overflow: hidden;
    transition: 0.5s;
    ${({ Active }) => Active ?
        `transform: translateX(0%); opacity: 1;` :
        `transform: translateX(120%); opacity: 0.3;`
    }
`;

export const MobileHamburgerSectionStyle = css`
    height: 44px;
    width: 100%;
    border-bottom: 1px solid ${MAIN_BACKGROUND};
    display: grid;
    align-items: center;
    padding-left: 20px;
    ${fontRegular}
`;

export const MobileHamburgerSectionMenuUp = styled.div`
    ${MobileHamburgerSectionStyle}
    margin-top: 80px;
    border-top: 1px solid ${MAIN_BACKGROUND}; 
`;

export const MobileHamburgerSectionMenu = styled.div`
    ${MobileHamburgerSectionStyle}
`;

export const MobileHamburgerLoginBox = styled.div`
    position: absolute;
    margin-top: 18px;
`;

export const MobileHamburgerCross = styled.div`
    height: 22px;
    width: 1px;
    background-color: ${MAIN_BACKGROUND};
    transform: rotate(45deg);
    Z-index: 11;
    position: absolute;
`;
export const MobileHamburgerCrossHolder = styled.div`
    height: 22px;
    width: 1px;
    background-color: ${MAIN_BACKGROUND};
    transform: rotate(90deg);
    Z-index: 12;
    position: absolute;
`;

export const MobileHamburgerCrossBox = styled.div`
    height: 22px;
    width: 22px;
    top: 20px;
    right: 20px;
    padding-left: 11px;
    position: absolute;
    cursor: pointer;
    `;