import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card, Container, ProductCard } from "../components";
import { ReactNode, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

import cervejaStamp from "@/app/viewmodel/mock/selos.json";
import { SearchModal } from "../components/modal/search";
import { RootStackParamList } from "@/app/model/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { fiscalStamp } from "@/app/model/selo";
import { useStamp } from "@/app/viewmodel/hook/useStamp";



type cardProps = {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function HomeScreen() {

    const { fiscalStamp, handleSend, information, search, setInformation, setSearch, setToastVisible, toastVisible, visible, setVisible } = useStamp();

    const searchCard: cardProps = { icon: <Ionicons name="search" size = { 30} color={ Colors.light.primary } />, title: "Pesquisar", description: "Digte o código do Produto" }

    return (
        <Container>

            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Home Screen</Text>
                <Text style={styles.titleDescription}>Home Screen</Text>
            </View>

            <View style={styles.cardsContainer}>
                <SearchModal data={searchCard} fiscalStamp={fiscalStamp} handleSend={handleSend} information={information} search={search} setInformation={setInformation} setSearch={setSearch} setToastVisible={setToastVisible} toastVisible={toastVisible} visible={visible} setVisible={setVisible}/>

                <Card icon={<Ionicons name="qr-code-outline" size={30} color={Colors.light.primary} />} title="Scanear" description="Escaneie o QR do Producto" />

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
                        <ProductCard codigo={item?.codigo} data_emissao={item?.data_emissao} fabricante={item?.fabricante} status={item?.status} produto={item?.produto} key={index} />
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
        width: "100%",
        marginVertical: 20
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

