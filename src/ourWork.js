import React from 'react'
import { createOptimizedCloudinary } from './utils/utilityService'

export const OUR_WORK = [
  {
    imageConfig: {
      src: createOptimizedCloudinary(
        'https://res.cloudinary.com/prinsapps/image/upload/v1591927582/cognitomo/desktop_o7jp6t.png',
      ),
      // eslint-disable-next-line quotes
      alt: "It's a Date app launch screen",
    },
    // eslint-disable-next-line quotes
    title: "Smart Edu",
    to: '/case-studies/smart-edu',
    reverse: false,
    description() {
      return (
        <p>
          Make your student's life easier. made for Academy, College, School, University, Courses Hub, LMS and Training Center
        </p>
      )
    },
  },
  {
    imageConfig: {
      src: createOptimizedCloudinary(
        'https://res.cloudinary.com/prinsapps/image/upload/v1591929268/cognitomo/tml3_k3l639.png',
      ),
      alt: 'Tamil Museum London',
    },
    title: 'Tamil Museum London',
    to: '/case-studies/tamilmuseum',
    reverse: true,
    description() {
      return (
        <p>
          Tamilmuseum Ltd is an active company incorporated on 24 February 2020 with the registered office located in London, Greater London. Tamilmuseum Ltd has been running for 3 months. There is currently 1 active director according to the latest confirmation statement submitted on 24th February 2020.
        </p>
      )
    }
  }
]
