import { DefaultThresholdInput, D3Scale } from '../types/Scale';
import { StringLike } from '../types/Base';
import { ScaleConfigWithoutType } from '../types/ScaleConfig';
export default function applyClamp<Output, DiscreteInput extends StringLike, ThresholdInput extends DefaultThresholdInput>(scale: D3Scale<Output, DiscreteInput, ThresholdInput>, config: ScaleConfigWithoutType<Output, DiscreteInput, ThresholdInput>): void;
//# sourceMappingURL=clamp.d.ts.map