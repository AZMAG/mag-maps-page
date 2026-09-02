/** @type {DocConfig} */
const docConfig = {
    app: {
        version: "v6.6.2",
        releaseDate: "2026-06-16",
        created: "2014-10-21",
        copyright: "2026",
    },
    analytics: {
        measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID,
    },
    links: {
        magHome: "https://www.azmag.gov/",
        magMaps: "https://maps.azmag.gov/",
        RADigestLink:
            "https://public.govdelivery.com/accounts/AZMAG/subscriber/new?topic_id=AZMAG_292",
        RADigestArchived: "https://azmag.gov/Newsroom/RADigest",
        InfoGraphicLink:
            "https://azmag.gov/About-Us/Divisions/Regional-Analytics-Division/Infographics-Maps-and-Reports",
    },
    contacts: [
        {
            id: "jhoward",
            name: "Jason Howard",
            title: "GIS Manager",
            email: "https://www.azmag.gov/Contact/4788",
        },
        {
            id: "maginfo",
            name: "MAG Information",
            title: "mag@azmag.gov",
        },
        {
            id: "magnoreply",
            name: "MAG no-reply",
            title: "no-reply@azmag.gov",
        },
    ],
};

export const getPrimaryContact = () =>
    docConfig.contacts.find((c) => c.primary) ?? docConfig.contacts[0];

export const getContactById = (id) =>
    docConfig.contacts.find((c) => c.id === id);

export default docConfig;
