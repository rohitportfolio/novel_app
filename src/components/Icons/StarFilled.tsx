import React from 'react';
import Svg, {Path} from 'react-native-svg';

const StarFilled: React.FC<{color?: string; size?: number}> = ({
  color = '#FAA843',
  size = 18,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 17" fill="none">
      <Path
        d="M9.43977 13.6975L13.5898 16.2075C14.3498 16.6675 15.2798 15.9875 15.0798 15.1275L13.9798 10.4075L17.6498 7.2275C18.3198 6.6475 17.9598 5.5475 17.0798 5.4775L12.2498 5.0675L10.3598 0.6075C10.0198 -0.2025 8.85977 -0.2025 8.51977 0.6075L6.62977 5.0575L1.79977 5.4675C0.91977 5.5375 0.55977 6.6375 1.22977 7.2175L4.89977 10.3975L3.79977 15.1175C3.59977 15.9775 4.52977 16.6575 5.28977 16.1975L9.43977 13.6975Z"
        fill={color}
      />
    </Svg>
  );
};

export default StarFilled;
