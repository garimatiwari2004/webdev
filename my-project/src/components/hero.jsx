import { Search } from "lucide-react";

export default function Hero() {
  return (
    <div className="mt-4 md:mt-16 font-sora p-5 space-y-4 flex flex-col justify-center items-center">
      <h1 className="text-center mx-5 md:mx-auto text-2xl md:text-5xl font-semibold">
        Technical Interview Resources
      </h1>
      <p className="text-gray-900 font-xs md:font-2xl text-center mb-4">
        Find all technical interview resources here
      </p>

      <div className="flex items-center gap-3 rounded-3xl p-3 border border-none bg-gray-100 w-full max-w-md">
        <Search className="text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search for resource here..."
          className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>
  );
}
