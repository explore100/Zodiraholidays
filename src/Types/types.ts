import type { JSX } from "react";
import type { IconType } from "react-icons";

// src/data/types.ts
export interface TravelPackage {
  id: number;
  title: string;
  country: string;
  description: string;
  image: string;
}
export interface Country {
  id: number;
  name: string;
 image: string;
}

export interface Destination {
  id: number;
  name: string;
  activities: string;
  image: string;
}

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  image: string;
}
export interface ActivityDestination {
  id: number;
  title: string;
  description: string;
  location: string;
  tripDuration: string;
  image: string;
}
export interface TravelStep {
  id: number;
  color: string;  // Tailwind background color class
  title: string;
  description: string;
}
export interface Adventure {
  id: number;
  title: string;
  description: string;
  image: string;
}
export interface BookingInfo {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
}

export interface Destiny {
  id: number;
  title: string;
  location: string;
  rating: number;
  imageUrl: string;
}

export interface CompanyLogo {
  id: number;
  name: string;
  imageUrl: string;
  altText: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface VideoItem {
  id: number;
  imageUrl: string;
  videoUrl: string;
  altText: string;
  isLarge?: boolean;
}

export interface TourCategory {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface HeroImage {
 
  imageUrl: string;
}
export interface DestinationCategory {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  discount: string;
}

export interface AttractionItem {
  id: number;
  title: string;
  tours: number;
  price: number;
  image: string;
  icon: string;
}
export interface ActivityIcon {
  id: number;
  label: string;
  image: string;
} 
export interface ActivityCard {
  id: number;
  title: string;
  image: string;
  toursLabel: string;
  activitiesList: string[];
}
export interface AutoSlider{
  image: string;
}
export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  image: string;
}

export interface TourLabel {
  image: string;
  alt: string;
}

export interface AboutData {
  title: string;
  description: string;
  images: string[];
}

export interface CardData {
 id: number;
  title?: string;
  subtitle?: string;
  description?: string;
  images?: string[];
  phone?: string;
  discount?: string;
  buttonText: string;
  backgroundImage: string;
  textClasses?: string;         // For custom font styles on text blocks
  buttonPosition?: "bottom-left" | "middle-left";
  extraInfo?: JSX.Element | string;
  };

  export interface BlogPost {
  id: number;
  date: string;
  title: string;
  description: string;
  images: string[];   // images for slider
}

export interface ThingItem {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  positionStyle: string; // Tailwind classes for absolute positioning of image
  sizeStyle: string; // Width & height Tailwind classes for image container
}

export interface heroContentData {
  
  tagline: string;
  title: string;
  subtext: string;
  images: string[];
}  

export interface TravelFeature {
  title: string;
  description: string;
  image: string;
}

export interface TestimonialImagesData {
  id: number;
  img: string;
}

export interface Testimonialtext {
  tag: string;
  title1: string;
  title2: String;
  subtitle: string;
  button: string;
}

export interface Client {
  name: string;
  image: string;
}

 export interface ClientData {
  id: number;
  quote: string;
  client: Client;
}


