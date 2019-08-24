import { Component, CSSProperties, ComponentClass } from 'rax';

export interface IconSource {
  uri?: string;
  codePoint: string;
}
export interface IconProps {
  source: IconSource;
  fontFamily?: string;
  style?: CSSProperties;
}
declare class Icon extends Component<IconProps, any> {
  componentWillMount(): void;
  render(): JSX.Element;
}
export default Icon;
export interface IconFontProps {
  name: string;
  codePoint?: string;
  style?: CSSProperties;
}
export declare function createIconSet(glyphMap: {}, fontFamily: string, uri: string): ComponentClass<IconFontProps>;
