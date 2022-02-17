import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2');
        format('woff2');
        font-weight:normal;
        font-style: normal;
    }
    html {
        --red: #393939;
        --black: #232323;
        --grey: #3A3A3A;
        --gray: var(--grey);
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding:0;
        margin:0;
    }
    a {
        text-decoration: none;
        color: var(---black);
    }
    a:hover {
        text-decoration: underline;
    }
    button {
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;


const InnerStyles = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 2rem;
`;

export default function Page({ children, cool }) {
    return (
    <div>
        <GlobalStyles />
        <Header />
        <h2>{cool}</h2>
        <InnerStyles>{children}</InnerStyles>
    </div>)
}

Page.propTypes = {
    cool: PropTypes.string,
    children: PropTypes.any
}