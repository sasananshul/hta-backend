const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    universityName: {
        type: String,
        required: true
    },
    germanyRanking: {
        type: Number,
        required: true
    },
    courseType: {
        type: String,
        required: true
    },
    teachingLanguage: {
        type: String,
        required: true
    },
    beginningSemester: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true,
    },
    tuitionFee: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Course = mongoose.model('courses', courseSchema);

module.exports = { Course };