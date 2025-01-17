import { Z_INDEX } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class ZIndexStyle extends Style {
    static override matches = /^z:./;
    static override key = Z_INDEX;
    static override unit = '';
}