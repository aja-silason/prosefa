import { useState } from "react";
import { Alert } from "react-native";
import stamp from "@/app/viewmodel/mock/selos.json";
import { fiscalStamp } from "@/app/model/selo";
import { useStampHistory } from "../store/useStampHistory";

type scanneprops = {
    data: string;
}

export enum TYPETOAST {
    error = 0,
    success = 1
}

export const useScanQrCode = () => {

    const [scanned, setScanned] = useState(false);
    const [active, setActive] = useState<boolean>(false);
    const [information, setInformation] = useState<fiscalStamp>({ codigo: "", data_emissao: "", fabricante: "", produto: "", status: "" });
    const [typeToast, setTypeToast] = useState<TYPETOAST>(TYPETOAST.success);

    const [toastModal, setToasModal] = useState<boolean>(false);

    const { addStamp } = useStampHistory();

    const handleScanned = ({ data }: scanneprops) => {

        if (!scanned) {
            setScanned(true)
            setActive(true)
            setToasModal(true);

            const fiscalStamp = stamp?.filter((item: fiscalStamp) => item?.codigo?.toLowerCase() == data?.toLowerCase());

            if (!fiscalStamp?.length) {
                setTypeToast(TYPETOAST.error);
                setInformation({ codigo: "", data_emissao: "", fabricante: "", produto: "", status: "" });
                return
            };

            setTypeToast(TYPETOAST.success);
            setInformation(fiscalStamp[0]);
            addStamp(fiscalStamp[0]);
        }

    }

    const resetScanner = () => {
        console.log("rese")
        setScanned(false);
        setActive(false)
    }

    return { handleScanned, scanned, active, resetScanner, information, toastModal, setToasModal, typeToast }

}