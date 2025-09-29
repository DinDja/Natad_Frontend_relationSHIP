import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionButton from '../../components/ActionButton';
import ProfileCard from '../../components/ProfileCard';
import { PROFILES } from '../../constants/mockData';

export default function HomeScreen() {
  const [profiles, setProfiles] = useState(PROFILES);
  const swiperRef = useRef<Swiper<any>>(null);
  const router = useRouter();

  if (!profiles.length) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.noMoreCards}>
          <Text style={styles.noMoreCardsText}>Não há mais perfis por perto!</Text>
          <Text>Volte mais tarde.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 24 }} />
        <Text style={styles.headerTitle}>NATAD</Text>
        <TouchableOpacity onPress={() => router.push('../settings')}>
          <FontAwesome5 name="sliders-h" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>

      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={profiles}
          renderCard={(card) => (
            <TouchableOpacity activeOpacity={0.9} onPress={() => router.push(`./profile/${card.id}`)}>
              <ProfileCard profile={card} />
            </TouchableOpacity>
          )}
          onSwipedAll={() => setProfiles([])}
          stackSize={3}
          stackSeparation={15}
          cardIndex={0}
          backgroundColor={'transparent'}
          overlayLabels={{
            left: {
              title: 'NÃO',
              style: {
                label: { backgroundColor: '#F43F5E', color: 'white', fontSize: 24 },
                wrapper: { flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', marginTop: 30, marginLeft: -30 },
              },
            },
            right: {
              title: 'SIM',
              style: {
                label: { backgroundColor: '#10B981', color: 'white', fontSize: 24 },
                wrapper: { flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 30, marginLeft: 30 },
              },
            },
          }}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <ActionButton
          onPress={() => swiperRef.current?.swipeLeft()}
          iconName="times"
          color="#F43F5E"
          style={styles.button}
        />
        <ActionButton
          onPress={() => swiperRef.current?.swipeTop()}
          iconName="star"
          color="#3B82F6"
          size={24}
          style={styles.buttonSmall}
        />
        <ActionButton
          onPress={() => swiperRef.current?.swipeRight()}
          iconName="heart"
          color="#10B981"
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF5864',
  },
  swiperContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    zIndex: 100,
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
    margin: 20,
  },
  noMoreCardsText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

