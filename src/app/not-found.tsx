
export default function Page404() {
  return (
    <main className="flex justify-center items-center w-full relative h-full">
      <span className="block mt-1/4 w-full z-10 text-center text-4xl text-gray-300">
        404 Page Not Found
      </span>

      <img
        src="/image/404.svg"
        alt="Page Not Found"
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-auto h-96 z-0"
      />
    </main>
  );
}
