import {createClient} from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'w20ss88c',
  dataset: 'production',
  apiVersion: '2024-01-08',
  useCdn: false,
})

const imageBuilder = ImageUrlBuilder(client)

export function urlForImage(source: any) {
  return imageBuilder.image(source)
}
