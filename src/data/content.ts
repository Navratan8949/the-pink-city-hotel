export interface Room {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  size: string;
  bed: string;
  view: string;
  image: string;
  gallery: string[];
  price: string;
  features: string[];
}

export const rooms: Room[] = [
  {
    slug: 'royal-suite',
    name: 'The Royal Suite',
    subtitle: 'Regal Elegance',
    description: 'A grand sanctuary blending Rajasthani craftsmanship with contemporary comfort, featuring a private lounge and panoramic palace views.',
    longDescription: 'The Royal Suite is a celebration of Rajputana grandeur. Hand-painted frescoes adorn the walls, while bespoke furniture in sandstone and brass echo the palaces of old Jaipur. A private lounge invites quiet evenings, and the marble bath opens to a terrace overlooking the Aravalli hills.',
    size: '900 SQ FT',
    bed: 'KING BED',
    view: 'PALACE VIEW',
    image: 'https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8082217/pexels-photo-8082217.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    price: '₹ 45,000 / NIGHT',
    features: ['Private Lounge', 'Marble Bath', 'Walk-in Wardrobe', 'Personal Butler', 'Palace View Terrace', 'Hand-painted Frescoes'],
  },
  {
    slug: 'heritage-room',
    name: 'The Heritage Room',
    subtitle: 'Timeless Craft',
    description: 'An intimate retreat wrapped in warm sandstone tones, with arched windows that frame the courtyard gardens below.',
    longDescription: 'The Heritage Room draws from the centuries-old haveli tradition. Latticed jali screens filter the golden Rajasthani light, casting intricate shadows across linen-clad walls. Every detail — from the brass reading lamps to the block-printed textiles — has been sourced from Jaipur artisan families.',
    size: '650 SQ FT',
    bed: 'KING BED',
    view: 'GARDEN VIEW',
    image: 'https://images.pexels.com/photos/6394550/pexels-photo-6394550.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/6394550/pexels-photo-6394550.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8134808/pexels-photo-8134808.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/28054852/pexels-photo-28054852.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    price: '₹ 28,000 / NIGHT',
    features: ['Jali Screens', 'Linen Bedding', 'Block-print Textiles', 'Garden View', 'Rain Shower', 'Artisan Furnishings'],
  },
  {
    slug: 'garden-pavilion',
    name: 'The Garden Pavilion',
    subtitle: 'Open-Air Serenity',
    description: 'A private pavilion opening onto landscaped Mughal gardens, where the scent of jasmine accompanies your morning tea.',
    longDescription: 'The Garden Pavilion is Aurelia\'s most serene offering — a standalone pavilion surrounded by Mughal-inspired gardens. Folding doors dissolve the boundary between interior and courtyard, where a private plunge pool reflects the sky. Ideal for those who wish to sleep beneath the stars.',
    size: '750 SQ FT',
    bed: 'KING BED',
    view: 'GARDEN & POOL',
    image: 'https://images.pexels.com/photos/8134775/pexels-photo-8134775.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/8134775/pexels-photo-8134775.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8082235/pexels-photo-8082235.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8134808/pexels-photo-8134808.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    price: '₹ 35,000 / NIGHT',
    features: ['Private Plunge Pool', 'Mughal Garden Access', 'Outdoor Shower', 'Folding Glass Doors', 'Tea Service', 'Star-gazing Terrace'],
  },
  {
    slug: 'maharaja-suite',
    name: 'The Maharaja Suite',
    subtitle: 'The Pinnacle of Aurelia',
    description: 'Our most exclusive residence — 1,400 sq ft of palatial living with a private terrace, dining room, and dedicated butler service.',
    longDescription: 'The Maharaja Suite is the crown of Aurelia. A soaring living room with hand-carved sandstone columns leads to a 600 sq ft private terrace with uninterrupted views of the palace skyline. The suite includes a separate dining room for private chef experiences, a study lined with rare books on Rajasthani history, and a marble bath with a freestanding soaking tub. A dedicated butler attends to every need, around the clock.',
    size: '1,400 SQ FT',
    bed: 'KING BED',
    view: 'PALACE VIEW',
    image: 'https://images.pexels.com/photos/8082217/pexels-photo-8082217.jpeg?auto=compress&cs=tinysrgb&w=2000',
    gallery: [
      'https://images.pexels.com/photos/8082217/pexels-photo-8082217.jpeg?auto=compress&cs=tinysrgb&w=2000',
      'https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8082235/pexels-photo-8082235.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    price: '₹ 85,000 / NIGHT',
    features: ['Private Terrace', 'Dining Room', 'Dedicated Butler', 'Freestanding Marble Bath', 'Study Library', 'Private Chef on Request', 'Airport Transfer', '24-hour Concierge'],
  },
];

export interface DiningVenue {
  name: string;
  description: string;
  cuisine: string;
  hours: string;
  image: string;
}

export const diningVenues: DiningVenue[] = [
  {
    name: 'THE COURTYARD',
    description: 'Contemporary Indian cuisine served beneath the open sky, surrounded by sandstone arches and flickering lanterns.',
    cuisine: 'Contemporary Indian Cuisine',
    hours: 'DINNER · 7 PM – 11 PM',
    image: 'https://images.pexels.com/photos/32568165/pexels-photo-32568165.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'SAFFRON',
    description: 'Royal Rajasthani dining in an intimate setting, with recipes revived from the kitchens of Jaipur\'s last maharajas.',
    cuisine: 'Royal Rajasthani Dining',
    hours: 'DINNER · 7:30 PM – 10:30 PM',
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'THE ROOFTOP',
    description: 'Sunset dining and craft cocktails above the palace, with the Pink City stretching to the horizon.',
    cuisine: 'Sunset Dining & Cocktails',
    hours: 'COCKTAILS · 5 PM – 1 AM',
    image: 'https://images.pexels.com/photos/8856555/pexels-photo-8856555.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

export interface Experience {
  title: string;
  description: string;
  image: string;
}

export const experiences: Experience[] = [
  { title: 'Royal Rajasthan', description: 'A guided journey through the living heritage of Jaipur\'s royal palaces and private collections.', image: 'https://images.pexels.com/photos/32261804/pexels-photo-32261804.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Private Candlelight Dinner', description: 'An intimate dinner for two in a candlelit courtyard, with a menu crafted by our executive chef.', image: 'https://images.pexels.com/photos/5116976/pexels-photo-5116976.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Desert Sunset', description: 'Camel ride through the golden dunes of the Thar, ending with champagne as the sun melts into the sand.', image: 'https://images.pexels.com/photos/35929819/pexels-photo-35929819.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Heritage Walk', description: 'A dawn walk through the Pink City\'s hidden havelis, temples, and artisan workshops with a local historian.', image: 'https://images.pexels.com/photos/34452399/pexels-photo-34452399.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Private Pool Experience', description: 'Exclusive access to our garden pool pavilion with curated spa rituals and a floating breakfast.', image: 'https://images.pexels.com/photos/24807133/pexels-photo-24807133.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Cultural Evening', description: 'Live folk music and Kathak dance beneath the stars, accompanied by a Rajasthani thali feast.', image: 'https://images.pexels.com/photos/925069/pexels-photo-925069.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Cooking With Our Chefs', description: 'A hands-on masterclass in Rajasthani cuisine, from laal maas to ghevar, in our private kitchen.', image: 'https://images.pexels.com/photos/12181763/pexels-photo-12181763.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Sunrise Yoga', description: 'A guided yoga and meditation session on the rooftop terrace as the sun rises over the Aravallis.', image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1600' },
];

export interface WellnessOffer {
  title: string;
  description: string;
  image: string;
}

export const wellnessOffers: WellnessOffer[] = [
  { title: 'Aurelia Spa', description: 'Four private treatment suites offering royal Ayurvedic rituals, Abhyanga massage, and bespoke aromatherapy journeys.', image: 'https://images.pexels.com/photos/9146378/pexels-photo-9146378.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Wellness Treatments', description: 'Signature therapies blending ancient Ayurveda with modern restorative techniques, curated by our resident wellness doctor.', image: 'https://images.pexels.com/photos/6187418/pexels-photo-6187418.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Yoga & Meditation', description: 'Daily sunrise and sunset sessions on the rooftop terrace, with private one-on-one guidance available.', image: 'https://images.pexels.com/photos/4558326/pexels-photo-4558326.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Sauna & Steam', description: 'Traditional herbal sauna and steam chambers, followed by a cold plunge in our marble hammam.', image: 'https://images.pexels.com/photos/38407788/pexels-photo-38407788.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Fitness Pavilion', description: 'A fully equipped fitness pavilion with personal training, reformer pilates, and movement therapy.', image: 'https://images.pexels.com/photos/38407789/pexels-photo-38407789.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'Private Wellness Rituals', description: 'Bespoke multi-hour wellness journeys designed around your constitution, with a private therapist and dining.', image: 'https://images.pexels.com/photos/7233272/pexels-photo-7233272.jpeg?auto=compress&cs=tinysrgb&w=1600' },
];

export interface GalleryImage {
  src: string;
  label: string;
  category: string;
  ratio: 'tall' | 'wide' | 'square';
}

export const galleryImages: GalleryImage[] = [
  { src: 'https://images.pexels.com/photos/33726143/pexels-photo-33726143.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'The Courtyard', category: 'Architecture', ratio: 'wide' },
  { src: 'https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1000', label: 'Royal Suite', category: 'Rooms', ratio: 'tall' },
  { src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'Saffron', category: 'Dining', ratio: 'wide' },
  { src: 'https://images.pexels.com/photos/24807133/pexels-photo-24807133.jpeg?auto=compress&cs=tinysrgb&w=1000', label: 'The Pool', category: 'Pool', ratio: 'tall' },
  { src: 'https://images.pexels.com/photos/9146378/pexels-photo-9146378.jpeg?auto=compress&cs=tinysrgb&w=1000', label: 'The Spa', category: 'Spa', ratio: 'square' },
  { src: 'https://images.pexels.com/photos/32261804/pexels-photo-32261804.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'City Palace', category: 'Rajasthan', ratio: 'wide' },
  { src: 'https://images.pexels.com/photos/34452399/pexels-photo-34452399.jpeg?auto=compress&cs=tinysrgb&w=1000', label: 'Jali Windows', category: 'Details', ratio: 'tall' },
  { src: 'https://images.pexels.com/photos/33803734/pexels-photo-33803734.jpeg?auto=compress&cs=tinysrgb&w=1000', label: 'The Corridor', category: 'Architecture', ratio: 'tall' },
  { src: 'https://images.pexels.com/photos/5116976/pexels-photo-5116976.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'Candlelight', category: 'Lifestyle', ratio: 'wide' },
  { src: 'https://images.pexels.com/photos/35929819/pexels-photo-35929819.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'Desert Sunset', category: 'Rajasthan', ratio: 'wide' },
  { src: 'https://images.pexels.com/photos/8082217/pexels-photo-8082217.jpeg?auto=compress&cs=tinysrgb&w=1000', label: 'Maharaja Suite', category: 'Rooms', ratio: 'square' },
  { src: 'https://images.pexels.com/photos/33689321/pexels-photo-33689321.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'The Facade', category: 'Architecture', ratio: 'wide' },
];

export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const journalArticles: JournalArticle[] = [
  { slug: 'journey-through-jaipur', title: 'A Journey Through Jaipur', excerpt: 'From the amber ramparts of the old city to the quiet craft of its artisans, a meditation on the Pink City\'s enduring soul.', date: 'JANUARY 2026', category: 'TRAVEL', image: 'https://images.pexels.com/photos/925069/pexels-photo-925069.jpeg?auto=compress&cs=tinysrgb&w=1600', readTime: '6 MIN READ' },
  { slug: 'art-of-rajasthani-hospitality', title: 'The Art of Rajasthani Hospitality', excerpt: 'Atithi Devo Bhava — the guest is god. We explore the ancient code of hospitality that shapes every detail of Aurelia.', date: 'DECEMBER 2025', category: 'CULTURE', image: 'https://images.pexels.com/photos/33681488/pexels-photo-33681488.jpeg?auto=compress&cs=tinysrgb&w=1600', readTime: '5 MIN READ' },
  { slug: 'guide-to-the-pink-city', title: 'A Guide to the Pink City', excerpt: 'A curated itinerary for the discerning traveller — the palaces, markets, and hidden courtyards that define Jaipur.', date: 'NOVEMBER 2025', category: 'GUIDE', image: 'https://images.pexels.com/photos/34669534/pexels-photo-34669534.jpeg?auto=compress&cs=tinysrgb&w=1600', readTime: '8 MIN READ' },
  { slug: 'dining-at-aurelia', title: 'Dining at Aurelia', excerpt: 'Executive Chef Vikram Rathore on reviving lost royal recipes and the philosophy behind our three dining venues.', date: 'OCTOBER 2025', category: 'DINING', image: 'https://images.pexels.com/photos/8856555/pexels-photo-8856555.jpeg?auto=compress&cs=tinysrgb&w=1600', readTime: '4 MIN READ' },
];

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  { quote: 'From the architecture to the smallest detail of the service, Aurelia felt less like a hotel and more like stepping into another era.', name: 'Mr. & Mrs. Kapoor', location: 'Mumbai, India' },
  { quote: 'The Maharaja Suite is beyond imagination. We woke to palace views and the scent of jasmine, and did not wish to leave.', name: 'Sir James Whitfield', location: 'London, United Kingdom' },
  { quote: 'Aurelia does not host you — it welcomes you home. The warmth of Rajasthan, distilled into pure luxury.', name: 'Ms. Sofia Marchetti', location: 'Milan, Italy' },
];

export interface Offer {
  title: string;
  description: string;
  image: string;
}

export const offers: Offer[] = [
  { title: 'ROYAL WEEKEND', description: 'A two-night escape into Rajasthan\'s royal heritage, with a private heritage tour and candlelight dinner.', image: 'https://images.pexels.com/photos/33689321/pexels-photo-33689321.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'THE ROMANTIC ESCAPE', description: 'Private dining, spa rituals, and a palace stay designed for two — the most intimate way to experience Aurelia.', image: 'https://images.pexels.com/photos/5116976/pexels-photo-5116976.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  { title: 'LONGER STAYS', description: 'Stay four nights or more and experience Jaipur at a slower pace, with our compliments and a private guide.', image: 'https://images.pexels.com/photos/33726143/pexels-photo-33726143.jpeg?auto=compress&cs=tinysrgb&w=1600' },
];

export const navLinks = [
  { label: 'Rooms', path: '/rooms' },
  { label: 'Dining', path: '/dining' },
  { label: 'Experiences', path: '/experiences' },
  { label: 'Wellness', path: '/wellness' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Journal', path: '/journal' },
];

export const nearbyLocations = [
  { name: 'CITY PALACE', distance: '15 MIN' },
  { name: 'HAWA MAHAL', distance: '18 MIN' },
  { name: 'AMBER FORT', distance: '30 MIN' },
  { name: 'JAIPUR INTERNATIONAL AIRPORT', distance: '35 MIN' },
];
