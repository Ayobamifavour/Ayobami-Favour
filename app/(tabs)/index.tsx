// app/(tabs)/index.tsx
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Animated.View 
            entering={FadeInDown.delay(200).springify()}
            style={styles.welcomeContainer}
          >
            <Text style={styles.welcomeText}>Welcome</Text>
          </Animated.View>

          <Animated.View 
            entering={FadeInUp.delay(400).springify()}
            style={styles.nameContainer}
          >
            <Text style={styles.name}>Akinde Oluwadamilola</Text>
            <Text style={styles.name}>David</Text>
          </Animated.View>

          <Animated.View 
            entering={FadeInUp.delay(600).springify()}
            style={styles.divider}
          />

          <Animated.View 
            entering={FadeInUp.delay(800).springify()}
            style={styles.infoContainer}
          >
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Course</Text>
              <Text style={styles.infoValue}>Information Technology</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Level</Text>
              <Text style={styles.infoValue}>400 Level</Text>
            </View>
          </Animated.View>

          <Animated.View 
            entering={FadeInUp.delay(1000).springify()}
            style={styles.footer}
          >
            <Text style={styles.footerText}>Example App • v1.0.0</Text>
          </Animated.View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  welcomeContainer: {
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 18,
    color: '#e94560',
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  nameContainer: {
    marginBottom: 24,
  },
  name: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: 52,
    textShadowColor: 'rgba(233, 69, 96, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  divider: {
    width: 60,
    height: 4,
    backgroundColor: '#e94560',
    borderRadius: 2,
    marginBottom: 32,
  },
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  infoLabel: {
    fontSize: 16,
    color: '#8899aa',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#8899aa',
  },
});