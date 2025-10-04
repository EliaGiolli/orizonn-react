# ✈️ Orizon Travel Agency

A modern, responsive travel agency website built with **React 19, TypeScript, and TailwindCSS v4**. Orizon specializes in providing exceptional travel experiences across South America and Asia, featuring a clean, premium design with smooth animations and intuitive user experience.

## 🌟 Current Features (Homepage)

### 🎯 Hero Section
- **Eye-catching landing page** with compelling call-to-action
- **Dual navigation** - Quick access to destinations and booking
- **Responsive design** optimized for all device sizes
- **High-quality imagery** showcasing travel destinations

### 🔍 Advanced Booking System
- **Interactive search interface** with real-time filtering
- **Smart destination selector** with cascading dropdowns (continent → country → city)
- **Flexible date picker** with availability checking
- **Price range slider** for budget customization
- **Guest counter** with dynamic pricing
- **Modal booking form** with form validation using Zod schemas
- **URL parameter integration** for shareable search results

### 🗺️ Destination Explorer
- **Comprehensive destination database** covering Asia and South America
- **Visual destination cards** with stunning imagery
- **Interactive hover effects** and smooth transitions
- **Detailed location information** with ratings and amenities
- **Seamless navigation** between different regions

### 📖 Travel Blog Section
- **Featured blog posts** with preview cards
- **Rich content metadata** (author, publish date, read time, category)
- **Tag-based categorization** for easy content discovery
- **Responsive grid layout** with hover animations
- **Direct links** to full blog articles

### 🎨 Premium UI/UX
- **Dark/Light theme toggle** using Zustand state management
- **Smooth parallax effects** for enhanced visual appeal
- **Gradient backgrounds** and modern design elements
- **Responsive typography** with optimal readability
- **Loading states** and micro-interactions
- **Accessibility features** following WCAG guidelines

### 🏗️ Technical Architecture
- **React 19** with modern hooks and functional components
- **TypeScript** for type safety and better developer experience
- **React Router v7** for seamless navigation
- **React Hook Form** with Zod validation for robust form handling
- **TailwindCSS v4** for utility-first styling
- **Motion library** for advanced animations
- **Zustand** for lightweight state management
- **React Icons** for consistent iconography

## 🛠️ Technology Stack

### Frontend
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.8.3** - Static type checking
- **TailwindCSS 4.1.12** - Utility-first CSS framework
- **React Router 7.8.1** - Client-side routing
- **React Hook Form 7.62.0** - Form state management
- **Zod 4.0.17** - Schema validation

### UI & Animation
- **Headless UI 2.2.7** - Accessible component primitives
- **Motion 12.23.12** - Advanced animation library
- **React Parallax 3.5.2** - Parallax scrolling effects
- **React Icons 5.5.0** - Icon library
- **React DatePicker 8.7.0** - Date selection component

### State Management & Backend
- **Zustand 5.0.8** - Lightweight state management
- **Firebase 12.1.0** - Backend services integration
- **Class Variance Authority** - Component variant management

### Development Tools
- **Vite 7.1.2** - Fast build tool and dev server
- **ESLint 9.33.0** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd orizon-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BlogSection.tsx
│   ├── BookingParallax.tsx
│   ├── BookingSection.tsx
│   ├── Button.tsx
│   ├── CallToActionSection.tsx
│   └── Destinations.tsx
├── custom hooks/        # Custom React hooks
│   ├── useBookingForm.tsx
│   └── useDestinationSelect.tsx
├── data/               # Static data and mock content
│   ├── blogPosts.ts
│   ├── bookingOptions.ts
│   └── destinations.ts
├── helpers/            # Utility functions
│   └── bookingUrlHelper.ts
├── layouts/            # Layout components
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ModalCard.tsx
│   └── Navbar.tsx
├── pages/              # Page components
│   ├── Blog.tsx
│   ├── Booking.tsx
│   ├── Contacts.tsx
│   ├── Destinations.tsx
│   ├── Flights.tsx
│   └── Homepage.tsx
├── routes/             # Routing configuration
│   └── router.tsx
├── schemas/            # Zod validation schemas
│   └── bookingSchema.ts
├── store/              # Zustand store
│   └── store.ts
└── types/              # TypeScript type definitions
    ├── blogPostType.ts
    ├── booking.ts
    ├── componentTypes.ts
    ├── destinationTypes.ts
    └── modalForm.ts
```

## 🎯 Key Features Breakdown

### Booking System
- **Multi-step booking process** with validation
- **Real-time price calculation** based on selections
- **Date availability checking** with visual indicators
- **Guest management** with dynamic pricing
- **Booking confirmation** with detailed summaries

### Destination Management
- **Hierarchical location structure** (continent → country → city)
- **Image galleries** for each destination
- **Detailed information** including ratings and amenities
- **Search and filter capabilities**

### Blog System
- **Content management** with rich metadata
- **Category-based organization** (South America, Asia)
- **Author information** and publication dates
- **Tag system** for content discovery
- **Reading time estimation**

## 🔮 Future Improvements

> **Note**: This project currently showcases the homepage with core functionality. The following features are planned for future development:

### 📄 Additional Pages
- **Full Blog Page** - Complete blog article viewing with comments and sharing
- **Destinations Page** - Dedicated destination exploration with detailed information
- **Flights Page** - Flight search and booking functionality
- **Contacts Page** - Contact forms, location maps, and customer service
- **Booking Page** - Complete booking flow with payment integration

### 🧪 Testing Implementation
- **Unit Tests** - Component testing with React Testing Library
- **Integration Tests** - User flow testing and API integration
- **E2E Tests** - Complete user journey testing with Playwright
- **Visual Regression Tests** - UI consistency testing
- **Performance Tests** - Load time and optimization validation

### 🔧 Enhanced Features
- **User Authentication** - Login/signup with Firebase Auth
- **Payment Integration** - Stripe/PayPal payment processing
- **Real-time Chat** - Customer support chat functionality
- **Email Notifications** - Booking confirmations and updates
- **Admin Dashboard** - Content management system
- **Mobile App** - React Native companion app
- **API Integration** - Real travel data and pricing APIs

### 🚀 Performance & SEO
- **Server-Side Rendering** - Next.js migration for better SEO
- **Image Optimization** - WebP format and lazy loading
- **Code Splitting** - Dynamic imports for faster loading
- **SEO Optimization** - Meta tags, structured data, and sitemap
- **Analytics Integration** - Google Analytics and user behavior tracking

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** for high-quality travel imagery
- **React Community** for excellent documentation and resources
- **TailwindCSS Team** for the amazing utility-first CSS framework
- **All contributors** who help make this project better

---

**Built with ❤️ for travelers who seek extraordinary experiences**
