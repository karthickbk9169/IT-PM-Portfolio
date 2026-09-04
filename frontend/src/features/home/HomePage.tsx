import type { Project } from '../projects/types'

import { Hero } from './components/Hero'
import { Metrics } from './components/Metrics'
import { CoreExpertise } from './components/CoreExpertise'
import { FeaturedProject } from './components/FeaturedProject'
import { ToolsPlatforms } from './components/ToolsPlatforms'

type HomePageProps = {
  featuredProject?: Project
}

export function HomePage({ featuredProject }: HomePageProps) {
  return (
    <>
      <Hero />
      <Metrics />
      <CoreExpertise />
      <FeaturedProject project={featuredProject} />
      <ToolsPlatforms />
    </>
  )
}