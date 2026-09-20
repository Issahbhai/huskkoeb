import { View, Text, Button } from 'react-native';
import styles, { colors } from '../styles/GlobalStyle';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Introduktionen fortæller hvad appen kan bruges til. */}
      <View style={styles.card}>
        <Text style={styles.title}>HuskKøb</Text>
        <Text style={styles.subtitle}>
          En simpel måde at holde styr på dine indkøb.
        </Text>
      </View>

      {/* Knapperne åbner de to andre sider i appen. */}
      <View style={styles.buttonArea}>
        <Button
          title="Åbn indkøbsliste"
          color={colors.primary}
          onPress={() => navigation.navigate('Indkøbsliste')}
        />
      </View>
      <View style={styles.buttonArea}>
        <Button
          title="Om appen"
          color={colors.primary}
          onPress={() => navigation.navigate('Om appen')}
        />
      </View>
    </View>
  );
}
