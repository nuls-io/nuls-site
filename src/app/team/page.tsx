import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team - NULS is a global team',
  description:
    'Our global team of business and technology experts are committed to blockchain, decentralization, and community-building. NULS has team members in all corners of the globe. Our team is making the dream of mass adoption an open-sourced reality.'
}

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      TeamPage
    </div>
  )
}
