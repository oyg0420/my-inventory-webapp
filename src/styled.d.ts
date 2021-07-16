import 'styled-components';

import { ThemeType } from './components/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
