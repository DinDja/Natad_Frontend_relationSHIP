import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const SettingOption = ({ label, value, onPress }) => (
  <TouchableOpacity style={styles.settingOption} onPress={onPress}>
    <Text style={styles.settingLabel}>{label}</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={styles.settingValue}>{value}</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="#BDBDBD" />
    </View>
  </TouchableOpacity>
);

export default function SettingsScreen() {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <FontAwesome5 name="chevron-left" size={20} color="#FF5864" />
        </TouchableOpacity>
        <Text style={styles.title}>Configurações</Text>
        <View style={{ width: 25 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferências de Descoberta</Text>
          <SettingOption label="Eu sou" value="Homem" />
          <SettingOption label="Mostrar" value="Mulheres" />
          <SettingOption label="Universidades" value="Todas" />
          <SettingOption label="Cursos" value="Todos" />
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Geolocalização</Text>
          <SettingOption label="Localização" value="Salvador, BA" />
           <View style={styles.settingOption}>
            <Text style={styles.settingLabel}>Distância Máxima</Text>
            <Text style={styles.settingValue}>15 km</Text>
          </View>
        </View>

        <View style={styles.section}>
           <View style={styles.settingOption}>
            <Text style={styles.settingLabel}>Mostrar no NATAD</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#FFC1C6' }}
              thumbColor={isEnabled ? '#FF5864' : '#f4f3f4'}
              onValueChange={() => setIsEnabled(previousState => !previousState)}
              value={isEnabled}
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
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
  scrollContainer: {
    paddingBottom: 30,
  },
  section: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    padding: 15,
    backgroundColor: '#F7F7F7',
  },
  settingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  settingLabel: {
    fontSize: 16,
    color: '#444',
  },
  settingValue: {
    fontSize: 16,
    color: '#888',
  },
});
