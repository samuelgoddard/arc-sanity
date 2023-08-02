export default {
  title: 'Contact',
  name: 'contact',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Get In Touch Text',
      name: 'getInTouchText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}