import { IconArrowRight, IconDigital, IconFinance, IconGraph, IconPaper } from "./svgs";

export const SECTION_HERO_PROPS = {
  labelProps: { children: "" },
  titleProps: {
    as: "h1",
    children: "Powering Indian Dreams: Startups & MSME Solutions",
  },
  descProps: {
    className: "text-lg",
    children:
      "Unlock your Indian startup's potential with our specialized incorporation services, designed to support MSMEs in establishing a strong foundation for business success.",
  },
  imgProps: {
    alt: "section img",
    width: 1000,
    height: 1000,
    src: "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
  },
  calProps: {
    dark: true,
    size: 1,
    icon: <IconArrowRight className="w-6 h-6" />,
    children: "Get Started",
  },
  padding: 0,
};

export const SECTION_ONE_PROPS = {
  labelProps: { children: "About Us" },
  titleProps: { children: "We are a Team for your Startup" },
  descProps: {
    className: "text-lg",
    children:
      "Our driving force is to provide unwavering support to Micro, Small, and Medium Enterprises (MSMEs) by offering valuable insights into government schemes that profoundly impact their business growth. In today's ever-evolving landscape, the Indian government actively seeks out innovative companies through the Start-up India innovation scheme, which encompasses a diverse range of schemes to facilitate their scaling efforts.",
  },
  imgProps: {
    alt: "section img",
    width: 1000,
    height: 1000,
    src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
};

export const SECTION_TWO_PROPS = {
  labelProps: { children: "Our Services" },
  titleProps: { children: "Incorporate and Succeed!" },
  descProps: {
    className: "text-lg",
    children:
      "Unlock your business's full potential with our expert assistance in incorporating your company and accessing a wide range of government schemes and digital solutions. Stay ahead of the competition and maximize growth opportunities in the dynamic Indian market.",
  },
  imgProps: {
    alt: "section img",
    width: 1000,
    height: 1000,
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2971&q=80",
  },
};

export const SECTION_LAST_PROPS = {
  titleProps: { as: "h4", children: "Simplifying Complexity by Being Clear" },
  imgProps: {
    alt: "section img",
    width: 1000,
    height: 1000,
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
  },
  calProps: {
    dark: true,
    size: 1,
    icon: <IconArrowRight className="w-6 h-6" />,
    children: "Let's connect",
  },
};

export const CATEGORIES = [
  {
    title: "Start-up India",
    icon: <IconGraph className="w-32 h-32 text-primary/75" />,
    name: "company-registration",
    desc: "Unlock your entrepreneurial potential with our expert guidance to navigate the Indian market and launch your startup successfully.",
  },
  {
    title: "Finance",
    icon: <IconFinance className="w-32 h-32 text-primary/75" />,
    name: "company-registration",
    desc: "Maximize your financial potential with our tailored solutions, leveraging government schemes and incentives to optimize your business growth.",
  },
  {
    title: "Certification",
    icon: <IconPaper className="w-32 h-32 text-primary/75" />,
    name: "company-registration",
    desc: "Stay ahead of the competition and build trust with stakeholders through our comprehensive certification services, ensuring compliance and quality standards.",
  },
  {
    title: "Digital Solutions",
    icon: <IconDigital className="w-32 h-32 text-primary/75" />,
    name: "company-registration",
    desc: "Transform your business for the digital age with our cutting-edge digital solutions and empowering you to streamline operations.",
  },
];

export const FAQ_PROPS = {
  items: [
    {
      id: 1,
      question: "What are the steps to incorporate a startup in India?",
      answer:
        "The steps to incorporate a startup in India typically include business name registration, obtaining Director Identification Number (DIN) and Digital Signature Certificate (DSC), drafting the Memorandum of Association (MoA) and Articles of Association (AoA), and filing the incorporation documents with the Registrar of Companies (RoC).",
    },
    {
      id: 2,
      question:
        "What are the benefits of registering as a Micro, Small, and Medium Enterprise (MSME)?",
      answer:
        "Registering as an MSME offers benefits such as access to government schemes and subsidies, priority sector lending, protection against delayed payments, eligibility for tax benefits, and enhanced market opportunities.",
    },
    {
      id: 3,
      question:
        "What is the difference between a private limited company and a sole proprietorship for startups?",
      answer:
        "A private limited company is a separate legal entity, providing limited liability protection to its owners and allowing for multiple shareholders, while a sole proprietorship is an unincorporated business owned and operated by a single individual, offering simplicity but without limited liability.",
    },
    {
      id: 4,
      question:
        "Is it mandatory to have a Permanent Account Number (PAN) for incorporating a startup in India?",
      answer:
        "Yes, obtaining a PAN is mandatory for incorporating a startup in India. PAN is required for various tax and regulatory purposes, including opening a bank account, filing tax returns, and conducting financial transactions.",
    },
    {
      id: 5,
      question:
        "Can a foreign national or Non-Resident Indian (NRI) incorporate a startup in India?",
      answer:
        "Yes, foreign nationals and NRIs are allowed to incorporate a startup in India. However, certain conditions and regulatory requirements, such as obtaining the necessary approvals, may apply based on the nature of the business and the foreign national's residency status.",
    },
  ],
};

// SEO optimized keywords: startup incorporation, steps to incorporate a startup, business name registration, Director Identification Number, DIN, Digital Signature Certificate, Memorandum of Association, Articles of Association, Registrar of Companies
// SEO optimized keywords: MSME registration, benefits of MSME registration, government schemes, subsidies, priority sector lending, delayed payment protection, tax benefits, market opportunities
// SEO optimized keywords: private limited company, sole proprietorship, difference between private limited company and sole proprietorship, limited liability, single owner business
// SEO optimized keywords: Permanent Account Number, PAN, PAN for startup incorporation, tax compliance, financial transactions
// SEO optimized keywords: incorporating a startup in India for foreign nationals, Non-Resident Indian, NRI, regulatory requirements, necessary approvals
