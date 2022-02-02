export interface RootStateI {
  query       : string;
  languages   : LanguageI[];
  language    : LanguageI;
  socialLinks : SocialLinkI[];
  navLinks    : NavLinkI[];
}

export interface LanguageI {
  name : string;
  code : string;
  flag : string;
}

export interface SocialLinkI {
  id    : string | number;
  name  : string;
  url   : string;
  icon  : string;
  color : string;
}

export interface NavLinkI {
  id     : string | number;
  name  : string;
  url    : string;
  icon?  : string;
}
