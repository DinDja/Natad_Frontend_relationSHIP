import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const ProfileCard = ({ profile }) => {
  if (!profile) {
    return null;
  }

  const { name, age, bio, image } = profile;

  return (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        >
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}, {age}</Text>
            <Text style={styles.bio}>{bio}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '40%',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  bio: {
    fontSize: 16,
    color: 'white',
    marginTop: 8,
  },
});

export default ProfileCard;
