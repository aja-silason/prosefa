import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera, CameraView } from "expo-camera"
import { useScanQrCode } from "@/app/viewmodel/hook/useScanQrCode";
import Colors from "@/constants/Colors";
import { RoundedButton, ToastModal } from "../components";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { fiscalStamp } from "@/app/model/selo";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/model/routes";

export default function QRCodeScannerScreen() {

    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    const { handleScanned, resetScanner, active, information, scanned, toastModal, setToasModal } = useScanQrCode();

    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status == "granted");
        })()

        const timeToShowSuccessToast = setTimeout(() => {
            setToasModal(false);
        }, 3000);

        () => clearTimeout(timeToShowSuccessToast);

    }, [toastModal]);



    if (hasPermission == null) {
        return <Text>Solicitando Permissão</Text>
    }

    if (hasPermission == false) {
        return <Text>Sem acesso a camera</Text>
    }

    const handleStampScreen = (data: fiscalStamp) => {
        navigate?.navigate("fiscalstamp", { payload: data });
        resetScanner()
    }

    const handleHomeScreen = () => {
        navigate.navigate("home");
    }


    return (
        <View style={{ flex: 1 }}>
            <CameraView facing="back" barcodeScannerSettings={{ barcodeTypes: ["qr"] }} onBarcodeScanned={handleScanned} style={StyleSheet.absoluteFillObject}>
                <View style={styles.overlay}>
                    <View style={styles.arrowInner}>
                        <TouchableOpacity onPress={handleHomeScreen} style={styles.arrowInner} activeOpacity={0.9}>
                            <Ionicons name="arrow-back" size={25} color={Colors.light.white[100]} />
                            <Text style={styles.textleKey}>Voltar </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.controls}>
                        <RoundedButton onClick={resetScanner} icon={<Ionicons name="refresh" size={20} color={Colors.light.white[100]} />} active={active} />
                        <RoundedButton onClick={() => handleStampScreen(information)} icon={<Ionicons name="list" size={20} color={Colors.light.white[100]} />} active={active} />

                    </View>

                    {
                        toastModal && <ToastModal isSuccess visible={toastModal} toastmessage="Selo verificado" />
                    }

                </View>
            </CameraView>

        </View>
    )


}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: "rgba(0,0,0,0.3)",
        flex: 1,
        justifyContent: "space-between",
        //alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 100
    },
    controls: {
        flexDirection: "row",
        gap: 40,
        width: "100%",
        justifyContent: "center"
    },
    backButton: {
        flexDirection: "row",
        gap: 40,
        width: "100%",
        justifyContent: "center"
    },
    arrowInner: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    textleKey: {
        fontSize: 13,
        fontWeight: 600,
        color: Colors.light.white[100]
    },
})

