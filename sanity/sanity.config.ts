import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'quizzly',

  dataset: 'prod',
  projectId: 'x2nf5lkt',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
