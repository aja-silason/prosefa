import { fiscalStamp } from "./selo";

export type StampHistoryStore = {
  historic: fiscalStamp[];
  addStamp: (selo: fiscalStamp) => void;
  clearHistory: () => void;
};