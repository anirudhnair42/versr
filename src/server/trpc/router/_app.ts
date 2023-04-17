import { router } from "../trpc";
import { authRouter } from "./auth";
import { daosRouter } from "./daos";

export const appRouter = router({
  daos: daosRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
