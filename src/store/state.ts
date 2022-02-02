import { RootStateI } from "./interfaces/types.interface";

const state: RootStateI = {
  query: "",
  languages: [
    { name: "English", code: "en", flag: "us" },
    { name: "Español", code: "es", flag: "co" },
  ],
  language: { name: "Español", code: "es", flag: "co" },
  socialLinks: [
    {
      id: 1,
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: "mdi-facebook",
      color: "#3b5998",
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: "mdi-instagram",
      color: "#e1306c",
    },
    {
      id: 3,
      name: "Twitter",
      url: "https://www.twitter.com/",
      icon: "mdi-twitter",
      color: "#1da1f2",
    },
    {
      id: 4,
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: "mdi-linkedin",
      color: "#0077b5",
    }
  ],
  navLinks : [
    {
      id: 1,
      name: "home",
      url: "/home",
      icon: "mdi-home",
    },
    {
      id: 2,
      name: "about",
      url: "/nosotros",
      icon: "mdi-account-circle",
    },
    {
      id: 3,
      name: "news",
      url: "/noticias",
      icon: "mdi-newspaper",
    },
    {
      id: 4,
      name: "contact",
      url: "/contacto",
      icon: "mdi-email",
    },
  ]

};

export { state };
