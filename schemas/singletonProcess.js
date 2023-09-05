export default {
  title: 'Process',
  name: 'process',
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
      title: 'Hero Heading',
      name: 'heroHeading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Our View Image',
      name: 'ourViewImagee',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Our View Text',
      name: 'ourViewText',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    },
    {
      title: 'The Network Heading',
      name: 'theNetworkHeading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'The Network Text',
      name: 'theNetworkText',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    },
    {
      title: "The Network List Items",
      type: "array",
      name: "theNetworkListItems",
      of: [
        {
          type: "object",
          name: "networkListItem",
          fields: [
            { type: "string", name: "title" },
            { type: "string", name: "department", options: {
              list: [
                { title: "Arc Team", value: "arcTeam" },
                { title: "Supporting Experts", value: "supportingExpers" },
                { title: "Wider Network", value: "widerNetwork" },
              ],
              },
            }
          ],
          preview: {
            select: {
              title: 'title',
              department: 'department'
            },
            prepare ({ title, department }) {
              return {
                title: title,
                subtitle: department
              }
            }
          }
        }
      ],
    },
    {
      title: 'The Response Heading',
      name: 'theResponseHeading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: "The Response Items",
      type: "array",
      name: "theResponseItems",
      of: [
        {
          type: "object",
          name: "theResponseItem",
          fields: [
            { type: "defaultImage", name: "image" },
            { type: "string", name: "title" },
            { type: "text", rows: 3, name: "text" },
          ],
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