import { CategoryIDGetter } from "../utils";

export type GetIsSelectedRequiredCategory<T> = (
  getCategoryID: CategoryIDGetter,
  required_category: number[]
) => T;
