import { defineField, defineType } from 'sanity';

export const testType = defineType({
  name: 'test',
  title: 'Test',
  type: 'document',
  fields: [
    defineField({
      name: 'testField',
      title: 'Test Field',
      type: 'string',
    }),
  ],
});