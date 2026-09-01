import { useState } from "react";
import { useDataStore } from "../../stores/DataContext"
import contactUsEmail from "../../services/contactUsEmail";
import MAGLogo from "../../assets/images/mag-logos/mag-logo-blue-horizontal.png"

function ContactUsForm({ onSuccess }) {
    const store = useDataStore()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const payload = {
                contactId: store.selectedContactId,
                fromName: formData.name,
                fromEmail: formData.email,
                subject: "Contact Submission from Homeless Outreach App",
                message: formData.message,
            };
            console.log("Submitting contact form with payload:", payload);
            await contactUsEmail(payload);

            // Optional: clear the form
            setFormData({ name: "", email: "", message: "" });

            // Close the modal by calling the parent callback
            if (onSuccess) onSuccess();
        } catch (err) {
            setError("Failed to send email. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (

        <section className="bg-white">
            <div className="py-4 lg:py-8 px-4 mx-auto max-w-3xl">
                <img src={MAGLogo} alt="MAG Logo" className="mx-auto mb-4 h-6" />
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-magBlue">Contact Us</h2>
                <p className="mb-2 font-light text-center text-gray-500 sm:text-xl">Have a question? Want to send feedback about a feature? Need details about this application? Let us know.</p>
                <p className="font-normal text-xs mb-1"><span className="text-red-500">*</span> Indicates a required field</p>
                <form action="#" className="space-y-8 text-left" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-900 ">Your Name<span className="text-red-500">*</span></label>
                        <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Your name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 ">Your Email<span className="text-red-500">*</span></label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="your-email@azmag.com" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="sm:col-span-2 mb-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-900 ">Your message<span className="text-red-500">*</span></label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..." required value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="py-3 px-5 text-sm font-medium text-center cursor-pointer text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 ">{isSubmitting ? "Sending..." : "Send Message"}</button>
                </form>
            </div>
        </section>
    );
}

export default ContactUsForm;