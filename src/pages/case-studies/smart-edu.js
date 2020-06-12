import React from 'react'
import { Layout, SEO, Hero, Section } from '../../components'

import Blob1 from '../../assets/svgs/its-a-date/teal-blob1.svg'
import Blob3 from '../../assets/svgs/its-a-date/teal-blob2.svg'
import { createOptimizedCloudinary } from '../../utils/utilityService'

const COMPANY_COLOR = '#FAC4A8'
const CaseStudy = () => {
  return (
    <Layout>
      <SEO title="Make your student's life easier. | Smart edu" />
      <Hero
        caseStudy
        title="Make your student's life easier"
        companyName="Smart edu"
        companyColor={COMPANY_COLOR}
        mediumHeroImage
        companyWebsite="https://cognitomo.com/"
        heroImgConfig={{
          src: createOptimizedCloudinary(
            'https://res.cloudinary.com/prinsapps/image/upload/v1591923799/cognitomo/portfolio1_gujpqp.png',
          ),
          alt: 'Make your students life easier',
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
        <Section.H2>Smart edu</Section.H2>
        <Section.Image
          src={createOptimizedCloudinary(
            'https://res.cloudinary.com/prinsapps/image/upload/v1591927582/cognitomo/desktop_o7jp6t.png',
            'w_350,c_fit',
          )}
          alt="Welcome screen for Its a Date"
          floatRight
          phoneImage
          zoomable
        />
        <p>
        Our platform combines 2 different “online” teaching tools to create an integrated classroom.
        Lessons are scheduled using the LiveSchool LMS (based on Moodle) which holds all of the resources
         and homework activities for the lesson and linked to the LiveSchool video sessions where 
         learners can interact with the teacher and complete their learning.
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
          Introducing with Zoom
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
                  'https://res.cloudinary.com/prinsapps/image/upload/v1591968436/cognitomo/congrea_nmp0yb.png',
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
              <Section.H2>Features</Section.H2>
              <p>
                <b>Live Video Sessions:</b> Live classes and group discussions allow all learners to access subject specialist tutors.
              </p>
              <p>
                <b>Clear Full Duplex Audio:</b> Integrated Audio systems within LiveSchool allows learners and teacher to interact even when using lower bandwidths (slow internet connection).
              </p>
              <p>
                <b>Text Chat & Session Notes:</b> Instant messaging / text chat is integrated into LiveSchool for communication between learners and teachers along with the audio.
              </p>
              <p>
                <b>Shared Interactive Whiteboards:</b> Within LiveSchool, multiple shared whiteboards allows teachers (and learners) to type text, launch images and slides.
              </p>
              <p>
                <b>Share PowerPoint, Files & Images:</b> LiveSchool teachers can share PowerPoint, PDF, DOC, XLS, TXT and other common document types. Use markup and annotation over slides and pages. Launch files and broadcast images synchronously, just like in a physical classroom.
              </p>
              <p>
                <b>Screen Sharing & Remote Control:</b> Teachers can pass control of the whiteboard to an individual learner, which enhances learning allowing teachers to ask learners to complete activities in front of the whole class.
              </p>
              <p>
                <b>Group Rooms for Individual Collaboration:</b> LiveSchool allows learners to all join the same classroom. However, there are times when a teacher needs to work with a learner 1 to 1 or in smaller groups. LiveSchool Group Rooms enable teachers to split the class into smaller groups so that your students collaborate and practice individually.
              </p>
              <p>
                <b>Session Recording and Playback:</b> All sessions are recorded for both quality control and revision. LiveSchool continually monitor lessons, all of which are available to learners to revisit at anytime.
              </p>
            </Section.Column>
          )
        }}
      />
      <Section>
        <Section.H2>The Landing Page</Section.H2>
        <p>
          No matter where you are. The space is always on your device. fully responsive design. 
        </p>
      </Section>
      <Section lightBackground>
        <Section.Image
          src={createOptimizedCloudinary(
            'https://res.cloudinary.com/prinsapps/image/upload/v1591931198/cognitomo/landing_s6cq8g.jpg',
          )}
          alt="It's a Date landing page"
          responsive
          zoomable
        />
      </Section>
      <Section>
        <Section.H2>Administrative Portal</Section.H2>
        <p>
        This made for Academy, College, School, University, Courses Hub, LMS and Training Center. and we offer the best Online Learning experience ever.
    
        </p>
        <p>
          The admin portal was the place for our team to chat directly with
          users of the site, create new dates, and send push notifications. This
          was 100% integrated into the application and gave us fine grained
          control over how we interacted with users.
        </p>
      </Section>
      <Section>
        <Section.Image
          src={createOptimizedCloudinary(
            'https://res.cloudinary.com/prinsapps/image/upload/v1591931378/cognitomo/admin-portal_ruzram.jpg',
          )}
          alt="It's a Date admin portal"
          responsive
          zoomable
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
        
        <Section.ResponsiveVideo style={{ margin: '2rem 0' }}>
          <iframe
            src="https://player.vimeo.com/video/428492331"
            title="launchVideo"
            width="853"
            height="505"
            frameBorder="0"
            allowFullScreen
          />
        </Section.ResponsiveVideo>
      </Section>
    </Layout>
  )
}

export default CaseStudy
