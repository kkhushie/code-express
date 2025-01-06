const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    duration: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Frontend", "Backend", "Full Stack", "Data Science", "Other"], // Add your categories here
    },
    // level: {
    //   type: String,
    //   required: true,
    //   enum: ["Beginner", "Intermediate", "Advanced"],
    // },
    // syllabus: {
    //   type: [String], // Array of strings for topics or sections
    //   required: false,
    // },
    thumbnailUrl: {
      type: String,
      required: false,
    },
    // instructorId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Faculty", // Reference the Faculty collection
    //   required: true,
    // },
    startDate: {
      type: Date,
      required: false,
    },
    endDate: {
      type: Date,
      required: false,
    },
    status: {
      type: String,
      enum: ["Upcoming", "Ongoing", "Completed"],
      default: "Upcoming",
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0, // Default to unrated
    },
    enrollmentCount: {
      type: Number,
      default: 0, // Default to zero enrollments
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Course", courseSchema);
