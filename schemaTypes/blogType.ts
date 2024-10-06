import {defineField, defineType} from 'sanity'

export const blogPost = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name' },
      validation: (rule) => rule
        .required()
        .error(),
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'vorschaubild',
      title: 'Vorschaubild',
      type: 'image',
    }),
    defineField({
      name: 'beschreibung',
      title: 'Beschreibung',
      type: 'array',
      of: [{type: 'block'}]
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'name',
      media: 'vorschaubild',
    }
  }
})