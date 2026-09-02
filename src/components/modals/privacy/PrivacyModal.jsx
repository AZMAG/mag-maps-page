import { faUserShield } from "@fortawesome/free-solid-svg-icons"
import Modal from "../Modal"
import PrivacyText from "./PrivacyText"

export default function Privacy() {
  return (
    <Modal title="Privacy" icon={faUserShield}>
      <PrivacyText />
    </Modal>
  )
}
