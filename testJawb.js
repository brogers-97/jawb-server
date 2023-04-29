const db = require('./models')

const jawbCrud = async () => {
    try{

        const newJawb = await db.Jawb.create({
            name: 'Brian Rogers',
            phone: '856856856',
            email: 'b@gmail.com',
            gitHub: 'gitHub.97',
            linkedIn: 'linkedIn97',
            skills: ['javascript', 'HTML', 'CSS'],
            job: {
                companyName: 'Snowflake',
                jobDescription: 'blah blah blah',
                jobId: 856985,
                jobSummary: 'blah blah blah',
                jobPhone: '856856856',
                jobEmail: 'snow@gmail.com',
                jobPay: 85000
            },
            resume: {
                summary: 'blah blah blah',
                projectTitle: ['caves', 'eo', 'jawb'],
                projectURL: ['url:jfkdsl', 'url;jfdkl', 'url:werbdsoi'],
                coTitle: ['AMP', 'Legacy'],
                coDescription: ['good good good', 'good good good'],
                coDates: ['then til then', 'then til then'],
                coExperience: ['this and that', 'this and that'],
                coSkills: ['good stuff', 'great stuff']
            }
        })
        console.log(newJawb)

    }catch(err){
        console.log(err)
    }
}

jawbCrud()