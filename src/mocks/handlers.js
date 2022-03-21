import { rest } from "msw";
/*
API docs: https://mswjs.io/docs/api
snippets:
mswget
mswpost
mswpatch
mswdelete
*/
import { lands } from "./data";
export const handlers = [
  rest.get("/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json());
  }),
  rest.get("/lands", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(lands));
  })
];
