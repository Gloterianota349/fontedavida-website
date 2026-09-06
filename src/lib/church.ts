import type { Lang } from "@/lib/i18n";

export const CHURCH = {
  name: "Igreja Apostólica Fonte da Vida Toronto",
  shortName: "Fonte da Vida Toronto",
  address: "1224 Lawrence Ave W, North York, ON M6A 1E3",
  addressLine1: "1224 Lawrence Ave W",
  addressLine2: "North York, ON M6A 1E3, Canadá",
  addressLine2En: "North York, ON M6A 1E3, Canada",
  phone: "(437) 770-7282",
  phoneHref: "tel:+14377707282",
  whatsapp: "https://wa.me/14377707282",
  email: "fontetoronto@gmail.com",
  instagram: "https://www.instagram.com/fontedavidatoronto/",
  youtube: "https://www.youtube.com/@FountainOfLifeToronto",
  mapsEmbed:
    "https://www.google.com/maps?q=1224+Lawrence+Ave+W,+North+York,+ON+M6A+1E3&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=1224+Lawrence+Ave+W,+North+York,+ON+M6A+1E3",
} as const;

export type Service = {
  day: string;
  time: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type LocalizedService = {
  day: [string, string];
  time: [string, string];
  title: [string, string];
  description: [string, string];
  image: string;
  imageAlt: [string, string];
};

const SERVICES_SOURCE: LocalizedService[] = [
  {
    day: ["Domingo", "Sunday"],
    time: ["10h", "10 AM"],
    title: ["Culto da Família", "Family Service"],
    description: [
      "Nosso principal encontro da semana: louvor, palavra e comunhão para toda a família.",
      "Our main gathering of the week: worship, the Word and fellowship for the whole family.",
    ],
    image: "/img-comunidade.jpg",
    imageAlt: [
      "Famílias e amigos abraçados durante o culto de domingo",
      "Families and friends embracing during the Sunday service",
    ],
  },
  {
    day: ["Terça-feira", "Tuesday"],
    time: ["19h30", "7:30 PM"],
    title: ["Espaço Mulher", "Espaço Mulher (Women's Night)"],
    description: [
      "Um tempo de oração, edificação e amizade entre as mulheres da igreja.",
      "A time of prayer, encouragement and friendship among the women of the church.",
    ],
    image: "/img-espaco-mulher.jpg",
    imageAlt: [
      "Mulheres da igreja reunidas no Espaço Mulher",
      "Women of the church gathered at Espaço Mulher",
    ],
  },
  {
    day: ["Quarta-feira", "Wednesday"],
    time: ["19h30", "7:30 PM"],
    title: ["Quarta do Resgate", "Quarta do Resgate (Rescue Wednesday)"],
    description: [
      "Noite de fé, intercessão e restauração para quem precisa de um recomeço.",
      "A night of faith, intercession and restoration for anyone who needs a fresh start.",
    ],
    image: "/img-oracao.jpg",
    imageAlt: [
      "Pessoas ajoelhadas em oração na Quarta do Resgate",
      "People kneeling in prayer at Quarta do Resgate",
    ],
  },
  {
    day: ["Sexta-feira", "Friday"],
    time: ["19h30", "7:30 PM"],
    title: ["Dokmos - Jovens e Adolescentes", "Dokmos - Youth & Teens"],
    description: [
      "Louvor vibrante e palavra relevante para a nova geração da igreja.",
      "Vibrant worship and a relevant message for the church's next generation.",
    ],
    image: "/img-dokmos.jpg",
    imageAlt: [
      "Jovens e adolescentes do Dokmos reunidos",
      "Dokmos youth and teens gathered together",
    ],
  },
];

export function getServices(lang: Lang): Service[] {
  const i = lang === "pt" ? 0 : 1;
  return SERVICES_SOURCE.map((s) => ({
    day: s.day[i]!,
    time: s.time[i]!,
    title: s.title[i]!,
    description: s.description[i]!,
    image: s.image,
    imageAlt: s.imageAlt[i]!,
  }));
}

export const SERVICES: Service[] = getServices("pt");
