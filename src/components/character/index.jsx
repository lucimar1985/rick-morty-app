/* eslint-disable react/prop-types */
import { Container, ContainerInfo} from "./style";

export const Character = ({ character }) => {
console.log(character);
const getStatusColor = (status) => {
    if(status === "Alive") return "#55cc44";
    if(status === "Dead") return "#d63d2e";
    return "#9e9e9e"
    
}

  return <Container>
    <img src={character.image} alt={character.name}/>
    <ContainerInfo backgroundColor={getStatusColor(character?.status)}>
        <div>
            <p className="title">{character?.name}</p>
            <p className="status"><span/>
            {character?.status} - {character?.species}
            </p>
        </div>

        <div>
            <p className="info">Last Know Location:</p>
            <p className="description">{character?.location?.name || "Unknown"}</p>
        </div>

        <div>
            <p className="info">Origin:</p>
            <p className="description">{character?.origin?.name || "Unknown"}</p>
        </div>
    </ContainerInfo>

    
  </Container>;
};
