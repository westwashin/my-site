import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'w20ss88c',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})
