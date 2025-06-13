import { RootStackParamList } from "@/app/model/routes";
import { fiscalStamp } from "@/app/model/selo";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import stamp from "@/app/viewmodel/mock/selos.json";

export const useStamp = () => {

    const [search, setSearch] = useState<string>("");

    const [toastVisible, setToastVisible] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [information, setInformation] = useState<fiscalStamp>({ codigo: "", data_emissao: "", fabricante: "", produto: "", status: "" });
    const [errorMessage, setErrorMessage] = useState<string>("");

    const fiscalStamp = stamp?.filter((item: fiscalStamp) => item?.codigo?.toLowerCase() == search?.toLowerCase());

    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    const handleSend = () => {
        if (search?.trim() == "") {
            setErrorMessage("Digite o código");
            return
        }
        if (!fiscalStamp?.length) {
            setErrorMessage("Selo não encontrado")
            setToastVisible(true);
            setInformation({ codigo: "", data_emissao: "", fabricante: "", produto: "", status: "" });
            return
        };

        setInformation(fiscalStamp[0]);
        navigate.navigate("fiscalstamp", { payload: fiscalStamp[0] });
        setVisible(false)

    }

    return {
        fiscalStamp, handleSend, information, search, setInformation, setSearch, setToastVisible, toastVisible, visible, setVisible, errorMessage, setErrorMessage
    }

}
