CMS.registerPreviewTemplate("teams", ({ entry, widgetFor, widgetsFor }) => {
  return h(
    "div",
    {},
    widgetFor("year"),
    widgetFor("description"),
    h(
      "div",
      {},
      widgetsFor("members").map((member, index) => {
        return h(
          "div",
          { key: index /*,  style: { display: "flex", flexDirection: "row" } */ },
          h("pre", {}, `${member.getIn(["data", "first_name"])} ${member.getIn(["data", "last_name"])}`),
          h("pre", {}, member.getIn(["data", "function"])),
          h("pre", {}, member.getIn(["data", "subteams"]).join(", ")),
          h("pre", {}, member.getIn(["data", "email"])),
          h("div", { style: { maxHeight: "10em" } }, member.getIn(["widgets", "photo"])),
          h("pre", {}, JSON.stringify(member))
        );
      })
    ),
    h("pre", {}, JSON.stringify(entry.getIn(["data", "members"]), undefined, 4))
  );
});
