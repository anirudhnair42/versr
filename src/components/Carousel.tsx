import type { FC } from "react";
import { DCard } from "./DCard";

export const Carousel: FC<{
  Daos: {
    id: number;
    name: string;
    description: string;
    image: string;
  }[];
}> = ({ Daos }) => {
  return (
    <div className=" grid grid-cols-4 gap-2">
      {Daos.map((Dao) => {
        return (
          <DCard
            key={Dao.id}
            title={Dao.name}
            description={Dao.description}
            image={Dao.image}
          />
        );
      })}
    </div>
  );
};
