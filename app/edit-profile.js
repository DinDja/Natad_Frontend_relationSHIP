import { FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useProfile } from '../contexts/ProfileContext';

export default function EditProfileScreen() {
  const router = useRouter();
  const { userProfile, setUserProfile } = useProfile();

  if (!userProfile) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF5864" />
      </SafeAreaView>
    );
  }

  const handlePickImage = async (index) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos de acesso à sua galeria para escolher uma foto.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      const newImages = [...userProfile.images];
      newImages[index] = result.assets[0].uri;
      setUserProfile({ ...userProfile, images: newImages });
    }
  };

  const handleTakePhoto = async (index) => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos de acesso à sua câmera para tirar uma foto.');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      const newImages = [...userProfile.images];
      newImages[index] = result.assets[0].uri;
      setUserProfile({ ...userProfile, images: newImages });
    }
  };

  const showImageOptions = (index) => {
    Alert.alert(
      'Adicionar Foto',
      'Escolha de onde você quer adicionar a foto:',
      [
        { text: 'Galeria', onPress: () => handlePickImage(index) },
        { text: 'Câmera', onPress: () => handleTakePhoto(index) },
        { text: 'Cancelar', style: 'cancel' },
      ]
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <FontAwesome5 name="chevron-left" size={20} color="#FF5864" />
        </TouchableOpacity>
        <Text style={styles.title}>Editar Perfil</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.saveButton}>Salvar</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView>
        <View style={styles.photosSection}>
          <Text style={styles.sectionTitle}>Minhas Fotos</Text>
          <View style={styles.photoGrid}>
            {userProfile.images.map((uri, index) => (
              <TouchableOpacity key={index} style={styles.photoSlot} onPress={() => showImageOptions(index)}>
                {uri ? (
                  <Image source={{ uri }} style={styles.photo} />
                ) : (
                  <View style={styles.addPhoto}>
                    <FontAwesome5 name="plus" size={20} color="#BDBDBD" />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.label}>Sobre mim</Text>
          <TextInput
            style={styles.textInputLarge}
            multiline
            placeholder="Escreva um pouco sobre você..."
            value={userProfile.bio}
            onChangeText={(text) => setUserProfile({ ...userProfile, bio: text })}
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu nome"
            value={userProfile.name}
            onChangeText={(text) => setUserProfile({ ...userProfile, name: text })}
          />

          <Text style={styles.label}>Idade</Text>
          <TextInput
            style={styles.input}
            placeholder="Sua idade"
            value={String(userProfile.age)}
            onChangeText={(text) => setUserProfile({ ...userProfile, age: Number(text) })}
            keyboardType="number-pad"
          />

          <Text style={styles.label}>Curso</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu curso"
            value={userProfile.course}
            onChangeText={(text) => setUserProfile({ ...userProfile, course: text })}
          />

          <Text style={styles.label}>Universidade</Text>
          <TextInput
            style={styles.input}
            placeholder="Sua universidade"
            value={userProfile.university}
            onChangeText={(text) => setUserProfile({ ...userProfile, university: text })}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    backgroundColor: '#FFF',
  },
  backButton: {
    padding: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  saveButton: {
    fontSize: 18,
    color: '#FF5864',
    fontWeight: '600',
  },
  photosSection: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photoSlot: {
    width: '31%',
    aspectRatio: 3 / 4,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  addPhoto: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    borderStyle: 'dashed',
  },
  formSection: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
    paddingTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  textInputLarge: {
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
});

