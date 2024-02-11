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
      title: 'Phone (Nottingham)',
      name: 'phone',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Phone (London)',
      name: 'phoneLondon',
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
      title: 'Address (Nottingham)',
      name: 'address',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Address (Nottingham) Map Image',
      name: 'addressMapImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Address (London)',
      name: 'addressLondon',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Address (London) Map Image',
      name: 'addressLondonMapImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Company Name',
      name: 'companyName',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Company Number',
      name: 'companyNumber',
      type: 'string'
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