import { Redirect, router } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'
import { Text, View } from "react-native";

const Persona = (): JSX.Element => {
  return (
    <View>
        <Text>
          Persona page
        </Text>
    </View>
  )
}

export default Persona