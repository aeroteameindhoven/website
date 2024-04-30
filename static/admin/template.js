// CMS.registerPreviewStyle("preview.css");

CMS.registerPreviewTemplate("teams", ({ widgetFor, widgetsFor, getAsset }) => {
  const members_widgets = widgetsFor("members").toJS();

  return h(
    "div",
    {},
    widgetFor("year"),
    widgetFor("description"),
    h(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 8em minmax(30ch, 1fr))",
          gridTemplateRows: "10em",
          gap: "1em"
        }
      },
      Array.isArray(members_widgets) &&
        widgetsFor("members").map((member, index) => {
          return [
            h("img", {
              key: index,
              style: { height: "100%", width: "100%", objectFit: "contain" },
              src: getAsset(member.getIn(["data", "photo"])).toString() // TODO: Placeholder image
            }),
            h(
              "div",
              { style: { marginBlock: "auto" }, key: index },
              `${member.getIn(["data", "first_name"]) ?? ""} ${member.getIn(["data", "last_name"]) ?? ""}`,
              h("br"),
              member.getIn(["data", "function"]) ?? "",
              h("br"),
              member.getIn(["data", "study"]) ?? "",
              h("br"),
              (member.getIn(["data", "subteams"]) ?? []).join(" + "),
              h("br"),
              member.getIn(["data", "email"]) ?? "",
              h("br"),
              member.getIn(["data", "linkedin"]) ?? ""
            )
          ];
        })
    )
  );
});
