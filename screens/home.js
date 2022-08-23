import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/core';




const home = () => {

    const navigation = useNavigation();
    const redirect = () => {
        navigation.replace("DetailPage");
    }

    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <TouchableOpacity style={styles.button}
                    onPress={redirect}>
                    <Text>
                        Phone Details
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});

export default home;