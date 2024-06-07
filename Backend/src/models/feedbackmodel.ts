import { Schema, Document, model } from 'mongoose';

interface IFeedback extends Document {
  text: string;
  rating: number;
}

const feedBack = new Schema<IFeedback>(
  {
    text: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
  },
  { timestamps: true }
);

const Feedback = model<IFeedback>('FeedBack', feedBack);
export default Feedback;
