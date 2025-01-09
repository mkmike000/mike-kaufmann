import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Mike B. Kaufmann',

  projectId: 'gxcn7o30',
  dataset: 'production',

  plugins: [visionTool()],

  schema: {
    types: schemaTypes,
  },
})
