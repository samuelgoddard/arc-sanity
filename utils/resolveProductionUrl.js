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
  return `${previewURL}/api/preview?secret=sk1OMERvCaq6rEuX9jXytYPa1oX5kGkXAlQ8kf8gwrUYDXO9L4u8xFy5Rlovv9TbKzoKeNQ72MWTwMpwAKvrH0vA62wbxs4BfLn1tIYQfKnn3PCwLO8lhfVeGkGXCaTOurdKTb2u36cbW4PlAju45mhXB3PCxtttfWX4daQh32DVdAe4rpkO&slug=${path}`
}

export default function resolveProductionUrl (document) {
  const url = createUrl({ globalSlug: getGlobalSlug(document._type), slug: document.slug })
  return url
}
