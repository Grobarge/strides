import React from 'react';
import styled from 'styled-components'
import ActionLink from '../ActionLink/ActionLink'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    max-width: 760px;
    margin: 0 auto;
    @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    margin: 20px 0;
`

const QuestionWrapper = styled.div`
    /* width: 324px; */
    max-height: 60px;
    font-family: Frank Ruhl Libre;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    max-width: 480px;
    display: block;
    @media (max-width: 500px) {
        padding: 0 25px;
    }
`
const AnswerWrapper = styled.div`
    display: block;
    margin-top: 10px;
    /* height: 50px; */
    font-family: Muli;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #858585;
    width: 311px;
    @media (max-width: 500px) {
        padding: 0 25px;
    }
`

const Spacer = styled.div`
    height: 20px;
`

const LinkWrapper = styled.div`
        @media (max-width: 500px) {
        padding: 0 25px;
    }
`

const FAQ = () => (
    <Wrapper>
        <div>
            <Container>
                <QuestionWrapper>
                    Is it expensive to make an app?
                </QuestionWrapper>
                <AnswerWrapper>
                    Usually
                </AnswerWrapper>
            </Container>
            <Container>
                <QuestionWrapper>
                    Like, how much are we talking?
                </QuestionWrapper>
                <AnswerWrapper>
                    Depends
                </AnswerWrapper>
            </Container>
            <Container>
                <QuestionWrapper>
                    Ok... How long will it take?
                </QuestionWrapper>
                <AnswerWrapper>
                    Depends.
                </AnswerWrapper>
            </Container>
            <Container>
                <QuestionWrapper>
                    Can you explain more?
                </QuestionWrapper>
                <AnswerWrapper>
                    No problem, just give us a call or shoot over an email.
                </AnswerWrapper>
            </Container>
        </div>
        <div>
            <Spacer />
            <LinkWrapper>
                <ActionLink to='' text='info@strides.dev' />
            </LinkWrapper>
            <Spacer />
            <LinkWrapper>
                <ActionLink to='' text='(208) 227-4479' />
            </LinkWrapper>
        </div>
    </Wrapper>
)


export default FAQ;