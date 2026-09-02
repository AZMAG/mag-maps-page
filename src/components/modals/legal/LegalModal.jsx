import { faBalanceScale } from "@fortawesome/free-solid-svg-icons"
import Modal from "../Modal"
import LegalText from "./LegalText"

export default function LegalDisclaimer() {
  return (
    <Modal name="legal" title="Legal Disclaimer" icon={faBalanceScale}>
      <LegalText />
    </Modal>
  )
}
