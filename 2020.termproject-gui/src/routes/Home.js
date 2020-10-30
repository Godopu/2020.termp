import React from "react";
import {useQuery} from "@apollo/react-hooks";
import styled from "styled-components";
import {GET_ITEM, GET_ITEMS} from "../controller/item";

// style component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// 1.2
export default () => {

  const l = useQuery(GET_ITEMS);
  const e = useQuery(GET_ITEM, {
    variables : {id : 14123}
  });
  
  return (
    <Container>
      {l.loading && <div>Loading...</div>}  
      <div>
        {l.data?.items?.map(m => (
          <div>{m.name}</div>
            ))}
      </div>

        {e.loading && <div>Loading...</div>}
        {e.data?.item?.name} 
    </Container>
  );
};