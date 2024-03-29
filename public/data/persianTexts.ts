// Metadata
export const metaTitle: string = "آتیان ابزار";

// Navbar
export type navbarItemsType = {
   slug: string;
   title: string;
   className: string;
};

export const navbarItems: navbarItemsType[] = [
   { slug: "/", title: "آتـیـان ابـزار", className: "" },
   { slug: "", title: "", className: "hidden xl:block" },
   { slug: "/#categories", title: "دسته‌بندی‌ها", className: "hidden xl:block" },
   { slug: "/#tools", title: "لیست ابزارها", className: "hidden xl:block" },
];

// Home page
export const HomePageTexts: {
   toolBox: string;
   description: string;
} = {
   toolBox: "آتــیــان ابــزار",
   description: "مرجع ابزارهای محاسباتی روزمره",
};

// 404 NotFound Page
export const warning404Text: string = "اشتباه اومدی، این صفحه وجود نداره!";
