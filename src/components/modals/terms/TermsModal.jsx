import { faUserEdit } from "@fortawesome/free-solid-svg-icons"
import Modal from "../Modal"
import TermsText from "./TermsText"

export default function Terms() {
  return (
    <Modal title="Terms" icon={faUserEdit}>
      <TermsText />
    </Modal>
  )
}
