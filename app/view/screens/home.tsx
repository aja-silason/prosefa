import { StyleSheet, Text, View } from "react-native";
import { Card, Container } from "../components";
import { ReactNode } from "react";

type cardProps = {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function Home() {

    const cards: cardProps[] = [
        { icon: "", title: "Pesquisar", description: "Digte o código do Produto" },
        { icon: "", title: "Scanear", description: "Escaneie o QR do Producto" }
    ]

    return (
        <Container>
            <Text>Home Screen</Text>

            <View style={styles.cardsContainer}>
                {
                    cards?.map((item: cardProps) => (
                        <Card icon={item?.icon} title={item?.title} description={item?.description} />
                    ))
                }

            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    cardsContainer: {
        flexDirection: "row",
        gap: 5
    }
})

