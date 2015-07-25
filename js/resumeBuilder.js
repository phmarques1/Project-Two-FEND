var bio = {
	"name": "Pedro Henrique Marques",
	"role": "Frontend Developer",
	"contacts": {
		"mobile": "+55 61 99885143",
		"email": "marques.ph@gmail.com",
		"twitter": "@marques_ph",
		"github": "phmarques1",
		"location": "Brasília, Brazil"
	},
	"picture": "images/profile.jpg",
	"welcomeMessage": "I'm a self-taught designer and frontend developer :)",
	"skills": ["awesomeness", "programming", "design"]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var profilePic = HTMLbioPic.replace("%data%", bio.picture);
	var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var mySkills = HTMLskills.replace("%data%", bio.skills);

	$("#header").append(profilePic);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	$("#header").append(welcomeMsg);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);
	$("#header").append(HTMLskillsStart);
	
	for (var skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}

};

bio.display();

var work = {
	"jobs": [
		{
			"position": "Digital Marketing Coordinator",
			"employer": "Correio Braziliense",
			"workDates": "May, 2014 - Present",
			"location": "Brasília, Brazil",
			"description": "Product management (drive product vision; spec features;" + 
			" work closely with engineers, designers, business analysts and salespeople;" + 
			" analyze product performance; decision-making); Responsible for a new, web-based" + 
			" classifieds product that is completely integrated to the newspaper's traditional" + 
			" classifieds; Identify and explore new markets and opportunities in the media sector" + 
			" (technology & innovation); Social media strategy & support."
		},
		{
			"position": "Marketing Analyst",
			"employer": "Correio Braziliense",
			"workDates": "January, 2013 - May, 2014",
			"location": "Brasília, Brazil",
			"description": "Create and prospect new business opportunities, based on innovation and" + 
			" technology, for Diários Associados; Monitor and analyse the ad business performance in" + 
			" four major Brazilian websites (correioweb.com.br; correiobraziliense.com.br; lugarcerto.com.br;" + 
			" vrum.com.br); Monitor and analyse global tech trends; Suggest and recommend new strategic" + 
			" approaches to increase online revenue and user satisfaction; Improve Diários Associados' digital" + 
			" presence (social media, websites and mobile platforms)."
		},
		{
			"position": "Strategic Planning Analyst",
			"employer": "Correio Braziliense",
			"workDates": "June, 2012 - January, 2013",
			"location": "Brasília, Brazil",
			"description": "Create and prospect new business opportunities, based on innovation and technology," + 
			" for Diários Associados; Social media analysis and strategic formulations; Digital-Out-Of-Home (DOOH)" + 
			" market analysis in Brazil; Member of the team that developed the 2013 Strategic Plan for Correio Braziliense" + 
			" (focus on Porter's Five Forces, BCG, BSC and SWOT)."
		},
		{
			"position": "CEO",
			"employer": "Spot",
			"workDates": "May, 2012 - May, 2014",
			"location": "Lisbon, Portugal",
			"description": "Spot, formerly Pictastik, started as a simple idea: I wanted to see what other people saw on a" + 
			" real-time basis, wherever they were at. By making this happen, I would have eyes in the four corners of the world." + 
			" Additionally, I would be able to discover amazing places through the eyes of people who actually were in those places" + 
			" in the exact moment the photos were shared with the world. Since I am not a developer myself and wanted to have the project" + 
			" started, I decided to outsource the development (at least in the beginning). It turns out I had more problems with the" + 
			" oursourcing than I had expected. It never stopped me from keep going though. I learned Photoshop, so I could actually make" + 
			" the app look exactly like I had imagined it (for a 1.0 version, of course!) and kept working with the outsourcing company to" + 
			" have the product partially functional. In the meantime, I met amazing people from whom I learned a lot. I have also met my 2" + 
			" brilliant technical co-founders, who have always been committed to making Pictastik (Spot) a better product day after day."
		},
		{
			"position": "Advisor for International Affairs",
			"employer": "ANTAQ",
			"workDates": "June, 2009 - May, 2012",
			"location": "Brasília, Brazil",
			"description": "International Agreement analysis (maritime sector); Responsible for a international mission to Copenhagen, Denmark," + 
			" for the Brazilian government that was composed of 25 people (mostly politicians, government authorities and business people from the" + 
			" maritime sector in Brazil). Participate in official government meetings -- in Brazil and abroad -- when requested by the Board of Directors."
		}
	]
};

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", 
			work.jobs[job].employer); 
		var formattedTitle = HTMLworkTitle.replace("%data%", 
			work.jobs[job].position);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", 
			work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDate = HTMLworkDates.replace("%data%", 
			work.jobs[job].workDates);
		$(".work-entry:last").append(formattedDate);

		var formattedDescription = HTMLworkDescription.replace("%data%", 
			work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

work.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function locationizer(work) {
	var locationArray = [];

	for (job in work.jobs) {
		var newLocation = work.jobs[job].workCity;
		locationArray.push(newLocation);
	}

	return locationArray;
}

console.log(locationizer(work));

var projects = {
	"projects": [
		{
			"name": "Everchat",
			"dates": "May, 2014 -  October, 2014",
			"description": "Everchat was a messaging and file sharing platform that aimed to simplify" + 
			" communication and collaboration within and across teams or organizations. Everchat was" + 
			" focused on making teams happier, more productive and less dependent on email for both" + 
			" internal and external communication & collaboration. It never launched (Slack came out of" + 
				" beta and had us for dinner).",
			// "url": "everchat.co [inactive]"
			"images": []
		},
		{
			"name": "Udacity's Frontend Nanodegree Project 1",
			"dates": "June, 2015 -  June, 2015",
			"description": "This was the first project for Udacity's Frontend Nanodegree. It is basically" + 
			" a very simple (and static) portfolio website that I customized a bit to make it a little bit" + 
			" more beautiful.",
			// "url": "udacity.com"
			"images": []
		}
	]
};

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].name);
		$(".project-entry:last").append(formattedTitle);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDate);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image[image]);
				$("#.project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

var education = {
	"schools": [
		{
			"name": "Fundação Getúlio Vargas - FGV",
			"location": "Brasília, Brazil",
			"major": "MBA - Marketing",
			"dates": "October, 2011 - August, 2013"
		},
		{
			"name": "Ibmec Business School",
			"location": "Brasília, Brazil",
			"major": "Business Admnistration and Management",
			"dates": "September, 2008 - October, 2009"
		},
		{
			"name": "Instituto de Educação Superior de Brasília - IESB",
			"location": "Brasília, Brazil",
			"major": "International Affairs",
			"dates": "January, 2004 - July, 2008"
		}
	],
	"onlineCourses": [
		{
			"name": "Udacity",
			"location": "San Francisco, US",
			"major": "Frontend Nanodegree",
			"dates": "May, 2015 - Present"
		},
		{
			"name": "Treehouse",
			"location": "San Francisco, US",
			"major": "Frontend Web Development Track",
			"dates": "January, 2015 - Present"
		}
	]
};

education.display = function() {
	for (var educ in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLschoolName.replace("%data%", education.schools[educ].name);
		$(".education-entry:last").append(formattedTitle);
		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[educ].dates);
		$(".education-entry:last").append(formattedDate);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[educ].major);
		$(".education-entry:last").append(formattedMajor);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[educ].location);
		$(".education-entry:last").append(formattedLocation);
	}
	for (var onlineEduc in education.onlineCourses) {
		var formattedTitle = HTMLschoolName.replace("%data%", education.onlineCourses[onlineEduc].name);
		$(".education-entry:last").append(formattedTitle);
		var formattedDate = HTMLschoolDates.replace("%data%", education.onlineCourses[onlineEduc].dates);
		$(".education-entry:last").append(formattedDate);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.onlineCourses[onlineEduc].major);
		$(".education-entry:last").append(formattedMajor);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.onlineCourses[onlineEduc].location);
		$(".education-entry:last").append(formattedLocation);
	}
};

education.display();

$("#mapDiv").append(googleMap);




