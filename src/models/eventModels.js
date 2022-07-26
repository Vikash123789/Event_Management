const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId


const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    createdBy: { type: ObjectId, ref:"User", required: true },
    invitees:[{
        invitee:{
            type:ObjectId,
            ref : 'User',
            required : true
        },
      
    }],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("event",eventSchema)