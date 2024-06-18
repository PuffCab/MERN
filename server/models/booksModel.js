import mongoose from "mongoose";

const { Schema } = mongoose;

// const BookSchema = new Schema({
//   title: { type: String, required: true },
//   isbn: { type: String, required: true },
//   pageCount: { type: Number, required: true },
//   date: Date,
//   image: { type: String, required: true },
//   longDescription: { type: String, required: true },
//   status: { type: String, required: true },
//   authors: { type: [String], required: true },
//   categories: { type: [String], required: true },
//   detail: { type: mongoose.Schema.ObjectId, ref: "booksdetail" },
// });

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    authors: { type: [String], required: true },
    detail: { type: mongoose.Schema.ObjectId, ref: "booksdetail" },
  },
  { timestamps: true }
);

const BookModel = mongoose.model("book", BookSchema);

export default BookModel;
