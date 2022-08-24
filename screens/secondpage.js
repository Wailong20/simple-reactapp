import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/core';
import * as Device from 'expo-device';
import { DataTable } from 'react-native-paper';
const second = () => {

    const navigation = useNavigation();
    const redirect = () => {
        navigation.replace("Welcome");
    }

    return (
        <ScrollView style={styles.scrollView}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Title</DataTable.Title>
                    <DataTable.Title>Parameter</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>Brand: </DataTable.Cell>
                    <DataTable.Cell>{brand}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Product:</DataTable.Cell>
                    <DataTable.Cell>{product}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Total Memory</DataTable.Cell>
                    <DataTable.Cell>{Memory}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Model Name:</DataTable.Cell>
                    <DataTable.Cell>{modelname}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Design Name:</DataTable.Cell>
                    <DataTable.Cell>{designname}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Platform API Level:</DataTable.Cell>
                    <DataTable.Cell>{platformapilevel}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Finger Print: </DataTable.Cell>
                    <DataTable.Cell>{fingerprint}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Manufacturer: </DataTable.Cell>
                    <DataTable.Cell>{manufacturer}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Support CPU: </DataTable.Cell>
                    <DataTable.Cell>{supportcpu}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>OS Build ID:</DataTable.Cell>
                    <DataTable.Cell>{osbuildid}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Device Name:</DataTable.Cell>
                    <DataTable.Cell>{devicename}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>

            <View style={styles.countContainer}>
                <TouchableOpacity style={styles.button}
                    onPress={redirect}>
                    <Text>
                        Go back home page
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        paddingHorizontal: 30,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    scrollView: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
});
let brand = Device.brand;
let product = Device.productName;
let Memory = Device.totalMemory;
let modelname = Device.modelName;
let designname = Device.designName
let platformapilevel = Device.platformApiLevel
let fingerprint = Device.osBuildFingerprint;
let manufacturer = Device.manufacturer;
let supportcpu = Device.supportedCpuArchitectures;
let osbuildid = Device.osInternalBuildId;
let devicename = Device.deviceName;

export default second;