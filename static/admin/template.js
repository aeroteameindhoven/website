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
      {},
      Array.isArray(members_widgets) &&
        widgetsFor("members").map((member, index) => {
          return h(
            "div",
            { key: index, style: { display: "flex", flexDirection: "row", marginBlock: "1em" } },
            h("img", {
              style: { maxHeight: "10em", marginInlineEnd: "1em", backgroundColor: "#808080", aspectRatio: "2/3" },
              src: getAsset(member.getIn(["data", "photo"])).toString() // TODO: Placeholder image
            }),
            h(
              "div",
              { style: { marginBlock: "auto" } },
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
          );
        })
    )
  );
});
