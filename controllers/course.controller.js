const { Course } = require('../models/course.schema');

const getCourses = async (req, res) => {
    try {

        res.send('Hello WOrld!!');
       return; 
        const filters = req.query;
        const filterQuery = {};

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

        // const courses = await Course.find(filterQuery).lean();

        res.send('courses').status(200);
    } catch (error) {
        res.status(400);
    }
};

module.exports = {
    getCourses
}