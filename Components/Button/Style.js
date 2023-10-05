import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/Styles/scalling';
// import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2979F2',
    height: verticalScale(35),
    justifyContent: 'center',
    // width: '30%',
    borderRadius: horizontalScale(50),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(40),
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    // fontFamily: getFontFamily('Inter', '500'),
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
    lineHeight: scaleFontSize(19),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  underColor: {
    backgroundColor: '#452C55',
  },
  overColor: {
    backgroundColor: '#6231AD',
  },
});

export default style;
