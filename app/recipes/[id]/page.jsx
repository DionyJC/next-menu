import Image from 'next/image';
import Link from "next/link";

async function getData(id) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page({ params }) {
  const { id } = params;

  // Fetch data
  const data = await getData(id);

  return (
    <div className="container mx-auto my-10 max-w-screen-xl">
      <Link href={"https://next-menu-mocha.vercel.app/"} className="text-center block mb-8">
      <h2 className="text-slate-800 font-bold md:text-2xl">Regresar</h2>
      </Link>

      <div className="flex flex-col md:flex-row  p-4">
        {/* Image Section on the Left */}
        <div className="md:w-1/2 pr-4">
          <Image
            src={data?.meals[0]?.strMealThumb}
            objectFit="cover"
            alt="Meal Image"
            width={600}
            height={200}
          />

           {/* YouTube Video */}
           {data?.meals[0]?.strYoutube && (
            <div className="mb-4 mt-4">
              <iframe
                width="100%"
                height="315"
                src={data?.meals[0]?.strYoutube.replace('watch?v=', 'embed/')}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        {/* Information Section on the Right */}
        <div className="md:w-1/2">
          <h1 className="bg-slate-800 py-4 text-white rounded-sm font-semibold text-2xl text-center mb-4">
            {data?.meals[0]?.strMeal}
          </h1>

         

          {/* Ingredients and Steps in Two Columns */}
          <div className="flex flex-col md:flex-row">
            {/* Ingredients Column */}
            <div className="md:w-1/2 pr-2">
              <div className="bg-white p-4 mb-4 border border-gray-300 rounded">
                <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                  const ingredient = data?.meals[0][`strIngredient${index}`];
                  const measurement = data?.meals[0][`strMeasure${index}`];

                  if (ingredient && measurement) {
                    return (
                      <div key={index} className="mb-2">
                        <span className="font-semibold">{ingredient}:</span> {measurement}
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </div>

            {/* Steps Column */}
            <div className="md:w-1/2 pl-2">
              <div className="bg-white p-4 mb-4 border border-gray-300 rounded">
                <h2 className="text-xl font-semibold mb-2">Steps:</h2>
                <ol className="list-decimal pl-4">
                  {data?.meals[0]?.strInstructions.split('\r\n').map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
