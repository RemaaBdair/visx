import React from 'react';
import { LegendShape, FormattedLabel, FillAccessor, SizeAccessor, ShapeStyleAccessor, RenderShapeProvidedProps } from '../types';
declare type RenderShapeArgs<Data, Output> = {
    shape?: LegendShape<Data, Output>;
    label: FormattedLabel<Data, Output>;
    item: Data;
    itemIndex: number;
    fill?: FillAccessor<Data, Output>;
    size?: SizeAccessor<Data, Output>;
    shapeStyle?: ShapeStyleAccessor<Data, Output>;
    width?: string | number;
    height?: string | number;
};
export default function renderShape<Data, Output>({ shape, fill, size, width, height, label, item, itemIndex, shapeStyle, }: RenderShapeArgs<Data, Output>): React.FunctionComponentElement<RenderShapeProvidedProps<Data, Output>> | React.ReactElement<unknown, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
export {};
//# sourceMappingURL=renderShape.d.ts.map