import React from "react";
import BookList from "./BookList";

export default function BookGrid({ books, onFav }) {
  return (
    <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <BookList books={books} onFav={onFav} />
    </div>
  );
}
