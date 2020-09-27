/* eslint-disable quotes */
export default class RandomizeTestimonials {
    constructor() {
    }
    static getRandom() {
        const randomNumber = Math.floor(Math.random() * this.testimonials.length);
        return this.testimonials[randomNumber];
    }
}
RandomizeTestimonials.testimonials = [
    {
        mainTestimonial: `“What a difference it made. My legs feel so much better! Just to be able to play with my grandchildren and walk again is wonderful. I feel more energetic and feel better about myself. It’s miraculous. It was an answer to a prayer.”`,
        patientSignature: `— AGGIE M., happy patient`,
    },
    {
        mainTestimonial: `“When I played tennis, I was totally embarrassed to show my legs. Now I’m thrilled to death! I’m wearing skirts again and showing off my legs!”`,
        patientSignature: `— KAREN H., happy patient`,
    },
    {
        mainTestimonial: `“I can wear cute sundresses and shorts this summer!”`,
        patientSignature: `— GINA C., happy patient`,
    },
    {
        mainTestimonial: `“I’ve been dealing with painful varicose veins and aching legs for more than 10 years. What a difference the treatment made! My legs feel so much better, and I have more energy to play with my grandchildren!”`,
        patientSignature: `— AGGIE M., happy patient`,
    },
    {
        mainTestimonial: `“My legs really ached and were swollen. I am extremely impressed with the care I received and, most of all, with the results.”`,
        patientSignature: `— ROBERT P., happy patient`,
    },
    {
        mainTestimonial: `“I can tell you from personal experience that the results made a huge difference in my life. I only wish I had not waited so long.”`,
        patientSignature: `— WENDY P., happy patient`,
    },
    {
        mainTestimonial: `“I was able to dance the entire night at my daughter’s wedding!”`,
        patientSignature: `— BARBARA L., happy patient`,
    },
    {
        mainTestimonial: `“I’m a nurse, so I appreciate the thoroughness of the care from my first phone call through the first procedure. Carolina Vein Specialists has made a huge difference in my life.”`,
        patientSignature: `— SHERYL M., happy patient`,
    },
    {
        mainTestimonial: `“This was a very pleasant experience with wonderful outcomes. The staff is absolutely wonderful and makes sure you are comfortable 100% of the time.”`,
        patientSignature: `— KIMBERLY T., happy patient`,
    },
    {
        mainTestimonial: `“Every one of the staff members was great and treated me with care. All of my appointments were on time, and I didn’t have to wait long to be seen by the doctor. I felt very little discomfort during my procedures, and I’m happy with the results. I’m so glad I did it and will be back when it’s time to treat the other leg.”`,
        patientSignature: `— KIRA W., happy patient`,
    },
    {
        mainTestimonial: `“At my all-women exercise class, I had heard many good reports about Carolina Vein. I had a very pleasant experience and am very happy with my results.”`,
        patientSignature: `— JENNIFER J., happy patient`,
    },
    {
        mainTestimonial: `“The goal was accomplished – pain is gone and the visible aesthetics are on track for healing nicely! All staff are helpful and courteous.”`,
        patientSignature: `— LOREN G., happy patient`,
    },
];
