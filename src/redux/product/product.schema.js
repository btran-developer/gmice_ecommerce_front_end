import { schema } from "normalizr";

export const productSchema = new schema.Entity(
  "product",
  {},
  { idAttribute: "slug" }
);
