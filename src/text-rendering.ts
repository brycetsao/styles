import { Style } from '@master/style';
import { DASH, TEXT } from './constants/css-property-keyword';

export class TextRenderingStyle extends Style {
    static override matches = /^t(ext)?:(optimizeSpeed|optimizeLegibility|geometricPrecision)(?!;)/;
    static override key = TEXT + DASH + 'rendering';
}