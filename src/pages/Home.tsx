import Hero from '../components/sections/Hero'
import PhilosophieSection from '../components/sections/StorySection'
import RestaurantSection from '../components/sections/AboutSection'
import AubracSection from '../components/sections/AubracTeaser'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <PhilosophieSection />
      <RestaurantSection />
      <AubracSection />
      <CTASection />
    </>
  )
}
