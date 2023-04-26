import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserEdit } from "@fortawesome/free-solid-svg-icons"
import TermsText from "./TermsText"

export default function Terms() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        data-modal-target="partnerModal"
        data-modal-toggle="partnerModal"
        className="text-xs text-cyan-800 hover:text-cyan-800/75 hover:underline"
        type="button"
        onClick={setShowModal}>
        Terms
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center gap-x-2 rounded-t border-b border-solid border-cyan-900 bg-cyan-800 p-4">
                  <FontAwesomeIcon className="text-slate-100" size="2x" icon={faUserEdit} />
                  <h3 className="text-3xl font-semibold text-slate-100">Terms</h3>
                  <button
                    className="ml-auto inline-flex items-center rounded-lg p-1.5 text-sm text-slate-400 hover:bg-slate-200 hover:text-slate-800"
                    onClick={() => setShowModal(false)}>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="relative max-h-[75vh] flex-auto overflow-y-scroll p-6">
                  <div className="container mx-auto text-left text-sm">
                    <TermsText />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex flex-col rounded-b border-t border-solid border-slate-400 p-3">
                  <button
                    className="flex justify-end px-6 py-2 text-sm font-bold uppercase text-slate-800 outline-none hover:text-cyan-800 hover:underline"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  )
}
