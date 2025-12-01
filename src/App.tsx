import { useState, useEffect } from 'react';
import Splash from './imports/Splash';
import SignInScreen from './components/SignInScreen';
import PasswordScreen from './components/PasswordScreen';
import PhoneNumberScreen from './components/PhoneNumberScreen';
import SimplePasswordScreen from './components/SimplePasswordScreen';
import OTPScreen from './components/OTPScreen';
import HomeScreenWrapper from './components/HomeScreenWrapper';
import CategoryScreen from './components/CategoryScreen';
import AllBrandsScreen from './components/AllBrandsScreen';
import CategoryProductsWrapper from './components/CategoryProductsWrapper';
import BrandProductsWrapper from './components/BrandProductsWrapper';
import ProductDetailsWrapper from './components/ProductDetailsWrapper';
import MyAddresses from './components/MyAddresses';
import AddAddress from './components/AddAddress';
import NotificationsScreen from './components/NotificationsScreen';
import CartScreen from './components/CartScreen';
import AccountScreen from './components/AccountScreen';
import EditProfileScreen from './components/EditProfileScreen';
import SearchScreen from './components/SearchScreen';
import PaymentMethodScreen from './components/PaymentMethodScreen';
import OrderConfirmationScreen from './components/OrderConfirmationScreen';
import MyOrdersScreen from './components/MyOrdersScreen';
import AppSettingsScreen from './components/AppSettingsScreen';
import VouchersScreen from './components/VouchersScreen';
import ContactUsScreen from './components/ContactUsScreen';
import HelpScreen from './components/HelpScreen';
import ChatBot from './components/ChatBot';
import ChatButton from './components/ChatButton';
import OrderTrackingScreen from './components/OrderTrackingScreen';
import OrderDetailsScreen from './components/OrderDetailsScreen';
import DeliveryDetailsScreen from './components/DeliveryDetailsScreen';
import RealTimeTrackingScreen from './components/RealTimeTrackingScreen';
import { AddressProvider } from './contexts/AddressContext';
import { CartProvider } from './contexts/CartContext';
import { OrderProvider } from './contexts/OrderContext';
import { FontSizeProvider, useFontSize } from './contexts/FontSizeContext';
import { ChatbotProvider, useChatbot } from './contexts/ChatbotContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Product } from './data/categoryProducts';
import { Toaster } from './components/ui/sonner';

type Screen = 'splash' | 'signin' | 'password' | 'phoneNumber' | 'simplePassword' | 'otp' | 'home' | 'categories' | 'brands' | 'categoryProducts' | 'brandProducts' | 'productDetails' | 'myAddresses' | 'addAddress' | 'notifications' | 'cart' | 'account' | 'editProfile' | 'search' | 'paymentMethod' | 'orderConfirmation' | 'myOrders' | 'orderTracking' | 'orderDetails' | 'deliveryDetails' | 'realTimeTracking' | 'appSettings' | 'vouchers' | 'contactUs' | 'help' | 'chatBot' | 'chatButton';
type Flow = 'signup' | 'login';

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [currentFlow, setCurrentFlow] = useState<Flow>('signup');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [editAddressId, setEditAddressId] = useState<string | undefined>();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string>('');
  const [orderDetails, setOrderDetails] = useState<{
    orderId: string;
    date: string;
    time: string;
    total: number;
    paymentMethod: string;
  } | null>(null);

  const { isChatbotEnabled } = useChatbot();
  const { getBaseFontSize } = useFontSize();

  // Auto-navigate from splash to signin after 2 seconds
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('signin');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  // Screens where chat button should be hidden
  const hideChatButton = currentScreen === 'splash' || currentScreen === 'signin' || 
                          currentScreen === 'password' || currentScreen === 'phoneNumber' || 
                          currentScreen === 'simplePassword' || currentScreen === 'otp';

  const baseFontSize = getBaseFontSize();

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
      {/* Dynamic font scaling styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .font-scale-app * {
            font-size: ${baseFontSize}px !important;
          }
        `
      }} />
      
      {/* Mobile Container - Fixed dimensions for mobile app */}
      <div 
        className="font-scale-app relative w-[375px] h-[812px] bg-white shadow-2xl rounded-[40px] overflow-hidden"
      >
        {currentScreen === 'splash' && <Splash />}
        
        {currentScreen === 'signin' && (
          <SignInScreen
            email={email}
            onEmailChange={setEmail}
            onContinue={() => {
              setCurrentFlow('signup');
              setCurrentScreen('password');
            }}
            onLogin={() => {
              setCurrentFlow('login');
              setCurrentScreen('phoneNumber');
            }}
          />
        )}
        
        {currentScreen === 'password' && (
          <PasswordScreen
            onBack={() => setCurrentScreen('signin')}
            onFinish={() => {
              // After setting password in signup flow, go to phone number
              setCurrentScreen('phoneNumber');
            }}
          />
        )}

        {currentScreen === 'phoneNumber' && (
          <PhoneNumberScreen
            onNext={(phone) => {
              setPhoneNumber(phone);
              if (currentFlow === 'signup') {
                // Signup flow: phone → OTP
                setCurrentScreen('otp');
              } else {
                // Login flow: phone → simple password
                setCurrentScreen('simplePassword');
              }
            }}
          />
        )}

        {currentScreen === 'simplePassword' && (
          <SimplePasswordScreen
            onBack={() => setCurrentScreen('phoneNumber')}
            onSubmit={(password) => {
              // Login successful, go to home
              setCurrentScreen('home');
            }}
            onForgotPassword={() => {
              alert('Forgot password flow would go here');
            }}
          />
        )}

        {currentScreen === 'otp' && (
          <OTPScreen
            phoneNumber={phoneNumber}
            onBack={() => setCurrentScreen('phoneNumber')}
            onNext={(otp) => {
              // OTP verified in signup flow, go to home
              setCurrentScreen('home');
            }}
            onChangePhone={() => setCurrentScreen('phoneNumber')}
            onResendOTP={() => {
              alert('OTP resent!');
            }}
          />
        )}

        {currentScreen === 'home' && (
          <HomeScreenWrapper
            onCategoriesClick={() => setCurrentScreen('categories')}
            onBrandsClick={() => setCurrentScreen('brands')}
            onLocationClick={() => setCurrentScreen('myAddresses')}
            onCategoryClick={(categoryName) => {
              setSelectedCategory(categoryName);
              setCurrentScreen('categoryProducts');
            }}
            onBrandClick={(brandName) => {
              setSelectedBrand(brandName);
              setCurrentScreen('brandProducts');
            }}
            onNavigateCart={() => setCurrentScreen('cart')}
            onNavigateNotifications={() => setCurrentScreen('notifications')}
            onNavigateAccount={() => setCurrentScreen('account')}
            onNavigateSearch={() => setCurrentScreen('search')}
          />
        )}

        {currentScreen === 'categories' && (
          <CategoryScreen
            onCategorySelect={(categoryName) => {
              setSelectedCategory(categoryName);
              setCurrentScreen('categoryProducts');
            }}
            onBack={() => setCurrentScreen('home')}
            onNavigateHome={() => setCurrentScreen('home')}
            onNavigateSearch={() => setCurrentScreen('search')}
            onNavigateCart={() => setCurrentScreen('cart')}
            onNavigateNotifications={() => setCurrentScreen('notifications')}
            onNavigateAccount={() => setCurrentScreen('account')}
          />
        )}

        {currentScreen === 'brands' && (
          <AllBrandsScreen
            onBrandSelect={(brandName) => {
              setSelectedBrand(brandName);
              setCurrentScreen('brandProducts');
            }}
            onBack={() => setCurrentScreen('home')}
            onNavigateHome={() => setCurrentScreen('home')}
            onNavigateSearch={() => setCurrentScreen('search')}
            onNavigateCart={() => setCurrentScreen('cart')}
            onNavigateNotifications={() => setCurrentScreen('notifications')}
            onNavigateAccount={() => setCurrentScreen('account')}
          />
        )}

        {currentScreen === 'categoryProducts' && (
          <CategoryProductsWrapper
            categoryName={selectedCategory}
            onBack={() => setCurrentScreen('categories')}
            onProductClick={(product) => {
              setSelectedProduct(product);
              setCurrentScreen('productDetails');
            }}
            onNavigateHome={() => setCurrentScreen('home')}
            onNavigateCart={() => setCurrentScreen('cart')}
            onNavigateSearch={() => setCurrentScreen('search')}
            onNavigateNotifications={() => setCurrentScreen('notifications')}
            onNavigateAccount={() => setCurrentScreen('account')}
          />
        )}

        {currentScreen === 'brandProducts' && (
          <BrandProductsWrapper
            brandName={selectedBrand}
            onBack={() => setCurrentScreen('brands')}
            onProductClick={(product) => {
              setSelectedProduct(product);
              setCurrentScreen('productDetails');
            }}
            onNavigateHome={() => setCurrentScreen('home')}
            onNavigateCart={() => setCurrentScreen('cart')}
            onNavigateSearch={() => setCurrentScreen('search')}
            onNavigateNotifications={() => setCurrentScreen('notifications')}
            onNavigateAccount={() => setCurrentScreen('account')}
          />
        )}

        {currentScreen === 'productDetails' && selectedProduct && (
          <ProductDetailsWrapper
            product={selectedProduct}
            onBack={() => setCurrentScreen('categoryProducts')}
            onProductClick={(product) => {
              setSelectedProduct(product);
            }}
          />
        )}

        {currentScreen === 'myAddresses' && (
          <MyAddresses
            onBack={() => setCurrentScreen('home')}
            onAddNew={() => {
              setEditAddressId(undefined);
              setCurrentScreen('addAddress');
            }}
            onEdit={(id) => {
              setEditAddressId(id);
              setCurrentScreen('addAddress');
            }}
            onNavigateHome={() => setCurrentScreen('home')}
            onNavigateSearch={() => setCurrentScreen('search')}
            onNavigateCart={() => setCurrentScreen('cart')}
            onNavigateNotifications={() => setCurrentScreen('notifications')}
            onNavigateAccount={() => setCurrentScreen('account')}
          />
        )}

        {currentScreen === 'addAddress' && (
          <AddAddress
            onBack={() => setCurrentScreen('myAddresses')}
            editId={editAddressId}
          />
        )}

        {currentScreen === 'notifications' && (
          <NotificationsScreen
            onBack={() => setCurrentScreen('home')}
            onNavigateHome={() => setCurrentScreen('home')}
            onNavigateSearch={() => setCurrentScreen('search')}
            onNavigateCart={() => setCurrentScreen('cart')}
            onNavigateAccount={() => setCurrentScreen('account')}
          />
        )}

        {currentScreen === 'cart' && (
          <CartScreen
            onBack={() => setCurrentScreen('home')}
            onNavigateHome={() => setCurrentScreen('home')}
            onNavigateSearch={() => setCurrentScreen('search')}
            onNavigateNotifications={() => setCurrentScreen('notifications')}
            onNavigateAccount={() => setCurrentScreen('account')}
            onSelectAddress={() => setCurrentScreen('myAddresses')}
            onAddMoreProducts={() => setCurrentScreen('categories')}
            onNavigatePaymentMethod={() => setCurrentScreen('paymentMethod')}
            selectedPaymentMethod={paymentMethod}
            onOrderPlaced={(details) => {
              setOrderDetails(details);
              setCurrentScreen('orderConfirmation');
            }}
          />
        )}

        {currentScreen === 'account' && (
          <AccountScreen
            onNavigateHome={() => setCurrentScreen('home')}
            onNavigateSearch={() => setCurrentScreen('search')}
            onNavigateCart={() => setCurrentScreen('cart')}
            onNavigateNotifications={() => setCurrentScreen('notifications')}
            onEditProfile={() => setCurrentScreen('editProfile')}
            onMyAddress={() => setCurrentScreen('myAddresses')}
            onMyOrders={() => setCurrentScreen('myOrders')}
            onVouchers={() => setCurrentScreen('vouchers')}
            onContactUs={() => setCurrentScreen('contactUs')}
            onAppSettings={() => setCurrentScreen('appSettings')}
            onHelp={() => setCurrentScreen('help')}
            onLogout={() => setCurrentScreen('signin')}
          />
        )}

        {currentScreen === 'editProfile' && (
          <EditProfileScreen
            onBack={() => setCurrentScreen('account')}
            onNavigateHome={() => setCurrentScreen('home')}
            onNavigateCart={() => setCurrentScreen('cart')}
            onNavigateNotifications={() => setCurrentScreen('notifications')}
            onNavigateSearch={() => setCurrentScreen('search')}
          />
        )}

        {currentScreen === 'search' && (
          <SearchScreen
            onBack={() => setCurrentScreen('home')}
            onNavigateHome={() => setCurrentScreen('home')}
            onNavigateCart={() => setCurrentScreen('cart')}
            onNavigateNotifications={() => setCurrentScreen('notifications')}
            onNavigateAccount={() => setCurrentScreen('account')}
          />
        )}

        {currentScreen === 'paymentMethod' && (
          <PaymentMethodScreen
            onBack={() => setCurrentScreen('cart')}
            onSelectPaymentMethod={(method) => {
              setPaymentMethod(method);
            }}
            selectedMethod={paymentMethod}
          />
        )}

        {currentScreen === 'orderConfirmation' && orderDetails && (
          <OrderConfirmationScreen
            onContinueShopping={() => setCurrentScreen('home')}
            onViewOrders={() => setCurrentScreen('myOrders')}
            orderDetails={orderDetails}
          />
        )}

        {currentScreen === 'myOrders' && (
          <MyOrdersScreen
            onBack={() => setCurrentScreen('account')}
            onOrderClick={(orderId) => {
              setSelectedOrderId(orderId);
              setCurrentScreen('orderTracking');
            }}
          />
        )}

        {currentScreen === 'orderTracking' && (
          <OrderTrackingScreen
            orderId={selectedOrderId}
            onBack={() => setCurrentScreen('myOrders')}
            onViewOrderDetails={() => setCurrentScreen('orderDetails')}
            onViewDeliveryDetails={() => setCurrentScreen('deliveryDetails')}
            onViewRealTimeTracking={() => setCurrentScreen('realTimeTracking')}
            onContactSupport={() => setIsChatBotOpen(true)}
          />
        )}

        {currentScreen === 'orderDetails' && (
          <OrderDetailsScreen
            orderId={selectedOrderId}
            onBack={() => setCurrentScreen('orderTracking')}
          />
        )}

        {currentScreen === 'deliveryDetails' && (
          <DeliveryDetailsScreen
            orderId={selectedOrderId}
            onBack={() => setCurrentScreen('orderTracking')}
            onContactSupport={() => setIsChatBotOpen(true)}
          />
        )}

        {currentScreen === 'realTimeTracking' && (
          <RealTimeTrackingScreen
            orderId={selectedOrderId}
            onBack={() => setCurrentScreen('orderTracking')}
            onViewOrderDetails={() => setCurrentScreen('orderDetails')}
            onViewDeliveryDetails={() => setCurrentScreen('deliveryDetails')}
          />
        )}

        {currentScreen === 'appSettings' && (
          <AppSettingsScreen
            onBack={() => setCurrentScreen('account')}
            onNavigateHome={() => setCurrentScreen('home')}
            onNavigateCart={() => setCurrentScreen('cart')}
            onNavigateNotifications={() => setCurrentScreen('notifications')}
            onNavigateSearch={() => setCurrentScreen('search')}
          />
        )}

        {currentScreen === 'vouchers' && (
          <VouchersScreen
            onBack={() => setCurrentScreen('account')}
          />
        )}

        {currentScreen === 'contactUs' && (
          <ContactUsScreen
            onBack={() => setCurrentScreen('account')}
          />
        )}

        {currentScreen === 'help' && (
          <HelpScreen
            onBack={() => setCurrentScreen('account')}
          />
        )}

        {/* Floating Chat Button - Show on all screens except auth screens */}
        {!hideChatButton && !isChatBotOpen && isChatbotEnabled && (
          <ChatButton onClick={() => setIsChatBotOpen(true)} />
        )}

        {/* ChatBot Overlay */}
        {isChatBotOpen && (
          <ChatBot
            isOpen={isChatBotOpen}
            onClose={() => setIsChatBotOpen(false)}
          />
        )}
      </div>
      <Toaster position="top-center" />
    </div>
  );
}

export default function App() {
  return (
    <AddressProvider>
      <CartProvider>
        <OrderProvider>
          <FontSizeProvider>
            <ChatbotProvider>
              <LanguageProvider>
                <AppContent />
              </LanguageProvider>
            </ChatbotProvider>
          </FontSizeProvider>
        </OrderProvider>
      </CartProvider>
    </AddressProvider>
  );
}