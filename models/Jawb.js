const mongoose = require('mongoose')

const JawbSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    gitHub: String,
    linkedIn: String,
    skills: [ String ],

    job: {
        companyName: String,
        jobDescription: String,
        jobId: Number,
        jobSummary: String,
        jobPhone: String,
        jobEmail: String,
        jobPay: Number},

    resume: {
        summary: String,
        projectTitle: [String],
        projectURL: [String],
        coTitle: [String],
        coDescription: [String],
        coDates: [String],
        coExperience: [String],
        coSkills: [String] }
}, { timestamps: true })

module.exports = mongoose.model('Jawb', JawbSchema)