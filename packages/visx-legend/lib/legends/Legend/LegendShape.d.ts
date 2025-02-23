/// <reference types="react" />
import { FormattedLabel, LegendShape as LegendShapeType } from '../../types';
export declare type LegendShapeProps<Data, Output> = {
    label: FormattedLabel<Data, Output>;
    item: Data;
    itemIndex: number;
    margin?: string | number;
    shape?: LegendShapeType<Data, Output>;
    fill?: (label: FormattedLabel<Data, Output>) => any;
    size?: (label: FormattedLabel<Data, Output>) => any;
    shapeStyle?: (label: FormattedLabel<Data, Output>) => any;
    width?: string | number;
    height?: string | number;
};
export default function LegendShape<Data, Output>({ shape, width, height, margin, label, item, itemIndex, fill, size, shapeStyle, }: LegendShapeProps<Data, Output>): JSX.Element;
//# sourceMappingURL=LegendShape.d.ts.map