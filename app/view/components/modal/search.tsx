import Colors from "@/constants/Colors";
import { ChangeEvent, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "../card";
import { SearchInput } from "../input/input-search";
import { Button } from "../button";


type props = {
    data: any
} 

export const SearchModal = ({data}: props) => {
    const [visible, setVisivle] = useState<boolean>(false);

    const [search, setSearch] = useState<string>("");

    console.log(search)

    const openModal = () => setVisivle(true);
    const closeModal = () => setVisivle(false);
     
    return (
        <View>
            <TouchableOpacity activeOpacity={.9} onPress={openModal}>
                <Card icon={data?.icon} title={data?.title} description={data?.description} />
            </TouchableOpacity>

            <Modal
                visible={visible}
                onRequestClose={closeModal}
                transparent
            >
                <TouchableOpacity style={style.overlay} onPress={closeModal}>

                    <TouchableOpacity style={style.content} activeOpacity={1}>
                        <SearchInput onchange={setSearch} value={search} placeholder="Pesquise o código"/>
                            <Text></Text>
                        <Button onClick={()=>{}} text="Processar pesquisa"/>
                    </TouchableOpacity>

                </TouchableOpacity>
            </Modal>
        </View>
    )
}


const style = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        backgroundColor: Colors.light.white[100],
        width: "100%",
        height: "20%",
        padding: 10,
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    card: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width: "20%",
        justifyContent: "center",
        alignItems: "center"
    }
})