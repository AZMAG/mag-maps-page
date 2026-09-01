

export default function ContactUsSuccess() {

    return (
        // <!-- Main modal -->
        <div id="successModal" className="fixed inset-0 z-50 flex justify-center items-center w-full">
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 text-center bg-green-500 rounded-lg shadow sm:p-5">
                    <div className="w-10 h-10 rounded-full bg-green-100 p-2 flex items-center justify-center mx-auto mb-2">
                        <svg aria-hidden="true" className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Success</span>
                    </div>
                    <p className="text-lg font-semibold text-white">Your message was sent successfully!</p>
                </div>
            </div>
        </div>


    )
}