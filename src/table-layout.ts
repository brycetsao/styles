import { DASH, LAYOUT, TABLE } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class TableLayoutStyle extends Style {
    static override properties = [TABLE + DASH + LAYOUT];
}