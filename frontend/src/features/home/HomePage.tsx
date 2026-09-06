import { Hero } from './components/Hero'
import { Metrics } from './components/Metrics'
import { CoreExpertise } from './components/CoreExpertise'
import { FeaturedProject } from './components/FeaturedProject'
import { ToolsPlatforms } from './components/ToolsPlatforms'

import { PageSideDecoration } from '../../shared/components/PageSideDecoration'

import './HomePage.css'

export function HomePage() {
  return (
    <div className="home-page">
      <PageSideDecoration />

      <div className="home-page__content">
        <Hero />

        <Metrics />

        <CoreExpertise />

        <FeaturedProject />

        <ToolsPlatforms />
      </div>
    </div>
  )
}