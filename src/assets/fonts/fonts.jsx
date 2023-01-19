import { createGlobalStyle } from 'styled-components';

import Montserrat300Woff from './montserrat-v25-latin_cyrillic-300.woff';
import Montserrat300Woff2 from './montserrat-v25-latin_cyrillic-300.woff2';
import Montserrat400Woff from './montserrat-v25-latin_cyrillic-regular.woff';
import Montserrat400Woff2 from './montserrat-v25-latin_cyrillic-regular.woff2';
import Montserrat500Woff from './montserrat-v25-latin_cyrillic-500.woff';
import Montserrat500Woff2 from './montserrat-v25-latin_cyrillic-500.woff2';
import Montserrat600Woff from './montserrat-v25-latin_cyrillic-600.woff';
import Montserrat600Woff2 from './montserrat-v25-latin_cyrillic-600.woff2';
import Montserrat700Woff from './montserrat-v25-latin_cyrillic-700.woff';
import Montserrat700Woff2 from './montserrat-v25-latin_cyrillic-700.woff2';
import Montserrat_Italic_400Woff from './montserrat-v25-latin_cyrillic-italic.woff';
import Montserrat_Italic_400Woff2 from './montserrat-v25-latin_cyrillic-italic.woff2';

export default createGlobalStyle`
    /* montserrat-300 - latin */
    @font-face {
        font-family: 'Montserrat-300';
        font-style: normal;
        font-weight: 300;
        src: local(''), local(''),
            url(${Montserrat300Woff2}) format('woff2'),
            url(${Montserrat300Woff}) format('woff');
    }
    /* montserrat-regular - latin */
    @font-face {
        font-family: 'Montserrat-Regular';
        font-style: normal;
        font-weight: 400;
        src: local(''), local(''),
            url(${Montserrat400Woff2}) format('woff2'),
            url(${Montserrat400Woff}) format('woff');
    }
    /* montserrat-500 - latin */
    @font-face {
        font-family: 'Montserrat-500';
        font-style: normal;
        font-weight: 500;
        src: local(''), local(''),
            url(${Montserrat500Woff2}) format('woff2'),
            url(${Montserrat500Woff}) format('woff');
    }
    /* montserrat-600 - latin */
    @font-face {
        font-family: 'Montserrat-600';
        font-style: normal;
        font-weight: 600;
        src: local(''), local(''),
            url(${Montserrat600Woff2}) format('woff2'),
            url(${Montserrat600Woff}) format('woff');
    }
    /* montserrat-700 - latin */
    @font-face {
        font-family: 'Montserrat-700';
        font-style: normal;
        font-weight: 700;
        src: local(''), local(''),
            url(${Montserrat700Woff2}) format('woff2'),
            url(${Montserrat700Woff}) format('woff');
    }
    /* montserrat-italic - latin */
    @font-face {
        font-family: 'Montserrat-Italic';
        font-style: italic;
        font-weight: 400;
        src: local(''), local(''),
            url(${Montserrat_Italic_400Woff2}) format('woff2'),
            url(${Montserrat_Italic_400Woff}) format('woff');
    }
`;