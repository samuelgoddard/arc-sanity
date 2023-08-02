import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'

import {
  FiHome,
  FiCamera,
  FiMail,
  FiBox,
  FiFileText
} from 'react-icons/fi'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))).icon(FiHome),
      S.divider(),
      S.listItem().title('Studio').child(S.editor().id('studio').schemaType('studio').documentId('singleton-studio').views(getPreview('studio'))).icon(FiCamera),
      S.divider(),
      S.listItem().title('Process').child(S.editor().id('process').schemaType('process').documentId('singleton-process').views(getPreview('process'))).icon(FiBox),
      S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact').views(getPreview('contact'))).icon(FiMail),
      S.divider(),
      S.listItem().title('Privacy Policy').child(S.editor().id('privacy').schemaType('privacy').documentId('singleton-privacy').views(getPreview('privacy'))).icon(FiFileText),
      // S.listItem().title('Work').child(S.documentTypeList('work').title('Work')).icon(FiCamera),
    ]);