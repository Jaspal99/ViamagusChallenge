import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/Styles/scalling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    borderRadius: horizontalScale(120),
    padding: horizontalScale(4),
  },
  profileImage: {
    width: horizontalScale(120),
    height: horizontalScale(120),
  },
  userName: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    color: '#022150',
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  profileStatsContainer: {
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(16),
  },
  singleStatContainer: {
    alignItems: 'center',
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(10),
  },
  singleStatBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
  singleStatNumber: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    color: '#022150',
  },
  singleStatText: {
    marginTop: verticalScale(6),
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#79869F',
  },
  border: {
    borderTopWidth: 1,
    borderColor: '#EFF2F6',
    marginTop: verticalScale(16),
    marginHorizontal: horizontalScale(28),
  },
  messageIcon: {
    padding: horizontalScale(14),
    borderRadius: horizontalScale(100),
    // backgroundColor: '#F9FAFB',
  },
  messageNumberContainer: {
    backgroundColor: '#6231AD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: horizontalScale(12),
    height: horizontalScale(12),
    borderRadius: horizontalScale(10),
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(10),
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(10),
    fontFamily: getFontFamily('Inter', '600'),
  },
});
export default style;
