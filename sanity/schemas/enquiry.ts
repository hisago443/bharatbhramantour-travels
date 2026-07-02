import { defineField, defineType } from "sanity";

export default defineType({
  name: "enquiry",
  title: "Enquiry",
  type: "document",
  readOnly: true,
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "travelMonth", title: "Travel Month", type: "string" }),
    defineField({ name: "groupSize", title: "Group Size", type: "number" }),
    defineField({ name: "tripStyle", title: "Trip Style", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text" }),
    defineField({ name: "sourcePage", title: "Source Page", type: "string" }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "createdAt" },
  },
});
