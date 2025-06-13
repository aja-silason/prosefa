import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card, Container, ProductCard } from "../components";
import { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { SearchModal } from "../components/modal/search";
import { useStamp } from "@/app/viewmodel/hook/useStamp";
import { RootStackParamList } from "@/app/model/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useStampHistory } from "@/app/viewmodel/store/useStampHistory";
import SVGFirstImage from "../components/svg/icon";

type cardProps = {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function HomeScreen() {

    const { fiscalStamp, handleSend, search, setInformation, setSearch, setToastVisible, toastVisible, visible, setVisible, errorMessage, setErrorMessage } = useStamp();

    const searchCard: cardProps = { icon: <Ionicons name="search" size={30} color={Colors.light.primary} />, title: "Pesquisar", description: "Digte o código do Produto" }

    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const { historic } = useStampHistory();

    return (
        <Container styles={styles.container}>

            <View style={styles.textContainer}>
                <Text style={styles.titleText}>PROSEFA</Text>
                <Text style={styles.titleDescription}>Garantindo os direitos de propriedade intelectual e melhorar o ambiente de negócios.</Text>
            </View>

            <View style={styles.cardsContainer}>

                <SearchModal data={searchCard} fiscalStamp={fiscalStamp} handleSend={handleSend} search={search} setInformation={setInformation} setSearch={setSearch} setToastVisible={setToastVisible} toastVisible={toastVisible} visible={visible} setVisible={setVisible} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
                <View>
                    <Card icon={<Ionicons name="qr-code-outline" size={30} color={Colors.light.primary} />} title="Scanear" description="Escaneie o QR do Producto" />
                </View>

            </View>

            <View style={{marginVertical: 10}}>
                <Text style={styles.titleDescription}>Pesquisas Recentes</Text>
                <View style={styles.border}></View>
            </View>


            <FlatList data={historic}
                keyExtractor={(_, index) => index?.toString()}
                //onEndReached={loadMoreInformationOperationsActivity}
                //onEndReachedThreshold={0.5}
                style={styles.flatlistStyle}
                ListFooterComponent={
                    <View style={styles.flatlistStyleListFootercomponent}>
                        {/*<Text style={styles.titleDescription}>Fim da Lista</Text>*/}
                    </View>
                }
                renderItem={({ item, index }) => (
                    <View style={styles.flatlistStyleRenderComponent}>
                        <TouchableOpacity activeOpacity={.8} onPress={() => navigate.navigate("fiscalstamp", { payload: item })}>
                            <ProductCard codigo={item?.codigo} data_emissao={item?.data_emissao} fabricante={item?.fabricante} status={item?.status} produto={item?.produto} key={index} />
                        </TouchableOpacity>
                    </View>
                )
                } ListEmptyComponent={() => (
                    <View style={styles.flatlistStyleEmptyContent}>
                        <SVGFirstImage width={80} height={80}/>
                        <Text style={styles.titleDescription}>Lista Vazia</Text>
                    </View>
                )} />
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    cardsContainer: {
        flexDirection: "row",
        gap: 5,
        marginBottom: 10,
        width: "100%",
        justifyContent: "space-between"
    },
    textContainer: {
        marginVertical: 20,
        gap: 3
    },
    titleText: {
        fontSize: 15,
        fontWeight: 600,
        color: Colors.light.black
    },
    titleDescription: {
        fontSize: 13,
        fontWeight: 500,
        color: Colors.light.gray[100]
    },
    border: {
        borderBottomWidth: .5,
        borderColor: Colors.light.gray[200]
    },
    flatlistStyle: {
        width: "100%",
        marginVertical: 20
    },
    flatlistStyleEmptyContent: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 5
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

