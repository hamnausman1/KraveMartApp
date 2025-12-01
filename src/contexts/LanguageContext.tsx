import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'english' | 'urdu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object
const translations: Record<Language, Record<string, string>> = {
  english: {
    // App Settings
    'appSettings': 'App Settings',
    'fontSize': 'Font Size',
    'currentSize': 'Current size',
    'language': 'Language',
    'english': 'English',
    'urdu': 'Urdu',
    'preferences': 'Preferences',
    'disableChatbot': 'Disable Chatbot',
    'enablePushNotifications': 'Enable Push Notifications',
    'enableVoiceOver': 'Enable Voice Over',
    'languageChanged': 'Language changed to',
    'chatbotEnabled': 'Chatbot enabled',
    'chatbotDisabled': 'Chatbot disabled',
    
    // Sign In Screen
    'letsGetStarted': "Let's Get Started",
    'createAccount': 'Create an account',
    'enterEmail': 'Enter your email to sign up for this app',
    'emailAddress': 'Email Address',
    'emailPlaceholder': 'email@domain.com',
    'continue': 'Continue',
    'or': 'or',
    'continueWithGoogle': 'Continue with Google',
    'continueWithApple': 'Continue with Apple',
    'byClickingContinue': 'By clicking continue, you agree to our',
    'termsOfService': 'Terms of Service',
    'and': 'and',
    'privacyPolicy': 'Privacy Policy',
    'alreadyHaveAccount': 'If you already have an account,',
    'login': 'login',
    
    // Password Screen
    'choosePassword': 'Choose a Password',
    'password': 'Password',
    'enterPassword': 'Enter password',
    'confirmPassword': 'Confirm Password',
    'confirmPasswordPlaceholder': 'Confirm password',
    'finishGoodToGo': 'Finish, Good to go',
    'createPassword': 'Create Password',
    'passwordMustMatch': 'Passwords must match',
    'passwordMinLength': 'Password must be at least 6 characters',
    'password_screen': {
      'security_message': 'Your password must be at least 8 characters and contain at least one number for security.'
    },
    
    // Phone Number Screen
    'enterPhoneNumber': 'Enter Phone Number',
    'phoneInstructions': 'Please enter your phone number to continue',
    'enterMobileNumber': 'Enter your mobile number',
    'weWillVerify': 'We need to verify you. We will send you a one time verification code.',
    'phoneNumber': 'Phone Number',
    'next': 'Next',
    'phonePlaceholder': '03XX-XXXXXXX',
    
    // OTP Screen
    'verifyPhone': 'Verify Phone Number',
    'otpSent': 'We sent a code to',
    'enterOTP': 'Enter the 6-digit code',
    'verify': 'Verify',
    'didntReceiveCode': "Didn't receive the code?",
    'resend': 'Resend',
    'changePhoneNumber': 'Change Phone Number',
    
    // Simple Password Screen
    'enterThePassword': 'Enter the password',
    'pleaseEnterPasswordToProceed': 'Please enter the password to proceed',
    'forgotPassword': 'Forgot Password?',
    
    // Add Address Screen
    'addAddress': 'Add Address',
    'editAddress': 'Edit Address',
    'enterYourAddress': 'Enter your address',
    'addressLabel': 'Address Label',
    'saveAddress': 'Save Address',
    'are_you_sure_delete_address': 'Are you sure you want to delete this address?',
    'no_addresses_saved': 'No addresses saved yet',
    
    // Home Screen
    'location': 'Location',
    'deliverTo': 'Deliver to',
    'yourLocation': 'Your Location',
    'searchProducts': 'Search for products...',
    'categories': 'Categories',
    'seeAll': 'See All',
    'shopByBrand': 'Shop by Brand',
    'title': 'Title',
    'specialOffers': 'Special Offers',
    'popularProducts': 'Popular Products',
    'recentlyViewed': 'Recently Viewed',
    'browseCategories': 'Browse by Categories',
    'freshProduce': 'Fresh Produce',
    'dairyEggs': 'Dairy & Eggs',
    
    // Category Screen
    'allCategories': 'All Categories',
    'fruits': 'Fruits & Vegetables',
    'dairy': 'Dairy & Breakfast',
    'beverages': 'Beverages',
    'snacks': 'Snacks',
    'snacksConfectioneries': 'Snacks & Confectioneries',
    'dairyBakery': 'Dairy & Bakery',
    'cookingEssentials': 'Cooking Essentials',
    'personalCare': 'Personal Care',
    'frozenFood': 'Frozen Food',
    'meatSeafood': 'Meat & Seafood',
    'bakery': 'Bakery & Bread',
    'frozenFoods': 'Frozen Foods',
    'household': 'Household Items',
    'breakfast': 'Breakfast',
    'cleaningAndLaundry': 'Cleaning and Laundry',
    'meatAndFish': 'Meat & Fish',
    'categories': 'Categories',
    'shopByBrand': 'Shop by Brand',
    'babyCare': 'Baby Care',
    'yourLocation': 'Your Location',
    
    // Brands
    'allBrands': 'All Brands',
    
    // Cart Screen
    'myCart': 'My Cart',
    'emptyCart': 'Your cart is empty',
    'addProducts': 'Add some products to get started',
    'subtotal': 'Subtotal',
    'deliveryFee': 'Delivery Fee',
    'deliveryLocation': 'Delivery Location',
    'total': 'Total',
    'proceedToCheckout': 'Proceed to Checkout',
    'continueShopping': 'Continue Shopping',
    'selectAddress': 'Select Delivery Address',
    'changeAddress': 'Change Address',
    'placeOrder': 'Place Order',
    'items': 'items',
    'free': 'Free',
    'products': 'Products',
    'addMoreProduct': 'Add More Product',
    'expectedDateTime': 'Expected Date & Time',
    'selectDate': 'Select Date',
    'selectTime': 'Select Time',
    
    // Account Screen
    'account': 'Account',
    'profile': 'Profile',
    'editProfile': 'Edit Profile',
    'myOrders': 'My Orders',
    'myAddresses': 'My Addresses',
    'vouchers': 'Vouchers',
    'contactUs': 'Contact Us',
    'help': 'Help',
    'logout': 'Logout',
    'confirmLogout': 'Are you sure you want to logout?',
    
    // Notifications
    'notifications': 'Notifications',
    'noNotifications': 'No notifications yet',
    'newOrder': 'New Order',
    'orderDelivered': 'Order Delivered',
    'specialOffer': 'Special Offer',
    'today': 'Today',
    'yesterday': 'Yesterday',
    'markAllRead': 'Mark all as read',
    
    // Search
    'search': 'Search',
    'searchResults': 'Search Results',
    'noResults': 'No results found',
    'tryDifferentSearch': 'Try a different search term',
    'searchForProducts': 'Search for products',
    'recentSearches': 'Recent Searches',
    'popularSearches': 'Popular Searches',
    'filter': 'Filter',
    'sortBy': 'Sort By',
    
    // Product Details
    'addToCart': 'Add to Cart',
    'productAddedToCart': 'Product added to cart!',
    'productDetails': 'Product Details',
    'description': 'Description',
    'reviews': 'Reviews',
    'relatedProducts': 'Related Products',
    'inStock': 'In Stock',
    'outOfStock': 'Out of Stock',
    'quantity': 'Quantity',
    'weight': 'Weight',
    'price': 'Price',
    
    // Address
    'addNewAddress': 'Add New Address',
    'editAddress': 'Edit Address',
    'saveAddress': 'Save Address',
    'addressTitle': 'Address Title',
    'fullAddress': 'Full Address',
    'home': 'Home',
    'work': 'Work',
    'other': 'Other',
    'noAddressesSaved': 'No addresses saved yet',
    'addYourFirstAddress': 'Add your first delivery address',
    'setAsDefault': 'Set as default',
    'defaultAddress': 'Default',
    
    // Orders
    'orderHistory': 'Order History',
    'orderTracking': 'Order Tracking',
    'orderDetails': 'Order Details',
    'trackOrder': 'Track Order',
    'orderConfirmed': 'Order Confirmed',
    'orderConfirmedMessage': 'Your Order is Confirmed. Please check everything is okay',
    'packaging': 'Packaging',
    'dispatched': 'Dispatched',
    'delivered': 'Delivered',
    'orderPlaced': 'Order Placed Successfully',
    'thankYou': 'Thank you for your order!',
    'orderNumber': 'Order Number',
    'estimatedDelivery': 'Estimated Delivery',
    'viewOrder': 'View Order',
    'noOrders': 'No orders yet',
    'startShopping': 'Start shopping to place your first order',
    'deliveryDetails': 'Delivery Details',
    'deliveryStatus': 'Delivery Status',
    'riderInfo': 'Rider Information',
    'riderName': 'Rider Name',
    'riderPhone': 'Rider Phone',
    'callRider': 'Call Rider',
    'liveTracking': 'Live Tracking',
    'viewLiveLocation': 'View Live Location',
    
    // Payment
    'paymentMethod': 'Payment Method',
    'cashOnDelivery': 'Cash on Delivery',
    'creditCard': 'Credit/Debit Card',
    'selectPaymentMethod': 'Select Payment Method',
    'tapToSelectPaymentMethod': 'Tap here to select your Payment Method',
    'payOnDelivery': 'Pay when you receive',
    'cardPayment': 'Pay with card',
    
    // Chatbot
    'chatbot': 'Customer Support',
    'typeMessage': 'Type your message...',
    'howCanIHelp': 'How can I help you today?',
    'trackMyOrder': 'Track my order',
    'returnProduct': 'Return a product',
    'customerSupport': 'Customer support',
    'chatWithUs': 'Chat with us',
    'send': 'Send',
    
    // Vouchers
    'availableVouchers': 'Available Vouchers',
    'noVouchers': 'No vouchers available',
    'copyCode': 'Copy Code',
    'copied': 'Copied!',
    'validUntil': 'Valid until',
    'applyVoucher': 'Apply Voucher',
    'discount': 'Discount',
    
    // Contact Us
    'contactSupport': 'Contact Support',
    'email': 'Email',
    'phone': 'Phone',
    'whatsapp': 'WhatsApp',
    'getInTouch': 'Get in touch with us',
    
    // Help
    'frequentlyAsked': 'Frequently Asked Questions',
    'howToOrder': 'How to place an order?',
    'deliveryInfo': 'Delivery information',
    'paymentMethods': 'Payment methods',
    'returnPolicy': 'Return policy',
    
    // Edit Profile
    'editYourProfile': 'Edit Your Profile',
    'fullName': 'Full Name',
    'phoneNo': 'Phone Number',
    'saveChanges': 'Save Changes',
    'profileUpdated': 'Profile updated successfully',
    
    // Common
    'back': 'Back',
    'cancel': 'Cancel',
    'save': 'Save',
    'delete': 'Delete',
    'edit': 'Edit',
    'add': 'Add',
    'remove': 'Remove',
    'yes': 'Yes',
    'no': 'No',
    'ok': 'OK',
    'close': 'Close',
    'viewAll': 'View All',
    'viewDetails': 'View Details',
    'loading': 'Loading...',
    'error': 'Error',
    'success': 'Success',
    'confirm': 'Confirm',
    'apply': 'Apply',
    'clear': 'Clear',
    
    // Filter and Sort
    'priceRange': 'Price Range',
    'minimum': 'Minimum',
    'maximum': 'Maximum',
    'checkAll': 'Check All',
    'dairyProducts': 'Dairy Products',
    'foods': 'Foods',
    'vegetables': 'Vegetables',
    'healthcare': 'Healthcare',
    'others': 'Others',
    
    // More Screen
    'more': 'More',
    'language': 'Language',
    'fontSize': 'Font Size',
    'helpCenter': 'Help Center',
    'privacyPolicy': 'Privacy Policy',
    'termsConditions': 'Terms & Conditions',
    'aboutUs': 'About Us',
    
    // My Bag / Cart
    'myBag': 'My Bag',
    'paymentConfirmed': 'Payment Confirmed',
    'thankYouForOrder': 'Thank you for your order!',
    'orderNumber': 'Order Number',
    'trackOrder': 'Track Order',
    'backToHome': 'Back to Home',
    
    // Registration & Password
    'choosePassword': 'Choose a Password',
    'enterPassword': 'Enter the password',
    'confirmPassword': 'Confirm Password',
    'finishGoodToGo': 'Finish, Good to go',
    'forgotPassword': 'Forgot Password?',
    'pleaseEnterPassword': 'Please enter the password to proceed',
    'forSecuritySafety': 'For the security & safety please choose a password',
    
    // Order Status
    'orderProcessing': 'Order Processing',
    'orderScheduled': 'Order Scheduled',
    'orderConfirmed': 'Order Confirmed',
    'orderConfirmedMessage': 'Your Order is Confirmed. Please check everything is okay',
    'outForDelivery': 'Out for Delivery',
    'delivered': 'Delivered',
    'estimatedDelivery': 'Estimated Delivery',
    'orderDetails': 'Order Details',
    'viewDetails': 'View Details',
    'collapse': 'Collapse',
    'expand': 'Expand',
    
    // Chat
    'chatWithUs': 'Chat with us',
    'chatGreeting': "Assalam-o-Alaikum! I'm KraveAssist. How can I help you today",
    'chatSuggestion1': 'I want a Refund',
    'chatSuggestion2': "The Delivery isn't good",
    'chatSuggestion3': 'Delivery is late',
    'chatSuggestion4': 'Track my order',
    'writeMessage': 'Write Message',
    'endChat': 'End Chat',
    
    // Search Popular Terms
    'popularSearch1': 'Rice',
    'popularSearch2': 'Bread',
    'popularSearch3': 'Biscuits',
    'popularSearch4': 'Milk',
  },
  urdu: {
    // App Settings
    'appSettings': 'ایپ کی ترتیبات',
    'fontSize': 'فونٹ کا سائز',
    'currentSize': 'موجودہ سائز',
    'language': 'زبان',
    'english': 'انگریزی',
    'urdu': 'اردو',
    'preferences': 'ترجیحات',
    'disableChatbot': 'چیٹ بوٹ بند کریں',
    'enablePushNotifications': 'پش نوٹیفکیشنز فعال کریں',
    'enableVoiceOver': 'وائس اوور فعال کریں',
    'languageChanged': 'زبان تبدیل ہو گئی',
    'chatbotEnabled': 'چیٹ بوٹ فعال ہو گیا',
    'chatbotDisabled': 'چیٹ بوٹ بند ہو گیا',
    
    // Sign In Screen
    'letsGetStarted': 'آئیں شروع کریں',
    'createAccount': 'اکاؤنٹ بنائیں',
    'enterEmail': 'اس ایپ میں سائن اپ کرنے کے لیے اپنا ای میل درج کریں',
    'emailAddress': 'ای میل ایڈریس',
    'emailPlaceholder': 'email@domain.com',
    'continue': 'جاری رکھیں',
    'or': 'یا',
    'continueWithGoogle': 'گوگل سے جاری رکھیں',
    'continueWithApple': 'اپل سے جاری رکھیں',
    'byClickingContinue': 'جاری رکھنے پر آپ ہمیاری کے',
    'termsOfService': 'خدمات کے شرایط',
    'and': 'اور',
    'privacyPolicy': 'خصوصیت کی سیاست',
    'alreadyHaveAccount': 'اگر آپ کا پہلے سے اکاؤنٹ ہے تو',
    'login': 'لاگ ان کریں',
    
    // Password Screen
    'choosePassword': 'پاس ورڈ منتخب کریں',
    'password': 'پاس ورڈ',
    'enterPassword': 'پاس ورڈ درج کریں',
    'confirmPassword': 'پاس ورڈ کی تصدیق کریں',
    'confirmPasswordPlaceholder': 'پاس ورڈ کی تصدیق کریں',
    'finishGoodToGo': 'مکمل کریں، آگے بڑھیں',
    'createPassword': 'پاس ورڈ بنائیں',
    'passwordMustMatch': 'پاس ورڈ مطابقت دہیں چاہئیں',
    'passwordMinLength': 'پاس ورڈ کم از کم 6 حروف ہونا چاہئیں',
    'password_screen': {
      'security_message': 'آپ کے پاس ورڈ کم از کم 8 حروف ہونے چاہئیں اور کم از کم ایک نمبر شامل ہونے چاہئیں امن کے لیے۔'
    },
    
    // Phone Number Screen
    'enterPhoneNumber': 'فون نمبر درج کریں',
    'phoneInstructions': 'براہ کرم جاری رکھنے کے لیے اپنا فون نمبر درج کریں',
    'enterMobileNumber': 'اپنا موبائل نمبر درج کریں',
    'weWillVerify': 'ہم آپکی تصدیق کرنے کے لیے ایک ایک طرفی تصدیق کوڈ بھیجیں گے۔',
    'phoneNumber': 'فون نمبر',
    'next': 'اگلا',
    'phonePlaceholder': '03XX-XXXXXXX',
    
    // OTP Screen
    'verifyPhone': 'فون نمبر کی تصدیق کریں',
    'otpSent': 'ہم نے ایک کوڈ بھیجا ہے',
    'enterOTP': '6 ہندسوں کا کوڈ درج کریں',
    'verify': 'تصدیق کریں',
    'didntReceiveCode': 'کوڈ موصول نہیں ہوا؟',
    'resend': 'دوبارہ بھیجیں',
    'changePhoneNumber': 'فون نمبر تبدیل کریں',
    
    // Simple Password Screen
    'enterThePassword': 'پاس ورڈ درج کریں',
    'pleaseEnterPasswordToProceed': 'جاری رکھنے کے لیے پاس ورڈ درج کریں',
    'forgotPassword': 'پاس ورڈ بھول گئے؟',
    
    // Add Address Screen
    'addAddress': 'پتہ شامل کریں',
    'editAddress': 'پتہ میں ترمیم کریں',
    'enterYourAddress': 'اپنا پتہ درج کریں',
    'addressLabel': 'پتہ کا لیبل',
    'saveAddress': 'پتہ محفوظ کریں',
    'are_you_sure_delete_address': 'کیا آپ واقعی اس پتے کو حذف کرنا چاہتے ہیں؟',
    'no_addresses_saved': 'ابھی تک کوئی پتہ محفوظ نہیں',
    
    // Home Screen
    'location': 'مقام',
    'deliverTo': 'ڈیلیور کریں',
    'yourLocation': 'آپ کا مقام',
    'searchProducts': 'مصنوعا تلاش کریں...',
    'categories': 'زمرے',
    'seeAll': 'سب دیکھیں',
    'shopByBrand': 'برنڈ کے مطابق بخریداری کریں',
    'title': 'عنوان',
    'specialOffers': 'خصوصی پیشکشیں',
    'popularProducts': 'مقبول مصنوعات',
    'recentlyViewed': 'حال ہی میں دیکھا گیا',
    'browseCategories': 'زمرے کے مطابق براؤز کریں',
    'freshProduce': 'تازہ پیداوار',
    'dairyEggs': 'ڈیری اور انڈے',
    
    // Category Screen
    'allCategories': 'تمام زمرے',
    'fruits': 'پھل اور سبزیاں',
    'dairy': 'ڈیری اور ناشتہ',
    'beverages': 'مشروبات',
    'snacks': 'اسنیکس',
    'snacksConfectioneries': 'اسنیکس اور کنفیکشنریز',
    'dairyBakery': 'ڈیری اور بیکری',
    'cookingEssentials': 'پخت کے اہم مكون',
    'personalCare': 'شخصی مراقبت',
    'frozenFood': 'منجمد کھانے',
    'meatSeafood': 'گوشت اور سمندری خوراک',
    'bakery': 'بیکری اور روٹی',
    'frozenFoods': 'منجمد کھانے',
    'household': 'گھریلو اشیاء',
    'breakfast': 'ناشتہ',
    'cleaningAndLaundry': 'پاک کرنا اور پھولیاں کا پاک کرنا',
    'meatAndFish': 'گوشت اور مچھلی',
    'categories': 'زمرے',
    'shopByBrand': 'برنڈ کے مطابق بخریداری کریں',
    'babyCare': 'بیبی کی مراقبت',
    'yourLocation': 'آپ کا مقام',
    
    // Brands
    'allBrands': 'تمام برانڈز',
    
    // Cart Screen
    'myCart': 'میری ٹوکری',
    'emptyCart': 'آپ کی ٹوکری خالی ہے',
    'addProducts': 'شروع کرنے کے لیے کچھ مصنوعات شامل کریں',
    'subtotal': 'ذیلی کل',
    'deliveryFee': 'ڈیلیوری فیس',
    'deliveryLocation': 'ڈیلیوری مقام',
    'total': 'کل',
    'proceedToCheckout': 'چیک آؤٹ پر جائیں',
    'continueShopping': 'خریداری جاری رکھیں',
    'selectAddress': 'ڈیلیوری کا پتہ منتخب کریں',
    'changeAddress': 'پتہ تبدیل کریں',
    'placeOrder': 'آرڈر دیں',
    'items': 'اشیاء',
    'free': 'مفت',
    'products': 'مصنوعات',
    'addMoreProduct': 'مزید مصنوعات شامل کریں',
    'expectedDateTime': 'منتظری تاریخ اور وقت',
    'selectDate': 'تاریخ منتخب کریں',
    'selectTime': 'وقت منتخب کریں',
    
    // Account Screen
    'account': 'اکاؤنٹ',
    'profile': 'پروفائل',
    'editProfile': 'پروفائل میں ترمیم کریں',
    'myOrders': 'میرے آرڈرز',
    'myAddresses': 'میرے پتے',
    'vouchers': 'واؤچرز',
    'contactUs': 'ہم سے رابطہ کریں',
    'help': 'مدد',
    'logout': 'لاگ آؤٹ',
    'confirmLogout': 'کیا آپ واقعی لاگ آؤٹ کرنا چاہتے ہیں؟',
    
    // Notifications
    'notifications': 'اطلاعات',
    'noNotifications': 'ابھی تک کوئی اطلاع نہیں',
    'newOrder': 'نیا آرڈر',
    'orderDelivered': 'آرڈر ڈیلیور ہو گیا',
    'specialOffer': 'خصوصی پیشکش',
    'today': 'آج',
    'yesterday': 'کل',
    'markAllRead': 'سب کو پڑھا ہوا نشان زد کریں',
    
    // Search
    'search': 'تلاش کریں',
    'searchResults': 'تلاش کے نتائج',
    'noResults': 'کوئی نتیجہ نہیں ملا',
    'tryDifferentSearch': 'مختلف تلاش کی اصطلاح آزمائیں',
    'searchForProducts': 'مصنوعات تلاش کریں',
    'recentSearches': 'حالیہ تلاشیں',
    'popularSearches': 'مقبول تلاشیں',
    'filter': 'فلٹر',
    'sortBy': 'ترتیب دیں',
    
    // Product Details
    'addToCart': 'ٹوکری میں شامل کریں',
    'productAddedToCart': 'مصنوعات ٹوکری میں شامل ہو گئی!',
    'productDetails': 'مصنوعات کی تفصیلات',
    'description': 'تفصیل',
    'reviews': 'جائزے',
    'relatedProducts': 'متعلقہ مصنوعات',
    'inStock': 'اسٹاک میں موجود',
    'outOfStock': 'اسٹاک میں نہیں',
    'quantity': 'مقدار',
    'weight': 'وزن',
    'price': 'قیمت',
    
    // Address
    'addNewAddress': 'نیا پتہ شامل کریں',
    'editAddress': 'پتہ میں ترمیم کریں',
    'saveAddress': 'پتہ محفوظ کریں',
    'addressTitle': 'پتہ کا عنوان',
    'fullAddress': 'مکمل پتہ',
    'home': 'گھر',
    'work': 'کام',
    'other': 'دیگر',
    'noAddressesSaved': 'ابھی تک کوئی پتہ محفوظ نہیں',
    'addYourFirstAddress': 'اپنا پہلا ڈیلیوری پتہ شامل کریں',
    'setAsDefault': 'بطور ڈیفالٹ سیٹ کریں',
    'defaultAddress': 'ڈیفالٹ',
    
    // Orders
    'orderHistory': 'آرڈر کی تاریخ',
    'orderTracking': 'آرڈر ٹریکنگ',
    'orderDetails': 'آرڈر کی تفصیلات',
    'trackOrder': 'آرڈر ٹریک کریں',
    'orderConfirmed': 'آرڈر کی تصدیق ہو گئی',
    'orderConfirmedMessage': 'آپ کا آرڈر تصدیق ہو گیا ہے۔ کیا آپ تمام چیزیں صحیح ہیں؟',
    'packaging': 'پیکنگ',
    'dispatched': 'روانہ کر دیا گیا',
    'delivered': 'ڈیلیور کر دیا گیا',
    'orderPlaced': 'آرڈر کامیابی سے دیا گیا',
    'thankYou': 'آپ کے آرڈر کا شکریہ!',
    'orderNumber': 'آرڈر نمبر',
    'estimatedDelivery': 'تخمینہ ڈیلیوری',
    'viewOrder': 'آرڈر دیکھیں',
    'noOrders': 'ابھی تک کوئی آرڈر نہیں',
    'startShopping': 'اپنا پہلا آرڈر دینے کے لیے خریداری شروع کریں',
    'deliveryDetails': 'ڈیلیوری کی تفصیلات',
    'deliveryStatus': 'ڈیلیوری کی حیثیت',
    'riderInfo': 'رائیڈر کی معلومات',
    'riderName': 'رائیڈر کا نام',
    'riderPhone': 'رائیڈر کا فون',
    'callRider': 'رائیڈر کو کال کریں',
    'liveTracking': 'لائیو ٹریکنگ',
    'viewLiveLocation': 'لائیو مقام دیکھیں',
    
    // Payment
    'paymentMethod': 'ادائیگی کا طریقہ',
    'cashOnDelivery': 'ڈیلیوری پر نقد رقم',
    'creditCard': 'کریڈٹ/ڈیبٹ کارڈ',
    'selectPaymentMethod': 'ادائیگی کا طریقہ منتخب کریں',
    'tapToSelectPaymentMethod': 'ادائیگی کا طریقہ منتخب کرنے کے لیے یہاں تاپ کریں',
    'payOnDelivery': 'موصول ہونے پر ادائیگی کریں',
    'cardPayment': 'کارڈ سے ادائیگی کریں',
    
    // Chatbot
    'chatbot': 'کسٹمر سپورٹ',
    'typeMessage': 'اپنا پیغام ٹائپ کریں...',
    'howCanIHelp': 'آج میں آپ کی کیسے مدد کر سکتا ہوں؟',
    'trackMyOrder': 'میرے آرڈر کو ٹریک کریں',
    'returnProduct': 'مصنوعات واپس کریں',
    'customerSupport': 'کسٹمر سپورٹ',
    'chatWithUs': 'ہم سے بات کریں',
    'send': 'بھیجیں',
    
    // Vouchers
    'availableVouchers': 'دستیاب واؤچرز',
    'noVouchers': 'کوئی واؤچر دستیاب نہیں',
    'copyCode': 'کوڈ کاپی کریں',
    'copied': 'کاپی ہو گیا!',
    'validUntil': 'تک درست',
    'applyVoucher': 'واؤچر لگائیں',
    'discount': 'رعایت',
    
    // Contact Us
    'contactSupport': 'سپورٹ سے رابطہ کریں',
    'email': 'ای میل',
    'phone': 'فون',
    'whatsapp': 'واٹس ایپ',
    'getInTouch': 'ہم سے رابطہ کریں',
    
    // Help
    'frequentlyAsked': 'اکثر پوچھے جانے والے سوالات',
    'howToOrder': 'آرڈر کیسے دیں؟',
    'deliveryInfo': 'ڈیلیوری کی معلومات',
    'paymentMethods': 'ادائیگی کے طریقے',
    'returnPolicy': 'واپسی کی پالیسی',
    
    // Edit Profile
    'editYourProfile': 'اپنی پروفائل میں ترمیم کریں',
    'fullName': 'پورا نام',
    'phoneNo': 'فون نمبر',
    'saveChanges': 'تبدیلیاں محفوظ کریں',
    'profileUpdated': 'پروفائل کامیابی سے اپ ڈیٹ ہو گئی',
    
    // Common
    'back': 'واپس',
    'cancel': 'منسوخ کریں',
    'save': 'محفوظ کریں',
    'delete': 'حذف کریں',
    'edit': 'ترمیم کریں',
    'add': 'شامل کریں',
    'remove': 'ہٹائیں',
    'yes': 'ہاں',
    'no': 'نہیں',
    'ok': 'ٹھیک ہے',
    'close': 'بند کریں',
    'viewAll': 'سب دیکھیں',
    'viewDetails': 'تفصیلات دیکھیں',
    'loading': 'لوڈ ہو رہا ہے...',
    'error': 'خرابی',
    'success': 'کامیاب',
    'confirm': 'تصدیق کریں',
    'apply': 'لگائیں',
    'clear': 'صاف کریں',
    
    // Filter and Sort
    'priceRange': 'قیمت کی محدودیت',
    'minimum': 'کم از کم',
    'maximum': 'زیادہ سے زیادہ',
    'checkAll': 'سب چیک کریں',
    'dairyProducts': 'ڈیری مصنوعات',
    'foods': 'مصنوعات',
    'vegetables': 'سبزیاں',
    'healthcare': 'سلامت کی خدمات',
    'others': 'دیگر',
    
    // More Screen
    'more': 'مزید',
    'language': 'زبان',
    'fontSize': 'فونٹ کا سائز',
    'helpCenter': 'مدد مرکز',
    'privacyPolicy': 'خصوصیت کی سیاست',
    'termsConditions': 'شرایط اور شرایط',
    'aboutUs': 'ہمارے بارے میں',
    
    // My Bag / Cart
    'myBag': 'میری ٹوکری',
    'paymentConfirmed': 'ادائیگی کی تصدیق ہو گئی',
    'thankYouForOrder': 'آپ کے آرڈر کا شکریہ!',
    'orderNumber': 'آرڈر نمبر',
    'trackOrder': 'آرڈر ٹریک کریں',
    'backToHome': 'ہوم پر واپس جائیں',
    
    // Registration & Password
    'choosePassword': 'پاس ورڈ منتخب کریں',
    'enterPassword': 'پاس ورڈ درج کریں',
    'confirmPassword': 'پاس ورڈ کی تصدیق کریں',
    'finishGoodToGo': 'مکمل کریں، آگے بڑھیں',
    'forgotPassword': 'پاس ورڈ بھول گئے؟',
    'pleaseEnterPassword': 'جاری رکھنے کے لیے پاس ورڈ درج کریں',
    'forSecuritySafety': 'امن اور ایمنیت کے لیے پاس ورڈ منتخب کریں',
    
    // Order Status
    'orderProcessing': 'آرڈر پردازش ہو رہا ہے',
    'orderScheduled': 'آرڈر ترتیب دیا گیا ہے',
    'orderConfirmed': 'آرڈر کی تصدیق ہو گئی',
    'orderConfirmedMessage': 'آپ کا آرڈر تصدیق ہو گیا ہے۔ کیا آپ تمام چیزیں صحیح ہیں؟',
    'outForDelivery': 'ڈیلیوری کے لیے بہر ہو گئی',
    'delivered': 'ڈیلیور کر دیا گیا',
    'estimatedDelivery': 'تخمینہ ڈیلیوری',
    'orderDetails': 'آرڈر کی تفصیلات',
    'viewDetails': 'تفصیلات دیکھیں',
    'collapse': 'کلاپس کریں',
    'expand': 'بھیڑھائیں',
    
    // Chat
    'chatWithUs': 'ہم سے بات کریں',
    'chatGreeting': "آلسالم او آلاکیم! میں کراوے ایسیست ہوں۔ آج میں آپ کی کیسے مدد کر سکتا ہوں؟",
    'chatSuggestion1': 'میں ایک ری فنڈ چاہتا ہوں',
    'chatSuggestion2': "ڈیلیوری خوب نہیں ہے",
    'chatSuggestion3': 'ڈیلیوری دیر ہے',
    'chatSuggestion4': 'میرے آرڈر کو ٹریک کریں',
    'writeMessage': 'پیغام لکھیں',
    'endChat': 'بات ختم کریں',
    
    // Search Popular Terms
    'popularSearch1': 'چاول',
    'popularSearch2': 'روٹی',
    'popularSearch3': 'بسکٹ',
    'popularSearch4': 'دودھ',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Load language from localStorage or default to 'english'
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('kravemart-language');
      return (savedLanguage === 'urdu' || savedLanguage === 'english') ? savedLanguage : 'english';
    }
    return 'english';
  });

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('kravemart-language', language);
    }
  }, [language]);

  const t = (key: string): string => {
    // Handle nested keys like 'password_screen.security_message'
    if (key.includes('.')) {
      const keys = key.split('.');
      let value: any = translations[language];
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) return key;
      }
      return typeof value === 'string' ? value : key;
    }
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}