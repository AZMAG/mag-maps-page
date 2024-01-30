import TrainingButton from "../../buttons/trainingButton"

export default function TrainingSignUp() {
  return (
    <section tag="training-signup" className="bg-gradient-to-br from-cyan-800 to-slate-200">
      <div className="my-12 flex justify-center container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold leading-none tracking-tight text-slate-800">
            Register Now!
          </h1>
          <div className="flex flex-row justify-center my-6">
            <div className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-slate-100">
              Get started
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </div>
            <TrainingButton />
          </div>
        </div>
      </div>
    </section>
  )
}
