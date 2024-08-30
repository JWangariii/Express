export function add(a, b) {
  console.log(a + b);
}

export var name = "joyce";

app.get("/first_template", function (req, res) {
  res.render("first_view");
});
