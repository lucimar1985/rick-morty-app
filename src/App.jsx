import { Header } from "./components/header";
import { BackgroundSection } from "./components/background";
import { useEffect, useState } from "react";
import { CharacterList } from "./components/chracter-list";
import { api } from "./api";
import { SocialLink } from "./components/social";


function App() {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      setData(await api(url));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchNextPage = async (url) => {
    fetchData(url);
  };

  const fetchPreviousPage = async (url) => {
    fetchData(url);
  };

  return (
    <>
      <Header />
      <BackgroundSection />
      <CharacterList
        data={data}
        fetchNextPage={(url) => fetchNextPage(url)}
        fetchPreviousPage={(url) => fetchPreviousPage(url)}
      />
     <SocialLink/>
    </>
  );
}

export default App;
