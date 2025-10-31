import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
export default function Explore() {
  return (
    <div className="flex flex-col justify-center items-center font-sora mt-5 md:mt-16">
      <div className="mb-10">
        <h1 className="font-md  text-xl md:text-2xl">
          Explore more products on intervue
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 space-y-4  justify-center gap-4 items-center p-5 md:p-20">
        <div className="flex flex-col gap-4 p-3 border w-full md:w-[400px] hover:cursor-pointer hover:-translate-y-2 transform ease-in duration-300  border-gray-200 rounded-lg shadow-lg hover:shadow-amber-200 ">
          <img src={image1} alt="image1" className="shadow-lg rounded-lg" />
          <div>
            <h2 className="font-bold">On demand</h2>
            <p className="text-gray-800"></p>
            <p className="text-gray-800">
              Save 90% of engineering & recruitment bandwidth, outsource
              candidate interviews to us
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-3 border w-full md:w-[400px] hover:cursor-pointer hover:-translate-y-2 transform ease-in duration-300 border-gray-200 rounded-lg shadow-lg  hover:shadow-amber-200 ">
          <img src={image2} alt="image1" className="shadow-lg rounded-lg" />
          <div>
            <h2 className="font-bold">Live interviews</h2>
            <p className="text-gray-800"></p>
            <p className="text-gray-800">
              Assess candidates in real-time with our live coding environment &
              integrated video calls
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-3 border w-full md:w-[400px] hover:cursor-pointer hover:-translate-y-2 transform ease-in duration-300 border-gray-200 rounded-lg shadow-lg hover:shadow-amber-200 ">
          <img src={image2} alt="image1" className="shadow-lg rounded-lg" />
          <div>
            <h2 className="font-bold">Assessments</h2>
            <p className="text-gray-800"></p>
            <p className="text-gray-800">
              Share assessments across batches with MCQ, Programming and
              Subjective questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
