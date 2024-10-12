// All Slugs go here...
const globalSlugs = {
  home: '/',
  process: '/process',
  studio: '/studio',
  privacy: '/privacy',
  project: '/projects'
}

const secret = process.env.SANITY_STUDIO_SANITY_PREVIEW_SECRET
export const getGlobalSlug = (slug) => globalSlugs[slug]

// Change remote url...
const remoteURL = 'https://arc-git-site-updates-samgoddard.vercel.app/'
const localURL = 'http://localhost:3000'
export const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const createUrl = ({ slug, globalSlug }) => {
  if (!globalSlug || !previewURL) {
    console.warn('Missing slug or previewURL', { globalSlug, previewURL })
    return ''
  }
  let path = `${globalSlug}`
  if (slug) path += `/`
  return `${previewURL}/api/preview?secret=skN2uSa61HhhdoKlm0xFHUhbU17YtNdTEfoRne142yESzF0pBQrprl0yE27fRTfnYSThMT8wwRPZtdtfJgDnbPYyO3yZrrYfBCkoDAN8LomXWLGVgXEx0h37hPgj5zK4HyKAv2zJr0QzXcy0xeWLQ2BHWRBhg67WTzHjFFyQeNhhEYOr8wEZ&slug=${path}`
}

export default function resolveProductionUrl (document) {
  const url = createUrl({ globalSlug: getGlobalSlug(document._type), slug: document.slug })
  return url
}
