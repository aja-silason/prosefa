import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ChangeEvent } from "react";
import { StyleSheet, TextInput, View } from "react-native";


export type props = {
    placeholder?: string;
    onchange: (value: any) => void;
    value: string | undefined,
    stylesSearch?: object
};
  

export const SearchInput = ({ onchange, value, placeholder, stylesSearch}: props) => {
    return (
          <View style={{alignItems: "center", flexDirection: "row", borderWidth: 1, borderRadius: 10, paddingHorizontal: 5, width: "100%"}}>
            <View style={[styles.labelStyle, stylesSearch]}>
              <Ionicons name="search-outline"size={22} color={Colors.light.gray[100]}/>
            </View>
            <TextInput
              style={[styles.inputGStyle, {borderWidth: 0}]}
              placeholder={placeholder}
              onChangeText={onchange}
              value={value}
              placeholderTextColor={Colors.light.gray[200]}
    
            />
          </View>
        );
}

export const styles = StyleSheet.create({
  inputGStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 13,
    width: "100%",
    borderRadius: 7,
    borderWidth: 1,
    outline: "none",
    borderColor: Colors.light.gray[200],
  },
  inputStyle: {
    color: Colors.light.white[100],
  },
  labelTextStyle: {
    fontSize: 12,
    fontWeight: "400"
  },
  labelStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    color: Colors.light.text
  },
  validationTextColor: {
    color: Colors.light.red,
  },
  labeTextLeft: {},
});

