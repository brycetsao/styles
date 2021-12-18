import { BEHAVIOR, DASH, SCROLL } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class ScrollBehaviorStyle extends Style {
    static override properties = [SCROLL + DASH + BEHAVIOR];
}