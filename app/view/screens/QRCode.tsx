import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Camera, CameraView } from "expo-camera"
import { useScanQrCode } from "@/app/viewmodel/hook/useScanQrCode";
import Colors from "@/constants/Colors";
import { ProductCard, RoundedButton } from "../components";
import { Ionicons } from "@expo/vector-icons";

export default function QRCodeScannerScreen() {

    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    const { handleScanned } = useScanQrCode();

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


    return (
        <View style={{ flex: 1 }}>
            <CameraView facing="back" barcodeScannerSettings={{ barcodeTypes: ["qr"] }} onBarcodeScanned={handleScanned} style={StyleSheet.absoluteFillObject}>
                <View style={styles.overlay}>

                    <View style={styles.controls}>
                        <RoundedButton onClick={() => { }} icon={<Ionicons name="camera" size={20} color={Colors.light.white[100]} />} />
                        <RoundedButton onClick={() => { }} icon={<Ionicons name="camera" size={20} color={Colors.light.white[100]} />} />

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

