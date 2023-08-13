const Page = async () => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="flex max-w-2xl flex-col text-balance text-center text-2xl">
      <span className="mb-8 text-4xl">Welcome to the Weather App! </span>
      <p>
        Enter your location in the top input to get the latest weather updates
        tailored to your area.
      </p>
    </div>
  );
};

export default Page;
