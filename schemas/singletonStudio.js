import {
  FiUser
} from 'react-icons/fi'

export default {
  title: 'Studio',
  name: 'studio',
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
      title: 'The Team Text',
      name: 'theTeamText',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    },
    {
      title: "Team",
      type: "array",
      name: "team",
      of: [
        {
          type: "object",
          name: "teamMember",
          fields: [
            { type: "string", name: "name" },
            { type: "string", name: "jobTitle" },
            { type: "text", rows: 3, name: "text" },
            { type: "defaultImage", name: "image" },
          ],
          preview: {
            select: {
              name: 'name',
              jobTitle: 'jobTitle',
              image: 'image'
            },
            prepare ({ name, jobTitle, image }) {
              return {
                title: name,
                subtitle: jobTitle,
                media: image
              }
            }
          }
        }
      ],
    },
    {
      title: 'Alumni Text',
      name: 'alumniText',
      type: 'text',
      rows: 4,
    },
    {
      title: "Alumni",
      type: "array",
      name: "alumni",
      of: [
        {
          type: "object",
          name: "teamMember",
          icon: FiUser,
          fields: [
            { type: "string", name: "name" },
            { type: "string", name: "jobTitle" },
          ],
          preview: {
            select: {
              name: 'name',
              jobTitle: 'jobTitle',
            },
            prepare ({ name, jobTitle }) {
              return {
                title: name,
                subtitle: jobTitle
              }
            }
          }
        }
      ],
    },
    {
      title: 'The Space Heading',
      name: 'theSpaceHeading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'The Space Text',
      name: 'theSpaceText',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    },
    {
      title: 'The Space Image',
      name: 'theSpaceImage',
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