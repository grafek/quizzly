import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'question',
  title: 'Question',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Question Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
