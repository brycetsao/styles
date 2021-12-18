import { DASH, OFFSET, OUTLINE } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class OutlineOffsetStyle extends Style {
    static override properties = [OUTLINE + DASH + OFFSET];
}