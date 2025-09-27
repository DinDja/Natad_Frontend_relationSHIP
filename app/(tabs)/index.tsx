import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionButton from '../../components/ActionButton';
import ProfileCard from '../../components/ProfileCard';
import { PROFILES } from '../../constants/mockData';

export default function HomeScreen() {
  const [profiles, setProfiles] = useState(PROFILES);

  const handleAction = () => {
    setProfiles((prevProfiles) => prevProfiles.slice(1));
  };

  const currentProfile = profiles[0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        {currentProfile ? (
          <ProfileCard profile={currentProfile} />
        ) : (
          <View style={styles.noMoreCards}>
            <Text style={styles.noMoreCardsText}>Não há mais perfis por perto!</Text>
            <Text>Volte mais tarde.</Text>
          </View>
        )}
      </View>

      {currentProfile && (
        <View style={styles.buttonsContainer}>
          <ActionButton
            onPress={handleAction}
            iconName="close"
            color="#F43F5E"
            style={styles.button}
          />
          <ActionButton
            onPress={handleAction}
            iconName="star"
            color="#3B82F6"
            size={24}
            style={styles.buttonSmall}
          />
          <ActionButton
            onPress={handleAction}
            iconName="heart"
            color="#10B981"
            style={styles.button}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    width: '90%',
    marginVertical: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  buttonSmall: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: 20,
  },
  noMoreCardsText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
