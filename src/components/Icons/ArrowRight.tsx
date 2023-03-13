import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowRight: React.FC<{color?: string; size?: number}> = ({
  color = '#FAA843',
  size = 15,
}) => {
  return (
    <Svg width={size} height={size} viewBox="-5 0 15 15" fill="none">
      <Path
        d="M9 7.51648C9 7.62637 8.97683 7.74176 8.9305 7.86264C8.88417 7.98352 8.80309 8.0989 8.68726 8.20879L1.8417 14.7033C1.6332 14.9011 1.37838 15 1.07722 15C0.776061 15 0.521236 14.9011 0.312742 14.7033C0.104248 14.5055 -3.17028e-08 14.2747 -4.3231e-08 14.011C-5.47593e-08 13.7473 0.104248 13.5165 0.312742 13.3187L6.42857 7.51648L0.312741 1.71429C0.104247 1.51648 -5.99711e-07 1.28022 -6.11719e-07 1.0055C-6.23728e-07 0.73077 0.104247 0.494506 0.312741 0.296703C0.521235 0.0989008 0.770269 -3.36696e-08 1.05984 -4.63273e-08C1.34942 -5.8985e-08 1.59846 0.0989007 1.80695 0.296703L8.68726 6.82418C8.80309 6.93407 8.88417 7.04396 8.9305 7.15385C8.97683 7.26374 9 7.38462 9 7.51648Z"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowRight;