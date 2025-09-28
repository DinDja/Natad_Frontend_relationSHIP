import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useProfile } from '../../contexts/ProfileContext';

const ProfileOption = ({ icon, text, isLast = false }) => (
  <TouchableOpacity style={[styles.optionButton, isLast && styles.lastOption]}>
    <View style={styles.optionIcon}>{icon}</View>
    <Text style={styles.optionText}>{text}</Text>
    <MaterialIcons name="keyboard-arrow-right" size={24} color="#BDBDBD" />
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const router = useRouter();
  const { userProfile } = useProfile(); 

  if (!userProfile) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF5864" />
      </SafeAreaView>
    );
  }

  const mainImage = userProfile.images[0] || 'https://placehold.co/600x800/cccccc/333?text=?';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileHeader}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: mainImage }} style={styles.profileImage} />
          </View>
          <Text style={styles.profileName}>{userProfile.name}, {userProfile.age}</Text>
          <Text style={styles.profileUniversity}>{userProfile.course} - {userProfile.university}</Text>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/settings')}>
             <FontAwesome5 name="cog" size={24} color="#BDBDBD" />
             <Text style={styles.actionText}>CONFIGURAÇÕES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/edit-profile')}>
            <FontAwesome5 name="pencil-alt" size={24} color="#BDBDBD" />
            <Text style={styles.actionText}>EDITAR PERFIL</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.premiumSection}>
          <Text style={styles.premiumTitle}>NATAD GOLD</Text>
          <Text style={styles.premiumSubtitle}>Avalie perfis muito mais!</Text>
          <TouchableOpacity style={styles.premiumButton}>
            <Text style={styles.premiumButtonText}>ATIVE O GOLD</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.optionsSection}>
          <ProfileOption 
            icon={<FontAwesome5 name="shield-alt" size={20} color="#FF5864" />}
            text="Segurança"
          />
          <ProfileOption 
            icon={<FontAwesome5 name="book-open" size={20} color="#FF5864" />}
            text="Termos de Uso"
            isLast={true}
          />
        </View>
        
        <TouchableOpacity onPress={() => router.replace('/login')}>
            <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8'
  },
  imageContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#FF5864',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  profileName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  profileUniversity: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#FFF',
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 5,
    color: '#666',
    fontWeight: '600',
  },
  premiumSection: {
    margin: 15,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  premiumTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D4AF37'
  },
  premiumSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    textAlign: 'center'
  },
  premiumButton: {
    marginTop: 15,
    backgroundColor: '#D4AF37',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  premiumButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionsSection: {
    marginTop: 10,
    marginHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  optionIcon: {
    width: 30,
    alignItems: 'center',
  },
  optionText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#444',
  },
  logoutText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#BDBDBD',
    fontSize: 16,
  }
});

