import { Stack } from 'expo-router';
import { ProfileProvider } from '../contexts/ProfileContext';

export default function RootLayout() {
  return (
    
    <ProfileProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="chat/[id]" options={{ headerShown: false }} />
        <Stack.Screen 
          name="edit-profile" 
          options={{ 
            headerShown: false, 
            presentation: 'modal' 
          }} 
        />
      </Stack>
    </ProfileProvider>
  );
}

