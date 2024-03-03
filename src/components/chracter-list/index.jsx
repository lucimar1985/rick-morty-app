/* eslint-disable react/prop-types */
import { Character } from "../character";
import { Pagination } from "../pagination";
import { Container, ContainerList } from "./style";

export const CharacterList = ({ data, fetchPreviousPage, fetchNextPage }) => {
  return (
    <Container>
      <ContainerList>
        {data?.results?.map((character) => (
          // eslint-disable-next-line react/jsx-key
          <Character character={character} />
        ))}
      </ContainerList>
      <Pagination
        pagination={data?.info}
        fetchNextPage={(url) => fetchNextPage(url)}
        fetchPreviousPage={(url) => fetchPreviousPage(url)}
      />
    </Container>
  );
};
