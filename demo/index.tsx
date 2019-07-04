import { createElement, render, Component } from 'rax';
import DU from 'driver-universal';
import View from 'rax-view';
import Icon, { createIconSet } from '../src/index';

const IconFont1 = createIconSet({}, 'iconfont', 'https://at.alicdn.com/t/font_pkm0oq8is8fo5hfr.ttf');
const IconFont2 = createIconSet({
  hello: '\uE60f'
}, 'iconfont', 'https://at.alicdn.com/t/font_pkm0oq8is8fo5hfr.ttf');
const icon = 'https://gw.alicdn.com/tfs/TB1KRRuQXXXXXbwapXXXXXXXXXX-200-200.png';

class Demo extends Component {
  render() {
    return (
      <View>
        <Icon source={{uri: icon}}/>
        <Icon fontFamily="iconfont" source={{uri: 'https://at.alicdn.com/t/font_pkm0oq8is8fo5hfr.ttf', codePoint: '\uE60f'}}/>
        <IconFont1 codePoint={'\uE60f'}/>
        <IconFont2 name={'hello'}/>
      </View>
    );
  }
}

render(<Demo />, document.body, { driver: DU });
