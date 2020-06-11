import React from 'react'
import { BlobSection } from '../Section'
import styled from 'styled-components'
import { media } from '@caldera-digital/theme'

import Blob from '../../assets/svgs/blue-blob2.svg'

const WelcomeTextContainer = styled.div`
  flex: 1;

  h2 {
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  ${media.forSmallMediumOnly`
    h2 {
      font-size: 2rem;
      margin-bottom: 1.25rem;
    }
  `}
`

const BreakoutSection = styled.div`
  border-left: 6px solid ${props => props.theme.secondaryColor};
  padding-left: 1.5rem;
  margin-left: 1rem;

  > p {
    &:first-child {
      font-size: 1.8rem;
    }

    &:last-child {
      color: ${props => props.theme.grayText};
    }
  }

  ${media.forSmallMediumOnly`
    padding-left: 1.5rem;
    margin-left: 1rem;

    > p {
      &:first-child {
        font-size: 1.4rem;
      }

      &:last-child {
        color: ${props => props.theme.grayText};
      }
    }
  `}
`

export const Welcome = () => {
  return (
    <BlobSection fluid blob={Blob}>
      <WelcomeTextContainer>
        <h2>
          We transform your business into digital world
        </h2>
        <BreakoutSection>
          <p>
            We are a software solution provider’s work towards digital transformation for SMEs. We also provide independent business process reengineering, consultancies, advice, training and support services
          </p>
        </BreakoutSection>
      </WelcomeTextContainer>
    </BlobSection>
  )
}
