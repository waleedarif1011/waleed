
export enum View {
  HOME = 'Home',
  ABOUT = 'About',
  EXPERTISE = 'Expertise',
  EXPERIENCE = 'Experience',
  PROJECTS = 'Projects',
  CONTACT = 'Contact',
}

export interface NavItem {
  name: string;
  view: View;
}
