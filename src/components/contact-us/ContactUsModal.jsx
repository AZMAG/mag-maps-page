import { observer } from "mobx-react-lite"
import { useDataStore } from "../../stores/DataContext"
import ContactUsForm from "./contactUsForm"

function ContactUsModal() {
    const store = useDataStore()

    if (!store.contactUsModalShow) return null;
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => store.setContactUsModalShow(false)} // close when clicking backdrop
        >
            <div
                className="relative  w-full max-w-xl rounded-lg bg-white p-6 shadow-lg"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
                {/* Close button */}
                <button
                    className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
                    onClick={() => store.setContactUsModalShow(false)}
                >
                    ✕
                </button>

                {/* Modal content */}
                <ContactUsForm onSuccess={() => { store.setContactUsModalShow(false); store.setContactUsSuccessModalShow(true); }} />
            </div>
        </div>
    );
}

export default observer(ContactUsModal)