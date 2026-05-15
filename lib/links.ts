export const LINKS = {
  vibelinkBeta: 'https://vibelink-new.vercel.app/',
  officialInstagram: 'https://www.instagram.com/',
}

export function openExternalLink(url: string) {
  if (typeof window === 'undefined') return

  window.open(url, '_blank', 'noopener,noreferrer')
}