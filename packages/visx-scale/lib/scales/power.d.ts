import { DefaultOutput } from '../types/Base';
import { PickScaleConfigWithoutType } from '../types/ScaleConfig';
export declare const updatePowScale: <Output = DefaultOutput, DiscreteInput extends import("../types/Base").StringLike = import("../types/Base").StringLike, ThresholdInput extends string | number | Date = string | number | Date>(scale: import("d3-scale").ScalePower<Output, Output, never>, config?: Pick<Pick<import("../types/BaseScaleConfig").BaseScaleConfig<"pow", import("../types/ScaleConfig").ContinuousDomain, Output[]>, "reverse" | "type" | "domain" | "range" | "clamp" | "exponent" | "interpolate" | "nice" | "round" | "zero">, "reverse" | "domain" | "range" | "clamp" | "exponent" | "interpolate" | "nice" | "round" | "zero"> | undefined) => import("d3-scale").ScalePower<Output, Output, never>;
export default function createPowScale<Output = DefaultOutput>(config?: PickScaleConfigWithoutType<'pow', Output>): import("d3-scale").ScalePower<Output, Output, never>;
//# sourceMappingURL=power.d.ts.map