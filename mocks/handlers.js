import { graphql } from 'msw'
export const handlers = [
    graphql.query('continents', (req, res, ctx) => {
      return res(
        ctx.data({
         continents: [
            {
              name: 'mockedJohn',
              code: 'mockedMaverick',
            },
            {
              name: 'mockedCathaline',
              code: 'mockedMcCoy',
            },
          ],
        }),
      )
    }),
    graphql.query('languages', (req, res, ctx) => {
        return res(
          ctx.data({
            languages: [
              {
                name: 'mockedBarcelona',
                code: 'mockedBarca',
                __typename: "Language"
              },
              {
                name: 'mockedMadrid',
                code: 'mockedMad',
                __typename: "Language"
              },
            ],
          }),
        )
      })
]