// Immutable
var book = Map({ title: "Some book" });
book.get("title");
book.set("isPublished", true);
book.toJs();

// Immer
var book = { title: "Some book" };
var newBook =
    (book,
    (draft) => {
        draft.isPublished = true;
    });
