import { FaMotorcycle } from "react-icons/fa";

const AboutTimeline = () => {
  const milestones = [
    { year: "2010", event: "Store founded in a small garage." },
    { year: "2015", event: "Expanded to a larger retail space." },
    { year: "2020", event: "Launched our online store." },
    { year: "2023", event: "Serving over 10,000 riders worldwide." },
  ];

  return (
    <div className="container mx-auto py-8 lg:py-16 px-6">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Our Journey
      </h2>
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Content Section */}
              <div
                className={`w-1/2 px-4 ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {milestone.year}
                </h3>
                <p className="mt-2 text-gray-600">{milestone.event}</p>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl absolute left-1/2 transform -translate-x-1/2">
                <FaMotorcycle />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTimeline;
