import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF5864',
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 5,
          shadowOpacity: 0.1,
          height: 60,
          paddingBottom: 5,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Descobrir',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="fire" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats" 
        options={{
          tabBarLabel: 'Ranking',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="balance-scale" size={size} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="settings" 
        options={{
          tabBarLabel: 'Ajustes',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cog" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          tabBarLabel: 'Matches',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="heart" size={size} color={color} solid />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} solid />
          ),
        }}
      />
    </Tabs>
  );
}

