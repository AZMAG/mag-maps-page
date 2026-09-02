import { makeAutoObservable } from "mobx";

export function createDataStore() {
    return makeAutoObservable({
        /*
         * Modals
         */

        legalModalShow: false,
        setLegalModalShow(val) {
            this.legalModalShow = val;
        },

        privacyModalShow: false,
        setPrivacyModalShow(val) {
            this.privacyModalShow = val;
        },

        termsModalShow: false,
        setTermsModalShow(val) {
            this.termsModalShow = val;
        },

        /*
         * Contact Us
         */
        contactUsModalShow: false,
        setContactUsModalShow(val) {
            this.contactUsModalShow = val;
        },

        selectedContactId: null,
        setSelectedContact(id) {
            this.selectedContactId = id;
        },

        contactUsSuccessModalShow: false,
        setContactUsSuccessModalShow(val) {
            this.contactUsSuccessModalShow = val;
        },
    });
}
