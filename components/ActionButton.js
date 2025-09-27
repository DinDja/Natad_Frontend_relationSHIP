import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

const ActionButton = ({ onPress, color, iconName, size = 30, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        style,
        { opacity: pressed ? 0.7 : 1 },
      ]}
    >
      <Ionicons name={iconName} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    // Android Shadow
    elevation: 3,
  },
});

export default ActionButton;
