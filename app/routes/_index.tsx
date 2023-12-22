import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/server-runtime";
import { json } from "react-router";


export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  console.log(
    "This is an example of how to set caching headers for a route, feel free to change the value of 60 seconds or remove the header"
  );
  return {
    // This is an example of how to set caching headers for a route
    // For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
    "Cache-Control": "public, max-age=60, s-maxage=60",
  };
}

export async function loader({}: LoaderFunctionArgs) {
  const url = await  fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    {
      headers: {
        accept: "application/json",
        Authorization:
         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzBhMmQ0ZjcyYmQwNjc1NzhiNjY4NmJjOWY5YWQ2MCIsInN1YiI6IjY1ODUyZjM1MDFiMWNhNWZhNzkwMTE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V0D3-TwfI7w3E-PH8ouQ2EqIDJ731WcTb4SCiYMdbMg"
      }
    }
  )

  return json(await url.json())
}

export default function Index() {
  const data = useLoaderData();
  console.log(data);
  return (
   <div className="bg-white py-6 sm:py-8 lg:py-12">
     <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
       <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg">
            Top Trending Movies
          </h2>
       </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">

      </div>
   </div>
  );
}
