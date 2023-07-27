import {defineType} from 'sanity'

export default defineType({
  name: 'row',
  title: 'Row',
  type: 'object',

  fields: [
    {
      name: 'row',
      type: 'string',
    },
    {
      name: 'seats',
      type: 'array',
      of: [
        {
          name: 'seat',
          type: 'object',
          fields: [
            {
              name: 'number',
              type: 'string',
            },
            {
              name: 'bookingStatus',
              type: 'string',
            },
          ],
        },
      ],
      options: {
        layout: 'table',
      },
    },
  ],
})
