const OtherHero = ({title, description}) => {
  return (
    <div className="relative bg-black text-white py-16 pt-32">
      <div className="absolute inset-0">
        <img
          src="https://cdn.motor1.com/images/mgl/3Wvlpx/s1/indian-startup-raptee-energy-set-to-unveil-new-e-moto-in-april-2024.jpg"
          alt="Motorbike Store"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="relative z-10 container mx-auto text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default OtherHero;
