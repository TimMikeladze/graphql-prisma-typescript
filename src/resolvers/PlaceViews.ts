import { IPlaceViews } from "./generated/interfaces.ts";
import { Types } from "./types";

export interface PlaceViewsRoot {
  id: string;

  lastWeek: number;
}

export const PlaceViews: IPlaceViews.Resolver<Types> = {
  id: async (root, args, ctx, info) => {
    return null;
  },
  lastWeek: async (root, args, ctx, info) => {
    return null;
  }
};
