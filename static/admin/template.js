// CMS.registerPreviewStyle("preview.css");

CMS.registerPreviewTemplate("teams", ({ widgetFor, widgetsFor, getAsset }) => {
  return h(
    "div",
    {},
    widgetFor("year"),
    widgetFor("description"),
    h(
      "div",
      {},
      widgetsFor("members").map((member, index) => {
        console.dir(member.toJS());

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
            (member.getIn(["data", "subteams"]) ?? []).join(" + "),
            h("br"),
            member.getIn(["data", "email"]) ?? ""
          )
        );
      })
    )
  );
});
