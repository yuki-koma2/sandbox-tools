import {NextPage} from "next";
import styled from  "styled-components";
import Link from 'next/link'



const buttonTest: NextPage  = () => {
return (<Wrapper>
    <Title>
        Hello World!
    </Title>
    <Link href={''} passHref>
        <StyledLink>name</StyledLink>
    </Link>
</Wrapper>);
}

export default buttonTest

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const StyledLink = styled.a`
  color: red;
`
