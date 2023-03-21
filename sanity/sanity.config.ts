import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'quizzly',

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'prod',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
