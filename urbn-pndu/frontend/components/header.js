import Link from 'next/link'
import Nav from '../components/Nav'
import styled from 'styled-components'

const Logo = styled.h1`
    background-color: var(--black, black);
    color: #fff;
    display: inline-block;
    padding: 7px 10px;
    transform: skew(-7deg);
    margin-left: 2rem;
`;

const HeaderStyles = styled.header`
    .bar {
        border-bottom: 4px solid var(--black, black);
        display:grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;;
        align-items: center;
    }
    .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid var(--black, black);
    }
`;

export default function Header() {
    return (
        <HeaderStyles>
            <div className="bar">
                <Link href="/">
                    <Logo>URBN PNDU</Logo>  
                </Link>
            </div>
            <div className="sub-bar">
                <p>Search</p>
            </div>
            <Nav />
        </HeaderStyles>
    );
}