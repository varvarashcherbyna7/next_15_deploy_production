import { Search } from 'lucide-react';
import Form from 'next/form';
import { SearchFormReset } from './SearchFormReset';
import { Button } from './ui/button';

export const SearchForm = ({ query }: { query?: string }) => {

  console.log('SearchForm query:', query);

  return (
    <Form action="/" scroll={false} className='search-form'>
      <input
        name={'query'}
        defaultValue={query}
        className='search-input'
        placeholder='Search Startups' />
      <div className='flex gap-2'>
        {query && <SearchFormReset />}
        <Button type="submit" className='search-btn text-white' >
          <Search className='size-5' />
        </Button>
      </div>
    </Form>
  )
};
