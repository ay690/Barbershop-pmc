export interface Barber {
  name: string;
  title: string;
  bio: string;
  image: string;
  instagram: string;
  website: string;
}

export const barbers: Barber[] = [
  {
    name: "Jason Rodriguez",
    title: "Owner & Master Barber",
    bio: "With over 15 years of experience, Jason founded PMC Barbershop to bring premium men's grooming services to Denton. Specializing in classic cuts and precision fades.",
    image: "https://images.pexels.com/photos/7697713/pexels-photo-7697713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instagram: "#",
    website: "#"
  },
  {
    name: "Marcus Williams",
    title: "Senior Barber",
    bio: "Marcus brings 8 years of experience to PMC Barbershop. His expertise in fades, beard sculpting, and precision lineup work has earned him a loyal clientele.",
    image: "https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?auto=compress&cs=tinysrgb&w=600",
    instagram: "#",
    website: "#"
  },
  {
    name: "Terrence Jackson",
    title: "Barber & Stylist",
    bio: "Terrence specializes in modern men's styling, textured cuts, and hair designs. With his creative approach and technical skill, he excels at transforming your look.",
    image: "https://images.pexels.com/photos/19225212/pexels-photo-19225212/free-photo-of-barber-with-mustache.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instagram: "#",
    website: "#"
  }
];
