export interface NavigationLinks {
  id: number;
  name: string;
  link: string;
}
export const navItems: NavigationLinks[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "login",
    link: "/login",
  },
  {
    id: 3,
    name: "Register",
    link: "/signup",
  },
];
