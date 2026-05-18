export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Learn Java",
    href: "/learn-java",
    items: [
      {
        title: "Installation",
        href: "/installation",
        items: [
          { title: "Linux", href: "/linux" },
          { title: "MacOS", href: "/macOS" },
          { title: "Windows", href: "/windows" },
        ],
      },
      { title: "First Hello World", href: "/first-hello-world" },
    ],
  },
];
