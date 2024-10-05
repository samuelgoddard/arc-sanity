import { FiExternalLink, FiLink } from "react-icons/fi";

export default {
  name: 'contentSimple',
  title: 'Content Simple',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
      ],
      // Only allow numbered lists
      lists: [
        {title: 'List', value: 'bullet'}
      ],
      marks: {
        // Only allow these decorators
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ]
      }
    }
  ]
}