const { timeStamp } = require("console");
const { Schema, model, SchemaType } = require("mongoose");
const dayjs =require('dayjs')

const reactionSchema = require('./Reaction')
// making a schema
const thoughtSchema = new Schema(
  {
    // thoughtText,CreatedAt and username are all properties of thoughtSchema
    thoughtText: {
      type: String,
      required: true,
      min_lenght: 1,
      max_lenght: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timeStamp) => {
          return dayjs(timeStamp).format("{YYYY} MM-DDTHH:mm:ss SSS [Z] A");
        },
      },
    username: {
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    reaction:[reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },

  }
);
// compling thoughSchema into a model
const Thoughts = model("Thoughts", thoughtSchema);

module.exports = Thoughts;
