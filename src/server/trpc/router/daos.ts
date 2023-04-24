import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const daosRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.dao.findMany();
  }),
  getMembers: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.daoUser.count({
      where: {
        daoId: input,
      },
    });
  }),
});
