import { SearchForm } from "@/components/SearchForm";
import { SturtupCard, SturtupTypeCard } from "@/components/SturtupCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";


export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>;
}) {

  const query = (await searchParams).query;

  const posts: SturtupTypeCard[] = await client.fetch(STARTUP_QUERY);

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
              posts.map((post: SturtupTypeCard) => <SturtupCard key={post._id} post={post} />)
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
