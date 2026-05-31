import BetaHero from '@/components/BetaHero'
import TrustSection from '@/components/TrustSection'
import HowItWorks from '@/components/HowItWorks'

import JoinCTA from '@/components/JoinCTA'
import PreviewPhotoWall from '@/components/PreviewPhotoWall'

import OfficialLineCard from '@/components/OfficialLineCard'
import OfficialIGCard from '@/components/OfficialIGCard'
import BetaBenefits from '@/components/BetaBenefits'
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f5ff] text-[#17121f]">
      <BetaHero />
      <PreviewPhotoWall />

      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-6 px-5 pb-16 pt-6">
        
        <JoinCTA />
        <TrustSection />
        <HowItWorks />
        <BetaBenefits />
        
        <OfficialLineCard />
        <OfficialIGCard />
        <JoinCTA />
      </div>
    </main>
  )
}