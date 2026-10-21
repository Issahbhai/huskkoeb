import { StyleSheet } from 'react-native';
import { colors } from './GlobalStyle';

// Styling til varer og deres knapper i listerne.
const listStyles = StyleSheet.create({
  listItem: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 4,
    borderLeftColor: colors.accent,
  },
  itemText: {
    flex: 1,
    fontSize: 17,
    color: colors.text,
    marginRight: 12,
  },
  itemButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 7,
    backgroundColor: colors.primary,
  },
  itemButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default listStyles;
