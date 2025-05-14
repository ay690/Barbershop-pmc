interface Testimonial {
  name: string;
  image: string;
  rating: number; 
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Michael Stevens",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
    rating: 5,
    quote: "Best haircut I've ever had. The atmosphere is amazing and the staff is professional and friendly. Will definitely be coming back!"
  },
  {
    name: "David Rodriguez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
    rating: 5,
    quote: "The hot towel shave was exceptional. James took his time and the result was perfect. This is luxury grooming at its finest."
  },
  {
    name: "Thomas Wilson",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
    rating: 4.5,
    quote: "I've been coming to PMC for over a year now. The consistent quality and attention to detail keeps me coming back. Highly recommended!"
  }
];
