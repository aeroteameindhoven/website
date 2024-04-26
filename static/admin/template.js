CMS.registerPreviewTemplate("teams", ({ entry, widgetFor, widgetsFor }) => {
  return h("div", {}, [
    widgetFor("year"),
    widgetFor("description"),
    widgetsFor("members").map((member, index) => {
      return h("div", { key: index }, [
        h("pre", {}, `${member.getIn(["data", "first_name"])} ${member.getIn(["data", "last_name"])}`),
        h("pre", {}, member.getIn(["data", "function"])),
        h("pre", {}, member.getIn(["data", "subteams"]).join(", ")),
        h("pre", {}, member.getIn(["data", "email"])),
        member.getIn(["widgets", "photo"]),
        h("pre", {}, JSON.stringify(member))
      ]);
    }),
    h("pre", {}, JSON.stringify(entry.getIn(["data", "members"]), undefined, 4))
  ]);
});
