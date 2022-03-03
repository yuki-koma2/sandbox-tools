import {NextPage} from "next";
import styled from "styled-components";

const ScrollSnap: NextPage = () => {
    return (
        <SnapContainer>

            <AreaSection>
                <StickyTitle>概要</StickyTitle>
                <p>新宿までの距離が全然ちがう。<DotText>羽田</DotText>じゃないのか。</p>
            </AreaSection>
            <AreaSection2>
                <StickyTitle>概要2s</StickyTitle>
                <p>2</p>
                <ExtraOrderedList>
                    <li>練習</li>
                    <li>
                        お腹すいた
                        <ExtraOrderedList>
                            <li>うなぎ食べたい</li>
                            <li>寿司食べたい</li>
                            <li>中華食べたい</li>
                        </ExtraOrderedList>
                    </li>
                    <li>やっぱりふぐ食べたい</li>
                </ExtraOrderedList>
            </AreaSection2>
            <AreaSection>
                <StickyTitle>概要2s</StickyTitle>
                <p>3 this is 3.長い<WavedText>文章</WavedText>を書く</p>
            </AreaSection>
            <AreaSection2>
                <StickyTitle>斜めに配置する</StickyTitle>
                <ClipPathBox>
                    <p>
                        斜めにBOXを配置できるらしい。
                        今までどうやって書いているかわからなかったので助かる。
                    </p>
                </ClipPathBox>
            </AreaSection2>
            <OverLayAreaSection>
                <BigText>Hello World</BigText>
                5
            </OverLayAreaSection>
        </SnapContainer>
    );
};

export default ScrollSnap;

const OverLayAreaSection = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  background: #fff;
  padding: 24% 30px 10px;
  overflow: hidden;
  position: relative;
`;

const BigText = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 14vw;
  text-transform: uppercase;
  color: #000;
  position: absolute;
  top: -5vw;
  left: -2vw;
  white-space: nowrap;
  margin: 0;
`;

const ClipPathBox = styled.div`
  -webkit-clip-path: polygon(0 0, 100% 30%, 100% 70%, 0 100%);
  clip-path: polygon(0 0, 100% 30%, 100% 70%, 0 100%);
  background: #333;

  p {
    width: 70%;
    margin: 0 auto;
    padding: 40px 0;
  }
`;

const ExtraOrderedList = styled.ol`
  counter-reset: counter;
  list-style-type: none;

  li::before {
    counter-increment: counter;
    content: counters(counter, '.') ' ';
  }
`;


const SnapContainer = styled.div`
  overflow: auto;
  scroll-snap-type: y mandatory;
  height: 100vh;`
;

const AreaSection = styled.section`
  scroll-snap-align: start;
  height: 100vh;
  background-color: aquamarine;
`;

const AreaSection2 = styled.section`
  scroll-snap-align: start;
  height: 100vh;
  background-color: chocolate;
`;

const StickyTitle = styled.h2`
  position: sticky;
  top: 0;
`;

const WavedText = styled.span`
  text-decoration: underline wavy #0bd;
`;

const DotText = styled.span`
  -webkit-text-emphasis: dot #0bd;
  text-emphasis: dot #0bd;
`;

// dot
// circle
// double-circle
// triangle
// sesame
