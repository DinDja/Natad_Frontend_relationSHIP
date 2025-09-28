import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const eventDetails = {
  title: 'Conexão em Festa!',
  uni1: 'UFBA',
  uni2: 'UNIFACS',
  date: 'Sábado, 12 de Outubro',
  time: 'A partir das 22h',
  location: 'Clube Espanhol, Ondina',
  description: 'A festa de integração que celebra os maiores matches do NATAD! Uma noite inesquecível com muita música, gente interessante e a chance de transformar conexões virtuais em reais. Prepare-se para o maior evento universitário do ano.',
  image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop',
};

export default function PartyDetailsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground source={{ uri: eventDetails.image }} style={styles.headerImage}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <FontAwesome5 name="chevron-left" size={24} color="#FFF" />
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.content}>
          <Text style={styles.uniText}>{eventDetails.uni1} + {eventDetails.uni2}</Text>
          <Text style={styles.title}>{eventDetails.title}</Text>
          
          <View style={styles.infoSection}>
            <InfoRow icon="calendar-alt" text={`${eventDetails.date} | ${eventDetails.time}`} />
            <InfoRow icon="map-marker-alt" text={eventDetails.location} />
          </View>

          <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>Sobre o Evento</Text>
            <Text style={styles.descriptionText}>{eventDetails.description}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirmButton} onPress={() => router.push('/confirm-presence')}>
          <Text style={styles.confirmButtonText}>Confirmar Presença</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const InfoRow = ({ icon, text }) => (
  <View style={styles.infoRow}>
    <FontAwesome5 name={icon} size={16} color="#FF5864" />
    <Text style={styles.infoText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerImage: {
    width: '100%',
    height: 300,
    justifyContent: 'flex-start',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    borderRadius: 20,
  },
  content: {
    padding: 20,
  },
  uniText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5864',
    textAlign: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoSection: {
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 15,
  },
  descriptionSection: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
  },
  confirmButton: {
    backgroundColor: '#FF5864',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});