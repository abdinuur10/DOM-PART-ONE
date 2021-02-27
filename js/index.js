const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// navigation

let navitems =document.querySelectorAll("nav a")
console.log(navitems)

navitems.forEach(function(item, index) {
  item.textContent = siteContent.nav[`nav-item-${index +1}`]
})

// site contacts.

const nav = document.getElementsByClassName("container")
console.log(nav)

let newCitation = document.querySelector("cta-text")
console.log(newCitation)

let newTitle = Document.querySelector(".cta-text")

newTitle.textContent = "DOM Is Awesome"
newTitle.textContent = "Get Started"

let logo = document.getElementById("header-img");
logo.setAttribute('src', siteContent["cta"]["img-src"])

// Main Content.

let changeMaintextP= document.querySelector(".text-contact")
changeMaintextP.textContent = siteContent["main-content"]["features-content"]

let changeMaintextP= document.querySelector(".text-contact h4")
changeMaintextP.textContent = siteContent["main-content"]["features-content h4"]

const changeMaintextP= document.querySelector(".text-contact")
changeMaintextP.textContent = siteContent["main-content"]["About-content"]

const changeMaintextP= document.querySelector(".text-contact h4")
changeMaintextP.textContent = siteContent["main-content"]["About-content h4"]

const changeMaintextP= document.querySelector(".text-contact")
changeMaintextP.textContent = siteContent["main-content"]["Service-content"]

const changeMaintextP= document.querySelector(".text-contact h4")
changeMaintextP.textContent = siteContent["main-content"]["Service-content h4"]

const changeMaintextP= document.querySelector(".text-contact")
changeMaintextP.textContent = siteContent["main-content"]["Product-content"]

const changeMaintextP= document.querySelector(".text-contact h4")
changeMaintextP.textContent = siteContent["main-content"]["Product-content h4"]

const changeMaintextP= document.querySelector(".text-contact")
changeMaintextP.textContent = siteContent["main-content"]["Vision-content"]

let changeMaintextP= document.querySelector(".text-contact h4")
changeMaintextP.textContent = siteContent["main-content"]["Vision-content h4"]

// middle image;
let changemidpage = document.querySelector(".middle-img")

changemidpage.setAttribute ('src', siteContent["middle-img"]['image-src'])

// Contact:

let changeMaintext = document.querySelector(".Contact")

changeMaintext.textContent = "address 123 Way 456 Street Somewhere, USA",
changeMaintext.textContent = "phone 1 (888) 888-8888",
changeMaintext.textContent = "email: sales@greatidea.io"

// Footer

const newContent = document.createElement("Footer")
console.log(newContent)

newContent.textContent = "Copyright Great Idea! 2018"
