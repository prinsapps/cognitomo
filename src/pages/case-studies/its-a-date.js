import React from 'react'
import { Layout, SEO, Hero, Section } from '../../components'

import Blob1 from '../../assets/svgs/its-a-date/teal-blob1.svg'
import Blob3 from '../../assets/svgs/its-a-date/teal-blob2.svg'
import { createOptimizedCloudinary } from '../../utils/utilityService'

const COMPANY_COLOR = '#FAC4A8'
const CaseStudy = () => {
  return (
    <Layout>
      <SEO title="Rapid Prototyping and Iterative Design | It's a Date" />
      <Hero
        caseStudy
        title="Rapid Prototyping and Iterative Design"
        companyName="It's a Date"
        companyColor={COMPANY_COLOR}
        mediumHeroImage
        companyWebsite="https://www.itsadate.app/"
        heroImgConfig={{
          src: createOptimizedCloudinary(
            'https://res.cloudinary.com/calderablog/image/upload/v1565064161/Group_637_2x_scvnjg.png',
          ),
          alt: 'Phone showcasing Its a Date',
        }}
        blobs={[
          { blob: Blob1, position: 'topRight', size: 'medium' },
          {
            blob: Blob3,
            position: 'topLeft',
            size: 'medium',
            hideOnSmallMedium: true,
          },
        ]}
      />
      <Section smallPadding>
        <Section.H2>It's a Date</Section.H2>
        <Section.Image
          src={createOptimizedCloudinary(
            'https://res.cloudinary.com/calderablog/image/upload/v1565065682/its-a-date-intro-mockup3_2x_prmqqs.png',
            'w_350,c_fit',
          )}
          alt="Welcome screen for Its a Date"
          floatRight
          phoneImage
          zoomable
        />
        <p>
          Online dating is flooded with mobile apps that focus on throwing
          potential matches into "Yes" and "No" bins. It is impersonal and
          prevents users from interacting with people they might have found
          real, romantic connections with given just a little bit more time.
        </p>
        <p>
          Many of the popular dating apps attract people with decidedly
          unromantic intentions. Shocking and uncomfortable bios and pick-up
          lines, blunt propositions, racy pictures...it is pretty clear when the
          other user has no skin in the game. Even when you find someone
          attractive and pleasant to talk to, there always remains the question:
          What is their end goal? Just a chat buddy or an actual romantic
          partner?
        </p>
      </Section>
      <Section lightBackground smallPadding>
        <Section.BoldText>
          Introducing It's a Date. It's a Date encourages human connections
          through shared experiences. We thoughtfully curate dates to make users
          excited not only for the person they are meeting, but also the overall
          experience they are agreeing to be a part of.
        </Section.BoldText>
      </Section>
      <Section smallPadding>
        <Section.H2>User Research and Idea Generation</Section.H2>
        <p>
          Our staff was comprised entirely of people within our target
          demographic- young professionals [20-34] living in or near Washington
          D.C. We used big-name dating apps for years and felt like there was
          something missing. A majority of our ideas came directly as responses
          to our own qualms with existing apps. Our own social circles aided
          early ideation and user research, and made our eventual user testing
          sessions self-sustaining in terms of participant recruiting.
        </p>
      </Section>
      <Section
        noPadding
        lightBackground
        fluid
        twoColumn
        renderColumnOne={() => {
          return (
            <Section.Column>
              <Section.Image
                src={createOptimizedCloudinary(
                  'https://res.cloudinary.com/calderablog/image/upload/v1565064176/Image_53_2x_yzlmxs.png',
                )}
                alt="Collage of Its a Date screens"
                responsive
                style={{ objectPosition: 'bottom' }}
              />
            </Section.Column>
          )
        }}
        renderColumnTwo={() => {
          return (
            <Section.Column
              fluidGuard
              style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
            >
              <Section.H2>Development</Section.H2>
              <p>
                <b>Frontend:</b> React Native with Expo and Styled Components.
                We loved using this stack for mobile apps because it gave us the
                ability to get started creating quickly and did not create
                guardrails for the design team. They were able to create the
                exact experience people were asking for without worrying about
                views not being technically feasible or taking an unrealistic
                amount of time. Styled components felt right at home in React
                Native, allowing us to compose complex themes with custom React
                components in perfect harmony.
              </p>
              <p>
                <b>Backend:</b> Node, Express, Typescript, Firebase Cloud
                Firestore, and Google Cloud Platform. There is not a backend
                stack out there that allows you to create real-time applications
                faster. We created our messaging feature in one day! However,
                that speed came at the cost of in-depth domain expertise to the
                interworkings of Firebase and the Google Cloud Platform. The
                flexibility you take for granted in more traditional
                environments like scheduling, backups, integration testing, and
                other operations took a bit more effort to implement.
              </p>
              <p>
                <b>Dev ops:</b> We created three environments: Development,
                Staging, and Production. Development served as a playground for
                new features and allowed our development team to try certain
                features on phones before letting our design and functional team
                touch it in staging. Once features from Staging were tested and
                verified, we could deploy from our continuous integration to
                production.
              </p>
            </Section.Column>
          )
        }}
      />
      <Section>
        <Section.H2>The Landing Page</Section.H2>
        <p>
          With app development nearly complete and users asking about app, we
          created a landing page to generate hype around the product. The emails
          we captured were leveraged for user testing events and beta testing
          the app in its current state. With more feedback under our belt, we
          launched a blog and CMS for team members to write about cool events
          happening in the DC area.
        </p>
      </Section>
      <Section lightBackground>
        <Section.Image
          src={createOptimizedCloudinary(
            'https://res.cloudinary.com/calderablog/image/upload/v1565063779/its-a-date-website_tvptp8.jpg',
          )}
          alt="It's a Date landing page"
          responsive
          zoomable
        />
      </Section>
      <Section>
        <Section.H2>Administrative Portal</Section.H2>
        <p>
          Adhereing to our design principles, we launched without many features
          users take for granted in a dating app, like blocking functionality
          and a support portal. Instead, we opted to create a personal concierge
          that would route messages directly to the team to take care of any
          issue. Not only did it align with our app's goal of being more
          personal to our audience, but it allowed us to cut the development
          runway by three weeks.
        </p>
        <p>
          The admin portal was the place for our team to chat directly with
          users of the app, create new dates, and send push notifications. This
          was 100% integrated into the application and gave us fine grained
          control over how we interacted with users.
        </p>
      </Section>
      <Section>
        <Section.Image
          src={createOptimizedCloudinary(
            'https://res.cloudinary.com/calderablog/image/upload/v1565063763/its-a-date-admin_hg7y5q.jpg',
          )}
          alt="It's a Date admin portal"
          responsive
          zoomable
        />
      </Section>
      <Section>
        <Section.H2>Design Thinking</Section.H2>
        <p>
          For an internal app venture, this was our first experience tackling a
          domain as intimate as online dating and wanted to get it right. We
          enlisted the help of the{' '}
          <a
            href="http://www.sidoinnovation.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SIDO Innovation
          </a>{' '}
          team to help us run design thinking and facilitation sessions with
          friends and beta users. Through their proven techniques, we were able
          to pull out crucial insights on what users wanted and to see if we
          were on the mark with our hypothesis - something has to change in
          online dating.
        </p>
        <Section.FancyTile>
          Using proven design thinking techniques was crucial to the launch of
          It's a Date.
        </Section.FancyTile>
        <p>
          Each session lasted roughly three hours with drinks and apps provided.
          What was most striking is how quickly people opened up about their
          frustrations with using the app and shared their experiences with the
          team.
        </p>
        <Section.ImageCollage
          images={[
            {
              src: createOptimizedCloudinary(
                'https://res.cloudinary.com/calderablog/image/upload/v1565241839/its-a-date-session-entrance_yvsr7y.jpg',
                'w_1200,c_fit',
              ),
              alt: 'Its a Date User Testing Entrance',
            },
            {
              src: createOptimizedCloudinary(
                'https://res.cloudinary.com/calderablog/image/upload/v1565241836/its-a-date-testing-session_taxuow.jpg',
                'w_1200,c_fit',
              ),
              alt: 'Its a Date session',
            },
            {
              src: createOptimizedCloudinary(
                'https://res.cloudinary.com/calderablog/image/upload/v1565241836/its-a-date-feature-grouping_han4px.jpg',
                'w_1200,c_fit',
              ),
              alt: 'Its a Date feature grouping',
            },
            {
              src: createOptimizedCloudinary(
                'https://res.cloudinary.com/calderablog/image/upload/v1565241836/its-a-date-group-talking_zzirga.jpg',
                'w_1200,c_fit',
              ),
              alt: 'Its a Date Group Talking',
            },
          ]}
        />
      </Section>
      <Section smallPadding>
        <Section.H2>Testing</Section.H2>
        <p>For all apps, we implement three levels of testing:</p>
        <Section.OrderedList>
          <Section.ListItem>
            <b>Programmatic testing:</b> This involved taking the business rules
            established and writing tests in the code to make sure there were no
            errors. Errors like users getting matched up to the wrong gender or
            someone's message going to the wrong recipient. This made it crucial
            to make sure things worked as expected, especially on the backend.
            On top of tests writing for the logic of the application, we wrote
            the entire backend in Typescript to help us harden the code against
            any potential defects.
          </Section.ListItem>
          <Section.ListItem>
            <b>UI Testing:</b> All of the team members assisted in running
            through the app and scanning for potential defects in our Staging
            environment before deploying new code to Production.
          </Section.ListItem>
          <Section.ListItem>
            <b>Focus Group Testing:</b> Immediately after launch, we offered
            It's a Date to a user testing group of 20 participants. Users were
            instructed to move through the main event flow with specific aid
            only offered when requested. Points of approval, disapproval, and
            suggestion were all noted by category, then ranked by their urgency
            for continued development.
          </Section.ListItem>
        </Section.OrderedList>
      </Section>
      <Section smallPadding>
        <Section.H2>Launch</Section.H2>
        <p>
          After flow improvements and other design tweaks were implemented, It's
          a Date was ready for submission to incubators, accelerators, and other
          funding sources.
        </p>
        <p>
          Branding became a core focus as the specific voice of It's a Date
          began to emerge across press materials and internal app copy. Writing
          shifted from a single copywriter’s perspective to include internal
          insights from developers and other technical staff.
        </p>
        <Section.ResponsiveVideo style={{ margin: '2rem 0' }}>
          <iframe
            src="https://player.vimeo.com/video/311800634"
            title="launchVideo"
            width="853"
            height="505"
            frameBorder="0"
            allowFullScreen
          />
        </Section.ResponsiveVideo>

        <p>
          Our launched video amassed over 2,000 views in two days with an
          average engagement rate of 40% (industry average was 2%). Social
          ambassadors were recruited through our user testing sessions, which
          aided us in our initial user base growth. Brand ambassadors naturally
          fell in our target demographic due to our testing session selection
          parameters.
        </p>
      </Section>
    </Layout>
  )
}

export default CaseStudy
