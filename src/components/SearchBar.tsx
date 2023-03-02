import { Combobox } from "@headlessui/react";
import type { FC } from "react";
import { useState } from "react";

const daos = [
  "Developer Dao",
  "Klima Dao",
  "DaoHaus",
  "LensDao",
  "Olympus Dao",
];

export const SearchBar: FC = () => {
  const [selectedDao, setSelectedDao] = useState("");
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? daos
      : daos.filter((d) => {
          return d.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <Combobox onChange={setSelectedDao} as="div" value={selectedDao}>
      <Combobox.Input
        onChange={(event) => setQuery(event.target.value)}
        className="relative h-10 w-96 rounded-lg bg-white px-4 font-sans font-semibold text-purple-900 placeholder-purple-200 caret-purple-500 ring-1 ring-purple-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
        placeholder="Search for a DAO"
      />
      <Combobox.Options className="fixed mt-2 w-96 rounded-lg bg-white px-4 py-2 font-sans font-semibold text-purple-500 ">
        {filteredPeople.length > 0 ? (
          filteredPeople.map((dao) => (
            <Combobox.Option key={dao} value={dao} className="mt-2 mb-2">
              {" 🏦 " + dao}
            </Combobox.Option>
          ))
        ) : (
          <Combobox.Option key={"None"} value={"None"} className="mt-2 mb-2">
            {"No results found"}
          </Combobox.Option>
        )}
      </Combobox.Options>
    </Combobox>
  );
};
