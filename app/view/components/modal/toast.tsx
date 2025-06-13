
import Colors from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { ActivityIndicator, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type props = {
    isSuccess: boolean,
    visible: boolean;
    isLoadingModal?: boolean,
    toastmessage?: string;
}

export const ToastModal = ({isSuccess = true, isLoadingModal, visible, toastmessage}: props) => {
    
    return (
        <View>
            <Modal
                animationType="fade"
                visible={visible}
                //onRequestClose={closeModal}
                transparent
                >
                
                <TouchableOpacity style={style.modalOverlay} activeOpacity={1} onPress={() => {}}>
                
                    <TouchableOpacity style={[style.modalContent, isSuccess == true ? style.success : style.error]} activeOpacity={1}>
                
                        <View style={style.logo}>
                            {
                              isLoadingModal ? (
                                <ActivityIndicator color={Colors.light.white[100]} size={70}/>
                              ) : (
                                <MaterialIcons name={ isSuccess ? "done" : "cancel"} color={Colors.light.white[100]} size={40}/>
                              )
                            }
                        </View>

                        {
                          toastmessage ? <Text style={{fontSize: 14, color: Colors?.light?.white[100], textAlign: "center"}}>{toastmessage}</Text>
                          : <Text style={style.Text}> {isSuccess ? isLoadingModal ? "Processando..." : "Sucesso" : "Erro, tente mais tarde"} </Text>
                        }
                    </TouchableOpacity>
                
                </TouchableOpacity>

            </Modal>


        </View>
    )

}


const style = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.2)',
        height: "93.2%",
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        width: "40%",
        height: "15%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      },
      Text: {
        color: Colors.light.white[100],
        fontSize: 14,
        fontStyle: "italic"
      },
      success: {
        backgroundColor: Colors.light.green
      },
      error: {
        backgroundColor: Colors.light.red
      },
      logo: {
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
      }
})