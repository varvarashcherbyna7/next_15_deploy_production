import { SearchForm } from "@/components/SearchForm";
import SturtupCard from "@/components/SturtupCard";


export interface SturtupCardType {
  _createAt: Date,
  view: number,
  _id: number,
  image: string,
  title: string,
  description: string,
  category: string,
  author: {
    _id: number,
    name: string
  }
}

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>;
}) {

  const query = (await searchParams).query;

  const posts: SturtupCardType[] = [
    {
      _createAt: new Date(),
      view: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: 'This is a description',
      image: 'https://placehold.co/48x48',
      category: 'Robots',
      title: 'We Robots'
    }
  ]

  return (
    <>
      <section className="blue_container">
        <div className="heading">
          <h1>Pitch Your Startup,</h1>
          <h1>Connect with Entrepreneurs</h1>
        </div>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? (
              posts.map((post: SturtupCardType) => <SturtupCard key={post._id} post={post} />)
            ) : (
              <li>
                <p>No startups found</p>
              </li>
            )
          }

        </ul>
      </section>
    </>
  );
}
