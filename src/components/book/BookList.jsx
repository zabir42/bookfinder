import React from "react";
import bookImg from "../../assets/book.png";
import star from "../../assets/star.svg";
import BookAction from "./BookAction";

export default function BookList({ books, onFav }) {
  return (
    <>
      {books.map((book) => (
        <div class="space-y-3" key={book.id}>
          <div class="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
            <img class="max-w-[144px]" src={bookImg} alt="book name" />
          </div>
          <div class="space-y-3">
            <h4 class="text-lg font-bold lg:text-xl">{book.bookName}</h4>
            <p class="text-xs lg:text-sm">
              By: <span>{book.writter}</span>
            </p>
            <p class="text-xs lg:text-sm">
              Year: <span>{book.year}</span>
            </p>

            <div class="flex items-center justify-between">
              <h4 class="text-lg font-bold lg:text-xl">{book.price}</h4>

              <div class="flex items-center space-x-1">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <span class="text-xs lg:text-sm">{book.review}</span>
              </div>
            </div>

            <BookAction onFav={onFav} book={book} />
          </div>
        </div>
      ))}
    </>
  );
}
