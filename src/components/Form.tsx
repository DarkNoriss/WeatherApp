import { Search } from 'lucide-react';
import { redirect } from 'next/navigation';

import { Button } from './ui/Button';
import { Input } from './ui/Input';

const Form = () => {
  const submitForm = async (data: FormData) => {
    'use server';

    const location = data.get('location');
    redirect(`/${location}`);
  };

  return (
    <form
      action={submitForm}
      className="flex w-full max-w-xs items-center space-x-2 text-gray-950"
    >
      <Input name="location" type="search" placeholder="Search city" />
      <Button type="submit" className="bg-gray-400 hover:bg-gray-600">
        <Search />
      </Button>
    </form>
  );
};

export default Form;
