import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const scheduleItems = [
  {
    id: 3,
    time: "اليوم الرابع 11:15 - 9:45 صباحا",
    title: "الجلسة الأولى: القضاء وقانون المنافسة",
    description:
      "تهدف هذه الجلسة إلى التعرف على الدور القضائي في قضايا المنافسة وحدود الرقابة القضائية على القرارات الصادرة عن سلطات المنافسة بشأن القضايا المختلفة (الممارسات - التركز الاقتصادي) وستتضمن الجلسة مناقشات وعرض أمثلة دولية وإقليمية ووطنية",
  },
  {
    id: 4,
    time: "Day four: 9:00am-11:am Session 1: law of competition",
    title: "",
    description:
      "This session aims to identify the judicial role in competition cases and the limits of judicial oversight of the decisions issued by competition authorities regarding various issues (fine - requests for economic concentration - measures) and the like. The session will include panel discussions and international, regional and national examples.",
  },
  {
    id: 5,
    time: "الجلسة الأولى: القضاء وقانون المنافسة",
    title: "",
    description:
      "الدور القضائي في قضايا المنافسة وحدود الرقابة القضائية على القرارات الصادرة عن سلطات المنافسة بشأن القضايا المختلفة (الغرامات - طلبات التركز الاقتصادي - التدابير) وما شابه ذلك. وستتضمن الجلسة مناقشات وعرض أمثلة دولية وإقليمية ووطنية",
  },
];

function EventSchdule({ language }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % scheduleItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + scheduleItems.length) % scheduleItems.length
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">
        Event Schedule
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-2"></div>
      </h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {scheduleItems.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 p-4">
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mr-4">
                    {item.id}
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">{item.time}</p>
                    {item.title && <p className="font-medium">{item.title}</p>}
                  </div>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-blue-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-blue-600" />
        </button>
      </div>
    </div>
  );
}
export default EventSchdule;
