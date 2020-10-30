import ApolloClient, { gql } from "apollo-boost";
import {Item, GET_ITEM, GET_ITEMS, ADD_ITEM, DEL_ITEM} from "./controller/item"
import 'cross-fetch/polyfill';

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

async function getItems(client : ApolloClient<unknown>){
  const result = await client.query ({
    query: GET_ITEMS,
  });

  console.log(result.data.items)
}

async function getItem(client : ApolloClient<unknown>, id : number){
  const result = await client.query ({
    query: GET_ITEM,
    variables: {
      id : id
    }
  });

  console.log(result.data.item)
}

async function addItem(client : ApolloClient<unknown>, obj : Item){
  const result = await client.mutate ({
    mutation: ADD_ITEM,
    variables: obj
  });

  console.log(result.data.result)
}

async function delItem(client : ApolloClient<unknown>, id : number){
  const result = await client.mutate ({
    mutation: DEL_ITEM,
    variables: {id}
  });

  console.log(result.data.result)
}


(async function main(){
  // list 조회
  await getItems(client);

  // // item 조회
  await getItem(client, 14123);

  // // item 추가
  let obj : Item = {
    id : 0,
    name : "Kil-Dong",
    age : 5,
    from : "Korea"
  }
  await addItem(client, obj);

  // item 삭제
  await delItem(client, 24123);
})()