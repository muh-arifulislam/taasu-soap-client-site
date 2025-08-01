# Taasu Soap - User Frontend

A modern, responsive ecommerce website for handmade soap products built with React, TypeScript, and Vite. This is the user-facing frontend application where customers can browse products, manage their cart, and complete purchases.

## 🌐 Live Website

Visit the live website: [https://taasu-soap.web.app/](https://taasu-soap.web.app/)

## 📋 Project Overview

Taasu Soap is a comprehensive ecommerce platform divided into three main components:

1. **User Frontend** (this repository) - Customer-facing website for browsing and purchasing products
2. **Admin Dashboard Frontend** - Administrative interface for managing products, orders, and users
3. **Backend Server** - API server handling business logic and data management

## ✨ Features

### 🛍️ Ecommerce Functionality
- **Product Browsing**: Browse handmade soap products with detailed product pages
- **Shopping Cart**: Add, remove, and manage products in cart
- **User Authentication**: Secure account creation and login system
- **Order Management**: Track orders and view order history
- **Payment Integration**: 
  - Stripe payment gateway for secure online payments
  - Cash on Delivery (COD) option
- **User Dashboard**: Personal dashboard for order tracking and account management

### 🎨 User Experience
- **Responsive Design**: Mobile-first responsive layout
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS and DaisyUI
- **Image Zoom**: Interactive product image viewing with react-inner-image-zoom
- **Smooth Navigation**: React Router for seamless page transitions
- **Toast Notifications**: User feedback with Sonner toast notifications

### 🔧 Technical Features
- **State Management**: Redux Toolkit with Redux Persist for cart persistence
- **Type Safety**: Full TypeScript implementation
- **Firebase Integration**: Authentication and hosting
- **Form Handling**: React Hook Form for efficient form management
- **Performance**: Vite for fast development and optimized builds

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - UI library
- **TypeScript 5.6.2** - Type safety
- **Vite 5.4.10** - Build tool and dev server

### Styling & UI
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **DaisyUI 4.12.14** - Component library
- **Lucide React 0.525.0** - Icon library
- **React Icons 5.3.0** - Additional icon sets

### State Management
- **Redux Toolkit 2.3.0** - State management
- **React Redux 9.1.2** - React bindings
- **Redux Persist 6.0.0** - State persistence

### Payment & Authentication
- **Firebase 11.0.2** - Authentication and hosting
- **Stripe 5.2.0** - Payment processing
- **JWT Decode 4.0.0** - Token handling

### Forms & Validation
- **React Hook Form 7.53.2** - Form management
- **React Firebase Hooks 5.1.1** - Firebase integration

### Additional Libraries
- **React Router DOM 6.27.0** - Client-side routing
- **Swiper 11.1.14** - Touch slider
- **Day.js 1.11.13** - Date manipulation
- **Sonner 1.7.0** - Toast notifications

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/             # Page components
│   ├── auth/          # Authentication pages
│   ├── blog/          # Blog pages
│   ├── cart/          # Shopping cart
│   ├── checkout/      # Checkout process
│   ├── contact/       # Contact page
│   ├── dashboard/     # User dashboard
│   ├── home/          # Homepage
│   ├── orderTrack/    # Order tracking
│   ├── payment/       # Payment pages
│   └── shop/          # Product catalog
├── redux/             # State management
├── routes/            # Route definitions
├── layout/            # Layout components
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── types/             # TypeScript type definitions
├── constant/          # Application constants
├── middlewares/       # Custom middleware
└── helper/            # Helper functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd taas-soap-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is configured for Firebase Hosting deployment. The build artifacts are automatically deployed to Firebase when you run:

```bash
firebase deploy
```

## 📱 Key Features in Detail

### Shopping Experience
- **Product Catalog**: Browse handmade soap products with detailed descriptions
- **Product Search**: Find products quickly with search functionality
- **Product Filtering**: Filter by categories, price, and other criteria
- **Product Details**: View high-quality images with zoom functionality
- **Related Products**: Discover similar products

### Cart Management
- **Add to Cart**: Seamlessly add products to shopping cart
- **Cart Persistence**: Cart items persist across browser sessions
- **Quantity Management**: Adjust product quantities in cart
- **Cart Summary**: Real-time cart total and item count

### Checkout Process
- **Shipping Information**: Enter delivery address and contact details
- **Payment Options**: Choose between Stripe payment or Cash on Delivery
- **Order Confirmation**: Receive confirmation with order details
- **Order Tracking**: Track order status and delivery progress

### User Account
- **Registration**: Create new account with email verification
- **Login/Logout**: Secure authentication system
- **Profile Management**: Update personal information
- **Order History**: View past orders and their status
- **Address Book**: Manage multiple shipping addresses

## 🔒 Security Features

- **Firebase Authentication**: Secure user authentication
- **JWT Token Management**: Secure token handling
- **Stripe Payment Security**: PCI-compliant payment processing
- **Input Validation**: Form validation and sanitization
- **Protected Routes**: Authentication-based route protection

## 🎨 Design System

The application uses a consistent design system built with:
- **Tailwind CSS**: Utility-first styling
- **DaisyUI**: Pre-built components
- **Custom Components**: Reusable UI components
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliant design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for Taasu Soap - Handmade Soap Ecommerce Platform**
