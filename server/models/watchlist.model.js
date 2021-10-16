import mongoose from 'mongoose'

const watchlistSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  movieId: {
    type: Number,
    required: true
  },
  imgPath: {
    type: String,
    required: true
  },
  releaseYear: {
    type: String,
    required: true
  },
  voteAvg: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
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

export default mongoose.model('Watchlist', watchlistSchema)
