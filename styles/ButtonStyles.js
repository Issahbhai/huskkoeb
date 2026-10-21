import { StyleSheet } from 'react-native';
import { colors } from './GlobalStyle';

// Fælles styling til appens kompakte knapper.
const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 11,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  secondaryButtonText: {
    color: colors.primary,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
    marginBottom: 8,
  },
  rowButton: {
    flex: 1,
  },
  buttonArea: {
    alignSelf: 'flex-start',
    marginTop: 8,
    marginBottom: 8,
  },
});

export default buttonStyles;
