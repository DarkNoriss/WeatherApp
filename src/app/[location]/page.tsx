import axios from 'axios';
import Image from 'next/image';

export const revalidate = 300;

type PageProps = {
  params: { location: string };
};

const getData = async (location: string) => {
  try {
    return await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=no`,
    );
  } catch (error: any) {
    return error;
  }
};

export const generateMetadata = async ({ params }: PageProps) => {
  const { data } = await getData(params.location);

  if (data === undefined) {
    return { title: 'Location Not Found' };
  }

  const { location } = data;

  return {
    title: `${location.name}, ${location.country}`,
  };
};

const Page = async ({ params }: PageProps) => {
  const { data } = await getData(params.location);

  if (data === undefined) {
    return (
      // eslint-disable-next-line tailwindcss/no-custom-classname
      <div className="flex max-w-2xl flex-col text-balance text-center text-2xl">
        <span className="mb-8 text-4xl">Uh-oh! Location Not Found </span>
        <p>
          It seems the location you entered couldn&apos;t be matched with any
          known places. Please verify your entry and try again for us to provide
          you with the correct weather information.
        </p>
      </div>
    );
  }

  const { location, current } = data;

  return (
    <div className="flex flex-col items-center space-y-2 text-center text-2xl font-bold">
      <span className="text-6xl">{location.name}</span>
      <span>{location.country}</span>
      <span>{location.localtime}</span>
      <Image
        src={`https:${current.condition.icon}`}
        alt="weather icon"
        width={64}
        height={64}
      />
      <span className="">{current.temp_c}°C</span>
      <span className="">{current.condition.text}</span>
    </div>
  );
};

export default Page;
