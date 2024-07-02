declare module "Router" {
  const router: any;
  export default router;
}

declare module "components/layouts/rootlayout/RootLayout" {
  const RootLayout: React.ComponentType;
  export default RootLayout;
}

// PAGES
declare module "pages/home" {
  const Home: React.ComponentType;
  export default Home;
}

declare module "pages/booking" {
  const Booking: React.ComponentType;
  export default Booking;
}

declare module "pages/auth/signup" {
  const Signup: React.FC;
  export default Signup;
}

declare module "pages/auth/login" {
  const Login: React.FC;
  export default Login;
}

// SECTIONS
declare module "sections/Landing" {
  const Landing: React.FC;
  export default Landing;
}

declare module "sections/Pricing" {
  const Pricing: React.FC;
  export default Pricing;
}

declare module "sections/Services" {
  const Services: React.FC;
  export default Services;
}
declare module "sections/Faq" {
  const Faq: React.FC;
  export default Faq;
}
declare module "sections/Video" {
  const Video: React.FC;
  export default Video;
}
declare module "sections/CompanyLogos" {
  const CompanyLogos: React.FC;
  export default CompanyLogos;
}

// COMPONENTS
declare module "components/layouts/adminlayout" {
  const AdminLayout: React.FC;
  export default AdminLayout;
}
declare module "components/layouts/rootlayout" {
  const RootLayout: React.FC;
  export default RootLayout;
}
declare module "components/ui/bookingStepper" {
  const BookingStepper: React.FC;
  export default BookingStepper;
}

declare module "components/ui/cards/PriceCard" {
  const PriceCard: React.FC<PriceCardProps>;
  export default PriceCard;
}
declare module "components/ui/cards/ServiceCard" {
  const PriceCard: React.FC<ServiceCardProps>;
  export default PriceCard;
}
declare module "components/ui/bookingStepper" {
  const BookingStepper: React.FC;
  export default BookingStepper;
}

// CONSTANTS

// ASSETS
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.MOV" {
  const value: string;
  export default value;
}
