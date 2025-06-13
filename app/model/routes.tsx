import { fiscalStamp } from "./selo";

export type RootStackParamList = {
  presentation: undefined;
  home: undefined;
  fiscalstamp: { payload: fiscalStamp };
};