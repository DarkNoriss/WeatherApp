import axios from 'axios';
import Image from 'next/image';

type PageProps = {
  params: { location: string };
};
export const generateMetadata = async ({ params }: PageProps) => {
  return { title: params.location };
};

const Page = async ({ params }: PageProps) => {
  const { data, status } = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${params.location}&aqi=no`,
  );

  console.log(`status: ${status}`);
  // if (status) return <span>Error!</span>;

  const { location, current } = data;

  // if(status === "")
  return (
    <div className="flex flex-col items-center space-y-2 text-center text-2xl font-bold">
      <span className="text-6xl">{location.name}</span>
      <span>{location.country}</span>
      <span>{location.localtime}</span>
      <Image
        src={`https:${current.condition.icon}`}
        alt="weather icon"
        width={96}
        height={96}
      />
      <span className="">{current.temp_c}°C</span>
      <span className="">{current.condition.text}</span>
    </div>
  );
};

export default Page;
