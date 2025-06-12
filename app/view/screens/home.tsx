import { FlatList, StyleSheet, Text, View } from "react-native";
import { Card, Container, ProductCard } from "../components";
import { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { fiscalStamp } from "@/app/model/selo";

import cervejaStamp from "@/app/viewmodel/mock/selos.json";


type cardProps = {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function Home() {


    const cards: cardProps[] = [
        { icon: <Ionicons name="search" size={30} color={Colors.light.primary} />, title: "Pesquisar", description: "Digte o código do Produto" },
        { icon: <Ionicons name="qr-code-outline" size={30} color={Colors.light.primary} />, title: "Scanear", description: "Escaneie o QR do Producto" }
    ]


    return (
        <Container>

            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Home Screen</Text>
                <Text style={styles.titleDescription}>Home Screen</Text>
            </View>

            <View style={styles.cardsContainer}>
                {
                    cards?.map((item: cardProps) => (
                        <Card icon={item?.icon} title={item?.title} description={item?.description} />
                    ))
                }
            </View>

            <FlatList data={cervejaStamp}
                keyExtractor={(_, index) => index?.toString()}
                //onEndReached={loadMoreInformationOperationsActivity}
                //onEndReachedThreshold={0.5}
                style={styles.flatlistStyle}
                ListFooterComponent={
                    <View style={styles.flatlistStyleListFootercomponent}>
                        <Text style={styles.titleDescription}>Fim da Lista</Text>
                    </View>
                }
                renderItem={({ item, index }) => (
                    <View style={styles.flatlistStyleRenderComponent}>
                        <ProductCard codigo={item?.codigo} data_emissao={item?.data_emissao} fabricante={item?.fabricante} status={item?.status} produto={item?.produto} key={index}/>
                    </View>
                )
                } ListEmptyComponent={() => (
                    <View style={styles.flatlistStyleEmptyContent}>
                        <Text style={styles.titleDescription}>Lista Vazia</Text>
                    </View>
                )} />
        </Container>
    )
}

const styles = StyleSheet.create({
    cardsContainer: {
        flexDirection: "row",
        gap: 5,
        marginBottom: 10
    },
    textContainer: {
        marginVertical: 10,
        gap: 3
    },
    titleText: {
        fontSize: 16,
        fontWeight: 600,
        color: Colors.light.black
    },
    titleDescription: {
        fontSize: 14,
        fontWeight: 500,
        color: Colors.light.gray[100]
    },
    flatlistStyle: {
        width: "100%"
    },
    flatlistStyleEmptyContent: {
        padding: 10
    },
    flatlistStyleRenderComponent: {
        gap: 10,
        flexDirection: "column"
    },
    flatlistStyleListFootercomponent: {
        justifyContent: "center",
        alignItems: "center",
        borderTopColor: Colors.light.gray[100],
        borderTopWidth: 1
    }
})

