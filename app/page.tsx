import React from 'react'
import AboutMe from './component/about-me'
import { aboutMe, skills, professionalData } from '../data/page-data'
import ProfessionalExperience from './component/professional-experience'
import Head from 'next/head'

const page = () => {
  return (
    <div>
      <Head>
        <title>My App Title</title>
        <meta name="description" content="Tom Gallagher" />
        <meta property="og:title" content="Tom Gallagher" />
        <meta
          property="og:description"
          content="Full Stack Software Engineer"
        />
        <meta property="og:image" content="https://example.com/my-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Tom Gallagher" />
        <meta
          name="twitter:description"
          content="Full Stack Software Engineer"
        />
        <meta name="twitter:image" content="https://example.com/my-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <AboutMe data={aboutMe} skills={skills} />
      <ProfessionalExperience data={professionalData} />
    </div>
  )
}

export default page
