import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MeteDança</Text>
      <Link href="/(tabs)" asChild>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Entrar no App (Alá pequetito)</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB'
  },
  title: {
      fontSize: 48,
      fontWeight: 'bold',
      color: '#EC4899',
      marginBottom: 50,
  },
  button: {
      backgroundColor: '#EC4899',
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 30,
  },
  buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
  }
});
