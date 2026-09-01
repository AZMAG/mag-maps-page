
import { useDataStore } from "../../stores/DataContext"

export default function ContactUsButton() {
const store = useDataStore()
    return (
        <button
            title="email contact"
            className="bg-sky-400 hover:bg-sky-500 inline-flex cursor-pointer items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
            onClick={() => store.setContactUsModalShow(true)}>
            Email Contact
        </button>
    )
}
