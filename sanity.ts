import {createClient} from 'next-sanity'
import createImageUrlBuilder from "@sanity/image-url"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production" // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2022-11-16"

const client = createClient({
  projectId,
  dataset,
  apiVersion: "v2021-10-21", // https://www.sanity.io/docs/api-versioning
  useCdn: process.env.NODE_ENV === "production", // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

export const clientFetch = client.fetch.bind(client);
export const urlFor = (source: any) =>
createImageUrlBuilder(client).image(source);



