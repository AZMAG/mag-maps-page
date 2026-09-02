import { useDataStore } from "../../../stores/DataContext"

export default function PrivacyLink() {
    const store = useDataStore()

    return (
        <a type="button" className="cursor-pointer text-xs text-cyan-800 hover:text-cyan-800/75 hover:underline" onClick={() => store.setPrivacyModalShow(true)} rel="noreferrer">
            Privacy
        </a>
    )
}