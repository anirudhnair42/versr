import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const daosRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.dao.findMany();
  }),
});