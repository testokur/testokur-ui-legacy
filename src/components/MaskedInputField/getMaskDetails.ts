import { curry } from '../../modules';

const getMaskDetails = curry<[string, string]>({
  Phone: () => ['(___) ___-____', '(***) ***-****'],
  DateTime: () => ['GG.AA.YYYY SS:DD:ss', '**.**.**** **:**:**'],
});

export default getMaskDetails;
