import { useState } from "react";
import { Alert } from "react-native";
import stamp from "@/app/viewmodel/mock/selos.json";
import { fiscalStamp } from "@/app/model/selo";

type scanneprops = {
    data: string;
}

export const useScanQrCode = () => {

    const [scanned, setScanned] = useState(false);
    const [active, setActive] = useState<boolean>(false);
    const [information, setInformation] = useState<fiscalStamp>({codigo: "", data_emissao: "", fabricante: "", produto: "", status: ""});

    const handleScanned = ({ data }: scanneprops) => {

        if(!scanned) {
            setScanned(true)
            setActive(true)
            console.log("Dados do sacan => ", data);
            Alert.alert("Dados do sacan => ", data)
            const fiscalStamp = stamp?.filter((item: fiscalStamp) => item?.codigo?.toLowerCase() == data?.toLowerCase());
            setInformation(fiscalStamp[0]);
        }

    }

    const resetScanner = () => {
        console.log("rese")
        setScanned(false);
        setActive(false)
    }

    return {handleScanned, scanned, active, resetScanner, information}

}