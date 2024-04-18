import { Account } from "./Account.js"




export class Blog {
  constructor(data) {
    this.id = data.id
    // this._id = data._id
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.tags = data.tags

    this.published = new Date(data.published)
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)

    this.creator = new Account(data.creator)
    this.creatorId = data.creatorId
  }
}


/**
   this._id = data._id
    this.subs = data.subs
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
    this.resume = data.resume
    this.class = data.class
    this.graduated = data.graduated
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.__v = data.__v
    this.id = data.id 
  
  
 
 {
    "_id": "65e166478752257c6ea5ce5f",
    "title": "My time with codeworks...",
    "body": "I think its a good time to write a blog in this api. With my time in codeworks, I think things have been going pretty well. I was introduced to codeworks by my high school teacher Mr. Erikson, a computer science teacher in Meridian Technical Charter High School. \n\nBefore I have went to codeworks, he asked me what will my future be. To be honest, I haven't really decided where to go or where to start my career since I took a year break before deciding to go to college or somewhat similar. But I wanted to hear his advice or opinion so he asked me \"would you rather go to CWI for two years and get a part time internship or go to Boise Code Works for 13 weeks.\" Both were very expensive and I've already made my final decision...I applied to Boise Code Works.\n\nGoing to CWI or any other big college wasn't going to be my thing. I have severe ADHD, I have a hard time paying attention to multiple classes and deal with so many homework assignments in my back that sometimes I would forget about them and get distracted. Another was having a hard time making new friends or talk to people in general whenever its such a huge group in school. So having a small place and small amount of people was perfect for me.\n\nCodeworks was an amazing option, having to actually work on something that I love to do and that was to program. I could spend hours on coding and not be bored at all. The only class that I'd ever focus on in highschool was computer science. Having to only be in one class with new things to learn about coding in codeworks was the perfect idea for me.\n\nIf anyone was reading this, thank you for the time to read this. If it was an instructor or a friend, I know that I enjoy every moment with you no matter what and I try to be open to everyone as much as possible and make people laugh. If you are new to codeworks, good luck... Nah Im just kidding, this place is right for you and the instructors are amazing. After being here for almost half way to the course, I'd say its been amazing expect life has been a little crap but I still keep going no matter what.\n\nAgain, thank you for reading this and have a wonderful day!\n\n- Joaquin Chavez",
    "imgUrl": "https://plus.unsplash.com/premium_photo-1674086524511-567ad049a61a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "tags": [],
    "published": true,
    "creatorId": "65cbfb73b554c64939b75c31",
    "createdAt": "2024-03-01T05:23:19.838Z",
    "updatedAt": "2024-03-01T05:23:19.838Z",
    "__v": 0,
    "creator": {
        "_id": "65cbfb73b554c64939b75c31",
        "subs": [
            "auth0|65cbfb7252c91b9419fb1450"
        ],
        "email": "jchav5601@gmail.com",
        "name": "Joaquin",
        "picture": "https://i.pinimg.com/originals/a3/d5/5a/a3d55a828d612f49efee4e23f3b14110.jpg",
        "bio": "Just student at codeworks doing cool code stuff",
        "coverImg": "https://codeworks.blob.core.windows.net/public/assets/ads/SquareAdTaskMaster.png",
        "github": "https://github.com",
        "linkedin": "https://linkedin.com",
        "resume": "https://github.com",
        "class": "Winter 24",
        "graduated": true,
        "createdAt": "2024-02-13T23:30:02.002Z",
        "updatedAt": "2024-03-04T18:01:56.646Z",
        "__v": 0,
        "id": "65cbfb73b554c64939b75c31"
    },
    "id": "65e166478752257c6ea5ce5f"
} 
 */