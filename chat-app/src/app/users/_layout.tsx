import { View, Text } from "react-native"
import { Tabs } from 'expo-router'
import { MaterialIcons, Ionicons, Feather, FontAwesome5, FontAwesome } from '@expo/vector-icons'
import Colors from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: Colors.bgColor,
        borderTopWidth: 0,
        padding: 0
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.black,
      tabBarInactiveTintColor: '#999'
    }}>
      <Tabs.Screen 
          name="persona" 
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name= "person-circle-outline" size = {28} color={color} />
        )
      }}
      />
        <Tabs.Screen 
          name="match" 
          options={{
            tabBarIcon: ({color}) => (
              <View style={{
                backgroundColor: Colors.primaryColor,
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 10,
                height: 50
               }}
               >
                <Feather name="heart" size = {24} color={Colors.white} />
              </View>
            )
      }}
      />
        <Tabs.Screen 
          name="chat" 
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="message-circle" size = {28} color={color} />
        )
      }}
      />
    </Tabs>
  );
}
