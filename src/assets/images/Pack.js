import React from 'react';
import { Svg, Defs, Pattern, Image, Rect, G } from 'react-native-svg';

const SvgPack = () => {
  return (
    <Svg width={320} height={499} viewBox="0 0 320 499">
      <Defs>
        <Pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 944 1519">
          <Image width="944" height="1519" href={{ uri: './blueCard.png' }} />
        </Pattern>
      </Defs>
      <G id="Groupe_1608" dataName="Groupe 1608" transform="translate(-912 -1043)">
        <G id="Groupe_354" dataName="Groupe 354" transform="translate(964 823)">
          <Rect id="_102s9" dataName="102s9" width={320} height={499} transform="translate(-52 220)" fill="url(#pattern)" />
        </G>
      </G>
    </Svg>
  );
};

export default SvgPack;
