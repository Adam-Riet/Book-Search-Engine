import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
            _id
            userName
            email
            bookCount
            savedBooks {
                _id
                authors
                description
                title
                image
                link
            }
        }
    }
`;

