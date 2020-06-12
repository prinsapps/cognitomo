import React from 'react'
import { Section } from '../Section'
import styled from 'styled-components'
import { media } from '@caldera-digital/theme'
import Carousel from '@brainhubeu/react-carousel'

import Training from '../../assets/svgs/web.svg'
import Consultancy from '../../assets/svgs/consult.svg'
import Software_Solutions from '../../assets/svgs/soft_solution.svg'
import Intelligent_Systems_Solution from '../../assets/svgs/ai.svg'

import '@brainhubeu/react-carousel/lib/style.css'

const CarouselItem = styled.div`
  border-radius: 60px;
  box-shadow: 0 3px 17px rgba(54, 163, 252, 0.2);
  min-height: 420px;
  width: 100%;
  margin: 1rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};

  > svg {
    width: 30%;
    margin-right: 2rem;
  }

  > div {
    flex: 1;

    h3 {
      font-weight: bold;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-weight: 300;
      font-size: 1.2rem;
    }
  }

  ${media.forSmallMediumOnly`
    flex-direction: column;
    min-height: 550px;

    > svg {
      margin: 0 0 2rem;
    }

    > div {
      h3 {
        font-size: 1.75rem;
      }

      p {
        font-size: 1rem;
      }
    }
  `}

  ${media.forSmallOnly`
    flex-direction: column;
    min-height: 670px;

    > svg {
      width: 50%;
    }

    > div {
      h3 {
        font-size: 1.5rem;
      }
    }
  `}
`

export const OurServices = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  return (
    <Section
      header="Our Services"
      lightBackground
      renderSection={() => (
        <Carousel
          centered
          infinite
          clickToChange
          stopAutoPlayOnHover
          slidesPerPage={2}
          autoPlay={5000}
          animationSpeed={1000}
          slidesPerScroll={1}
          value={currentIndex}
          onChange={index => setCurrentIndex(index)}
          breakpoints={{
            991: {
              slidesPerPage: 1,
            },
            680: {
              slidesPerPage: 1,
            },
          }}
          
        >
          
          <CarouselItem>
            <Training />
            <div>
              <h3>Training</h3>
              <p>
              We will assist you in developing, improving, and transforming your internal skill sets with our expert consultancy and comprehensive range of practical courses such as Business Analysis, Programming, AI Solutions, Data Science, and analytics. These courses cater to Practitioners, Digital Leaders, and Business Frontiers. The pieces of training based on our client’s request, either classroom-based training or cooperative request training.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <Consultancy />
            <div>
              <h3>Consultancy</h3>
              <p>
              When you require independent advice or business solutions for your in-house issues, we can provide advanced solutions. We have experts to deliver integrated advanced solutions and AI/ML techniques to provide strategic advice and upskilling software solutions.   We help companies establish a data-driven culture that opens the door to digital economies with world-class capabilities and elevates business performance.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <Software_Solutions />
            <div>
              <h3>Software Solutions</h3>
              <p>
              We deliver state of the art industry standards and quality-driven software solutions. We help you with your needs in Web, Cloud or Mobile based solutions. We believe in the win-win theory, meaning, if you win in your business, then we will be successful in our business. Therefore, we always focus on your core business process and strengthen the process before proofing software solutions. Our substantial domain experience, technical expertise, and profound knowledge help us to provide quality solutions to fulfil your business requirements.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <Intelligent_Systems_Solution />
            <div>
              <h3>Intelligent Systems Solution</h3>
              <p>
              Our Intelligence System Solution team is specialists in AL/ML best practices, data science modelling, deep learning, computer vision, natural language processing, and more. We use these skills to provide intelligent systems solutions for our clients to leverage all of the potential AI/ML systems have to offer. We help you to transfer your ideas into tangible smart solutions through technical competence and implementation.
              </p>
            </div>
          </CarouselItem>
        </Carousel>
        
      )}
    />
  )
}
