export const CHURCH = {
  name: "Igreja Apostólica Fonte da Vida Toronto",
  shortName: "Fonte da Vida Toronto",
  address: "1224 Lawrence Ave W, North York, ON M6A 1E3",
  addressLine1: "1224 Lawrence Ave W",
  addressLine2: "North York, ON M6A 1E3, Canadá",
  phone: "(437) 770-7282",
  phoneHref: "tel:+14377707282",
  whatsapp: "https://wa.me/14377707282",
  email: "fontetoronto@gmail.com",
  instagram: "https://www.instagram.com/fontedavidatoronto/",
  youtube: "https://www.youtube.com/@FontedaVidaOficial/featured",
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

export const SERVICES: Service[] = [
  {
    day: "Domingo",
    time: "10h",
    title: "Culto da Família",
    description:
      "Nosso principal encontro da semana: louvor, palavra e comunhão para toda a família.",
    image: "/img-comunidade.jpg",
    imageAlt: "Famílias reunidas no culto de domingo",
  },
  {
    day: "Terça-feira",
    time: "19h30",
    title: "Encontro de Mulheres",
    description:
      "Um tempo de oração, edificação e amizade entre as mulheres da igreja.",
    image: "/img-oracao.jpg",
    imageAlt: "Mulheres em momento de oração",
  },
  {
    day: "Quarta-feira",
    time: "19h30",
    title: "Quarta do Resgate",
    description:
      "Noite de fé, intercessão e restauração para quem precisa de um recomeço.",
    image: "/img-biblia.jpg",
    imageAlt: "Bíblia aberta durante a Quarta do Resgate",
  },
  {
    day: "Sexta-feira",
    time: "19h30",
    title: "Culto de Jovens e Adolescentes",
    description:
      "Louvor vibrante e palavra relevante para a nova geração da igreja.",
    image: "/img-louvor.jpg",
    imageAlt: "Jovens no momento de louvor",
  },
];
