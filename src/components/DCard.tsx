import type { FC } from "react";
import { type RouterOutputs, trpc } from "../utils/trpc";
import Image from "next/image";

type Dao = RouterOutputs["daos"]["getAll"][0];

export const DCard: FC<{
  dao: Dao;
}> = ({ dao }) => {
  const { data: membersData } = trpc.daos.getMembers.useQuery(dao.id);
  return (
    <div className="w-96 rounded-2xl border-2 border-neutral-700 bg-neutral-900 p-10">
      <div className="flex flex-row">
        <div className="text-2xl text-white">
          <div>{dao.name}</div>
          <div className="mt-2 font-inter text-base leading-5 text-slate-500">
            {dao.description}
          </div>
          <div className="mt-5 flex -space-x-4">
            <Image
              height={"2"}
              width={"2"}
              className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800"
              src="/img/avatar.png"
              alt=""
            />
            <Image
              height={"2"}
              width={"2"}
              className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800"
              src="/img/avatar.png"
              alt=""
            />
            <a
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +{(membersData ?? 2) - 2}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
