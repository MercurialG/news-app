"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Props = {};

function SearchBox({}: Props) {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?term=${input}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl flex mx-auto justify-between items-center px-5"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Keywords"
        className="flex-1 w-full h-14 rounded-sm
         placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-red-500"
      />
      <button
        disabled={!input}
        type="submit"
        className="text-red-500 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
