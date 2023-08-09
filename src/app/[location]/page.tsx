import axios from 'axios';
import Image from 'next/image';

type PageProps = {
  params: { location: string };
};

const Page = async ({ params }: PageProps) => {
  const querry = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${params.location}&aqi=no`,
  );

  const { location, current } = querry.data;

  return (
    <div className="flex flex-col text-center">
      <p>{location.name}</p>
      <Image src={current.condition.icon} alt="weather icon" />
      <p>{current.temp_c}</p>
    </div>
  );
};

export default Page;
