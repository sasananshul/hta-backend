const { Course } = require('../models/course.schema');

const getCourses = async (req, res) => {
    try {
        const filters = req.query;
        const filterQuery = {};

        console.log('Chekpoint0')
        if (filters.universityName.trim()) {
            const regex = new RegExp(filters.universityName, 'i')
            filterQuery.universityName = regex;
        }
        if (filters.courseName.trim()) {
            const regex = new RegExp(filters.courseName, 'i')
            filterQuery.courseName = regex;
        }
        if (filters.germanyRanking.trim()) {
            filterQuery.germanyRanking = filters.germanyRanking;
        }
        if (filters.courseType) {
            filterQuery.courseType = filters.courseType;
        }
        if (filters.teachingLanguage) {
            filterQuery.teachingLanguage = filters.teachingLanguage;
        }
        if (filters.beginningSemester) {
            filterQuery.beginningSemester = filters.beginningSemester;
        }
        if (filters.duration) {
            filterQuery.duration = filters.duration;
        }
        if (filters.minFee) {
            filterQuery.tuitionFee = { $gte: filters.minFee };
        }
        if (filters.maxFee) {
            filterQuery.tuitionFee = { ...filterQuery.tuitionFee, $lte: filters.maxFee };
        }

        console.log('Checkpoint 1')
        const courses = await Course.find(filterQuery).lean();
        console.log('Checkpoint 2')

        res.json(courses).status(200);
    } catch (error) {
        res.status(400);
    }
};

module.exports = {
    getCourses
}