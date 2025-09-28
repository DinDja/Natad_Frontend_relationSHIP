import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const rankingData = [
  { id: '1', uni1: 'UFBA', uni2: 'UNIFACS', compatibility: 92, rank: 1 },
  { id: '2', uni1: 'UFBA', uni2: 'UFBA', compatibility: 89, rank: 2 },
  { id: '3', uni1: 'UNEB', uni2: 'UNIFACS', compatibility: 84, rank: 3 },
  { id: '4', uni1: 'UNIFACS', uni2: 'UNIFACS', compatibility: 81, rank: 4 },
  { id: '5', uni1: 'UFBA', uni2: 'UNEB', compatibility: 78, rank: 5 },
];

const RankingItem = ({ item }) => (
  <View style={styles.rankingItem}>
    <Text style={styles.rankNumber}>{item.rank}</Text>
    <View style={styles.universitiesContainer}>
      <Text style={styles.uniText}>{item.uni1}</Text>
      <FontAwesome5 name="heart" size={16} color="#FF5864" style={styles.heartIcon} solid />
      <Text style={styles.uniText}>{item.uni2}</Text>
    </View>
    <View style={styles.compatibilityContainer}>
      <Text style={styles.compatibilityText}>{item.compatibility}%</Text>
    </View>
  </View>
);

const PartyCard = () => {
  const router = useRouter();
  return (
    <View style={styles.partyCard}>
      <View style={styles.partyHeader}>
        <FontAwesome5 name="glass-cheers" size={24} color="#FFF" />
        <Text style={styles.partyTitle}>Conexão em Festa!</Text>
      </View>
      <Text style={styles.partySubtitle}>
        A integração universitária baseada nos maiores matches do app!
      </Text>
      <View style={styles.partyDetails}>
        <Text style={styles.partyUniText}>{rankingData[0].uni1} + {rankingData[0].uni2}</Text>
        <Text style={styles.partyInfo}>Sábado, 12 de Outubro | 22h</Text>
      </View>
      <TouchableOpacity style={styles.partyButton} onPress={() => router.push('/party-details')}>
        <Text style={styles.partyButtonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function StatsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={rankingData}
        renderItem={({ item }) => <RankingItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.title}>Ranking de Compatibilidade</Text>
          </View>
        )}
        ListFooterComponent={<PartyCard />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    paddingBottom: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  listContainer: {
    padding: 15,
  },
  rankingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  rankNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BDBDBD',
    width: 30,
  },
  universitiesContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uniText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
  heartIcon: {
    marginHorizontal: 15,
  },
  compatibilityContainer: {
    backgroundColor: 'rgba(255, 88, 100, 0.1)',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  compatibilityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5864',
  },
  partyCard: {
    backgroundColor: '#2A2A3C',
    borderRadius: 20,
    padding: 25,
    marginTop: 20,
    marginBottom: 40,
  },
  partyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  partyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
  },
  partySubtitle: {
    fontSize: 14,
    color: '#BDBDBD',
    textAlign: 'center',
    marginBottom: 20,
  },
  partyDetails: {
    alignItems: 'center',
    marginBottom: 25,
  },
  partyUniText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
  },
  partyInfo: {
    fontSize: 16,
    color: '#BDBDBD',
  },
  partyButton: {
    backgroundColor: '#FF5864',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  partyButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
