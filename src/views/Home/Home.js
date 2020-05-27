import React from 'react'
import { Link } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import ActionLink from '../../components/ActionLink/ActionLink'
import starOne from '../../assets/Star-1.png'
import ProjectCardContainer from '../../components/ProjectCardContainer/ProjectCardContainer'
import TeamContainer from '../../components/TeamContainer/TeamContainer'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FAQ from '../../components/FAQ/FAQ'

const HomeWrapper = styled.div`
    background-color: #08090F;
    margin: 0;
    padding: 0 50px 100px;
    max-width: 760px;
    margin: 0 auto;

    @media (max-width: 500px) {
        padding: 0 32px 100px;
    }     
`

const BannerWrapper = styled.div`
    height: calc(100vh - 72px);
    margin: 0 auto;
    position: relative;
`

const BannerContentWrapper = styled.div`
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
`

const StyledHomeTitle = styled.h1`
    max-width: 448px;
    font-family: Muli;
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 70px;
    color: #FFFFFF;
    margin: 0 0 48px;
`

const StyledH2 = styled.h2`
    font-family: Muli;
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 70px;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
`
const StyledSubtitle = styled.p`
    color: #fff;
    font-family: 'Frank Ruhl Libre';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    margin: 16px 0;
`

const AboutWrapper = styled.div`
    height: calc(80vh);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
`

const StyledPaintSpot = styled.img`
    height: 496px;
    width: 499;
    position: absolute;
    z-index: -1;
`
const Spacer = styled.div`
    height: 300px;
`
const SmallSpacer = styled.div`
    height: 30px;
`

const LinkWrapper = styled.div`
    margin: 16px 0 0;
`

const Home = () => (
    <div>
        <Header />
        <HomeWrapper>
        <BannerWrapper>
            <BannerContentWrapper>
                <StyledHomeTitle>
                    We turn your ideas into apps
                </StyledHomeTitle>
                <LinkWrapper>
                    <ActionLink text='Get A Quote' url='/contact'/>
                </LinkWrapper>
            </BannerContentWrapper>
        </BannerWrapper>
        <StyledH2>
            Our work
        </StyledH2>
        <LinkWrapper>
            <StyledSubtitle>
                Check out a few of our recent projects
            </StyledSubtitle>
        </LinkWrapper>
        <ProjectCardContainer />
        <AboutWrapper>
            <StyledH2>
                Why us?
            </StyledH2>
            <LinkWrapper>
            <StyledSubtitle>
                You deserve better than a one-size-fits-all option. Our agency's capabilities are focused around one thing – creating amazing apps. 
            </StyledSubtitle>
            </LinkWrapper>
            <LinkWrapper>
                <ActionLink text='Contact us' url='/contact' />
            </LinkWrapper>
        </AboutWrapper>
        <SmallSpacer />
        <SmallSpacer />
        <StyledH2>
            The team
        </StyledH2>
        <TeamContainer />
        <StyledH2>
            FAQ
        </StyledH2>
        <FAQ />
        
        </HomeWrapper>
        <Footer />
    </div>
    
)

export default Home