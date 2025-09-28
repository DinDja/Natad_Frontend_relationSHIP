import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { PROFILES } from '../../constants/mockData';

// Usa os dados do mockData para simular novos matches e conversas
const newMatches = PROFILES.slice(0, 5).map(p => ({ ...p, name: p.name.split(' ')[0] }));
const messages = [
  { ...PROFILES[5], lastMessage: 'Oi! Tudo bem? Adorei seu perfil :)' },
  { ...PROFILES[6], lastMessage: 'Sério que você também é de Engenharia?' },
  { ...PROFILES[7], lastMessage: 'Vamos tomar uma e esquecer os Vade Mecuns?' },
];


export default function MatchesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Matches & Conversas</Text>
      </View>

      <View style={styles.searchContainer}>
        <FontAwesome5 name="search" size={16} color="#BDBDBD" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar nos matches..."
          placeholderTextColor="#BDBDBD"
        />
      </View>
      
      <View style={styles.newMatchesSection}>
        <Text style={styles.sectionTitle}>Novos Matches</Text>
        <FlatList
          data={newMatches}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Pressable style={styles.newMatchItem} onPress={() => router.push(`/chat/${item.id}`)}>
              <Image source={{ uri: item.image }} style={styles.newMatchImage} />
              <Text style={styles.newMatchName}>{item.name}</Text>
            </Pressable>
          )}
          contentContainerStyle={{ paddingLeft: 15 }}
        />
      </View>

      <View style={styles.messagesSection}>
        <Text style={styles.sectionTitle}>Conversas</Text>
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={() => router.push(`/chat/${item.id}`)}>
              <View style={styles.messageItem}>
                <Image source={{ uri: item.image }} style={styles.messageImage} />
                <View style={styles.messageTextContainer}>
                  <Text style={styles.messageName}>{item.name}</Text>
                  <Text style={styles.lastMessage} numberOfLines={1}>{item.lastMessage}</Text>
                </View>
              </View>
            </Pressable>
          )}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingTop: 30,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    margin: 15,
    paddingHorizontal: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  newMatchesSection: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5864',
    marginLeft: 15,
    marginBottom: 15,
  },
  newMatchItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  newMatchImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#FF5864',
  },
  newMatchName: {
    marginTop: 5,
    fontSize: 14,
    color: '#444',
  },
  messagesSection: {
    flex: 1,
    paddingTop: 20,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  messageImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  messageTextContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  messageName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  lastMessage: {
    fontSize: 15,
    color: '#666',
    marginTop: 2,
  },
});

