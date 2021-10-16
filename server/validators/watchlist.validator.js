import Joi from 'joi'

const watchlistValidator = {
  watchlist: Joi.object({
    title: Joi.string().required(),
    movieId: Joi.number().required(),
    imgPath: Joi.string().required(),
    releaseYear: Joi.string().required(),
    voteAvg: Joi.number().required()
  })
}

export default watchlistValidator
