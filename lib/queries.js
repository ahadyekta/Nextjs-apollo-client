import gql from "graphql-tag";

export const CONTINENTS_QUERY = gql`
      query continents {
        continents {
          code
          name
        }
      }
    `;

export const LANGUAGES_QUERY = gql`
      query languages {
        languages {
            name
            code
        }
      }
`;

export const CONTINENT_QUERY = gql`
    query getContinent($continentCode: ID!) {
        continent(code: $continentCode) {
            name
            code
            countries {
            code
            name
            }
        }
    }
`;