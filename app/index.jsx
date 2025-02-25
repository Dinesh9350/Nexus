import {View, Text, Button} from 'react-native';
import React from 'react';
import Welcome from "@/app/welcome";
import {useRouter} from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

const index = () => {
    const  router = useRouter();
    return (
        <ScreenWrapper bg={'white'}>
            <Text>Loading...</Text>
            <Button title={'welcome'} onPress={() => router.push('welcome')} />
        </ScreenWrapper>
    )
}

export default index;