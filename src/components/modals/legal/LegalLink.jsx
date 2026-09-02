import { useDataStore } from "../../../stores/DataContext"

export default function LegalLink() {
    const store = useDataStore()

    return (
        <a type="button" className="cursor-pointer text-xs text-cyan-800 hover:text-cyan-800/75 hover:underline" onClick={() => store.setLegalModalShow(true)} rel="noreferrer">
            Legal Disclaimer
        </a>
    )
}



