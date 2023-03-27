import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    defineField({
      name: 'rules',
      title: 'Rules',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
