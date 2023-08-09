import React from "react"

export default function LegalText() {
  let noReplyURL = "mailto:no-reply@azmag.gov"
  return (
    <div className="text-slate-800">
      <p className="mb-3">
        The Maricopa Association of Governments (MAG) provides the data within these pages as a
        public resource of general information for use "as is". The Maricopa Association of
        Governments GIS (Geographic Information System) departments provides this information with
        the understanding that it is not guaranteed to be accurate, correct or complete and any
        conclusions drawn from such information are the sole responsibility of the user. Further,
        the Maricopa Association of Governments GIS departments makes no warranty, representation or
        guaranty as to the content, sequence, accuracy, timeliness or completeness of any of the
        spatial or database information provided herein. While every effort has been made to ensure
        the content, sequence, accuracy, timeliness or completeness of materials presented within
        these pages, the Maricopa Association of Governments GIS Departments assumes no
        responsibility for errors or omissions, and explicitly disclaims any representations and
        warranties, including, without limitation, the implied warranties of merchantability and
        fitness for a particular purpose. The Maricopa Association of Governments GIS Departments
        shall assume no liability for:
      </p>

      <ol className="mb-3 list-outside list-disc space-y-1 pl-6">
        <li>
          Any errors, omissions, or inaccuracies in the information provided, regardless of how
          caused; or
        </li>
        <li>
          Any decision made or action taken or not taken by viewer in reliance upon any information
          or data furnished hereunder.
        </li>
      </ol>

      <p className="mb-3">
        Availability of the Maricopa Association of Governments Map Server is not guaranteed.
        Applications, servers, and network connections may be unavailable at any time for
        maintenance or unscheduled outages. Outages may be of long duration. Users are cautioned to
        create dependencies on these services for critical needs.
      </p>

      <p className="mb-3">
        THE FOREGOING WARRANTY IS EXCLUSIVE AND IN LIEU OF ALL OTHER WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR PARTICULAR PURPOSE AND/OR ANY OTHER TYPE WHETHER EXPRESSED OR IMPLIED. In no
        event shall The Maricopa Association of Governments become liable to users of these data, or
        any other party, for any loss or direct, indirect, special, incidental or consequential
        damages, including, but not limited to, time, money or goodwill, arising from the use or
        modification of the data.
      </p>

      <p className="mb-3">
        To assist the Maricopa Association of Governments in the maintenance and/or correction of
        the data, users should provide the Maricopa Association of Governments GIS Departments with
        information concerning errors or discrepancies found in using the data. Please use the
        e-mail contact address at the bottom of the affected web page.
      </p>

      <p className="mb-3">
        Please acknowledge the Maricopa Association of Governments GIS as the source when Map Server
        data is used in the preparation of reports, papers, publications, maps, or other products.
      </p>

      <address className="flex flex-row gap-2">
        To provide comments or report problems please contact:
        <a
          href={noReplyURL}
          className="font-medium text-blue-600 hover:underline"
          title="email link"
          target="_blank"
          rel="noreferrer"
          aria-label="email link"
          aria-describedby="contact email">
          no-reply@azmag.gov
        </a>
      </address>
    </div>
  )
}
