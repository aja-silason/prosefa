import { useState } from "react";
import { Alert } from "react-native";

type scanneprops = {
    data: string;
}

export const useScanQrCode = () => {

    const [scanned, setScanned] = useState(false);

    const handleScanned = ({ data }: scanneprops) => {

        if(!scanned) {
            setScanned(true)
            console.log("Dados do sacan => ", data);
            Alert.alert("Dados do sacan => ", data)
        }

    }

    const resetScanner = () => {
        setScanned(false);
    }

    return {handleScanned, scanned, resetScanner}

}