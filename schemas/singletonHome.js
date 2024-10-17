export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Text',
      name: 'heroText',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    },
    // {
    //   title: 'Hero Image',
    //   name: 'heroImage',
    //   type: 'defaultImage',
    //   validation: Rule => Rule.required()
    // },
    {
      title: 'Hero Video',
      description: 'This video will be displayed in the hero section of the home page. It will be displayed as a muted, looping background video, please be considerate of file size.',
      name: 'heroVideo',
      type: 'file',
    },
    {
      title: 'Overview Heading',
      name: 'overviewHeading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Overview Image',
      name: 'overviewImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Overview Text',
      name: 'overviewText',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    },
    {
      title: 'Mission Heading',
      name: 'missionHeading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: "Mission Items",
      type: "array",
      name: "missionItems",
      of: [
        {
          type: "object",
          name: "missionItem",
          fields: [
            { type: "defaultImage", name: "shapeImage", title: "Image" },
            { type: "string", name: "title" },
            { type: "text", rows: 3, name: "text" },
          ]
        }
      ],
    },
    {
      title: 'Footer Image',
      name: 'footerImage',
      type: 'defaultImage',
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