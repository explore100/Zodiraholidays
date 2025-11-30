// src/data/travelPackages.ts
// src/data/travelPackages.ts
import type {
  Country,
  TravelPackage,
  Destination,
  ServiceType,
  ActivityDestination,
  TravelStep,
  Adventure,
  BookingInfo,
  Destiny,
  CompanyLogo,
  FaqItem,
  VideoItem,
  TourCategory,
  HeroImage,
  DestinationCategory,
  AttractionItem,
  ActivityIcon,
  ActivityCard,
  Testimonial,
  TourLabel,
  AboutData,
  CardData,
  BlogPost,
  ThingItem,
  Service,
  heroContentData,
  TravelFeature,
  TestimonialImagesData,
  Testimonialtext,
  ClientData,
} from "../Types/types";
import {
  travelImages,
  serviceImages,
  activityImages,
  AdventureImages,
  transportImages,
  DestinyImages,
  airlineImages,
  TourcategoryImages,
  HeroImages,
  destinationImages,
  attractionItemImages,
  attractionItemIcons,
  activityIcons,
  TestimonialImages,
  toursLabels,
  aboutImages,
  cardImages,
  blogImages,
  serviceProviderImages,
  heroAvatarImages,
  travelFeatureImages,
  testimonialsBannerImages,
  clientImages,

} from "../Utils/image";
import {
  RiFileUserLine,
  RiMoneyDollarCircleLine,
  RiPlaneLine,
} from "react-icons/ri";


const commonActivities = [
  "Mountain Hiking",
  "Tropical Zip-lining",
  "Rock Climbing",
  "Coastal Paragliding",
  "Rafting Excursion",
];

export const travelPackages: TravelPackage[] = [
  {
    id: 1,
    title: "China Fully Funded Scholarship",
    country: "China",
    description:
      "Study programs with full scholarship for Bachelor, Master, and PhD.",
    image: travelImages.chinaImg,
  },
  {
    id: 2,
    title: "Let's Talk About Sweden",
    country: "france",
    description: "Explore education, travel, and culture in france.",
    image: travelImages.franceImg,
  },
  {
    id: 3,
    title: "South Africa Group Tour",
    country: "japan",
    description: "Enjoy guided tours, safaris, and cultural experiences.",
    image: travelImages.japanImg,
  },
  {
    id: 4,
    title: "Study in Europe with a Scholarship",
    country: "Europe",
    description: "Discover European destinations and education opportunities.",
    image: travelImages.thailandImg,
  },
  {
    id: 5,
    title: "Study in Europe with a Scholarship",
    country: "spain",
    description: "Discover European destinations and education opportunities.",
    image: travelImages.spainImg,
  },
  // Add up to 15+ entries like these
];
export const countries: Country[] = [
  {
    id: 1,
    name: "China",
    image: travelImages.chinaImg,
  },
  {
    id: 2,
    name: "France",
    image: travelImages.franceImg,
  },
  {
    id: 3,
    name: "Japan",
    image: travelImages.japanImg,
  },
  {
    id: 4,
    name: "Italy",
    image: travelImages.italyImg,
  },
  {
    id: 5,
    name: "Spain",
    image: travelImages.spainImg,
  },
  {
    id: 6,
    name: "Thailand",
    image: travelImages.thailandImg,
  },
];
export const destinations: Destination[] = [
  {
    id: 1,
    name: "Great Wall of China",
    activities: "Hiking, Sightseeing",
    image: travelImages.chinaImg,
  },
  {
    id: 2,
    name: "Eiffel Tower",
    activities: "City Tours, Dining",
    image: travelImages.franceImg,
  },
  {
    id: 3,
    name: "Mount Fuji",
    activities: "Climbing, Photography",
    image: travelImages.japanImg,
  },
  {
    id: 4,
    name: "Colosseum",
    activities: "Historical Tours, Sightseeing",
    image: travelImages.italyImg,
  },
];
export const serviceData: ServiceType[] = [
  {
    id: 1,
    title: "Flexible Booking",
    description: "Change your travel dates with ease.",
    image: serviceImages.flexibleImg,
  },
  {
    id: 2,
    title: "Flight Booking",
    description: "Book flights to your favorite destinations.",
    image: serviceImages.flightImg,
  },
  {
    id: 3,
    title: "Tour Guide",
    description: "Experienced guides to enhance your travel experience.",
    image: serviceImages.tourGuideImg,
  },
  {
    id: 4,
    title: "Consultancy",
    description: "Get expert advice for your travel plans.",
    image: serviceImages.consultancyImg,
  },
];

export const activitydestination: ActivityDestination[] = [
  {
    id: 1,
    title: "Hiking Adventure",
    description: "Explore scenic trails and mountains.",
    location: "tilicho",
    tripDuration: "5 Days",
    image: activityImages.hikingImg,
  },
  {
    id: 2,
    title: "Boating Experience",
    description: "Enjoy serene boat rides on beautiful lakes.",
    location: "pokhara",
    tripDuration: "3 Days",
    image: activityImages.boatingImg,
  },
  {
    id: 3,
    title: "River Rafting",
    description: "Thrilling rafting trips on exciting rivers.",
    location: "trishuli",
    tripDuration: "2 Days",
    image: activityImages.raftingImg,
  },
  {
    id: 4,
    title: "Mountain Trekking",
    description: "Challenging treks through rugged mountain terrain.",
    location: "everest",
    tripDuration: "7 Days",
    image: activityImages.trek,
  },
  {
    id: 5,
    title: "Paragliding",
    description: "Soar above stunning landscapes with paragliding.",
    location: "pokhara",
    tripDuration: "1 Day",
    image: activityImages.paragliding,
  },
  {
    id: 6,
    title: "Bungee Jumping",
    description: "Experience the thrill of bungee jumping.",
    location: "cliff khusma",
    tripDuration: "1 Day",
    image: activityImages.bunjee,
  },
];
export const travelSteps: TravelStep[] = [
  {
    id: 1,
    color: "bg-orange-600",
    title: "Choose Your Destination",
    description:
      "Browse through our wide range of exciting destinations and travel packages — from local getaways to international adventures. Pick the one that matches your dream experience.",
  },
  {
    id: 2,
    color: "bg-yellow-400",
    title: "Customize & Confirm",
    description:
      "Select your preferred dates, flight options, and accommodation. Our travel experts will fine-tune every detail to suit your budget and schedule.",
  },
  {
    id: 3,
    color: "bg-green-700",
    title: "Pack & Go!",
    description:
      "Once everything is set, all that’s left is to pack your bags and enjoy the journey. We’ll handle the rest — flights, hotels, transfers, and support throughout your trip.",
  },
];

export const adventureData: Adventure[] = [
  {
    id: 1,
    title: "Sky Diving",
    description: "Experience  of free-falling from great heights.",
    image: AdventureImages.skyDivingImg,
  },
  {
    id: 2,
    title: "Scuba Diving",
    description: "Explore the underwater world and its vibrant marine life.",
    image: AdventureImages.scubaDivingImg,
  },
  {
    id: 3,
    title: "Desert Safari",
    description: "Embark on an exciting journey through the desert dunes.",
    image: AdventureImages.desertSafari,
  },
  {
    id: 4,
    title: "boating",
    description: "Conquer challenging peaks and enjoy breathtaking views.",
    image: AdventureImages.boatingImg,
  },
];

export const transportData: BookingInfo[] = [
  {
    id: 1,
    title: "experience magic of flight",
    subtitle: "Book your flight with us and enjoy seamless travel experience.",
    buttonText: "Book Flight",
    image: transportImages.PlaneImg,
  },
  {
    id: 2,
    title: "Helicopter Booking",
    subtitle: "Book your helicopter ride for quick and scenic travel.",
    buttonText: "Book Helicopter",
    image: transportImages.heliImg,
  },
  {
    id: 3,
    title: "Bus Ticketing",
    subtitle:
      "Reserve your bus tickets for comfortable and affordable journeys.",
    buttonText: "Book Bus",
    image: transportImages.busImg,
  },
];

export const destinyData: Destiny[] = [
  {
    id: 1,
    title: "Annapurna Base Camp",
    location: "Nepal",
    rating: 4.8,
    imageUrl: DestinyImages.abccampImg,
  },
  {
    id: 2,
    title: "Muktinath",
    location: "Nepal",
    rating: 4.7,
    imageUrl: DestinyImages.muktinathImg,
  },
 
  {
    id: 3,
    title: "Everest Base Camp",
    location: "Nepal",
    rating: 4.7,
    imageUrl: DestinyImages.everestbaseImg,
  },
  {
    id: 4,
    title: "Chitwan National Park",
    location: "Nepal",
    rating: 4.9,
    imageUrl: DestinyImages.chitwannpImg,
  },
   {
    id: 5,
    title: "Lumbini",
    location: "Nepal",
    rating: 4.9,
    imageUrl: DestinyImages.lumbiniImg,
  },
];

export const companyLogos: CompanyLogo[] = [
  {
    id: 1,
    name: "Nepal Airlines",
    imageUrl: airlineImages.nepalAirlinesImg,
    altText: "Nepal Airlines Logo",
  },
  {
    id: 2,
    name: "Buddha Air",
    imageUrl: airlineImages.buddhaAirImg,
    altText: "Buddha Air Logo",
  },
  {
    id: 3,
    name: "Qatar Airways",
    imageUrl: airlineImages.qatarAirwaysImg,
    altText: "Qatar Airways Logo",
  },
  {
    id: 4,
    name: "Yeti Air",
    imageUrl: airlineImages.yetiAirImg,
    altText: "Yeti Air Logo",
  },
];

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "How do I make a reservation on your website",
    answer:
      "Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process. Mention any special features or tools that can help users find the best deals.",
  },
  {
    id: 2,
    question: "What documents do I need for my trip, and how do I obtain them?",
    answer:
      "Information about required travel documents like passports, visas, health certificates, and guidance on where and how to get them.",
  },
  {
    id: 3,
    question:
      "In the event that I need to modify or cancel my reservation, what are the policies in place?",
    answer:
      "Details on modification and cancellation policies including timelines, fees, and refund procedures.",
  },
  {
    id: 4,
    question:
      "Can you specify the types of credit/debit cards, digital wallets, or other online payment methods accepted?",
    answer:
      "List of accepted payment methods and any relevant details about the payment process.",
  },
  {
    id: 5,
    question:
      "What are the working hours, and what can I expect in terms of response times?",
    answer:
      "Information about customer support availability, expected response times via different channels, and holidays or exceptions.",
  },
];

export const videoGalleryData: VideoItem[] = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    altText: "Tropical pool with huts",
    isLarge: true,
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    videoUrl:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    altText: "Ocean cliff side",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80",
    videoUrl:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    altText: "Resort pool and waterslide",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80",
    videoUrl:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    altText: "Camping tent at night",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
    videoUrl:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    altText: "Hikers looking at mountains",
  },
];

export const tourCategories: TourCategory[] = [
  {
    id: 1,
    title: "Mountain Tours",
    description: "356 Tours, 248 Activities",
    imageUrl: TourcategoryImages.mountainImg,
  },
  {
    id: 2,
    title: "Beach Tours",
    description: "289 Tours, 198 Activities",
    imageUrl: TourcategoryImages.beachImg,
  },
  {
    id: 3,
    title: "Valley Tours",
    description: "312 Tours, 225 Activities",
    imageUrl: TourcategoryImages.valleyImg,
  },
  {
    id: 4,
    title: "Yatch Tours",
    description: "198 Tours, 145 Activities",
    imageUrl: TourcategoryImages.yatchImg,
  },
  {
    id: 5,
    title: "Temple Tours",
    description: "256 Tours, 189 Activities",
    imageUrl: TourcategoryImages.templeImg,
  },
  {
    id: 6,
    title: "Cultural Tours",
    description: "300 Tours, 210 Activities",
    imageUrl: TourcategoryImages.flowerwomanImg,
  },
  {
    id: 7,
    title: "Desert Safari Tours",
    description: "150 Tours, 120 Activities",
    imageUrl: TourcategoryImages.desertSafariImg,
  },
  {
    id: 8,
    title: "Wildlife Safari Tours",
    description: "220 Tours, 175 Activities",
    imageUrl: TourcategoryImages.safariImg,
  },
];

export const heroImages: HeroImage[] = [
  {
    imageUrl: HeroImages.yatchImg,
  },
  {
    imageUrl: HeroImages.natureImg,
  },
  {
    imageUrl: HeroImages.japnesTempleImg,
  },
  {
    imageUrl: HeroImages.beachHotelImg,
  },
  {
    imageUrl: HeroImages.japanImg,
  },
];
export const destinationCategory: DestinationCategory[] = [
  {
    id: 1,
    title: "Majestic Urban Hotel",
    location: "Bora Bora, French Polynesia",
    imageUrl: destinationImages.dubaiiImg,
    discount: "21% Discount",
  },
  {
    id: 2,
    title: "Opal Bay Retreat",
    location: "china",
    imageUrl: destinationImages.chinaImg,
    discount: "12% Discount",
  },
  {
    id: 3,
    title: "Vista Grand Suites",
    location: "Phuket, Thailand",
    imageUrl: destinationImages.thailandImg,
    discount: "50% Discount",
  },
  {
    id: 4,
    title: "Elysian Haven Resort",
    location: "italy",
    imageUrl: destinationImages.italyImg,
    discount: "15% Discount",
  },
  {
    id: 5,
    title: "The Royal Crest",
    location: "Paris, France",
    imageUrl: destinationImages.franceImg,
    discount: "15% Discount",
  },
  {
    id: 6,
    title: "Evergreen Lodge & Spa",
    location: "Banff, Canada",
    imageUrl: destinationImages.malaysiaImg,
    discount: "33% Discount",
  },
  {
    id: 7,
    title: "Tranquil Cove Hotel",
    location: "Dubai, UAE",
    imageUrl: destinationImages.spainImg,
    discount: "15% Discount",
  },
  {
    id: 8,
    title: "Luxe Retreat & Spa",
    location: "Santorini, Greece",
    imageUrl: destinationImages.japanImg,
    discount: "11% Discount",
  },
];

export const trendingAttractions: AttractionItem[] = [
  {
    id: 1,
    title: "Beach tours",
    tours: 10,
    price: 440,
    image: attractionItemImages.beachImg,
    icon: attractionItemIcons.beachesIcn,
  },
  {
    id: 2,
    title: "Desert Tours",
    tours: 5,
    price: 550,
    image: attractionItemImages.desertTourImg,
    icon: attractionItemIcons.desertIcn,
  },
  {
    id: 3,
    title: "Maldives Tours",
    tours: 4,
    price: 1050,
    image: attractionItemImages.valleyImg,
    icon: attractionItemIcons.hotelIcn,
  },
  {
    id: 4,
    title: "Mountains Tours",
    tours: 7,
    price: 780,
    image: attractionItemImages.mountainImg,
    icon: attractionItemIcons.mountainsIcn,
  },
];

export const activityIconss: ActivityIcon[] = [
  { id: 1, label: "Explore Ruins", image: activityIcons.exploreruins },
  { id: 2, label: "Beach Snorkel", image: activityIcons.beachImg },
  { id: 3, label: "City Cycling", image: activityIcons.citycycleImg },
  { id: 4, label: "Mountain Trek", image: activityIcons.mountainTrekImg },
  { id: 5, label: "Food Tour", image: activityIcons.foodtourImg },
  { id: 6, label: "River Cruise", image: activityIcons.riverBoatingImg },
  { id: 7, label: "Spa Retreat", image: activityIcons.spaImg },
  { id: 8, label: "Road Trip", image: activityIcons.roadTripImg },
];

export const activityCards: ActivityCard[] = [
  {
    id: 1,
    title: "Adventure Activities",
    image: activityIcons.culturalTravelImg,
    toursLabel: "365 Tours",
    activitiesList: commonActivities,
  },

  {
    id: 3,
    title: "Wildlife Experiences",
    image: activityIcons.wildlifeTravelImg,
    toursLabel: "365 Tours",
    activitiesList: commonActivities,
  },
  {
    id: 4,
    title: "Relaxation Travel",
    image: activityIcons.relaxTravelImg,
    toursLabel: "365 Tours",
    activitiesList: commonActivities,
  },
  {
    id: 5,
    title: "Wellness Tours",
    image: activityIcons.welnessTravelImg,
    toursLabel: "365 Tours",
    activitiesList: commonActivities,
  },
  {
    id: 6,
    title: "paragliding",
    image: activityIcons.paragliding,
    toursLabel: "365 Tours",
    activitiesList: commonActivities,
  },
  {
    id: 7,
    title: "Bungee Jumping",
    image: activityIcons.bunjeejumpImg,
    toursLabel: "365 Tours",
    activitiesList: commonActivities,
  },
  {
    id: 8,
    title: "Camping Trips",
    image: activityIcons.campingImg,
    toursLabel: "365 Tours",
    activitiesList: commonActivities,
  },
];

export const promotionalCard = {
  image: activityIcons.travelpackageImg,
  headline: "Save your time!",
  title: "Explore, Book, Soar: Your Journey Awaits!",
  buttonLabel: "Contact Us",
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: `The UI designs he crafted are top-notch, and the design system he integrated allows for straightforward fixes and bulk updates throughout almost every area of the app.`,
    author: "Molie Rosa",
    role: "Photographer",
    image: TestimonialImages.flowerwomanImg,
  },
  {
    id: 2,
    text: `Amazing work! The designs not only met but exceeded our expectations and really elevated the brand presence.`,
    author: "John Doe",
    role: "Designer",
    image: TestimonialImages.japnesTempleImg,
  },
  {
    id: 3,
    text: `He has an exceptional eye for detail, and the updates made the product more accessible and user-friendly.`,
    author: "Jane Smith",
    role: "Product Manager",
    image: TestimonialImages.natureImg,
  },
  {
    id: 4,
    text: `Always a pleasure to work with! The contributions have greatly enhanced our overall UX.`,
    author: "Alex Johnson",
    role: "Developer",
    image: TestimonialImages.riverBoatingImg,
  },
];

export const tourLabelsArray: TourLabel[] = [
  {
    image: toursLabels.oldEdmbarkImg,
    alt: "Old Edimbark",
  },
  {
    image: toursLabels.clockTowerImg,
    alt: "Clock Tower",
  },
  {
    image: toursLabels.casthleImg,
    alt: "Casthle",
  },
];

export const aboutData: AboutData = {
  title: "About Zodira Holidays",
  description:
    "At Zodira Holidays, we believe that travel is more than just a journey; it's an opportunity to create lasting memories, explore new cultures, and connect with the world around us. Our mission is to make travel accessible, enjoyable, and unforgettable for everyone. With a team of passionate travel experts, we curate personalized travel experiences that cater to your unique preferences and interests. Whether you're seeking adventure, relaxation, cultural immersion, or a mix of everything, Zodira Holidays is here to turn your travel dreams into reality. Join us on a journey of discovery and let us help you explore the world with confidence and excitement.",
  images: [
    aboutImages.flowerwomanImg,
    aboutImages.desertSafariImg,
    aboutImages.natureImg,
    aboutImages.japnesTempleImg,
    aboutImages.riverBoatingImg,
    aboutImages.citycycleImg,
  ],
};

export const cardsData: CardData[] = [
  {
    id: 1,
    title: "Waking up in a far away place",
    buttonText: "Book With Us",
    backgroundImage: cardImages.flowerwomanImg,
    textClasses: "italic text-white text-xl tracking-tight",
    buttonPosition: "middle-left",
  },
  {
    id: 2,
    title: "adventure\nstarts today",
    buttonText: "Book With Us",
    backgroundImage: cardImages.franceImg,
    textClasses: "italic lowercase text-white text-2xl whitespace-pre-line",
    buttonPosition: "middle-left",
  },
  {
    id: 3,
    title: "Explore The World",
    subtitle: "Waking up in a far away place",
    images: [
      cardImages.templeImg,
      cardImages.desertSafariImg,
      cardImages.safariImg,
    ],
    phone: "1-800-222-8888",
    discount: "EXCLUSIVE OFFER 50% DISCOUNT",
    buttonText: "Book With Us",
    backgroundImage: cardImages.thailandImg,
    textClasses:
      "text-white font-semibold tracking-wide [&>h3]:mb-1 [&>p]:mb-2",
    buttonPosition: "bottom-left",
  },
  {
    id: 4,
    title: "Dream Vacation",
    subtitle: "Start your JourneyNow",
    buttonText: "Book With Us",
    backgroundImage: cardImages.spainImg,
    textClasses: "text-white italic text-2xl font-semibold",
    buttonPosition: "middle-left",
  },
  {
    id: 5,
    title: "Sale Off",
    subtitle: "Book and Get best Deals now",
    buttonText: "Book With Us",
    backgroundImage: cardImages.citycycleImg,
    textClasses: "text-white italic text-2xl font-semibold",
    buttonPosition: "middle-left",
  },
];

export const blogData: BlogPost[] = [
  {
    id: 1,
    date: "8th August 2025",
    title: "Wild Encounters in Chitwan National Park: Where Nature Comes Alive",
    description:
      "Nestled in the rich plains of southern Nepal, Chitwan National Park is a haven of unparalleled biodiversity and raw natural beauty.",
    images: [
      blogImages.riverImg, // hornbill
      blogImages.tigerSafariImg, // tiger safari
    ],
  },
  {
    id: 2,
    date: "11th August 2025",
    title:
      "Bird Watching Paradise: Explore the Avian Delights of Chitwan National Park",
    description:
      "For bird watchers and nature enthusiasts, no location is as wonderful as Chitwan National Park, situated in the heart of Nepal’s wilderness.",
    images: [
      blogImages.hornBillImg, // hornbill
      blogImages.forestImg, // river and forest
    ],
  },
  {
    id: 3,
    date: "29th September 2025",
    title: "Are hotel loyalty programs worth joining?",
    description:
      "In the modern competitive world of travel, hotels are always seeking solutions on how they can better reward their loyal customers.",
    images: [
      blogImages.roomImg, // hotel lobby
      blogImages.poolImg, // pool
      // hotel room
    ],
  },
];

export const thingsData: ThingItem[] = [
  {
    id: 1,
    icon: RiFileUserLine,
    title: "Sign Up",
    description:
      "Complete all the work associated with planning and processing",
  },
  {
    id: 2,
    icon: RiMoneyDollarCircleLine,
    title: "Worth Of Money",
    description:
      "After successful access then book from exclusive deals & pricing",
  },
  {
    id: 3,
    icon: RiPlaneLine,
    title: "Exciting Travel",
    description:
      "Start and explore a wide range of exciting travel experience.",
  },
];

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Travel Plan",
    description:
      "Travel plans are not really an instrument themselves but a delivery mechanism or strategy for other mostly.",
    image: serviceProviderImages.flexibleImg,
    imageAlt: "Travel suitcase and hat",
    positionStyle: "top-10 right-40",
    sizeStyle: "w-36 h-36",
  },
  {
    id: 2,
    title: "Flights Booking",
    description:
      "Discovery your next dream destination. find deals on domestic and international flights.",
    image: serviceProviderImages.consultancyImg,
    imageAlt: "Person holding passport and luggage",
    positionStyle: "top-20 right-10",
    sizeStyle: "w-40 h-40",
  },
  {
    id: 3,
    title: "Accommodation",
    description:
      "Lodging, food and services or travelling space and related services usually used in plural",
    image: serviceProviderImages.tourGuideImg,
    imageAlt: "Luggage near airplane",
    positionStyle: "bottom-10 right-24",
    sizeStyle: "w-28 h-28",
  },
];

export const heroContent: heroContentData = {
  tagline: "Discover Your Next Adventure",
  title: "Explore the World with Zodira Holidays",
  subtext: "Your journey begins here. Unforgettable experiences await.",
  images: [
    heroAvatarImages.flowerwomanImg,
    heroAvatarImages.japnesTempleImg,
    heroAvatarImages.natureImg,
    heroAvatarImages.riverBoatingImg,
  ],
};

export const travelFeatures: TravelFeature[] = [
  {
    title: "Custom Booking",
    description:
      "Custom booking window feature allows you to restrict the available dates for booking for particular duration.",
    image: travelFeatureImages.customBookingImg, // replace with your real image path
  },
  {
    title: "End-To-End Messaging",
    description:
      "If you are looking for a messaging app that offers secure end-to-end encryption, here’s a roundup of the best apps you can use.",
    image: travelFeatureImages.endtoendmsgImg, // replace with your real image path",
  },
  {
    title: "Instant Itinerary",
    description:
      "Get a verifiable flight and hotel itinerary in less than 5 minutes for your next visa travel application to the place.",
    image: travelFeatureImages.instantImg,
  },
];

export const testimonialsImages: TestimonialImagesData[] = [
  {id:1, img: testimonialsBannerImages.beachHotelImg},
  {id: 2, img: testimonialsBannerImages.citycycleImg},
  {id: 3, img: testimonialsBannerImages.desertSafariImg},
  {id: 4, img: testimonialsBannerImages.flowerwomanImg},
  {id: 5, img: testimonialsBannerImages.foodtourImg},
  {id: 6, img: testimonialsBannerImages.hornBillImg},
  {id: 7, img: testimonialsBannerImages.mountainTrekImg},
  {id: 8, img: testimonialsBannerImages.riverBoatingImg},
  {id: 9, img: testimonialsBannerImages.roadTripImg},
  {id: 10, img: testimonialsBannerImages.trek},
  {id: 11, img: testimonialsBannerImages.yatchImg},
  {id:12, img: testimonialsBannerImages.natureImg}

]

export const testimonialsText: Testimonialtext[] = [
  {
    tag: "Testimonials",
    title1: "Trusted by leaders",
    title2: "from various industries",
    subtitle:
      "Learn why professionals trust our solutions to complete their customer journeys.",
    button: "Read Success Stories",
  }
]

export const testimonialsData: ClientData[] = [
 {
  id: 1,
  quote: "I've been working with these guys for a long time and I can say that my house is in the perfect hands.",
  client: {
    name: 'sagar',
    image: clientImages.flowerwomanImg,
  },
 }, 
 {
  id: 2,
  quote: "I've been working with these guys for a long time and I can say that my house is in the perfect hands.",
  client: {
    name: 'sagar',
    image: clientImages.flowerwomanImg,
  },
 }, 
  {
  id: 3,
  quote: "I've been working with these guys for a long time and I can say that my house is in the perfect hands.",
  client: {
    name: 'sagar',
    image: clientImages.flowerwomanImg,
  },
 }, 
];
