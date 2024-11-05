 // Configuration du texte animé (Typed.js)
 /**var typed = new Typed(".text", {
  strings: ["Frontend Developer", "YouTuber", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});***/

// Sélectionner tous les en-têtes de compétences
const skillsHeader = document.querySelectorAll('.skills__header');

// Fonction pour basculer les compétences
function toggleSkills() {
const parent = this.parentNode;
const arrow = parent.querySelector('.skills__arrow');

// Fermer toutes les autres sections
document.querySelectorAll('.skills__content').forEach((content) => {
  if (content !== parent) {
    content.classList.add('skills__close');
    content.classList.remove('skills__open');
    // Remettre la flèche en position fermée
    const otherArrow = content.querySelector('.skills__arrow');
    if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
  }
});

// Bascule la classe 'skills__open' et 'skills__close'
parent.classList.toggle('skills__open');
parent.classList.toggle('skills__close');

// Tourner la flèche en fonction de l'état
if (parent.classList.contains('skills__open')) {
  arrow.style.transform = 'rotate(-180deg)';
} else {
  arrow.style.transform = 'rotate(0deg)';
}
}

// Ajouter des écouteurs d'événements à chaque en-tête
skillsHeader.forEach((el) => {
el.addEventListener('click', toggleSkills);
});



// Charger les barres de progression après le chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  const skillBars = document.querySelectorAll('.skills_percentage');

  skillBars.forEach(bar => {
    const width = bar.classList.contains('skills_html') ? '85%' :
                  bar.classList.contains('skills_css') ? '80%' :
                  bar.classList.contains('skills_js') ? '90%' :
                  bar.classList.contains('skills_react') ? '80%' :
                  bar.classList.contains('skills_node') ? '80%' :
                  bar.classList.contains('skills_node') ? '70%' :
                  bar.classList.contains('skills_firebase') ? '60%' :
                  bar.classList.contains('skills_python') ? '55%' :
                  bar.classList.contains('skills_android') ? '75%' :
                  bar.classList.contains('skills_ios') ? '75%' :
                  bar.classList.contains('skills_photoshop') ? '60%' : '0%';
                  bar.classList.contains('skills_Java') ? '80%' :
                  bar.classList.contains('skills_Python') ? '80%' :
                  bar.classList.contains('skills_C') ? '90%' :
                  bar.classList.contains('skills_Français') ? '99%' :
                  bar.classList.contains('skills_English') ? '70%' :
                  bar.classList.contains('skills_VisualCode') ? '95%' :
                  bar.classList.contains('skills_VisualStudio') ? '95%' :
                  bar.classList.contains('skills_Android') ? '95%' :
                  bar.classList.contains('skills_SQL') ? '95%' :
                  bar.classList.contains('skills_MSP') ? '95%' :
                  bar.classList.contains('skills_MSE') ? '95%' :
                  bar.classList.contains('skills_Project') ? '95%' :
                  bar.classList.contains('skills_Next') ? '80%' :
                  bar.classList.contains('skills_sql') ? '80%' :
                  bar.classList.contains('skills_php') ? '50%' :

    // Ajouter un délai pour rendre l'animation visible
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
});


const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    // Supprime la classe active de tous les contenus et onglets
    tabContents.forEach(content => content.classList.remove('qualification__active'));
    tabs.forEach(tab => tab.classList.remove('qualification__active'));

    // Ajouter la classe active à l'onglet et au contenu cliqués
    target.classList.add('qualification__active');
    tab.classList.add('qualification__active');
  });
});

// Sélectionner les boutons "Learn more"
const readButtons = document.querySelectorAll('.read');

// Sélectionner les modales
const modals = document.querySelectorAll('.services__modal');

// Sélectionner les boutons de fermeture
const closeButtons = document.querySelectorAll('.services__modal-close');

// Ouvrir la modale
readButtons.forEach(button => {
  button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      modal.classList.add('active');
  });
});

// Fermer la modale
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
      const modal = button.closest('.services__modal');
      modal.classList.remove('active');
  });
});

// Fermer la modale en cliquant à l'extérieur du contenu
window.addEventListener('click', (e) => {
  modals.forEach(modal => {
      if (e.target === modal) {
          modal.classList.remove('active');
      }
  });
});


/*============== PORTFOLIO SWIPER ==============*/

let currentIndex = 0;
const slides = document.querySelectorAll('.portfolio-images .portfolio__content');

function showSlide(index) {
    // Assurez-vous que l'index reste dans les limites des diapositives
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    // Masquez toutes les diapositives
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Affichez la diapositive actuelle
    slides[currentIndex].classList.add('active');
}

// Fonction de déplacement
function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Initialisez la première diapositive
showSlide(currentIndex);



/************modale  ************/

function openModal(projectId) {
  const modal = document.getElementById("portfolioModal");
  const title = document.getElementById("modalTitle");
  const description = document.getElementById("modalDescription");
  const image = document.getElementById("modalImage");
  const githubLink = document.getElementById("githubButton");
  const liveLink = document.getElementById("siteButton");

  // Vérifiez si tous les éléments existent pour éviter les erreurs
  if (modal && title && description && image && githubLink && liveLink) {
    // Modifier le contenu de la modale en fonction de l'ID du projet
    if (projectId === 1) {
      title.textContent = "Crystal mine game";
      description.textContent = "HTML, CSS, JavaScript";
      image.src = "./images/5775435.jpg";
      githubLink.href = "https://github.com/BryanDesyBitoumbouMbouity/mine-game";
      liveLink.href="#";
    } else if (projectId === 2) {
      title.textContent = "Café Hiyoto Menu";
      description.textContent = "Node.js, Express.js, SQLite, Handlebars, CSS, JavaScript, (authentification).";
      image.src = "./images/5467393_1687.jpg";
      githubLink.href = "https://github.com/BryanDesyBitoumbouMbouity/Cafe-Hiyoto";
      liveLink.href="#";
    } else if (projectId === 3) {
      title.textContent = "Wadubasa Events Platform";
      description.textContent = "React, Next.js, Tailwind CSS";
      image.src = "./images/4174812.jpg";
      githubLink.href = "https://github.com/BryanDesyBitoumbouMbouity/Wadubasa";
      liveLink.href="#";
    } else if (projectId === 4) {
      title.textContent = "Restaurant Ordering Platform";
      description.textContent = "Node.js, Express.js, SQLite, Handlebars, CSS";
      image.src = "./images/6404275.jpg";
      githubLink.href = "https://github.com/BryanDesyBitoumbouMbouity/restaurant";
      liveLink.href="#";
    }

    // Afficher la modale
    modal.style.display = "flex";
  } else {
    console.error("Un ou plusieurs éléments de la modale sont introuvables.");
  }
}

function closeModal() {
  const modal = document.getElementById("portfolioModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Fermer la modale en cliquant en dehors du contenu
window.onclick = function(event) {
  const modal = document.getElementById("portfolioModal");
  if (modal && event.target === modal) {
    closeModal();
  }
};



// Objet de traductions directement dans le code

// Objet de traductions directement dans le code
const translations = {
  en: {
      greeting: "Hello, It's Me",
      title: "Bryan Desy",
      introText: "And I'm a",
      profession: ["Frontend Developer", "Web Developer"],
      description: "experience in Computer Programming, producing high quality work.",
      button: "Portfolio",
      portfolioTitle: "My <span class='highlight'>Portfolio</span>",
      portfolioSubtitle: "Most recent Projects",
      viewDetailsButton: "View details",
      viewOnGithub: "View on GitHub",
      viewOnSite: "Demo",
      goBack: "Go back",
      menu: {
          home: "Home",
          about: "About",
          skills: "Skills",
          experience: "Experiences",
          services: "Services",
          portfolio: "Portfolio",
          contact: "Contact"
      },
      aboutSection: {
          title: "About Me",
          professionTitle: "junior web developer",
          description: "Graduate in computer programming, with a strong technical background and a great ability to quickly acquire new skills. I am comfortable working in an agile environment, independently or as part of a team, in both French and English. I have a good understanding of gathering client requirements, a keen sense of organization, and skills in coding and program design.",
          button: "Download my CV 📥",
          experienceLabel: "Years of experience",
          projectsLabel: "Years of projects",
          teachingLabel: "Years of teaching"
      },
      contactTitle: "Contact <span class='highlight'>Me</span>" ,
      emailLabel: "contact@gmail.com",
      phoneLabel: "0123456789/11",
      form: {
        namePlaceholder: "Enter Your Name",
        emailPlaceholder: "Enter Your Email",
        subjectPlaceholder: "Enter Your Subject",
        messagePlaceholder: "Enter Your Message",
        submitButton: "Submit"
      },

      skillsSection: {
        title: "My <span class='highlight'>Skills</span>",
        subtitle: "My technical level",
        frontend: "Frontend Developer",
        backend: "Backend Developer",
        mobile: "Mobile Software Developer",
        software: "Software Developer",
        softwareBasic: "Software",
        languages: "Languages",
        experience: "More than 2 years",
        languageExperience: "More than 10 years"
      },
      servicesTitle: "My <span class='highlight'>Services</span>",
      frontend: {
        title: "Frontend Developer",
        description: "Develop highly interactive front-end/user interfaces for web",
        button: "Learn more",
        modalContent: [
          "I am able to work on the frontend of web application, independently or as a team member."
        ]
      },
      backend: {
        title: "Backend Developer",
        description: "Create robust application backends with Node.js, Express, and Spring Boot",
        button: "Learn more",
        modalContent: [
          "I am able to work on the backend of web application, independently or as a team member."
        ]
      },
      software: {
        title: "Software Developer",
        description: "Creates powerful, easy-to-use desktop applications for Windows",
        button: "Learn more",
      
      modalTitle: "Software Development",
      modalContent: [
        "I am able to develop software using C# and WPF, with Database access like MySQL.",
        "I develop Android Applications.",
        "I develop software using Python language, with Database access like MySQL."
      ]
    },
    
      qualificationTitle: "Qualification",
      qualificationSubtitle: "My personal journey",
      educationTitle: "Education",
      workTitle: "Work",
      qualifications: {
        education: [
          {
            title: "Ontario College Diploma in Computer Programming",
            institution: "La Cité Collégiale College, Ottawa, Canada",
            dates: "2022 - 2024"
          },
          {
            title: "High School Diploma",
            institution: "Lycée Léon Mba, Gabon",
            dates: "2017 - 2019"
          }
        ],
        work: [
          {
            title: "KFC (student job)",
            location: "Gatineau, Canada",
            dates: "2014 - 2017"
          },
          {
            title: "Volunteering in an association",
            location: "Ottawa, Canada",
            dates: "2019 - 2021"
          }
        ]
      }
  },
  fr: {
      greeting: "Bonjour, c'est moi",
      title: "Bryan Desy",
      introText: "Et je suis un",
      profession: ["Développeur Frontend", "Développeur Web"],
      description: "Expérience dans le domaine de programmation Informatique, produisant un travail de qualité.",
      button: "Portfolio",
      portfolioTitle: "Mon <span class='highlight'>Portfolio</span>",
      portfolioSubtitle: "Les projets les plus recents",
      viewDetailsButton: "Voir les détails",
      viewOnGithub: "Voir sur GitHub",
      viewOnSite: "Demo",
      goBack: "Retour",
      menu: {
          home: "Accueil",
          about: "À propos",
          skills: "Compétences",
          experience: "Expériences",
          services: "Services",
          portfolio: "Portfolio",
          contact: "Contact"
      },
      aboutSection: {
          title: "À propos de moi",
          professionTitle: "développeur web junior",
          description: " Diplômé en programmation informatique, avec une solide formation technique et une grande capacité à acquérir rapidement de nouvelles compétences. Je suis à l'aise pour travailler en mode agile, de manière autonome ou en équipe, en français et en anglais. Je possède une bonne compréhension du recueil des besoins clients, un sens aigu de l'organisation, ainsi que des compétences en codage et en conception de programmes informatiques.",
          button: "Télécharger mon CV📥",
          experienceLabel: "Années d'expérience",
          projectsLabel: "Années de projets",
          teachingLabel: "Années d'enseignement"
      },
      contactTitle:"Contactez-<span class='highlight'>Moi</span>",
      emailLabel: "contact@gmail.com",
      phoneLabel: "0123456789/11",
      form: {
        namePlaceholder: "Entrez votre nom",
        emailPlaceholder: "Entrez votre e-mail",
        subjectPlaceholder: "Entrez votre sujet",
        messagePlaceholder: "Entrez votre message",
        submitButton: "Envoyer"
      },

      skillsSection: {
        title: "Mes <span class='highlight'>Compétences</span>",
        subtitle: "Mon niveau technique",
        frontend: "Développeur Frontend",
        backend: "Développeur Backend",
        mobile: "Développeur Mobile",
        software: "Développeur de logiciels",
        softwareBasic: "Logiciel",
        languages: "Langues",
        experience: "Plus de 2 ans",
        languageExperience: "Plus de 10 ans"
      },
      servicesTitle: "Mes <span class='highlight'>Services</span>",
      frontend: {
        title: "Développeur Frontend",
        description: "Développe des interfaces utilisateur interactives pour les applications web",
        button: "En savoir plus",
        modalContent: [
          "Je suis capable de travailler sur la partie frontend d'une application web, tant en équipe que de façon autonome."
        ]
      },
      backend: {
        title: "Développeur Backend",
        description: "Crée des backends d'application robustes avec Node.js, Express et Spring Boot",
        button: "En savoir plus",
        modalContent: [
          "Je suis capable de travailler sur la partie backend d'une application web, tant en équipe que de façon autonome."
        ]
      },
      software: {
        title: "Développeur d'application de bureau",
        description: "Crée des applications de bureau performantes et faciles à utiliser pour Windows",
        button: "En savoir plus",
      
      modalTitle: "Développeur d'application de bureau",
      modalContent: [
        "Je suis capable de développer une application de bureau en utilisant le langage C#, avec connexion à une base de données comme MySQL.",
        "Je suis capable de développer une application mobile pour la plateforme Android.",
        "Je suis capable de développer une application de bureau en utilisant le langage Python, avec connexion à une base de données comme MySQL."
      ]
    },
      qualificationTitle: "Qualifications",
      qualificationSubtitle: "Mon parcours personnel",
      educationTitle: "Éducation",
      workTitle: "Travail",
      qualifications: {
        education: [
          {
            title: "Diplôme d'études collégiales en programmation informatique",
            institution: "Collège La Cité, Ottawa, Canada",
            dates: "2022 - 2024"
          },
          {
            title: "Diplôme de fin d'études secondaires",
            institution: "Lycée Léon Mba, Gabon",
            dates: "2017 - 2019"
          }
        ],
        work: [
          {
            title: "KFC (emploi étudiant)",
            location: "Gatineau, Canada",
            dates: "2014 - 2017"
          },
          {
            title: "Bénévolat dans une association",
            location: "Ottawa, Canada",
            dates: "2019 - 2021"
          }
        ]
      }
  }
};


let greeting = document.getElementById("greeting");
let title = document.getElementById("title");
let description = document.getElementById("description");
let moreBtn = document.getElementById("moreBtn");
let moreBtn2 = document.getElementById("moreBtn2");

const languageSelectop = document.querySelector("select");
let typedInstance;

// Fonction pour initialiser Typed.js
function initializeTyped(stringsArray) {
  if (typedInstance) {
      typedInstance.destroy();
  }
  typedInstance = new Typed(".text", {
      strings: stringsArray,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      showCursor: false
  });
}

// Fonction pour définir la langue
const setLanguage = (language) => {
  if (translations[language]) {
      if (greeting) greeting.innerText = translations[language].greeting;
      if (title) title.innerText = translations[language].title;
      if (description) description.innerText = translations[language].description;
      if (moreBtn) moreBtn.innerText = translations[language].button;
      if (moreBtn2) moreBtn2.innerText = translations[language].aboutSection.button;

      // Mise à jour des éléments du menu de navigation
      if (document.getElementById("menuHome")) document.getElementById("menuHome").innerText = translations[language].menu.home;
      if (document.getElementById("menuAbout")) document.getElementById("menuAbout").innerText = translations[language].menu.about;
      if (document.getElementById("menuSkills")) document.getElementById("menuSkills").innerText = translations[language].menu.skills;
      if (document.getElementById("menuExperience")) document.getElementById("menuExperience").innerText = translations[language].menu.experience;
      if (document.getElementById("menuServices")) document.getElementById("menuServices").innerText = translations[language].menu.services;
      if (document.getElementById("menuPortfolio")) document.getElementById("menuPortfolio").innerText = translations[language].menu.portfolio;
      if (document.getElementById("menuContact")) document.getElementById("menuContact").innerText = translations[language].menu.contact;

      // Mise à jour de la section "About"
      if (document.getElementById("aboutTitle")) {
          const titleParts = translations[language].aboutSection.title.split(' ');
          document.getElementById("aboutTitle").innerHTML = `${titleParts[0]} <span>${titleParts[1]}</span>`;
      }
      if (document.getElementById("professionTitle")) document.getElementById("professionTitle").innerText = translations[language].aboutSection.professionTitle;
      if (document.getElementById("aboutDescription")) document.getElementById("aboutDescription").innerText = translations[language].aboutSection.description;
      if (document.getElementById("experienceLabel")) document.getElementById("experienceLabel").innerText = translations[language].aboutSection.experienceLabel;
      if (document.getElementById("projectsLabel")) document.getElementById("projectsLabel").innerText = translations[language].aboutSection.projectsLabel;
      if (document.getElementById("teachingLabel")) document.getElementById("teachingLabel").innerText = translations[language].aboutSection.teachingLabel;

      // Mise à jour de la section "Skills"
      if (document.getElementById("skillsTitle")) document.getElementById("skillsTitle").innerHTML = translations[language].skillsSection.title;
      if (document.getElementById("skillsSubtitle")) document.getElementById("skillsSubtitle").innerText = translations[language].skillsSection.subtitle;
      if (document.getElementById("frontendSkill")) document.getElementById("frontendSkill").innerText = translations[language].skillsSection.frontend;
      if (document.getElementById("backendSkill")) document.getElementById("backendSkill").innerText = translations[language].skillsSection.backend;
      if (document.getElementById("mobileSkill")) document.getElementById("mobileSkill").innerText = translations[language].skillsSection.mobile;
      if (document.getElementById("softwareSkill")) document.getElementById("softwareSkill").innerText = translations[language].skillsSection.software;
      if (document.getElementById("softwareBasicSkill")) document.getElementById("softwareBasicSkill").innerText = translations[language].skillsSection.softwareBasic;
      if (document.getElementById("languagesSkill")) document.getElementById("languagesSkill").innerText = translations[language].skillsSection.languages;

      // Traduction des années d'expérience pour chaque compétence
      if (document.getElementById("frontendExperience")) document.getElementById("frontendExperience").innerText = translations[language].skillsSection.experience;
      if (document.getElementById("backendExperience")) document.getElementById("backendExperience").innerText = translations[language].skillsSection.experience;
      if (document.getElementById("mobileExperience")) document.getElementById("mobileExperience").innerText = translations[language].skillsSection.experience;
      if (document.getElementById("softwareExperience")) document.getElementById("softwareExperience").innerText = translations[language].skillsSection.experience;
      if (document.getElementById("softwareBasicExperience")) document.getElementById("softwareBasicExperience").innerText = translations[language].skillsSection.experience;
      if (document.getElementById("languageExperience")) document.getElementById("languageExperience").innerText = translations[language].skillsSection.languageExperience;

      // Mise à jour de la section "Services"
      if (document.getElementById("servicesTitle")) document.getElementById("servicesTitle").innerText = translations[language].servicesTitle;

      if (document.getElementById("frontendTitle")) document.getElementById("frontendTitle").innerText = translations[language].frontend.title;
      if (document.getElementById("frontendDescription")) document.getElementById("frontendDescription").innerText = translations[language].frontend.description;
      if (document.getElementById("frontendButton")) document.getElementById("frontendButton").innerText = translations[language].frontend.button;

      if (document.getElementById("backendTitle")) document.getElementById("backendTitle").innerText = translations[language].backend.title;
      if (document.getElementById("backendDescription")) document.getElementById("backendDescription").innerText = translations[language].backend.description;
      if (document.getElementById("backendButton")) document.getElementById("backendButton").innerText = translations[language].backend.button;

      if (document.getElementById("softwareTitle")) document.getElementById("softwareTitle").innerText = translations[language].software.title;
      if (document.getElementById("softwareDescription")) document.getElementById("softwareDescription").innerText = translations[language].software.description;
      if (document.getElementById("softwareButton")) document.getElementById("softwareButton").innerText = translations[language].software.button;

      // Mise à jour de la section "Qualification"
      if (document.getElementById("qualificationTitle")) document.getElementById("qualificationTitle").innerText = translations[language].qualificationTitle;
      if (document.getElementById("qualificationSubtitle")) document.getElementById("qualificationSubtitle").innerText = translations[language].qualificationSubtitle;
      if (document.getElementById("educationTitle")) document.getElementById("educationTitle").innerText = translations[language].educationTitle;
      if (document.getElementById("workTitle")) document.getElementById("workTitle").innerText = translations[language].workTitle;

      if (document.getElementById("githubButton")) {
        document.getElementById("githubButton").innerText = translations[language].viewOnGithub;
      }
      
      if (document.getElementById("siteButton")) {
        document.getElementById("siteButton").innerText = translations[language].viewOnSite;
      }
      
      if (document.getElementById("goBackButton")) {
        document.getElementById("goBackButton").innerText = translations[language].goBack;
      }


      // Mise à jour du contenu de la modale pour le frontend
if (document.getElementById("frontendModalTitle")) {
  document.getElementById("frontendModalTitle").innerText = translations[language].frontend.title;
}

if (document.getElementById("frontendModalContent")) {
  document.getElementById("frontendModalContent").innerHTML = translations[language].frontend.modalContent
    .map(item => `<li class="services__modal-service"><i class="uil uil-check-circle services__modal-icon"></i><p>${item}</p></li>`)
    .join('');
}

// Mise à jour du contenu de la modale pour le backend
if (document.getElementById("backendModalTitle")) {
  document.getElementById("backendModalTitle").innerText = translations[language].backend.title;
}

if (document.getElementById("backendModalContent")) {
  document.getElementById("backendModalContent").innerHTML = translations[language].backend.modalContent
    .map(item => `<li class="services__modal-service"><i class="uil uil-check-circle services__modal-icon"></i><p>${item}</p></li>`)
    .join('');
}

// Mise à jour du contenu de la modale pour le software
if (document.getElementById("softwareModalTitle")) {
  document.getElementById("softwareModalTitle").innerText = translations[language].software.title;
}

if (document.getElementById("softwareModalContent")) {
  document.getElementById("softwareModalContent").innerHTML = translations[language].software.modalContent
    .map(item => `<li class="services__modal-service"><i class="uil uil-check-circle services__modal-icon"></i><p>${item}</p></li>`)
    .join('');
}
        // Mise à jour des éléments de la section de contact
    if (document.getElementById("contactTitle")) {
      document.getElementById("contactTitle").innerHTML = translations[language].contactTitle;
    }
    if (document.getElementById("emailLabel")) {
      document.getElementById("emailLabel").innerText = translations[language].emailLabel;
    }
    if (document.getElementById("phoneLabel")) {
      document.getElementById("phoneLabel").innerText = translations[language].phoneLabel;
    }

    // Mise à jour des placeholders du formulaire
    if (document.getElementById("nameInput")) {
      document.getElementById("nameInput").placeholder = translations[language].form.namePlaceholder;
    }
    if (document.getElementById("emailInput")) {
      document.getElementById("emailInput").placeholder = translations[language].form.emailPlaceholder;
    }
    if (document.getElementById("subjectInput")) {
      document.getElementById("subjectInput").placeholder = translations[language].form.subjectPlaceholder;
    }
    if (document.getElementById("messageInput")) {
      document.getElementById("messageInput").placeholder = translations[language].form.messagePlaceholder;
    }
    if (document.getElementById("submitButton")) {
      document.getElementById("submitButton").value = translations[language].form.submitButton;
    }

    // Mise à jour du titre et du sous-titre de la section portfolio
if (document.getElementById("portfolioTitle")) {
  document.getElementById("portfolioTitle").innerHTML = translations[language].portfolioTitle;
}
if (document.getElementById("portfolioSubtitle")) {
  document.getElementById("portfolioSubtitle").innerText = translations[language].portfolioSubtitle;
}

// Mettre à jour les boutons "View details" pour chaque slide
if (document.getElementById("viewDetailsButton1")) {
  document.getElementById("viewDetailsButton1").innerText = translations[language].viewDetailsButton;
}
if (document.getElementById("viewDetailsButton2")) {
  document.getElementById("viewDetailsButton2").innerText = translations[language].viewDetailsButton;
}
if (document.getElementById("viewDetailsButton3")) {
  document.getElementById("viewDetailsButton3").innerText = translations[language].viewDetailsButton;
}
if (document.getElementById("viewDetailsButton4")) {
  document.getElementById("viewDetailsButton4").innerText = translations[language].viewDetailsButton;
}

     // Traduction pour "And I'm a"
     if (document.getElementById("introText")) {
      document.getElementById("introText").innerHTML = translations[language].introText + " <span class='text'></span>";
    }

    // Initialisation de l'animation Typed.js
    if (typeof Typed !== 'undefined') {
      new Typed(".text", {
        strings: translations[language].profession || ["Frontend Developer", "YouTuber", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      });
    }


      // Mettre à jour les informations d'éducation
      translations[language].qualifications.education.forEach((edu, index) => {
          if (document.getElementById(`educationTitle${index + 1}`)) {
              document.getElementById(`educationTitle${index + 1}`).innerText = edu.title;
          }
          if (document.getElementById(`educationInstitution${index + 1}`)) {
              document.getElementById(`educationInstitution${index + 1}`).innerText = edu.institution;
          }
          if (document.getElementById(`educationDates${index + 1}`)) {
              document.getElementById(`educationDates${index + 1}`).innerText = edu.dates;
          }
      });

      // Mettre à jour les informations de travail
      translations[language].qualifications.work.forEach((work, index) => {
          if (document.getElementById(`workTitle${index + 1}`)) {
              document.getElementById(`workTitle${index + 1}`).innerText = work.title;
          }
          if (document.getElementById(`workLocation${index + 1}`)) {
              document.getElementById(`workLocation${index + 1}`).innerText = work.location;
          }
          if (document.getElementById(`workDates${index + 1}`)) {
              document.getElementById(`workDates${index + 1}`).innerText = work.dates;
          }
      });
  }
};

         

// Initialisation et changement de langue
document.addEventListener('DOMContentLoaded', () => {
  setLanguage("en");  // Initialiser avec l'anglais
});

languageSelectop.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

// JavaScript pour ouvrir et fermer le Lightbox

    function openLightbox(src) {
        document.getElementById("lightbox-img").src = src;
        document.getElementById("lightbox").style.display = "flex";
    }

    function closeLightbox() {
        document.getElementById("lightbox").style.display = "none";
    }






