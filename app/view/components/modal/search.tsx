import Colors from "@/constants/Colors";
import { ChangeEvent, useEffect, useState } from "react";
import { Alert, Modal, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "../card";
import { SearchInput } from "../input/input-search";
import { Button } from "../button";

import stamp from "@/app/viewmodel/mock/selos.json";
import { fiscalStamp } from "@/app/model/selo";
import { ToastModal } from "./toast";
import { useNavigation } from "@react-navigation/native";

type props = {
    data: any
}

export const SearchModal = ({ data }: props) => {
    const [visible, setVisivle] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");

    const [toastVisible, setToastVisible] = useState<boolean>(false);
    //const [notFoundMessage, setNotFoundMessage] = useState<any>(null);
    const [information, setInformation] = useState<fiscalStamp>({ codigo: "", data_emissao: "", fabricante: "", produto: "", status: "" });

    const fiscalStamp = stamp?.filter((item: fiscalStamp) => item?.codigo?.toLowerCase() == search?.toLowerCase());

    const navigate: any = useNavigation();

    useEffect(() => {

        const time = setTimeout(() => {
            setToastVisible(false);
            //setNotFoundMessage(null);
        }, 3000);

        () => clearTimeout(time);

    }, [toastVisible, search, fiscalStamp]);



    const handleSend = () => {
        console.log(fiscalStamp)
        if (search?.trim() == "") return alert("Digite o código");
        if (!fiscalStamp?.length) {
            alert("Selo não encontrado")
            setToastVisible(true);
            //setNotFoundMessage("Selo não encontrado");
            setInformation({ codigo: "", data_emissao: "", fabricante: "", produto: "", status: "" });
            return
        };

        setInformation(fiscalStamp[0]);

        navigate.navigate("fiscalstamp", {payload: fiscalStamp[0]});

    }

    console.log(information)


    const openModal = () => setVisivle(true);
    const closeModal = () => setVisivle(false);

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