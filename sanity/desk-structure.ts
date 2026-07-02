import type { StructureBuilder } from "sanity/structure";

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Commercial")
        .child(
          S.list()
            .title("Commercial")
            .items([
              S.documentTypeListItem("package").title("Packages"),
              S.documentTypeListItem("destination").title("Destinations"),
              S.documentTypeListItem("tripType").title("Trip Types"),
            ])
        ),
      S.listItem()
        .title("Content")
        .child(
          S.list()
            .title("Content")
            .items([
              S.documentTypeListItem("guide").title("Guides"),
              S.documentTypeListItem("testimonial").title("Testimonials"),
              S.documentTypeListItem("faqItem").title("FAQs"),
            ])
        ),
      S.listItem()
        .title("Enquiries")
        .child(S.documentTypeList("enquiry").title("Enquiries")),
      S.divider(),
      S.listItem()
        .title("Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
    ]);
