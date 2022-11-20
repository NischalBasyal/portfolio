import { Flex } from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";


export default function Navbar() {
    return (
        <Flex 
        as="nav"
        align="center"
        bg="gray.800"
        color="white"
         className={styles.navbar}>
            <Link href="/">Nischal Basyal</Link>
        </Flex>
    )
}