import Colors from "@/constants/Colors";
import { useEffect, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { Card } from "../card";
import { SearchInput } from "../input/input-search";
import { Button } from "../button";
import { ToastModal } from "./toast";


type props = {
    data: any
    search: string,
    setSearch: any;
    toastVisible: any;
    setToastVisible: any;
    information: any;
    setInformation: any;
    fiscalStamp: any;
    handleSend: any;
    visible: any,
    setVisible: any
}

export const SearchModal = ({ data, fiscalStamp, handleSend, information, search, setInformation, setSearch, setToastVisible, toastVisible, visible = false, setVisible}: props) => {

    useEffect(() => {

        const time = setTimeout(() => {
            setToastVisible(false);
        }, 3000);

        () => clearTimeout(time);

    }, [toastVisible, search, fiscalStamp]); 


    const openModal = () => setVisible(true);
    const closeModal = () => setVisible(false);

    console.log(search)

    return (
        <View>
            {
                toastVisible && <ToastModal visible={toastVisible} toastmessage="Produto não encontrado" isSuccess={false} />
            }

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
                        <SearchInput onchange={setSearch} value={search} placeholder="Pesquise o código" />
                        {/*<Text>{notFoundMessage}</Text>*/}
                        <Button onClick={handleSend} text="Processar pesquisa" />
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