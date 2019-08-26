import { createElement, FunctionComponent } from 'rax';
import { isWeex, isWeb } from 'universal-env';
import Text from 'rax-text';

let domModule = null;
try {
  domModule = require('@weex-module/dom');
} catch (error) {
  console.log('require @weex-module/dom error');
}

const fontCache = new Map();

export interface IconProps {
  uri: string;
  codePoint: string;
  fontFamily: string;
  size?: number;
  color?: string;
}

const Icon: FunctionComponent<IconProps> = ({
  uri,
  codePoint,
  fontFamily,
  size = 12,
  color
}) => {
  const fontFile = fontCache.get(fontFamily);
  if (!fontFile) {
    fontCache.set(fontFamily, uri);
    if (isWeb) {
      // @ts-ignore
      if (window.FontFace) {
        // @ts-ignore
        const FontFace = window.FontFace;
        const iconfont = new FontFace(fontFamily, 'url(' + uri + ')');
        // @ts-ignore
        document.fonts.add(iconfont);
        // @ts-ignore
      } else {
        const iconFontStyles = `@font-face {
            src: url(${uri});
            font-family: ${fontFamily};
          }`;
        // Create stylesheet
        const style = document.createElement('style');
        style.type = 'text/css';
        // @ts-ignore
        if (style.styleSheet) {
          // @ts-ignore
          style.styleSheet.cssText = iconFontStyles;
        } else {
          style.appendChild(document.createTextNode(iconFontStyles));
        }
        document.head.appendChild(style);
      }
    } else if (isWeex) {
      domModule.addRule('fontFace', {
        fontFamily,
        src: "url('" + uri + "')" // single quotes are required around uri, and double quotes can not work
      });
    }
  } else if (fontFile !== uri) {
    console.error(`font-family ${fontFamily} should be unique!`);
    return null;
  }
  return <Text style={{ fontSize: size, fontFamily, color }}>{codePoint}</Text>;
};

export default Icon;

export function createIconSet(
  glyphMap = {},
  fontFamily: string,
  fontFile: string
) {
  const IconFont: FunctionComponent<{
    name: string;
    size?: number;
    color?: string;
  }> = ({ name, size = 12, color }) => {
    return (
      <Icon
        uri={fontFile}
        fontFamily={fontFamily}
        codePoint={glyphMap[name]}
        color={color}
        size={size}
      />
    );
  };
  return IconFont;
}
