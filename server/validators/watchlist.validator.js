import Joi from 'joi'

const watchlistValidator = {
  watchlist: Joi.object({
    title: Joi.string().required(),
    movieId: Joi.string().required(),
    imgPath: Joi.string().required(),
    releaseYear: Joi.number(),
    voteAvg: Joi.number()
  })
}

export default watchlistValidator
