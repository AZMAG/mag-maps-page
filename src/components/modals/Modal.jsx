import { observer } from "mobx-react-lite"
import { useDataStore } from "../../stores/DataContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// `name` maps to the store's per-modal flag, e.g. "legal" -> legalModalShow / setLegalModalShow
export default observer(function Modal({ name, title, icon, children }) {
    const store = useDataStore()

    const showModal = store[`${name}ModalShow`]
    const setShowModal = (val) =>
        store[`set${name.charAt(0).toUpperCase()}${name.slice(1)}ModalShow`](val)

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`${title}-modal-title`}>
                        <div className="relative mx-auto my-6 w-auto max-w-3xl">
                            <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                                <div className="flex items-center gap-x-2 rounded-t border-b border-solid border-cyan-900 bg-cyan-800 p-4">
                                    <FontAwesomeIcon className="text-slate-100" size="2x" icon={icon} />
                                    <h3 id={`${title}-modal-title`} className="text-3xl font-semibold text-slate-100">
                                        {title}
                                    </h3>
                                    <button
                                        className="ml-auto inline-flex items-center rounded-lg p-1.5 text-sm text-slate-400 hover:bg-slate-200 hover:text-slate-800 cursor-pointer"
                                        type="button"
                                        aria-label={`Close ${title}`}
                                        onClick={() => setShowModal(false)}>
                                        <svg
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="relative max-h-[75vh] flex-auto overflow-y-scroll p-6">
                                    <div className="container mx-auto text-left text-sm">{children}</div>
                                </div>
                                <div className="flex flex-col rounded-b border-t border-solid border-slate-400 p-3">
                                    <button
                                        className="flex cursor-pointer justify-end px-6 py-2 text-sm font-bold uppercase text-slate-800 outline-none hover:text-cyan-800 hover:underline focus:outline-none"
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
    );
})