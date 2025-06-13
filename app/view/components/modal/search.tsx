import Colors from "@/constants/Colors";
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { Card } from "../card";
import { SearchInput } from "../input/input-search";
import { Button } from "../button";
import { ToastModal } from "./toast";
import { fiscalStamp } from "@/app/model/selo";


type props = {
    data: any
    search: string,
    setSearch: Dispatch<SetStateAction<string>>;
    toastVisible: boolean;
    setToastVisible: Dispatch<SetStateAction<boolean>>;
    information: fiscalStamp;
    setInformation: Dispatch<SetStateAction<fiscalStamp>>;
    fiscalStamp: any;
    handleSend: VoidFunction;
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>,
    errorMessage: string
    setErrorMessage: Dispatch<SetStateAction<string>>
}

export const SearchModal = ({ data, fiscalStamp, handleSend, information, search, setInformation, setSearch, setToastVisible, toastVisible, visible = false, setVisible, errorMessage, setErrorMessage}: props) => {

    useEffect(() => {

        const time = setTimeout(() => {
            setToastVisible(false);
            setErrorMessage("");
        }, 3000);

        () => clearTimeout(time);

    }, [toastVisible, search, fiscalStamp, errorMessage]); 


    const openModal = () => setVisible(true);
    const closeModal = () => setVisible(false);

    console.log(search)

    return (
        <View>
            {
                toastVisible && <ToastModal visible={toastVisible} toastmessage={errorMessage } isSuccess={false} />
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
        //height: "20%",
        padding: 10,
        paddingVertical: 20,
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