

export default function TestimonialHero() {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col justify-center px-4 py-4 lg:py-8">
        <div className="flex justify-center">
          <h1 className="mb-4 max-w-2xl text-2xl font-extrabold leading-none tracking-tight text-slate-800 md:text-3xl xl:text-4xl">
            Testimonials
          </h1>
        </div>
        <section className="flex flex-row justify-center gap-x-8">
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow">
            <figure className="mx-auto max-w-screen-md">
              <svg
                className="mx-auto mb-3 h-8 text-cyan-800"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-xl font-medium text-gray-900">
                  "This was a great workshop that can help so many users learn how to better use
                  MAG's amazing data. Thank you to all involved."
                </p>
              </blockquote>
            </figure>
          </div>
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow">
            <figure className="mx-auto max-w-screen-md">
              <svg
                className="mx-auto mb-3 h-8 text-cyan-800"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-xl font-medium text-gray-900">
                  "The workshop was productive, location was ideal and time was well spent."
                </p>
              </blockquote>
            </figure>
          </div>
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow">
            <figure className="mx-auto max-w-screen-md">
              <svg
                className="mx-auto mb-3 h-8 text-cyan-800"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-xl font-medium text-gray-900">
                  "Amazed by the amount of data available and the ease of access. It's an awesome
                  resource."
                </p>
              </blockquote>
            </figure>
          </div>
        </section>
      </div>
    </section>
  )
}
