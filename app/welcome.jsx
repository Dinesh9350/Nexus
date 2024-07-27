import {View, Text, Image} from 'react-native';
import React from 'react';
import ScreenWrapper from "@/components/ScreenWrapper";
import {wp} from "../helper/common";
import {StatusBar} from "expo-status-bar";
import {StyleSheet} from "react-native";

const index = () => {
    return (
        <ScreenWrapper bg={'black'}>
            <StatusBar style={'dark'} />
            <View style={styles.container}>

                <Image style={styles.welcomeImage} source={require('../assets/images/nexus.jpg')} />
                <Text>
                    Nexus!
                    Connecting You to the Future of Seamless Experiences.
                    Dive in and explore a world where everything comes together effortlessly.
                </Text>
            </View>
        </ScreenWrapper>
    )
}

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingHorizontal: wp(4),
    },
    welcomeImage: {
        height: wp(100),
        width: wp(100),
        alignSelf: 'center',
    }

})