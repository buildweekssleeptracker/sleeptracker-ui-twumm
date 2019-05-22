const teamMembersList = [
  {
    "name": "Martin Twum Mensah",
    "role": "User Interface Developer",
    "description": "A product manager/web developer with experience in building web applications using Python, JavaScript(Node.js, Express) and HTML/CSS; with an in-depth experience of managing cross-functional teams over 4 years on various projects.",
    "profileImage": './img/team/martin.JPG',
    "github": "https://github.com/twumm",
    "twitter": "https://twitter.com/twumm"
},
  {
    "name": "Elise Spain",
    "role": "User Interface Developer",
    "description": "Here",
    "profileImage": './img/team/elise.JPG',
    "github": "https://github.com/espain16",
    "twitter": ""
  },
  {
    "name": "Cesar Aponte",
    "role": "User Interface Developer",
    "description": "Here",
    "profileImage": './img/team/cesar.JPG',
    "github": "https://github.com/espain16",
    "twitter": ""
  },
  {
    "name": "Alfonso Garcia",
    "role": "Frontend Architect",
    "description": "Here",
    "profileImage": './img/team/alfonso.JPG',
    "github": "https://github.com/alfonsog714",
    "twitter": ""
  },
  {
    "name": "Duc Vu",
    "role": "Backend Engineer",
    "description": "Here",
    "profileImage": './img/team/duc.JPG',
    "github": "https://github.com/vud531",
    "twitter": ""
  },
  {
    "name": "Brandon Desselle",
    "role": "Backend Engineer",
    "description": "Here",
    "profileImage": './img/team/brandon.JPG',
    "github": "",
    "twitter": ""
  }
]

const aboutUsSection = document.querySelector('.about-us');

class TeamMember {
  constructor(member) {
    this.member = member;
    // Create various element for team member sections
    this.memberDiv = document.createElement('div');
    this.profileImage = document.createElement('img');
    this.memberContent = document.createElement('div');
    this.memberName = document.createElement('h6');
    this.memberDescription = document.createElement('p');
    this.memberContact = document.createElement('div');
    this.socialLink = document.createElement('a');
    this.socialLogo = document.createElement('img');

    this.memberDiv.classList.add('member');
    // Call methods to create divs
    this.constructMember();
  }

  
}

const teamMembers = teamMembersList.map(member => new TeamMember(member));
// teamMembers.forEach(memberElement => aboutUsSection.appendChild(memberElement));