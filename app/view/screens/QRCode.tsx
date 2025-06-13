import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Camera, CameraView } from "expo-camera"
import { useScanQrCode } from "@/app/viewmodel/hook/useScanQrCode";
import Colors from "@/constants/Colors";
import { ProductCard, RoundedButton } from "../components";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { fiscalStamp } from "@/app/model/selo";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/model/routes";

export default function QRCodeScannerScreen() {

    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    const { handleScanned, resetScanner, active, information } = useScanQrCode();

    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status == "granted");
        })()

    }, []);


    if (hasPermission == null) {
        return <Text>Solicitando Permissão</Text>
    }

    if (hasPermission == false) {
        return <Text>Sem acesso a camera</Text>
    }

    const handleStampScreen = (data: fiscalStamp) => {
        navigate?.navigate("fiscalstamp", {payload: data});
        resetScanner()
    }


    return (
        <View style={{ flex: 1 }}>
            <CameraView facing="back" barcodeScannerSettings={{ barcodeTypes: ["qr"] }} onBarcodeScanned={handleScanned} style={StyleSheet.absoluteFillObject}>
                <View style={styles.overlay}>

                    <View style={styles.controls}>
                        <RoundedButton onClick={resetScanner} icon={<Ionicons name="refresh" size={20} color={Colors.light.white[100]} />} active={active}/>
                        <RoundedButton onClick={() => handleStampScreen(information)} icon={<Ionicons name="list" size={20} color={Colors.light.white[100]} />} active={active}/>

                    </View>
                </View>
            </CameraView>

        </View>
    )


}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: "rgba(0,0,0,0.3)",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 100
    },
    controls: {
        flexDirection: "row",
        gap: 40,
        width: "100%",
        justifyContent: "center"
    }
})

