import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Person from "../components/Person";
import { useState } from "react";
import { Box, Center } from "@chakra-ui/layout";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/people", fetcher);
  const [searchName, seachFieldHandler] = useState("");

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  function changeSearchField(e) {
    seachFieldHandler(e.target.value);
  }

  const filterByName = data.filter((userNames) => {
    return userNames.name
      .toLowerCase()
      .includes(searchName.toLocaleLowerCase());
  });

  return (
    <Box bgColor="#011627">
      <div className={styles.container}>
        <Center color="white">Search User</Center>
        <input onChange={changeSearchField}></input>
        <Box bgColor="#ffffff" p="6" m="3" borderRadius="10px">
          <ul>
            {filterByName.map((p, i) => {
              return <Person person={p} key={i} />;
            })}
          </ul>
        </Box>
      </div>
    </Box>
  );
}
