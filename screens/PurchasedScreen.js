import { useCallback, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import styles from '../styles/GlobalStyle';
import listStyles from '../styles/ListStyles';

const PURCHASED_ITEMS_KEY = 'purchasedItems';

export default function PurchasedScreen() {
  const [purchasedItems, setPurchasedItems] = useState([]);

  // Henter købte varer, hver gang siden åbnes.
  useFocusEffect(
    useCallback(() => {
      async function loadPurchasedItems() {
        try {
          const storedItems = await AsyncStorage.getItem(PURCHASED_ITEMS_KEY);
          setPurchasedItems(storedItems ? JSON.parse(storedItems) : []);
        } catch (error) {
          setPurchasedItems([]);
        }
      }

      loadPurchasedItems();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Købte varer</Text>
      <FlatList
        style={styles.purchasedList}
        data={purchasedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={listStyles.listItem}>
            <Text style={listStyles.itemText}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.infoText}>Du har ingen købte varer endnu.</Text>
        }
      />
    </View>
  );
}
