import { Schema, model } from 'mongoose'

const watchlistSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  movieId: {
    type: String,
    required: true
  },
  imgPath: {
    type: String,
    required: true
  },
  releaseYear: Number,
  voteAvg: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

watchlistSchema.set('toJSON', {
  transform: (_doc, obj) => {
    obj.id = obj._id.toString()
    delete obj._id
    delete obj.__v
  }
})

export default model('Watchlist', watchlistSchema)
