import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 30,
      required: true
    },
    email: {
      type: String,
      minlength: 5,
      maxlength: 200,
      lowercase: true,
      required: true,
      unique: true
    },
    passwordHash: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

userSchema.set('toJSON', {
  transform: (_doc, obj) => {
    obj.id = obj._id.toString()
    delete obj._id
    delete obj.__v
    delete obj.passwordHash
  }
})

export default mongoose.model('User', userSchema)
