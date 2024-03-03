import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/character";

export const api = async (url = baseUrl) => {
    const {data} = await axios.get(url);
    return data;
};