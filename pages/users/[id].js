import { useRouter } from "next/router";
import Link from "next/link";
import {
  Table,
  Thead,
  Tbody,
  Button,
  Tr,
  Th,
  Td,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";
import useSWR from "swr";
import styles from "../../styles/Home.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PersonTable() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/people/${query.id}`,
    fetcher
  );
  if (error) {
    return <div>{error.message}</div>;
  }
  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <Box
      className={styles.container}
      bgColor="#011627"
      h={{ base: 1500, md: 1100, lg: 800 }}
      w={{ base: 780, md: 810, lg: 1520 }}
    >
      <Table variant="simple" size="sm" bgColor="white">
        <Thead>
          <Tr>
            <Th isNumeric>Id</Th>
            <Th>name</Th>
            <Th>email</Th>
            <Th>gender</Th>
            <Th>status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td isNumeric>{data.id}</Td>
            <Td>{data.name}</Td>
            <Td>{data.email}</Td>
            <Td>{data.gender}</Td>
            <Td>{data.status}</Td>
          </Tr>
        </Tbody>
      </Table>
      <Link href="/">
        <Center mt="2">
          <Text color="black">
            <Button>Go back</Button>
          </Text>
        </Center>
      </Link>
    </Box>
  );
}
