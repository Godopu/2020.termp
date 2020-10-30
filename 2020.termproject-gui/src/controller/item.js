import { gql } from "apollo-boost";

export const GET_ITEMS = gql`
query {
  items {
    id, name
  }
}
`

export const GET_ITEM = gql`
query itemData($name : String!, $id : Int!){
  item(name : $name, id : $id) {
    id 
    name 
    age
  }
}
`;
