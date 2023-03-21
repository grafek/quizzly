import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{type: 'reference', to: {type: 'question'}}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[&\/\\#,+()$~%.'":*¿?<>{}]/g, ''),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rules',
      title: 'Rules',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
