import { Book, Globe, Key, Layers, MoveRight, Rocket, WholeWord } from "lucide-react";

export default function Security() {
  return (
    <div className="md:mt-48 mt-10 font-sora flex flex-col p-5 md:px-15 space-y-4 bg-gray-400/20">
      <div className=" font-sora space-y-2 ">
        <h1 className="font-md text-2xl">Security is our top priority</h1>
        <p className="text-gray-700 text-sm mb-10">
          Intervue serves startups to fortune 500 companies with <br /> enterprise
          grade security baked in by design
        </p>
      </div>
      <div className="flex gap-4 flex-col md:flex-row ">
        <div className="bg-white p-4 space-y-2 shadow-lg rounded-sm">
            <Key className="font-bold " size={36} />
            <h2 className="font-bold">Security</h2>
            <p className="text-gray-600">Protecting your data at every <br /> level is fundamental to how <br /> intervue works</p>
            <div className=" w-full flex justify-end">
            <MoveRight className="  text-right " />
            </div>
        </div>
        <div className="bg-white p-4 space-y-2 shadow-lg rounded-sm">
            <Layers  className="font-bold " size={36} />
            <h2 className="font-bold">Compliances</h2>
            <p className="text-gray-600">Protecting your data at every <br /> level is fundamental to how <br /> intervue works</p>
            <div className=" w-full flex justify-end">
            <MoveRight className="  text-right " />
            </div>
        </div>
        <div className= " flex flex-col gap-4 space-y-2 ">
            <div className="shadow-lg bg-white p-4"><Rocket  className="font-bold " size={36}/>
            <div className="flex justify-between">
            <h2 className="font-bold">Intervue for startups</h2>
            <MoveRight className="  text-right " />

            </div>
            </div>
            <div className="bg-white shadow-lg p-4"><Globe  className="font-bold " size={36}/>
             <div className="flex justify-between">
            <h2 className="font-bold">Intervue for enterprices</h2>
            <MoveRight className="  text-right " />

            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
