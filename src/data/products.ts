import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    "id": "veg-01",
    "arabic_name": "طماطم بلدي فرز أول",
    "english_name": "Fresh Red Tomatoes",
    "category": "vegetables",
    "description": "طماطم بلدي حمراء مستوية ومشدودة، مثالية للطبخ والسلطة الطازجة، مختارة حبة بحبة.",
    "search_aliases": [
      "طماطم",
      "قوطة",
      "بندورة",
      "طماطم بلدي",
      "tomato",
      "tomatoes"
    ],
    "image_url": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو",
      "3 كيلو",
      "5 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-04",
    "arabic_name": "بطاطس تحمير سبونتا",
    "english_name": "Crispy Frying Potatoes",
    "category": "vegetables",
    "description": "بطاطس تحمير جودة ممتازة، مقرمشة وذهبية من الخارج وطرية من الداخل.",
    "search_aliases": [
      "بطاطس",
      "بطاطا",
      "بطاطس تحمير",
      "سبونتا",
      "potato",
      "potatoes"
    ],
    "image_url": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو",
      "3 كيلو",
      "5 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-06",
    "arabic_name": "بصل أحمر بلدي",
    "english_name": "Red Onion",
    "category": "vegetables",
    "description": "بصل أحمر غني بالنكهة والمذاق الحار المتوازن، مثالي للسلطات والطهي المصري الأصيل.",
    "search_aliases": [
      "بصل",
      "بصل احمر",
      "بصل بلدي",
      "red onion"
    ],
    "image_url": "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو",
      "3 كيلو",
      "5 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-07",
    "arabic_name": "بصل أبيض سكري",
    "english_name": "White Sweet Onion",
    "category": "vegetables",
    "description": "بصل أبيض خفيف وناعم المذاق، خيار مثالي للشوي والبرجر والسلطات الطازجة.",
    "search_aliases": [
      "بصل ابيض",
      "بصل حلو",
      "بصل سكري",
      "white onion"
    ],
    "image_url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-08",
    "arabic_name": "بصل ذهبي جاف",
    "english_name": "Yellow Onion",
    "category": "vegetables",
    "description": "بصل ذهبي كلاسيكي عالي التركيز، ممتاز للتقلية والطواجن والشوربات.",
    "search_aliases": [
      "بصل ذهبي",
      "بصل اصفر",
      "yellow onion"
    ],
    "image_url": "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "2 كيلو",
      "3 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-10",
    "arabic_name": "ثوم أحمر صيني كبير",
    "english_name": "Purple Garlic",
    "category": "vegetables",
    "description": "ثوم أحمر فصوص كبيرة سهلة التقشير، عالي الجودة ومناسب للتخزين اليومي.",
    "search_aliases": [
      "ثوم احمر",
      "توم احمر",
      "ثوم كبير",
      "purple garlic"
    ],
    "image_url": "https://images.unsplash.com/photo-1584839446487-1725b7418b76?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "نصف كيلو"
  },
  {
    "id": "veg-12",
    "arabic_name": "خيار صوب فاخر",
    "english_name": "Greenhouse English Cucumber",
    "category": "vegetables",
    "description": "خيار صوب طويل ناعم الملمس متساوي الحجم، ممتاز للتقطيع السريع والساندويتشات.",
    "search_aliases": [
      "خيار صوب",
      "خيار طويل",
      "english cucumber"
    ],
    "image_url": "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-18",
    "arabic_name": "باذنجان رومي أسود للمسقعة",
    "english_name": "Black Beauty Eggplant",
    "category": "vegetables",
    "description": "باذنجان رومي أسود لامع، خفيف وخالٍ من البذور، مثالي للمسقعة والبابا غنوج.",
    "search_aliases": [
      "باذنجان رومي",
      "بتنجان رومي",
      "بتنجان مسقعة",
      "eggplant",
      "aubergine"
    ],
    "image_url": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-16",
    "arabic_name": "كوسة بلدي طازجة",
    "english_name": "Fresh Green Zucchini",
    "category": "vegetables",
    "description": "كوسة خضراء فاتحة صغيرة الحجم وطرية، مثالية للمحشي والطبيخ والشوربات الصحية.",
    "search_aliases": [
      "كوسة",
      "كوسا",
      "كوسه",
      "zucchini",
      "courgette"
    ],
    "image_url": "https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-14",
    "arabic_name": "جزر أصفر خاص",
    "english_name": "Yellow Heritage Carrots",
    "category": "vegetables",
    "description": "جزر بلون أصفر طبيعي فريد، طعم خفيف وحلاوة هادئة لخلطات الخضار والسلطات.",
    "search_aliases": [
      "جزر اصفر",
      "جزر الوان",
      "yellow carrot"
    ],
    "image_url": "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "نصف كيلو"
  },
  {
    "id": "veg-02",
    "arabic_name": "طماطم شيري كرزية",
    "english_name": "Cherry Tomatoes",
    "category": "vegetables",
    "description": "طماطم كرزية شيري سكرية المذاق، مقرمشة وحلوة ومثالية للسلطات والمقبلات.",
    "search_aliases": [
      "شيري",
      "طماطم شيري",
      "طماطم كرزية",
      "طماطم صغيرة",
      "cherry tomato"
    ],
    "image_url": "https://images.unsplash.com/photo-1546470427-e26264be0b11?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "طبق",
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "veg-03",
    "arabic_name": "طماطم صفراء شيري",
    "english_name": "Yellow Cherry Tomatoes",
    "category": "vegetables",
    "description": "طماطم صفراء كرزية ذات نكهة غنية خفيفة الحموضة، تضيف لوناً مميزاً لأطباقك.",
    "search_aliases": [
      "طماطم صفرا",
      "شيري صفراء",
      "yellow tomato"
    ],
    "image_url": "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "طبق",
      "نصف كيلو"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "veg-05",
    "arabic_name": "بطاطس صغيرة للتحمير والسلق (بيبي بوتيتو)",
    "english_name": "Baby Potatoes",
    "category": "vegetables",
    "description": "حبات بطاطس صغيرة ناعمة القشرة، رائعة للشوي في الفرن بالأعشاب أو السلق.",
    "search_aliases": [
      "بيبي بوتيتو",
      "بطاطس صغيرة",
      "بطاطس شوي",
      "baby potato"
    ],
    "image_url": "https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-09",
    "arabic_name": "ثوم بلدي أبيض",
    "english_name": "White Fresh Garlic",
    "category": "vegetables",
    "description": "ثوم بلدي مصري فصوص قوية ذات رائحة عطرية نفاذة ونقاء ممتاز.",
    "search_aliases": [
      "توم",
      "ثوم",
      "ثوم بلدي",
      "garlic"
    ],
    "image_url": "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "نصف كيلو",
      "كيلو",
      "ربع كيلو"
    ],
    "default_unit": "نصف كيلو"
  },
  {
    "id": "veg-11",
    "arabic_name": "خيار بلدي طازج",
    "english_name": "Crisp Green Cucumbers",
    "category": "vegetables",
    "description": "خيار بلدي رفيع مقرمش طازج يوم بيوم، خالٍ من المرارة ومثالي للإفطار والسلطة.",
    "search_aliases": [
      "خيار",
      "خيار بلدي",
      "خيار سلطة",
      "cucumber"
    ],
    "image_url": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-13",
    "arabic_name": "جزر سكري أحمر",
    "english_name": "Fresh Crunchy Carrots",
    "category": "vegetables",
    "description": "جزر برتقالي زاهي طازج وحلو المذاق، رائع للعصير والسلطة والمقبلات والطهي.",
    "search_aliases": [
      "جزر",
      "جزر اصفر",
      "جزر سكري",
      "carrot",
      "carrots"
    ],
    "image_url": "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-15",
    "arabic_name": "جزر بنفسجي بلدي",
    "english_name": "Purple Carrots",
    "category": "vegetables",
    "description": "جزر بنفسجي غني بمضادات الأكسدة، نكهة ترابية عميقة ومظهر مذهل في الأطباق.",
    "search_aliases": [
      "جزر بنفسجي",
      "جزر اسود",
      "purple carrot"
    ],
    "image_url": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "نصف كيلو"
  },
  {
    "id": "veg-17",
    "arabic_name": "كوسة صفراء نادرة",
    "english_name": "Yellow Zucchini",
    "category": "vegetables",
    "description": "كوسة صفراء زاهية حلوة القوام، رائعة للشوي مع زيت الزيتون والأعشاب.",
    "search_aliases": [
      "كوسة صفراء",
      "كوسة ملونة",
      "yellow zucchini"
    ],
    "image_url": "https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "نصف كيلو"
  },
  {
    "id": "veg-19",
    "arabic_name": "باذنجان عروس أسود",
    "english_name": "Long Black Eggplant",
    "category": "vegetables",
    "description": "باذنجان عروس رفيع أسود، مختار بعناية للمحشي والباذنجان المخلل بالثوم والخل.",
    "search_aliases": [
      "باذنجان عروس",
      "بتنجان محشي",
      "بتنجان مخلل",
      "black eggplant"
    ],
    "image_url": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-20",
    "arabic_name": "باذنجان عروس أبيض",
    "english_name": "White Long Eggplant",
    "category": "vegetables",
    "description": "باذنجان أبيض بلدي ناعم، رقيق القشرة وشهي للمحشي المصري الأصلي.",
    "search_aliases": [
      "باذنجان ابيض",
      "بتنجان ابيض",
      "بتنجان عروس ابيض",
      "white eggplant"
    ],
    "image_url": "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-21",
    "arabic_name": "فلفل رومي أخضر بلدي",
    "english_name": "Green Bell Pepper",
    "category": "vegetables",
    "description": "فلفل أخضر رومي سميك الجدار ومنعش، رائع للمحشي والسلطات وحشوات الشاورما.",
    "search_aliases": [
      "فلفل اخضر",
      "فلفل رومي",
      "فلفل بارد",
      "green pepper"
    ],
    "image_url": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-22",
    "arabic_name": "فلفل ألوان أحمر حلو",
    "english_name": "Red Bell Pepper",
    "category": "vegetables",
    "description": "فلفل أحمر حلو سميك ولامع، مليء بفيتامين سي ومثالي للفاهيتا والمقبلات.",
    "search_aliases": [
      "فلفل احمر",
      "فلفل الوان احمر",
      "red pepper"
    ],
    "image_url": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-23",
    "arabic_name": "فلفل ألوان أصفر حلو",
    "english_name": "Yellow Bell Pepper",
    "category": "vegetables",
    "description": "فلفل أصفر سكري منعش ذو لمعان جذاب، يمنح الأطباق طعماً مميزاً وحيوية.",
    "search_aliases": [
      "فلفل اصفر",
      "فلفل الوان اصفر",
      "yellow pepper"
    ],
    "image_url": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-24",
    "arabic_name": "فلفل ألوان برتقالي",
    "english_name": "Orange Bell Pepper",
    "category": "vegetables",
    "description": "فلفل برتقالي حلو المذاق ومقرمش، مثالي للسلطات والصواني والوجبات العصرية.",
    "search_aliases": [
      "فلفل برتقالي",
      "فلفل الوان برتقالي",
      "orange pepper"
    ],
    "image_url": "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-25",
    "arabic_name": "فلفل حار بلدي أخضر (شطة)",
    "english_name": "Fresh Hot Green Chili",
    "category": "vegetables",
    "description": "قرون فلفل أخضر حار ناري المذاق، لمحبي التتبيلات القوية والدقة المصرية.",
    "search_aliases": [
      "فلفل حار",
      "شطة خضرا",
      "قرون شطة",
      "chili pepper"
    ],
    "image_url": "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربع كيلو",
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "ربع كيلو"
  },
  {
    "id": "veg-26",
    "arabic_name": "فلفل أحمر حار شطة",
    "english_name": "Red Hot Chili Peppers",
    "category": "vegetables",
    "description": "شطة حمراء طازجة لعمل هريسة الشطة والتتبيلات الحارة الشهية.",
    "search_aliases": [
      "شطة حمرا",
      "فلفل احمر حار",
      "هريسة",
      "red chili"
    ],
    "image_url": "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربع كيلو",
      "نصف كيلو"
    ],
    "default_unit": "ربع كيلو"
  },
  {
    "id": "veg-27",
    "arabic_name": "فلفل هالبينو طازج",
    "english_name": "Jalapeño Peppers",
    "category": "vegetables",
    "description": "فلفل هالبينو مكسيكي متوازن الحرارة، ممتلئ ومناسب للمخلل والشوي والصلصات.",
    "search_aliases": [
      "هالبينو",
      "جلابينو",
      "jalapeno"
    ],
    "image_url": "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "نصف كيلو"
  },
  {
    "id": "veg-28",
    "arabic_name": "خس كابوتشا مدور",
    "english_name": "Iceberg Lettuce",
    "category": "vegetables",
    "description": "رأس خس كابوتشا متماسكة ومقرمشة، محتفظة برطوبتها الكاملة لأروع ساندويتشات وسلطات.",
    "search_aliases": [
      "كابوتشا",
      "خس كابوتشي",
      "خس مدور",
      "iceberg lettuce"
    ],
    "image_url": "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة",
      "2 قطعة",
      "3 قطعة"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "veg-29",
    "arabic_name": "خس بلدي طويل",
    "english_name": "Egyptian Romaine Lettuce",
    "category": "vegetables",
    "description": "خس بلدي مصري طويل الأوراق طازج ومقرمش، رمز الأصالة على سفرة الإفطار والعشاء.",
    "search_aliases": [
      "خس بلدي",
      "خس مصري",
      "lettuce"
    ],
    "image_url": "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "2 ربطة",
      "قطعة"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "veg-30",
    "arabic_name": "كرنب بلدي للمحشي",
    "english_name": "White Cabbage",
    "category": "vegetables",
    "description": "كرنبة بلدي مفروشة رقيقة الأوراق، مسكرة ومثالية لأشهى حلة محشي مصري.",
    "search_aliases": [
      "كرنب",
      "ملفوف",
      "كرنب محشي",
      "cabbage"
    ],
    "image_url": "https://images.unsplash.com/photo-1611105637889-3e75a3449339?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "قطعة",
      "2 قطعة"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "veg-31",
    "arabic_name": "كرنب أحمر كول سلو",
    "english_name": "Red Purple Cabbage",
    "category": "vegetables",
    "description": "كرنب أحمر قرمشة استثنائية ولون بنفسجي عميق، لسلطة الكول سلو والأطباق الراقية.",
    "search_aliases": [
      "كرنب احمر",
      "ملفوف بنفسجي",
      "كول سلو",
      "red cabbage"
    ],
    "image_url": "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة",
      "نصف قطعة"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "veg-32",
    "arabic_name": "قرنبيط بلدي طازج",
    "english_name": "Fresh Cauliflower",
    "category": "vegetables",
    "description": "زهرة قرنبيط بيضاء ناصعة كثيفة الحبات، ممتازة للقلي المقرمش أو الطواجن الصحية.",
    "search_aliases": [
      "قرنبيط",
      "زهرة",
      "شيفلور",
      "cauliflower"
    ],
    "image_url": "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "قطعة",
      "2 قطعة"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "veg-33",
    "arabic_name": "بروكلي أخضر طازج",
    "english_name": "Fresh Green Broccoli",
    "category": "vegetables",
    "description": "رؤوس بروكلي خضراء داكنة مقرمشة وغنية بالمعادن، مثالية للطهي على البخار والشوربات.",
    "search_aliases": [
      "بروكلي",
      "بروكولي",
      "broccoli"
    ],
    "image_url": "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة",
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "veg-34",
    "arabic_name": "بامية بلدي ناعمة (قمعة خضراء)",
    "english_name": "Tender Fresh Okra",
    "category": "vegetables",
    "description": "بامية فلاحي صغيرة خضراء بدون شوك، منتقاة بالواحدة لأشهى طاجن بامية باللحمة.",
    "search_aliases": [
      "بامية",
      "باميه",
      "بامية بلدي",
      "okra"
    ],
    "image_url": "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "نصف كيلو"
  },
  {
    "id": "veg-35",
    "arabic_name": "فاصوليا خضراء بلدي",
    "english_name": "Green Snap Beans",
    "category": "vegetables",
    "description": "فاصوليا خضراء رفيعة طرية، تقرمش في اليد وخالية من الخيوط، مثالية للسوتيه والصلصة.",
    "search_aliases": [
      "فاصوليا",
      "فاصوليا خضرا",
      "green beans"
    ],
    "image_url": "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "نصف كيلو"
  },
  {
    "id": "veg-36",
    "arabic_name": "بسلة خضراء سكرية طازجة",
    "english_name": "Fresh Green Peas",
    "category": "vegetables",
    "description": "بسلة سكرية قرون مليانة حبات خضراء ناضجة، لذيذة الطعم وسريعة التسوية.",
    "search_aliases": [
      "بسلة",
      "بازلاء",
      "بسله",
      "peas",
      "green peas"
    ],
    "image_url": "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-37",
    "arabic_name": "سبانخ بلدي خضراء",
    "english_name": "Fresh Baby Spinach",
    "category": "vegetables",
    "description": "سبانخ فلاحي عريضة الأوراق طرية ونظيفة، مليئة بالحديد ومثالية للفطائر والطبخ.",
    "search_aliases": [
      "سبانخ",
      "سبانخ بلدي",
      "spinach"
    ],
    "image_url": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "ربطة"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-38",
    "arabic_name": "ملوخية خضراء فلاحي طازجة",
    "english_name": "Egyptian Molokhia Leaves",
    "category": "vegetables",
    "description": "ملوخية خضراء بلدي عروق قصيرة وأوراق مورقة نضرة، لألذ ملوخية بالطشة والثوم.",
    "search_aliases": [
      "ملوخية",
      "ملوخيه",
      "ملوخية خضرا",
      "molokhia",
      "jute leaves"
    ],
    "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-39",
    "arabic_name": "بنجر أحمر سكري (شمندر)",
    "english_name": "Sweet Beetroot",
    "category": "vegetables",
    "description": "بنجر أحمر داكن مليء بالعصارة واللون القرمزي الجميل، للعصائر الطبيعية والسلطات.",
    "search_aliases": [
      "بنجر",
      "شمندر",
      "beetroot",
      "beets"
    ],
    "image_url": "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-40",
    "arabic_name": "فجل أحمر كروي بلدي",
    "english_name": "Crispy Red Radish",
    "category": "vegetables",
    "description": "فجل أحمر مدور صغير مقرمش ولاذع بشكل منعش، يزين مائدة الطعام اليومية.",
    "search_aliases": [
      "فجل",
      "فجل احمر",
      "radish"
    ],
    "image_url": "https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "2 ربطة",
      "نصف كيلو"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "veg-41",
    "arabic_name": "فجل أبيض بلدي",
    "english_name": "White Daikon Radish",
    "category": "vegetables",
    "description": "فجل أبيض بلدي مميز بالنكهة الحريفة الخفيفة والقرمشة الممتازة.",
    "search_aliases": [
      "فجل ابيض",
      "فجل مصري",
      "white radish"
    ],
    "image_url": "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "كيلو"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "veg-42",
    "arabic_name": "لفت بلدي للتخليل",
    "english_name": "Fresh Turnips",
    "category": "vegetables",
    "description": "لفت بلدي فلاحي طازج، ممتلئ ومناسب جداً لإعداد أشهى مخلل لفت وردي بالبنجر.",
    "search_aliases": [
      "لفت",
      "لفت مخلل",
      "turnip"
    ],
    "image_url": "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو",
      "3 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-43",
    "arabic_name": "بطاطا حلوة سكرية مشوية",
    "english_name": "Sweet Potatoes",
    "category": "vegetables",
    "description": "بطاطا حمراء سكرية عسلية المذاق عند الشوي في الفرن، دافئة ومغذية للأطفال والكبار.",
    "search_aliases": [
      "بطاطا",
      "بطاطا حلوة",
      "sweet potato"
    ],
    "image_url": "https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "2 كيلو",
      "3 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-44",
    "arabic_name": "قرع عسلي بيبي (بترنات)",
    "english_name": "Butternut Squash",
    "category": "vegetables",
    "description": "قرع عسلي كروي ناعم اللحم ولذيذ جداً لصواني البشاميل الحلوة وشوربة الخضار الكريمية.",
    "search_aliases": [
      "قرع عسلي",
      "قرع",
      "بترنات",
      "butternut squash"
    ],
    "image_url": "https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "قطعة",
      "كيلو"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "veg-45",
    "arabic_name": "يقطين بلدي كبير",
    "english_name": "Round Heritage Pumpkin",
    "category": "vegetables",
    "description": "يقطين برتقالي لحم كثيف وحلاوة طبيعية، رائع للحلويات والشوربات العالمية.",
    "search_aliases": [
      "يقطين",
      "قرع كبير",
      "pumpkin"
    ],
    "image_url": "https://images.unsplash.com/photo-1506917728037-b6af01a7d403?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "قطعة",
      "نصف قطعة"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "veg-46",
    "arabic_name": "خرشوف بلدي طازج",
    "english_name": "Fresh Globe Artichokes",
    "category": "vegetables",
    "description": "حبات خرشوف بلدي كبيرة مليئة بالقلب الأبيض اللذيذ، للمحشي والطهي مع اللحم المفروم.",
    "search_aliases": [
      "خرشوف",
      "أرضي شوكي",
      "artichoke"
    ],
    "image_url": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "قطعة",
      "3 قطع",
      "5 قطع"
    ],
    "default_unit": "3 قطع"
  },
  {
    "id": "veg-47",
    "arabic_name": "قلقاس بلدي منوفي",
    "english_name": "Taro Root",
    "category": "vegetables",
    "description": "قلقاس مصري ممتاز ذو قوام زبدة طري بعد الطهي بالسلق والشوربة الدسمة.",
    "search_aliases": [
      "قلقاس",
      "قلقاس بلدي",
      "taro root"
    ],
    "image_url": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "veg-48",
    "arabic_name": "ذرة سكرية صفراء طازجة",
    "english_name": "Sweet Golden Corn",
    "category": "vegetables",
    "description": "أكواز ذرة صفراء سكرية طرية الحبوب، لذيذة جداً للسلق والشوي مع الزبدة.",
    "search_aliases": [
      "ذرة صفرا",
      "ذرة سكرية",
      "كوز ذرة",
      "sweet corn"
    ],
    "image_url": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة",
      "3 قطع",
      "صندوق"
    ],
    "default_unit": "3 قطع"
  },
  {
    "id": "veg-49",
    "arabic_name": "ذرة بيضاء بلدي للشوي",
    "english_name": "Fresh White Roasting Corn",
    "category": "vegetables",
    "description": "أكواز ذرة بيضاء مصرية حبات ريانة، نكهة الشارع المصري الأصيل على الفحم.",
    "search_aliases": [
      "ذرة بيضاء",
      "ذرة شوي",
      "white corn"
    ],
    "image_url": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "3 قطع",
      "5 قطع"
    ],
    "default_unit": "3 قطع"
  },
  {
    "id": "veg-50",
    "arabic_name": "مشروم أبيض طازج (عيش الغراب)",
    "english_name": "Fresh Button Mushrooms",
    "category": "vegetables",
    "description": "فطر مشروم أبيض مغلق الحبات ناصع ونظيف، للباستا والبيتزا والشوربات الغنية.",
    "search_aliases": [
      "مشروم",
      "عيش الغراب",
      "فطر",
      "mushroom"
    ],
    "image_url": "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "طبق",
      "نصف كيلو"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "veg-51",
    "arabic_name": "كرات مصري بلدي",
    "english_name": "Egyptian Leeks",
    "category": "vegetables",
    "description": "كرات بلدي أخضر نضر، المكون الأساسي لعجينة الطعمية المصرية المقرمشة والسلطة.",
    "search_aliases": [
      "كرات",
      "كرات مصري",
      "كرات بلدي",
      "leek"
    ],
    "image_url": "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "2 ربطة",
      "3 ربطة"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "veg-52",
    "arabic_name": "كرفس بلدي للشربة",
    "english_name": "Fresh Local Celery",
    "category": "vegetables",
    "description": "أعواد وأوراق كرفس بلدي قوية الرائحة، تعطي أروع نكهة لشوربة اللحوم والدجاج.",
    "search_aliases": [
      "كرفس",
      "كرفس بلدي",
      "celery"
    ],
    "image_url": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "2 ربطة"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "veg-53",
    "arabic_name": "كرفس فرنساوي عريض (أبيو)",
    "english_name": "Crispy French Celery Sticks",
    "category": "vegetables",
    "description": "سيقان كرفس فرنساوي عريضة سميكة ومقرمشة، ممتازة لعصير الديتوكس وتغميسات التونة.",
    "search_aliases": [
      "كرفس فرنساوي",
      "كرفس امريكي",
      "سيقان كرفس",
      "french celery"
    ],
    "image_url": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة",
      "كيلو"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "veg-54",
    "arabic_name": "شمر طازج ذو البصيلة البيضاء",
    "english_name": "Fresh Fennel Bulb",
    "category": "vegetables",
    "description": "شمر طازج بنكهة يانسونية لطيفة مقرمشة، يضاف طازجاً للسلطات أو مشوياً مع الأسماك.",
    "search_aliases": [
      "شمر",
      "شمار",
      "حبة حلاوة",
      "fennel"
    ],
    "image_url": "https://images.unsplash.com/photo-1515471204630-f166048298c6?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة",
      "كيلو"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "veg-55",
    "arabic_name": "هليون أخضر طازج (أسبارجوس)",
    "english_name": "Fresh Green Asparagus",
    "category": "vegetables",
    "description": "أعواد هليون خضراء ناعمة وغنية، ممتازة للتشويح السريع مع الزبدة والثوم وشرائح الستيك.",
    "search_aliases": [
      "هليون",
      "اسبارجوس",
      "asparagus"
    ],
    "image_url": "https://images.unsplash.com/photo-1515471204630-f166048298c6?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "طبق"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "veg-56",
    "arabic_name": "كرنب بروكسل صغير",
    "english_name": "Brussels Sprouts",
    "category": "vegetables",
    "description": "كرنب بروكسل حبات صغيرة مقرمشة، رائعة للشوي بالفرن وتحميرها مع زيت الزيتون.",
    "search_aliases": [
      "بروكسل",
      "كرنب صغير",
      "brussels sprouts"
    ],
    "image_url": "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "طبق",
      "نصف كيلو"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "veg-57",
    "arabic_name": "كرنب صيني بوك تشوي",
    "english_name": "Bok Choy Cabbage",
    "category": "vegetables",
    "description": "خضار آسيوي هش وناعم، مثالي لأطباق النودلز والشوربات الآسيوية وسوتيه الووك.",
    "search_aliases": [
      "بوك تشوي",
      "كرنب صيني",
      "bok choy"
    ],
    "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة",
      "نصف كيلو"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "veg-58",
    "arabic_name": "بصل أخضر فلاحي",
    "english_name": "Fresh Spring Onions",
    "category": "vegetables",
    "description": "حزم بصل أخضر مورقة برؤوس بيضاء ناصعة، ترافق الفول والفلافل والسلطة يومياً.",
    "search_aliases": [
      "بصل اخضر",
      "green onion",
      "scallions"
    ],
    "image_url": "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "2 ربطة",
      "3 ربطة"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "veg-59",
    "arabic_name": "زنجبيل طازج حار",
    "english_name": "Fresh Ginger Root",
    "category": "vegetables",
    "description": "جذور زنجبيل طازجة ذات حرافة طبيعية ورائحة فواحة مميزة، للشاي الصحي والتتبيل.",
    "search_aliases": [
      "زنجبيل",
      "جنزبيل",
      "ginger"
    ],
    "image_url": "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربع كيلو",
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "ربع كيلو"
  },
  {
    "id": "veg-60",
    "arabic_name": "كركم طازج جذور",
    "english_name": "Fresh Raw Turmeric Root",
    "category": "vegetables",
    "description": "جذور كركم طازجة برتقالية اللون ومحملة بمضادات الأكسدة ومادة الكركمين الفعالة.",
    "search_aliases": [
      "كركم",
      "كركم طازج",
      "turmeric"
    ],
    "image_url": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربع كيلو",
      "نصف كيلو"
    ],
    "default_unit": "ربع كيلو"
  },
  {
    "id": "fruit-01",
    "arabic_name": "تفاح أحمر سكري إيطالي",
    "english_name": "Crisp Red Gala Apples",
    "category": "fruits",
    "description": "تفاح أحمر مقرمش حلو السكر ولامع، عالي الجودة ومحبوب لجميع أفراد الأسرة.",
    "search_aliases": [
      "تفاح",
      "تفاح احمر",
      "تفاح سكري",
      "red apple",
      "apples"
    ],
    "image_url": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو",
      "صندوق"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-02",
    "arabic_name": "تفاح أخضر جراني سميث حامض",
    "english_name": "Granny Smith Green Apples",
    "category": "fruits",
    "description": "تفاح أخضر حامض مقرمش جداً ومنعش، خيار مفضل للرجيم والعصائر وسلطات الفواكه.",
    "search_aliases": [
      "تفاح اخضر",
      "تفاح دايت",
      "جراني سميث",
      "green apple"
    ],
    "image_url": "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-07",
    "arabic_name": "برتقال بلدي للعصير الطبيعي",
    "english_name": "Juicy Valencia Oranges",
    "category": "fruits",
    "description": "برتقال عصير ممتلئ بالسائل الذهبي وغني بفيتامين سي، لأروع عصير صباحي فريش.",
    "search_aliases": [
      "برتقال عصير",
      "برتقال بلدي",
      "برتقال صيفي",
      "juicing orange"
    ],
    "image_url": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "2 كيلو",
      "3 كيلو",
      "5 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-09",
    "arabic_name": "يوسفي بلدي فلاحي مسكر",
    "english_name": "Sweet Baladi Tangerines",
    "category": "fruits",
    "description": "يوسفي بلدي برائحة قشرته الشهيرة التي تملأ المكان، مسكر وغني بالعصير.",
    "search_aliases": [
      "يوسفي",
      "استفندي",
      "يوسف افندي",
      "tangerine",
      "mandarin"
    ],
    "image_url": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو",
      "3 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-15",
    "arabic_name": "مانجو عويس إسماعيلية فاخرة",
    "english_name": "Premium Oweis Mango",
    "category": "fruits",
    "description": "ملكة المانجو المصرية، حلاوة عسلية مركزة ولحم خالي من الألياف، تجربة تذوق استثنائية.",
    "search_aliases": [
      "مانجو",
      "مانجا",
      "عويس",
      "مانجو عويس",
      "mango",
      "oweis"
    ],
    "image_url": "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو",
      "كرتونة"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-18",
    "arabic_name": "مانجو كيت متماسكة",
    "english_name": "Keitt Mango",
    "category": "fruits",
    "description": "مانجو كيت حبة كبيرة لحيمة متماسكة، ممتازة للتخزين وعمل مكعبات التورتات والحلويات.",
    "search_aliases": [
      "مانجو كيت",
      "كيت",
      "keitt mango"
    ],
    "image_url": "https://images.unsplash.com/photo-1605027990121-cbae9e0642df?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو",
      "كرتونة"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-04",
    "arabic_name": "موز بلدي مصري مسكر",
    "english_name": "Sweet Baladi Bananas",
    "category": "fruits",
    "description": "موز بلدي طبيعي حلاوته مركزة وريحته فواحة، طازج ومغذي وطاقة سريعة.",
    "search_aliases": [
      "موز",
      "موز بلدي",
      "موز مسكر",
      "banana",
      "bananas"
    ],
    "image_url": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو",
      "3 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-22",
    "arabic_name": "جوافة حمراء استوائية",
    "english_name": "Pink Guava",
    "category": "fruits",
    "description": "جوافة بقلب وردي جذاب وطعم يجمع بين الحلاوة والانتعاش، رائعة للعصائر والمشروبات.",
    "search_aliases": [
      "جوافة حمراء",
      "جوافة روز",
      "pink guava"
    ],
    "image_url": "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-38",
    "arabic_name": "مشمش حموي سكري بلدي",
    "english_name": "Sweet Apricots",
    "category": "fruits",
    "description": "مشمش بلدي قطفة أولى ذهبي الخدود، طازج ورائع للأكل وصنع قمر الدين والمربى.",
    "search_aliases": [
      "مشمش",
      "مشمش بلدي",
      "مشمش حموي",
      "apricot",
      "apricots"
    ],
    "image_url": "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "طبق",
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-30",
    "arabic_name": "بطيخ أصفر سكري نادر",
    "english_name": "Yellow Flesh Watermelon",
    "category": "fruits",
    "description": "بطيخ بقلب أصفر ذهبي سكري فريد المذاق ومنعش جداً، تجربة صيفية مميزة.",
    "search_aliases": [
      "بطيخ اصفر",
      "yellow watermelon"
    ],
    "image_url": "https://images.unsplash.com/photo-1595231712325-97d40e53a39e?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "قطعة"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "fruit-03",
    "arabic_name": "تفاح أصفر جولدن فرنسي",
    "english_name": "Golden Delicious Apples",
    "category": "fruits",
    "description": "تفاح أصفر ذهبي ناعم الحلاوة ورقيق القشرة، ممتاز للأطفال ولصنع فطيرة التفاح.",
    "search_aliases": [
      "تفاح اصفر",
      "تفاح ذهبي",
      "golden apple"
    ],
    "image_url": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-05",
    "arabic_name": "موز مستورد كافنديش حبة كبيرة",
    "english_name": "Premium Cavendish Bananas",
    "category": "fruits",
    "description": "موز مستورد حبة كبيرة ناصعة الصفار، قوام كريمي مثالي ومدة حفظ أطول.",
    "search_aliases": [
      "موز مستورد",
      "موز كبير",
      "cavendish banana"
    ],
    "image_url": "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-06",
    "arabic_name": "برتقال بسرة شتوي سكري",
    "english_name": "Navel Sweet Oranges",
    "category": "fruits",
    "description": "برتقال بسرة فاخر بدون بذر، سهل التقشير وفصوصه مليانة عصير سكري شهي.",
    "search_aliases": [
      "برتقال",
      "برتقال بسرة",
      "برتقال شتوي",
      "orange",
      "oranges"
    ],
    "image_url": "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو",
      "3 كيلو",
      "صندوق"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-08",
    "arabic_name": "برتقال سكري بلدي",
    "english_name": "Sukkari Sweet Oranges",
    "category": "fruits",
    "description": "برتقال سكري منخفض الحموضة جداً، خفيف على المعدة ولذيذ للأطفال وكبار السن.",
    "search_aliases": [
      "برتقال سكري",
      "سكري",
      "sweet orange"
    ],
    "image_url": "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-10",
    "arabic_name": "كلمنتينا إسباني سهلة التقشير",
    "english_name": "Seedless Clementines",
    "category": "fruits",
    "description": "كلمنتينا ناعمة القشرة بدون بذور، حبات صغيرة لذيذة وسهلة التناول أثناء التنقل.",
    "search_aliases": [
      "كلمنتينا",
      "كلمنتين",
      "clementines"
    ],
    "image_url": "https://images.unsplash.com/photo-1616684000067-36952fde5649?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-11",
    "arabic_name": "ليمون بلدي أصفر",
    "english_name": "Fresh Yellow Lemons",
    "category": "fruits",
    "description": "ليمون بنزهير بلدي مصري عصير مركز ورائحة حمضية منعشة لا غنى عنه يومياً.",
    "search_aliases": [
      "ليمون",
      "لمون",
      "ليمون اصفر",
      "lemon"
    ],
    "image_url": "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "نصف كيلو",
      "كيلو",
      "ربع كيلو"
    ],
    "default_unit": "نصف كيلو"
  },
  {
    "id": "fruit-12",
    "arabic_name": "ليمون أضاليا كبير",
    "english_name": "Eureka Large Lemons",
    "category": "fruits",
    "description": "ليمون أضاليا كبير الحجم ممتلئ بالعصير، رائع للتتبيل وصنع أطباق الأسماك والليمونادة.",
    "search_aliases": [
      "ليمون اضاليا",
      "لمون كبير",
      "eureka lemon"
    ],
    "image_url": "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-13",
    "arabic_name": "ليمون أخضر حامض (لايم)",
    "english_name": "Fresh Green Limes",
    "category": "fruits",
    "description": "ليمون لايم أخضر نفاذ، مثالي لمشروبات الموهيتو المنعشة والخلطات المكسيكية.",
    "search_aliases": [
      "لايم",
      "ليمون اخضر",
      "lime"
    ],
    "image_url": "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "نصف كيلو"
  },
  {
    "id": "fruit-14",
    "arabic_name": "جريب فروت أحمر ياقوتي",
    "english_name": "Ruby Red Grapefruit",
    "category": "fruits",
    "description": "جريب فروت أحمر منعش غني بمضادات الأكسدة ومساعد قوي في حرق الدهون.",
    "search_aliases": [
      "جريب فروت",
      "جريبفروت",
      "grapefruit"
    ],
    "image_url": "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة",
      "كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-16",
    "arabic_name": "مانجو فص عويس نادرة",
    "english_name": "Baby Fass Oweis Mango",
    "category": "fruits",
    "description": "فصوص المانجو الصغيرة النادرة بدون بذرة تقريباً، خلاصة السكر والعطر الملكي.",
    "search_aliases": [
      "مانجو فص",
      "فص عويس",
      "baby mango"
    ],
    "image_url": "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "كرتونة"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-17",
    "arabic_name": "مانجو سكري ممتازة",
    "english_name": "Sukkari Sweet Mango",
    "category": "fruits",
    "description": "مانجو سكري إسماعيلاوي صفراء فاتحة، غارقة بالعصير الحلو ورائعة للأكل الفوري.",
    "search_aliases": [
      "مانجو سكري",
      "مانجا سكري",
      "sukkari mango"
    ],
    "image_url": "https://images.unsplash.com/photo-1601493700631-4767249ab7d3?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو",
      "كرتونة"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-19",
    "arabic_name": "مانجو تيمور عطرية",
    "english_name": "Taymour Aromatic Mango",
    "category": "fruits",
    "description": "مانجو تيمور خضراء القشرة زبدية اللحم، نكهة كلاسيكية مصرية عريقة وشهية.",
    "search_aliases": [
      "مانجو تيمور",
      "تيمور",
      "taymour mango"
    ],
    "image_url": "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-20",
    "arabic_name": "مانجو فونس زبدية هندي",
    "english_name": "Alphonso Mango",
    "category": "fruits",
    "description": "مانجو زبدية فاخرة برائحة فريدة ولون برتقالي ساحر، خيار مفضل للعصائر الملكية.",
    "search_aliases": [
      "فونس",
      "مانجو الفونسو",
      "alphonso mango"
    ],
    "image_url": "https://images.unsplash.com/photo-1601493700631-4767249ab7d3?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "كرتونة"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-21",
    "arabic_name": "جوافة بناتي بيضاء سكرية",
    "english_name": "Fragrant White Guava",
    "category": "fruits",
    "description": "جوافة بلدي بيضاء ذات رائحة فواحة مميزة، سكرية اللحم وغنية بفيتامين سي الطبيعي.",
    "search_aliases": [
      "جوافة",
      "جوافه",
      "جوافة بناتي",
      "guava"
    ],
    "image_url": "https://images.unsplash.com/photo-1536511135898-752b184e6b82?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو",
      "صندوق"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-23",
    "arabic_name": "عنب بناتي أبيض بدون بذور",
    "english_name": "White Seedless Grapes",
    "category": "fruits",
    "description": "عنب بناتي سكري بدون بذر، حبات مقرمشة ممتلئة بالعصير الحلو اللذيذ.",
    "search_aliases": [
      "عنب",
      "عنب بناتي",
      "عنب ابيض",
      "grapes",
      "white grapes"
    ],
    "image_url": "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-24",
    "arabic_name": "عنب كريمسون أحمر بدون بذور",
    "english_name": "Crimson Red Seedless Grapes",
    "category": "fruits",
    "description": "عنب أحمر كريمسون مقرمش حلو المذاق، عنقود ممتلئ بحبات ياقوتية فاخرة.",
    "search_aliases": [
      "عنب احمر",
      "عنب كريمسون",
      "red grapes"
    ],
    "image_url": "https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-25",
    "arabic_name": "عنب فليم أسود مسكر",
    "english_name": "Black Seedless Grapes",
    "category": "fruits",
    "description": "عنب أسود بدون بذر شديد الحلاوة وغني بمضادات الأكسدة ومحبوب من الجميع.",
    "search_aliases": [
      "عنب اسود",
      "عنب كحل",
      "black grapes"
    ],
    "image_url": "https://images.unsplash.com/photo-1599819177626-b50f9dd21c9b?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-26",
    "arabic_name": "عنب رومي أحمر كبير بالبذر",
    "english_name": "Red Globe Grapes",
    "category": "fruits",
    "description": "عنب رومي بلدي حبات كبيرة كروية ولحم سميك بنكهة مصرية أصيلة.",
    "search_aliases": [
      "عنب رومي",
      "عنب بلدي",
      "red globe"
    ],
    "image_url": "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-27",
    "arabic_name": "فراولة بلدي فاخرة سكرية",
    "english_name": "Fresh Sweet Strawberries",
    "category": "fruits",
    "description": "فراولة طازجة حمراء لامعة متماسكة، حلاوة طبيعية ورائحة زكية لا تقاوم.",
    "search_aliases": [
      "فراولة",
      "فراوله",
      "strawberry",
      "strawberries"
    ],
    "image_url": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "طبق",
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "fruit-28",
    "arabic_name": "رمان منفلوطي أسيوطي سكري",
    "english_name": "Sweet Ruby Pomegranates",
    "category": "fruits",
    "description": "رمان منفلوطي أحمر قاني حباته مليئة بالعصير السكري الخالي من المرارة.",
    "search_aliases": [
      "رمان",
      "رمان اسيوطي",
      "pomegranate"
    ],
    "image_url": "https://images.unsplash.com/photo-1541344999736-83eca872f242?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو",
      "صندوق"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-29",
    "arabic_name": "بطيخ جيزة أحمر على السكين",
    "english_name": "Sweet Crisp Watermelon",
    "category": "fruits",
    "description": "بطيخة حمراء مرملة ومسكرة عسل، منتقاة بعناية لترطيب حر الصيف.",
    "search_aliases": [
      "بطيخ",
      "بطيخه",
      "حبحب",
      "watermelon"
    ],
    "image_url": "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "قطعة",
      "نصف قطعة"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "fruit-31",
    "arabic_name": "شمام إسماعيلاوي عسلي",
    "english_name": "Sweet Egyptian Melon",
    "category": "fruits",
    "description": "شمام بلدي أصفر فواح، لحم أبيض كريمي غارق في الحلاوة والانتعاش.",
    "search_aliases": [
      "شمام",
      "شمام بلدي",
      "melon"
    ],
    "image_url": "https://images.unsplash.com/photo-1571575179705-4d7226e2768b?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "قطعة",
      "كيلو"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "fruit-32",
    "arabic_name": "كانتلوب أناناس سكري (عراقي)",
    "english_name": "Sweet Cantaloupe",
    "category": "fruits",
    "description": "كانتلوب بلدي مقلم باللون الأخضر والبرتقالي، سكر صافي ورائحة تفتح النفس.",
    "search_aliases": [
      "كانتلوب",
      "كنتالوب",
      "اناناس بلدي",
      "cantaloupe"
    ],
    "image_url": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو",
      "قطعة"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-33",
    "arabic_name": "خوخ سيناوي سكري فاخر",
    "english_name": "Sweet Sinai Peaches",
    "category": "fruits",
    "description": "خوخ سيناوي أصيل ذو خدود حمراء ولحم سكري فواح يذوب في الفم.",
    "search_aliases": [
      "خوخ",
      "خوخ سيناوي",
      "خوخ بلدي",
      "peach",
      "peaches"
    ],
    "image_url": "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-34",
    "arabic_name": "خوخ كعكة سكري مستورد (دونات)",
    "english_name": "Donut Flat Peaches",
    "category": "fruits",
    "description": "خوخ مبطط على شكل دونات، نواة صغيرة جداً ونسبة سكر عالية ومذاق لا يقاوم.",
    "search_aliases": [
      "خوخ كعكة",
      "خوخ دونات",
      "donut peach"
    ],
    "image_url": "https://images.unsplash.com/photo-1629853474744-4cb6bf715112?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "طبق",
      "كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-35",
    "arabic_name": "برقوق أحمر سانتوروزا",
    "english_name": "Santa Rosa Red Plums",
    "category": "fruits",
    "description": "برقوق أحمر ياقوتي يجمع بين حلاوة اللحم وحموضة القشرة اللذيذة.",
    "search_aliases": [
      "برقوق",
      "برقوق احمر",
      "plum",
      "plums"
    ],
    "image_url": "https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-36",
    "arabic_name": "برقوق أصفر سكري عسلي",
    "english_name": "Golden Sweet Plums",
    "category": "fruits",
    "description": "برقوق أصفر كهرماني ناعم وغارق بالعصارة السكرية الصافية.",
    "search_aliases": [
      "برقوق اصفر",
      "yellow plum"
    ],
    "image_url": "https://images.unsplash.com/photo-1521997888043-aa9c02742461?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-37",
    "arabic_name": "برقوق أسود أفريقي",
    "english_name": "Black Amber Plums",
    "category": "fruits",
    "description": "برقوق أسود داكن حبة كبيرة لحم عنبري متماسك وحلاوة عميقة.",
    "search_aliases": [
      "برقوق اسود",
      "black plum"
    ],
    "image_url": "https://images.unsplash.com/photo-1522184216316-3c25379f9760?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-39",
    "arabic_name": "كمثرى كوستيا بلدي مقرمشة",
    "english_name": "Crispy Baladi Pears",
    "category": "fruits",
    "description": "كمثرى مصرية خفيفة الحلاوة ومنعشة مع قرمشة لطيفة وعصارة ممتازة.",
    "search_aliases": [
      "كمثرى",
      "كمثرا",
      "اجاص",
      "pear",
      "pears"
    ],
    "image_url": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-40",
    "arabic_name": "كمثرى أمريكي بارتلت زبدية",
    "english_name": "Bartlett Sweet Pears",
    "category": "fruits",
    "description": "كمثرى بارتلت صفراء ذهبية ناعمة كالحرير، تذوب باللسان بحلاوتها الغنية.",
    "search_aliases": [
      "كمثرى امريكي",
      "بارتلت",
      "bartlett pear"
    ],
    "image_url": "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-41",
    "arabic_name": "كمثرى ناشي آسيوية دائرية",
    "english_name": "Asian Nashi Pears",
    "category": "fruits",
    "description": "كمثرى كروية تشبه التفاح، مليئة بالماء المقرمش الحلو وتمنح انتعاشاً فورياً.",
    "search_aliases": [
      "كمثرى اسيوية",
      "ناشي",
      "asian pear"
    ],
    "image_url": "https://images.unsplash.com/photo-1579613832125-5d34a13ffe0a?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "قطعة"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-42",
    "arabic_name": "تين برشومي أسود مطروح",
    "english_name": "Fresh Black Mission Figs",
    "category": "fruits",
    "description": "تين برشومي عسلي طري منتقى من مزارع الساحل، حبة ممتلئة بعسل التين الطبيعي.",
    "search_aliases": [
      "تين",
      "تين برشومي",
      "تين اسود",
      "fig",
      "figs"
    ],
    "image_url": "https://images.unsplash.com/photo-1601379327928-bedfa185360f?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "طبق",
      "كيلو"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "fruit-43",
    "arabic_name": "تين شوكي مقشر طازج مثلج",
    "english_name": "Fresh Peeled Prickly Pears",
    "category": "fruits",
    "description": "تين شوكي مصري مقشر بعناية وجاهز للأكل، حلو المذاق ومنعش جداً ومرطب للمعدة.",
    "search_aliases": [
      "تين شوكي",
      "تين مقشر",
      "صبار",
      "prickly pear"
    ],
    "image_url": "https://images.unsplash.com/photo-1558818498-28c1e002b655?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "طبق",
      "10 حبات",
      "20 حبة"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "fruit-44",
    "arabic_name": "بلح زغلول أحمر بلدي مقرمش",
    "english_name": "Red Zaghloul Fresh Dates",
    "category": "fruits",
    "description": "بلح زغلول مصري أحمر قاني طويل، قرمشة مبهجة وحلاوة معتدلة مميزة لموسم الخريف.",
    "search_aliases": [
      "بلح زغلول",
      "بلح احمر",
      "زغلول",
      "red dates"
    ],
    "image_url": "https://images.unsplash.com/photo-1607672632458-9eb56696346b?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-45",
    "arabic_name": "بلح سماني أصفر سكري",
    "english_name": "Yellow Samani Dates",
    "category": "fruits",
    "description": "بلح سماني بلدي أصفر عريض، حلاوته تزداد مع النضج وممتاز لعمل مربى البلح الشهية.",
    "search_aliases": [
      "بلح سماني",
      "بلح اصفر",
      "سماني",
      "yellow dates"
    ],
    "image_url": "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-46",
    "arabic_name": "بلح برحي سكري طازج",
    "english_name": "Barhi Fresh Golden Dates",
    "category": "fruits",
    "description": "بلح برحي أصفر مقرمش كالتفاح وخالي من العفونة، طعم كراميلي حلو فاخر.",
    "search_aliases": [
      "برحي",
      "بلح برحي",
      "barhi dates"
    ],
    "image_url": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "صندوق"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-47",
    "arabic_name": "تمر مجدول جامبو ملكي فاخر",
    "english_name": "Jumbo Medjool Dates",
    "category": "fruits",
    "description": "تمر مجدول حبات عملاقة ناعمة وطرية كالتوفي، غذاء ملكي وطاقة طبيعية مركزة.",
    "search_aliases": [
      "مجدول",
      "تمر مجدول",
      "medjool dates"
    ],
    "image_url": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "علبة",
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "علبة"
  },
  {
    "id": "fruit-48",
    "arabic_name": "بلح رطب سيوة عسل",
    "english_name": "Siwa Soft Rutab Dates",
    "category": "fruits",
    "description": "رطب واحة سيوة الطبيعي، حبات طرية بلون الشوكولاتة وحلاوة عسل صافي.",
    "search_aliases": [
      "بلح رطب",
      "رطب سيوة",
      "rutab"
    ],
    "image_url": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "علبة",
      "كيلو"
    ],
    "default_unit": "علبة"
  },
  {
    "id": "fruit-49",
    "arabic_name": "كاكا عسلية مستوية (برسيمون)",
    "english_name": "Sweet Persimmon Fruit",
    "category": "fruits",
    "description": "فاكهة الكاكا العسلية اللذيذة بلون برتقالي شاعري وقوام جيلي حلو يذوب في الفم.",
    "search_aliases": [
      "كاكا",
      "برسيمون",
      "persimmon"
    ],
    "image_url": "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-50",
    "arabic_name": "سفرجل بلدي شتوي",
    "english_name": "Aromatic Quince Fruit",
    "category": "fruits",
    "description": "سفرجل عطري حبات ذهبية صلبة، يتحول للون الوردي الرائع عند طبخ المربى والحلويات.",
    "search_aliases": [
      "سفرجل",
      "quince"
    ],
    "image_url": "https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-51",
    "arabic_name": "كيوي أخضر هايوارد منعش",
    "english_name": "Zesty Green Kiwifruit",
    "category": "fruits",
    "description": "كيوي أخضر منعش حامض حلو، مليء بفيتامين سي والألياف الصحية الهامة.",
    "search_aliases": [
      "كيوي",
      "كيوي اخضر",
      "kiwi",
      "kiwifruit"
    ],
    "image_url": "https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "نصف كيلو",
      "طبق"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-52",
    "arabic_name": "كيوي ذهبي سكري (صن جولد)",
    "english_name": "SunGold Golden Kiwi",
    "category": "fruits",
    "description": "كيوي ذهبي ناعم القشرة بدون شعر، يتميز بحلاوة استوائية استثنائية ونعومة تامة.",
    "search_aliases": [
      "كيوي ذهبي",
      "كيوي اصفر",
      "gold kiwi"
    ],
    "image_url": "https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "طبق",
      "نصف كيلو"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "fruit-53",
    "arabic_name": "أناناس سكري استوائي كامل",
    "english_name": "Whole Sweet Pineapple",
    "category": "fruits",
    "description": "حبة أناناس استوائية ناضجة ذات تاج أخضر ولب ذهبي سكري فوار بالعصارة.",
    "search_aliases": [
      "اناناس",
      "أناناس",
      "pineapple"
    ],
    "image_url": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة",
      "2 قطعة"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "fruit-54",
    "arabic_name": "أفوكادو هاس زبدي مستوي",
    "english_name": "Ripe Hass Avocado",
    "category": "fruits",
    "description": "أفوكادو هاس قشرة داكنة ولحم زبدي كريمي غني بالدهون المفيدة، للتغميس والتوست.",
    "search_aliases": [
      "افوكادو",
      "افوكادو هاس",
      "avocado",
      "hass"
    ],
    "image_url": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة",
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "fruit-55",
    "arabic_name": "أفوكادو فويرتي أخضر ناعم",
    "english_name": "Fuerte Green Avocado",
    "category": "fruits",
    "description": "أفوكادو فويرتي كبير ناعم القشرة، ممتاز للعصائر مع الحليب والمكسرات والعسل.",
    "search_aliases": [
      "افوكادو اخضر",
      "فويرتي",
      "fuerte avocado"
    ],
    "image_url": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "كيلو",
      "قطعة"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-56",
    "arabic_name": "بابايا استوائية سكرية حمراء",
    "english_name": "Red Papaya Fruit",
    "category": "fruits",
    "description": "بابايا ناضجة بلحم برتقالي قرمزي ناعم، مليئة بإنزيم الباباين الهام لراحة الجهاز الهضمي.",
    "search_aliases": [
      "بابايا",
      "ببايا",
      "papaya"
    ],
    "image_url": "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة",
      "كيلو"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "fruit-57",
    "arabic_name": "جوز هند استوائي بمياهه المنعشة",
    "english_name": "Fresh Young Coconut",
    "category": "fruits",
    "description": "جوز هند أخضر استوائي مليء بماء الإلكتروليت الطبيعي واللحم الأبيض الهلامي اللذيذ.",
    "search_aliases": [
      "جوز هند",
      "مياه جوز هند",
      "coconut"
    ],
    "image_url": "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة",
      "2 قطعة"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "fruit-58",
    "arabic_name": "دراجون فروت أحمر (فاكهة التنين)",
    "english_name": "Red Pitaya Dragon Fruit",
    "category": "fruits",
    "description": "فاكهة التنين بقلب فوشيا مبهر وحبات مقرمشة، مضادات أكسدة خارقة ومظهر استثنائي.",
    "search_aliases": [
      "دراجون فروت",
      "فاكهة التنين",
      "بيتايا",
      "dragon fruit"
    ],
    "image_url": "https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة",
      "2 قطعة"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "fruit-59",
    "arabic_name": "دراجون فروت أبيض سكري",
    "english_name": "White Flesh Dragon Fruit",
    "category": "fruits",
    "description": "دراجون فروت بقلب أبيض خفيف السكر ومنعش للغاية، خيار مثالي لأطباق السموذي الفاخرة.",
    "search_aliases": [
      "دراجون ابيض",
      "تنين ابيض",
      "white dragon fruit"
    ],
    "image_url": "https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "fruit-60",
    "arabic_name": "باشن فروت عطرية (ماراكويا)",
    "english_name": "Aromatic Passion Fruit",
    "category": "fruits",
    "description": "فاكهة العاطفة برائحة استوائية نفاذة وطعم حامض حلو ساحر، تنعش العصائر والحلويات.",
    "search_aliases": [
      "باشن فروت",
      "ماراكويا",
      "passion fruit"
    ],
    "image_url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "طبق",
      "نصف كيلو"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "fruit-61",
    "arabic_name": "ليتشي طازج فاخر",
    "english_name": "Fresh Exotic Lychee",
    "category": "fruits",
    "description": "حبات ليتشي استوائية ذات قشرة وردية خشنة ولحم لؤلؤي سكري مفعم بالعطر الوردي.",
    "search_aliases": [
      "ليتشي",
      "لتشي",
      "lychee"
    ],
    "image_url": "https://images.unsplash.com/photo-1588610738647-0e78c2ab814d?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "طبق",
      "نصف كيلو"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "fruit-62",
    "arabic_name": "رامبوتان استوائي مميز",
    "english_name": "Fresh Rambutan",
    "category": "fruits",
    "description": "فاكهة استوائية مبهجة المظهر بشعيرات ناعمة ولحم حلو ومقرمش يشبه الليتشي.",
    "search_aliases": [
      "رامبوتان",
      "rambutan"
    ],
    "image_url": "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "طبق"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "fruit-63",
    "arabic_name": "توت أزرق طازج (بلوبيري جامبو)",
    "english_name": "Fresh Jumbo Blueberries",
    "category": "fruits",
    "description": "حبات بلوبيري زرقاء ممتلئة غنية بمضادات الأكسدة ومثالية للفطور والشوفان والبان كيك.",
    "search_aliases": [
      "توت ازرق",
      "بلوبيري",
      "توت",
      "blueberry",
      "blueberries"
    ],
    "image_url": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "طبق",
      "2 طبق"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "fruit-64",
    "arabic_name": "توت أحمر طازج (راسبيري)",
    "english_name": "Fresh Red Raspberries",
    "category": "fruits",
    "description": "توت أحمر مخملي ناعم بنكهة حمضية حلوة رائعة، يزين كيكاتك وأطباق الحلوى.",
    "search_aliases": [
      "توت احمر",
      "راسبيري",
      "توت شوكي",
      "raspberry"
    ],
    "image_url": "https://images.unsplash.com/photo-1577069808027-5674c2d43343?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "طبق",
      "2 طبق"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "fruit-65",
    "arabic_name": "توت أسود طازج (بلاك بيري)",
    "english_name": "Fresh Sweet Blackberries",
    "category": "fruits",
    "description": "حبات بلاك بيري سوداء لامعة مليئة بالعصارة والفوائد الصحية المركزة.",
    "search_aliases": [
      "توت اسود",
      "بلاك بيري",
      "blackberry"
    ],
    "image_url": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "طبق"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "fruit-66",
    "arabic_name": "كرز أحمر حلو سكري",
    "english_name": "Sweet Red Bing Cherries",
    "category": "fruits",
    "description": "كرز أحمر داكن مشدود اللحم ذو حلاوة لا تقارن، ملك فواكه الصيف الأنيقة.",
    "search_aliases": [
      "كرز",
      "كريز",
      "حب الملوك",
      "cherry",
      "cherries"
    ],
    "image_url": "https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "طبق",
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "fruit-67",
    "arabic_name": "نكتارين سكري ناعم القشرة",
    "english_name": "Sweet Juicy Nectarines",
    "category": "fruits",
    "description": "نكتارين لامع خالي من الوبر، يجمع بين طعم الخوخ وحلاوة البرقوق المنعشة.",
    "search_aliases": [
      "نكتارين",
      "خوخ املس",
      "nectarine"
    ],
    "image_url": "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "نصف كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-68",
    "arabic_name": "فاكهة النجمة ستار فروت (كارامبولا)",
    "english_name": "Starfruit (Carambola)",
    "category": "fruits",
    "description": "فاكهة استوائية عند تقطيعها تعطي شكل نجوم ذهبية جميلة، طعم منعش وخفيف.",
    "search_aliases": [
      "ستار فروت",
      "فاكهة النجمة",
      "كارامبولا",
      "starfruit"
    ],
    "image_url": "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "طبق",
      "قطعة"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "fruit-69",
    "arabic_name": "مانغوستين ملكة الفواكه الاستوائية",
    "english_name": "Purple Mangosteen",
    "category": "fruits",
    "description": "قشرة بنفسجية سميكة تحمي فصوص بيضاء ثلجية بنكهة تمتزج بين الخوخ والفراولة.",
    "search_aliases": [
      "مانغوستين",
      "منجوستين",
      "mangosteen"
    ],
    "image_url": "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "طبق",
      "نصف كيلو"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "fruit-70",
    "arabic_name": "قشطة بلدي مستوية مسكرة",
    "english_name": "Custard Apple (Cherimoya)",
    "category": "fruits",
    "description": "فاكهة القشطة الناعمة الغنية بطعم الكاسترد الفانيليا الطبيعي، فاكهة استوائية فاخرة.",
    "search_aliases": [
      "قشطة",
      "قشطه",
      "شيريمويا",
      "custard apple"
    ],
    "image_url": "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "قطعة"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "fruit-71",
    "arabic_name": "قشطة هندي كبيرة فاخرة (جرابيولا)",
    "english_name": "Soursop (Guanabana)",
    "category": "fruits",
    "description": "قشطة هندي حبة كبيرة بنكهة استوائية منعشة وفوائد صحية فريدة ومعروفة عالمياً.",
    "search_aliases": [
      "قشطة هندي",
      "جرابيولا",
      "soursop"
    ],
    "image_url": "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "قطعة",
      "كيلو"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "fruit-72",
    "arabic_name": "دوم أسواني مجروش طازج",
    "english_name": "Aswan Doum Palm Fruit",
    "category": "fruits",
    "description": "ثمار دوم طبيعية منتقاة من صعيد مصر، لتحضير أروع مشروب دوم مثلج مفيد لضغط الدم.",
    "search_aliases": [
      "دوم",
      "دوم اسواني",
      "عصير دوم",
      "doum"
    ],
    "image_url": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "نصف كيلو"
  },
  {
    "id": "fruit-73",
    "arabic_name": "خروب بلدي قرون عسلية",
    "english_name": "Natural Carob Pods",
    "category": "fruits",
    "description": "قرون خروب مجففة طبيعياً عالية السكر، لإعداد عصير الخروب الرمضاني الصافي واللذيذ.",
    "search_aliases": [
      "خروب",
      "قرون خروب",
      "carob"
    ],
    "image_url": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "نصف كيلو"
  },
  {
    "id": "fruit-74",
    "arabic_name": "كرانبيري توت بري طازج",
    "english_name": "Fresh Tart Cranberries",
    "category": "fruits",
    "description": "توت بري حامض غني بفوائد المسالك البولية ومضادات الأكسدة وممتاز للصلصات الصحية.",
    "search_aliases": [
      "كرانبيري",
      "توت بري",
      "cranberry"
    ],
    "image_url": "https://images.unsplash.com/photo-1577069808027-5674c2d43343?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "طبق",
      "نصف كيلو"
    ],
    "default_unit": "طبق"
  },
  {
    "id": "herb-01",
    "arabic_name": "بقدونس بلدي أخضر",
    "english_name": "Fresh Flat-leaf Parsley",
    "category": "leafy",
    "description": "حزم بقدونس بلدي خضراء نضرة، عطري ومنعش للسلطات والكفتة وتزيين الأطباق.",
    "search_aliases": [
      "بقدونس",
      "معدنوس",
      "parsley"
    ],
    "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "2 ربطة",
      "3 ربطة",
      "5 ربطات"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "herb-02",
    "arabic_name": "كزبرة خضراء بلدي",
    "english_name": "Fresh Green Cilantro",
    "category": "leafy",
    "description": "كزبرة خضراء فواحة، سر طشة الملوخية والشوربات وتتبيلات الأسماك المصرية.",
    "search_aliases": [
      "كزبرة",
      "كزبره",
      "coriander",
      "cilantro"
    ],
    "image_url": "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "2 ربطة",
      "3 ربطة",
      "5 ربطات"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "herb-03",
    "arabic_name": "شبت بلدي طازج",
    "english_name": "Fresh Green Dill",
    "category": "leafy",
    "description": "شبت أخضر ذو رائحة مميزة، أساسي لخلطة المحشي وتتبيلة السلمون والزبادي بالخيار.",
    "search_aliases": [
      "شبت",
      "شبت بلدي",
      "dill"
    ],
    "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "2 ربطة",
      "3 ربطة"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "herb-07",
    "arabic_name": "جرجير فلاحي بلدي",
    "english_name": "Fresh Arugula (Rocket)",
    "category": "leafy",
    "description": "جرجير بلدي أوراق خضراء داكنة بنكهة حارة مقرمشة، يمنحك الطاقة وينعش كل وجبة.",
    "search_aliases": [
      "جرجير",
      "روكا",
      "جرجير بلدي",
      "arugula",
      "rocket"
    ],
    "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "2 ربطة",
      "3 ربطة",
      "5 ربطات"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "herb-08",
    "arabic_name": "سلق طازج عريض",
    "english_name": "Fresh Green Swiss Chard",
    "category": "leafy",
    "description": "أوراق سلق طرية خضراء داكنة، الرفيق الدائم للقلقاس الشتوي والشطائر التقليدية.",
    "search_aliases": [
      "سلق",
      "سلق اخضر",
      "swiss chard"
    ],
    "image_url": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "ربطة",
      "2 ربطة"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "herb-13",
    "arabic_name": "ورق عنب بناتي طازج ناعم",
    "english_name": "Fresh Tender Grape Leaves",
    "category": "leafy",
    "description": "ورق عنب بناتي قطفة أولى ناعم وسهل اللف، يمنحك ألذ حلة محشي ورق عنب بالليمون.",
    "search_aliases": [
      "ورق عنب",
      "ورق عنب بناتي",
      "grape leaves"
    ],
    "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": true,
    "allowed_units": [
      "نصف كيلو",
      "كيلو"
    ],
    "default_unit": "نصف كيلو"
  },
  {
    "id": "herb-16",
    "arabic_name": "كالي أخضر عضوي (كرنب أجعد)",
    "english_name": "Organic Curly Green Kale",
    "category": "leafy",
    "description": "أوراق كالي مقرمشة غنية بالفيتامينات والمعادن، لسلطات الديتوكس الصحية ورقائق الكالي المقرمشة.",
    "search_aliases": [
      "كالي",
      "كيل",
      "كرنب اجعد",
      "kale"
    ],
    "image_url": "https://images.unsplash.com/photo-1524179091875-bf99a9a6fa57?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "طبق"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "herb-17",
    "arabic_name": "خس لولو روسو أحمر",
    "english_name": "Lollo Rosso Red Leaf Lettuce",
    "category": "leafy",
    "description": "خس أحمر مموج الأطراف ناعم ومقرمش، يعطي لمسة فنادق راقية لكل طبق سلطة.",
    "search_aliases": [
      "لولو روسو",
      "خس احمر",
      "lollo rosso"
    ],
    "image_url": "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "قطعة",
      "طبق"
    ],
    "default_unit": "قطعة"
  },
  {
    "id": "herb-18",
    "arabic_name": "رشاد طازج بلدي",
    "english_name": "Fresh Garden Cress",
    "category": "leafy",
    "description": "أوراق رشاد ناعمة بنكهة خردلية حارة خفيفة، ممتازة مع الجبن الأبيض والبيض المسلوق.",
    "search_aliases": [
      "رشاد",
      "حب الرشاد اخضر",
      "garden cress"
    ],
    "image_url": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "2 ربطة"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "herb-04",
    "arabic_name": "نعناع بلدي فواح",
    "english_name": "Fresh Baladi Spearmint",
    "category": "herbs",
    "description": "نعناع بلدي عالي الزيوت العطرية، لكوب الشاي المصري ولمشروبات الليمونادة المنعشة.",
    "search_aliases": [
      "نعناع",
      "نعناع بلدي",
      "mint"
    ],
    "image_url": "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": true,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "2 ربطة",
      "3 ربطة"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "herb-05",
    "arabic_name": "نعناع سعودي مدبب (حبق)",
    "english_name": "Saudi Habak Mint",
    "category": "herbs",
    "description": "حبق سعودي مميز برائحته الكافورية الفواحة، رائع لإضافة نكهة أصيلة للشاي والقهوة.",
    "search_aliases": [
      "حبق",
      "نعناع سعودي",
      "habak"
    ],
    "image_url": "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "2 ربطة"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "herb-06",
    "arabic_name": "ريحان إيطالي عريض الأوراق",
    "english_name": "Genovese Sweet Basil",
    "category": "herbs",
    "description": "ريحان إيطالي عطري ذو أوراق خضراء عريضة، لصلصة البيستو الأصلية وسلطة الكابريزي.",
    "search_aliases": [
      "ريحان",
      "ريحان ايطالي",
      "بيستو",
      "basil"
    ],
    "image_url": "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "طبق"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "herb-09",
    "arabic_name": "زعتر بري أخضر طازج",
    "english_name": "Fresh Wild Thyme",
    "category": "herbs",
    "description": "زعتر أخضر طازج بأوراق عطرية صغيرة، رائع لتتبيل الدجاج والمخبوزات والبيتزا.",
    "search_aliases": [
      "زعتر",
      "زعتر اخضر",
      "زعتر بري",
      "thyme"
    ],
    "image_url": "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "طبق"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "herb-10",
    "arabic_name": "روزماري طازج (إكليل الجبل)",
    "english_name": "Fresh Rosemary Sprigs",
    "category": "herbs",
    "description": "أغصان إكليل الجبل العطري المميز، رفيق مثالي لشوي اللحوم والبطاطس المحمرة.",
    "search_aliases": [
      "روزماري",
      "اكليل الجبل",
      "rosemary"
    ],
    "image_url": "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "طبق"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "herb-11",
    "arabic_name": "مريمية خضراء طازجة (مرمية)",
    "english_name": "Fresh Garden Sage",
    "category": "herbs",
    "description": "أوراق مريمية مخملية دافئة النكهة، للشاي الطبيعي المهدئ وتتبيلات اللحوم البيضاء.",
    "search_aliases": [
      "مريمية",
      "مرمية",
      "شاي مريمية",
      "sage"
    ],
    "image_url": "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "طبق"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "herb-12",
    "arabic_name": "أوريجانو أخضر طازج",
    "english_name": "Fresh Oregano Leaves",
    "category": "herbs",
    "description": "أوراق أوريجانو طازجة بلمسة نفاذة وشهية، لصلصات المعكرونة والمطبخ الإيطالي.",
    "search_aliases": [
      "اوريجانو",
      "زعتر بيتزا",
      "oregano"
    ],
    "image_url": "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "طبق"
    ],
    "default_unit": "ربطة"
  },
  {
    "id": "herb-14",
    "arabic_name": "ثوم أخضر بلدي بالعرش",
    "english_name": "Fresh Spring Garlic",
    "category": "herbs",
    "description": "رؤوس ثوم أخضر طرية بالعرش، طازجة ومثالية للفرم الكامل وتخزين دقة الثوم.",
    "search_aliases": [
      "ثوم اخضر",
      "توم اخضر",
      "عرش توم",
      "green garlic"
    ],
    "image_url": "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": true,
    "allowed_units": [
      "كيلو",
      "2 كيلو",
      "5 كيلو"
    ],
    "default_unit": "كيلو"
  },
  {
    "id": "herb-15",
    "arabic_name": "ورق غار طازج (لورا)",
    "english_name": "Fresh Bay Leaves",
    "category": "herbs",
    "description": "أوراق لورا خضراء طازجة تطلق زيوتها العطرية الساحرة في الشوربات واليخنات.",
    "search_aliases": [
      "ورق لورا",
      "ورق غار",
      "bay leaves"
    ],
    "image_url": "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80",
    "is_available": true,
    "is_featured": false,
    "is_seasonal": false,
    "allowed_units": [
      "ربطة",
      "طبق"
    ],
    "default_unit": "ربطة"
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'all',
    name: 'جميع المنتجات',
    english_name: 'All Produce',
    icon: 'Sparkles',
    count: INITIAL_PRODUCTS.length
  },
  {
    id: 'vegetables',
    name: 'الخضروات',
    english_name: 'Vegetables',
    icon: 'Carrot',
    count: INITIAL_PRODUCTS.filter(p => p.category === 'vegetables').length
  },
  {
    id: 'fruits',
    name: 'الفاكهة',
    english_name: 'Fresh Fruits',
    icon: 'Apple',
    count: INITIAL_PRODUCTS.filter(p => p.category === 'fruits').length
  },
  {
    id: 'leafy',
    name: 'الخضروات الورقية',
    english_name: 'Leafy Greens',
    icon: 'Salad',
    count: INITIAL_PRODUCTS.filter(p => p.category === 'leafy').length
  },
  {
    id: 'herbs',
    name: 'الأعشاب الطازجة',
    english_name: 'Fresh Herbs',
    icon: 'Leaf',
    count: INITIAL_PRODUCTS.filter(p => p.category === 'herbs').length
  },
  {
    id: 'seasonal',
    name: 'الفاكهة والمحاصيل الموسمية',
    english_name: 'Seasonal Specials',
    icon: 'Calendar',
    count: INITIAL_PRODUCTS.filter(p => p.is_seasonal).length
  }
];
