import { fiscalStamp } from "./selo";

export type RootStackParamList = {
  presentation: undefined;
  home: undefined;
  qrcode: undefined;
  fiscalstamp: { payload: fiscalStamp };
};