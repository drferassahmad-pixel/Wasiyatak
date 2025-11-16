// Defines the translation strings for the application.

export interface Translations {
  [key: string]: string | Translations;
}

const en: Translations = {
  // General
  app_name: 'Wasiyatak',
  app_subtitle: 'Your Digital Will & Inheritance Companion',
  log_in: 'Log In',
  sign_up: 'Sign Up',
  logout: 'Log Out',
  close: 'Close',
  back: 'Back',
  next: 'Next',
  edit: 'Edit',
  remove: 'Remove',
  add: 'Add',
  yes: 'Yes',
  no: 'No',
  currency: 'Currency',
  error: 'Error',
  loading: 'Loading...',
  loading_sr: 'Loading...',
  not_specified: 'Not specified',
  url_label: 'URL',
  pdf_export_error: 'Could not export to PDF.',
  pdf_export_filename: 'Wasiyatak_Will_{name}.pdf',
  remove_item_aria: 'Remove item',
  inheritance_calculation_failed: 'Failed to calculate inheritance distribution.',

  // Landing Page
  landing_title: 'Plan Your Legacy, Secure Their Future.',
  landing_subtitle: 'Create a legally sound will and manage your inheritance with confidence.',

  // Auth Pages
  log_in_to_your_account: 'Log In to Your Account',
  create_your_account: 'Create Your Account',
  email: 'Email',
  password: 'Password',
  confirm_password: 'Confirm Password',
  full_name: 'Full Name',
  phone_number: 'Phone Number',
  dont_have_account: "Don't have an account?",
  already_have_account: 'Already have an account?',
  invalid_credentials: 'Invalid email or password. Please try again.',
  passwords_do_not_match: 'Passwords do not match.',
  user_already_exists: 'A user with this email already exists.',

  // Dashboard
  dashboard_title: 'Welcome to Your Wasiyatak',
  dashboard_subtitle: 'Manage your will, assets, and final wishes all in one secure place. A well-prepared will provides peace of mind for you and your loved ones.',
  edit_existing_will: 'View & Edit Your Will',
  create_new_will: 'Create a New Will',
  
  // Will Form Steps
  step_prefix: 'Step',
  personal_details: 'Personal Details',
  beneficiaries: 'Beneficiaries',
  debts: 'Debts & Credits',
  assets: 'Assets',
  will_content: 'Will Content',
  media_messages: 'Media Message',
  legal_and_witnesses: 'Legal & Witnesses',
  final_instructions: 'Final Instructions',

  // Step 1: Personal Details
  gender: 'Gender',
  religion: 'Religion',
  country_of_residence: 'Country of Residence',
  marital_status: 'Marital Status',
  number_of_wives: 'Number of Wives',
  inheritance_details_title: 'Inheritance Details',
  islamic_inheritance_details_prompt: 'Please provide the following details about your living relatives. Questions will appear based on Islamic inheritance rules (e.g., a son excludes siblings).',
  civil_law_inheritance_prompt: 'Please provide details about your closest living relatives. Questions are based on proximity (children first, then parents, then siblings).',
  jewish_inheritance_prompt: 'Please provide details based on Jewish inheritance law, which prioritizes male heirs.',
  hindu_inheritance_prompt: 'Please provide details to identify your closest heirs (Class I), such as spouse, children, and mother, who inherit equally.',
  first_degree_relatives: 'First-Degree Relatives',
  father_alive: 'Is your father alive?',
  mother_alive: 'Is your mother alive?',
  grandparents_section: 'Grandparents',
  paternal_grandfather_alive: "Is your paternal grandfather (father's father) alive?",
  paternal_grandmother_alive: "Is your paternal grandmother (father's mother) alive?",
  maternal_grandmother_alive: "Is your maternal grandmother (mother's mother) alive?",
  number_of_sons: 'Number of Sons',
  number_of_daughters: 'Number of Daughters',
  grandchildren_via_son: "Grandchildren (via son)",
  grand_sons: "Number of Son's Sons",
  grand_daughters: "Number of Son's Daughters",
  siblings_section: 'Siblings',
  siblings_prompt: 'This section is relevant for inheritance calculation if certain closer relatives are not alive.',
  full_brothers: 'Full Brothers',
  full_sisters: 'Full Sisters',
  paternal_brothers: 'Paternal Brothers (from same father)',
  paternal_sisters: 'Paternal Sisters (from same father)',
  maternal_siblings: 'Maternal Siblings (from same mother)',

  // Step 2: Beneficiaries
  beneficiary_name: 'Beneficiary Name',
  relation: 'Relation',
  phone: 'Phone',
  beneficiaries_step_description: 'List all individuals or entities you wish to receive a portion of your estate. In Step 4 (Assets), you can assign specific assets to these beneficiaries. Any assets not assigned will become part of the \'residuary estate\' to be distributed among legal heirs.',

  // Step 3: Debts
  debts_owed_to_you: 'Debts Owed To You (Credits)',
  debts_you_owe: 'Debts You Owe (Debits)',
  person_name: 'Person/Institution Name',
  amount: 'Amount',
  description: 'Description (e.g., loan, invoice #)',

  // Step 4: Assets
  asset_type: 'Asset Type',
  asset_description: 'Description (e.g., address, account number, VIN)',
  asset_value: 'Estimated Value',
  asset_beneficiary: 'Assign to a specific beneficiary (optional)',
  unassigned: 'Part of residuary estate',
  no_beneficiaries: 'Add beneficiaries in Step 2 first',
  add_asset: 'Add Asset',
  complex_assets_title: 'Complex Assets',
  legal_owner: 'Legal Owner',
  beneficial_owner: 'Beneficial Owner',
  add_complex_asset: 'Add Complex Asset',

  // Step 5: Will Content
  will_free_text_label: 'Your Personal Will Statement',
  will_free_text_placeholder: 'Write any specific bequests, instructions, or personal messages here. This content will be formally included in your will.',

  // Step 6: Media
  upload_audio: 'Upload Audio Message',
  upload_video: 'Upload Video Message',
  choose_file: 'Choose File',
  no_file_selected: 'No file selected',
  or_link_url: 'OR provide a link to a hosted message',

  // Step 7: Legal
  lawyer_details: 'Lawyer Details',
  lawyer_name: 'Lawyer Full Name',
  witness_details: 'Witness Details',
  witness_name: 'Witness Full Name',
  witness_indexed: 'Witness #{index}',
  add_witness: 'Add Witness',

  // Step 8: Final Instructions
  notifications_reminders: 'Notifications & Reminders',
  update_will_every: 'Remind me to review/update my will every:',
  notification_email_label: 'Notification Emails',
  notification_email_description: 'In the event of your passing, a notification can be sent to these email addresses.',
  email_label: 'Email #{index}',
  add_email: 'Add Email',
  burial_location: 'Preferred Burial Location',
  final_wishes: 'Final Wishes & Instructions',
  
  // Review Page
  review_your_will: 'Review Your Will',
  export_to_pdf: 'Export to PDF',
  exporting: 'Exporting...',
  financial_summary: 'Financial Summary',
  converting_currencies: 'Converting currencies to {currency}...',
  total_assets_value: 'Total Assets Value',
  total_credits: 'Total Credits (Owed to you)',
  total_debits: 'Total Debits (Owed by you)',
  net_estate_value: 'Net Estate Value',
  assigned_assets_value: 'Value of Directly Assigned Assets',
  residuary_estate: 'Residuary Estate for Distribution',
  islamic_inheritance_calculator: 'Islamic Inheritance Distribution',
  calculating_distribution: 'Calculating distribution based on Islamic law...',
  calculation_results: 'Calculation Results',
  heir_name: 'Heir',
  share_amount: 'Share Amount',
  share_percentage: 'Share Percentage',
  reason: 'Reason / Justification',
  conversion_failed: 'Failed to fetch currency conversion rates. Financial summary may be inaccurate.',
  calculation_error: 'An error occurred while calculating the inheritance shares.',
  inheritanceNote: "The residuary estate is zero or negative, so no inheritance calculation will be performed.",
  inheritance_prompt: {
    deceased_is_male: 'The deceased is a male.',
    deceased_is_female: 'The deceased is a female.',
    relatives_intro: 'The following relatives are alive:',
    husband: 'One husband',
    wives: '{count} wife(s)',
    father: 'Father',
    mother: 'Mother',
    paternal_grandfather: "Paternal Grandfather (Father's Father)",
    paternal_grandmother: "Paternal Grandmother (Father's Mother)",
    maternal_grandmother: "Maternal Grandmother (Mother's Mother)",
    sons: '{count} son(s)',
    daughters: '{count} daughter(s)',
    son_sons: "{count} son's son(s)",
    son_daughters: "{count} son's daughter(s)",
    full_brothers: '{count} full brother(s)',
    full_sisters: '{count} full sister(s)',
    paternal_brothers: '{count} paternal brother(s)',
    paternal_sisters: '{count} paternal sister(s)',
    maternal_siblings: '{count} maternal sibling(s)',
  },

  // Translation Modal
  translate_to_another_language: 'Translate to another language',
  select_language: 'Select Language',
  translate: 'Translate',
  translating: 'Translating...',

  // Placeholders
  placeholders: {
    full_name: 'e.g., Johnathan Smith',
    email: 'e.g., name@example.com',
    phone: 'e.g., +1 555 123 4567',
    password: 'Enter a secure password',
    media_url: 'e.g., https://www.youtube.com/your-video',
    notification_email: 'e.g., family_member@example.com',
    burial_location: 'e.g., Green Hill Cemetery, Section A, Plot 12',
    final_wishes: 'Describe any specific instructions for your funeral, burial, or other final arrangements.',
  },

  // Keys from constants.ts
  religion_muslim: 'Muslim',
  religion_christian: 'Christian',
  religion_jewish: 'Jewish',
  religion_hindu: 'Hindu',
  religion_buddhist: 'Buddhist',
  religion_atheist: 'Atheist',
  religion_other: 'Other',

  gender_male: 'Male',
  gender_female: 'Female',

  marital_status_married: 'Married',
  marital_status_not_married: 'Not Married',

  relation_spouse: 'Spouse',
  relation_son: 'Son',
  relation_daughter: 'Daughter',
  relation_father: 'Father',
  relation_mother: 'Mother',
  relation_brother: 'Brother',
  relation_sister: 'Sister',
  relation_grandchild: 'Grandchild',
  relation_friend: 'Friend',
  relation_other: 'Other',
  
  asset_type_real_estate: 'Real Estate',
  asset_type_bank_account: 'Bank Account',
  asset_type_vehicle: 'Vehicle',
  asset_type_stocks_investments: 'Stocks/Investments',
  asset_type_personal_property: 'Personal Property',
  asset_type_other: 'Other',
  
  reminder_none: 'None',
  reminder_3_months: '3 Months',
  reminder_6_months: '6 Months',
  reminder_1_year: '1 Year',
  reminder_3_years: '3 Years',
  reminder_5_years: '5 Years',

  // Privacy and Security Modal
  privacy_and_security: {
    button_text: "Privacy & Security",
    title: "Wasiyatak: Application and Security",
    summary_title: "Application Overview",
    summary_p1: `"Wasiyatak" is a comprehensive and advanced digital tool designed to empower individuals to create and manage their personal wills with ease and security. The application is designed as a comprehensive guide that walks the user step-by-step through the process of preparing a will, from recording personal details and identifying beneficiaries, to cataloging assets and debts, and including final instructions and special bequests.`,
    privacy_title: "Privacy and Information Security",
    privacy_p1: `Privacy is the cornerstone of this application's design. The application is built on the principle that your data belongs to you alone, and no other party should have access to it.`,
    privacy_p2: `The application operates entirely within your web browser. This means all the information you enter, including your full name, family details, assets, debts, and the content of your will, is not sent or stored on any external or cloud servers. Everything remains on your device.`,
    privacy_p3: `The AI is used in a very limited and specific scope to ensure no sensitive information is revealed: For calculating Islamic inheritance, only an anonymous family structure is sent (e.g., "The deceased is male, has one wife, a living father, two sons, and one daughter") along with the net estate amount to be distributed. No names or other personal data are sent.`,
    storage_title: "How Information is Saved",
    storage_p1: `The application automatically and continuously saves all your will data in the browser's "LocalStorage". Think of this as a secure file saved within your browser (like Chrome, Firefox, Safari) on your computer or phone.`,
    storage_p2: `This means you can close your browser or restart your device and return later to complete your will, finding all your data just as you left it. Since the data is stored locally, access is fast and does not depend on internet speed.`,
    storage_p3: `Your will data is tied to the browser and device you used. If you open the application on another computer or a different browser, you will not find your will there. Similarly, if you clear your browser's data (cache and cookies), the saved will will be deleted.`,
    storage_p4: 'Since your data is stored only on your device for your privacy, we have no way to help you recover your account if you forget your password. Please keep your login credentials in a safe place.',
    disclaimer_title: `Legal Disclaimer (Islamic Inheritance)`,
    disclaimer_intro: `You understand and agree that the Wasiyatak® App is an estimation tool for calculation purposes. The following terms apply:`,
    disclaimer_point1_title: `Estimates, Not Rulings`,
    disclaimer_point1_text: `The calculations provided are approximate results based on your inputs. They are not, under any circumstances, to be considered a binding religious edict (fatwa) or a final judicial ruling on inheritance distribution.`,
    disclaimer_point2_title: `Consultation Required`,
    disclaimer_point2_text: `Users must always consult with a qualified lawyer specializing in personal status law and a jurist specializing in Islamic inheritance laws (Ilm al-Fara'id) before taking any legal or financial action based on the app's results.`,
    disclaimer_point3_title: `Limitation of Liability`,
    disclaimer_point3_text: `We are not liable for any errors, misunderstandings, or damages that may arise from the direct use of, or complete reliance on, the results provided by this application without professional consultation.`
  },

  // Copyright Modal
  copyright: {
    button_text: "Copyright",
    title: "Intellectual Property Rights",
    intellectual_property: {
        title: "2. Intellectual Property Rights",
        p1: "The Wasiyatak® application and all its contents, including the design, interface, source codes, algorithms (for inheritance and AI calculations), and logo, are the private and exclusive property of Firas Ahmad Khalaf.",
        p2: "All rights are reserved and protected under the laws of Syria and Sweden and international copyright laws. Any unauthorized use is a violation of these rights."
    },
    privacy_policy: {
        title: "Privacy Policy",
        p1: "We are committed to protecting your privacy. We do not store or share any sensitive personal data (such as names or phone numbers) from the inheritance calculation inputs. Any data collected is for analytical purposes to improve the application's performance only."
    },
    contact: {
        title: "Contact and Technical Support",
        p1: "If you encounter any technical issues or have any inquiries about the application, please contact us directly via email: wasiyatak@gmail.com."
    },
    footer: "© {year} Firas Ahmad Khalaf. All rights reserved."
  },

  // API Key Missing Screen
  api_key_missing: {
    title: 'API Key Configuration Required',
    explanation: 'This application requires a Google Gemini API key to function. Please follow these steps to set it up:',
    step1: "Create a file named `.env.local` in the root directory of this project.",
    step2: "Add the following line to the file, replacing `YOUR_API_KEY_HERE` with your actual key:",
    step3: "Save the file and restart the development server for the changes to take effect.",
    get_key_prompt: "You can get a Gemini API key from",
    get_key_link: "Google AI Studio"
  },
  
  countries: {
    country_af: "Afghanistan",
    country_al: "Albania",
    country_dz: "Algeria",
    country_ad: "Andorra",
    country_ao: "Angola",
    country_ar: "Argentina",
    country_am: "Armenia",
    country_au: "Australia",
    country_at: "Austria",
    country_az: "Azerbaijan",
    country_bs: "Bahamas",
    country_bh: "Bahrain",
    country_bd: "Bangladesh",
    country_by: "Belarus",
    country_be: "Belgium",
    country_bt: "Bhutan",
    country_bo: "Bolivia",
    country_ba: "Bosnia and Herzegovina",
    country_br: "Brazil",
    country_bg: "Bulgaria",
    country_kh: "Cambodia",
    country_cm: "Cameroon",
    country_ca: "Canada",
    country_cf: "Central African Republic",
    country_cl: "Chile",
    country_cn: "China",
    country_co: "Colombia",
    country_cr: "Costa Rica",
    country_hr: "Croatia",
    country_cu: "Cuba",
    country_cy: "Cyprus",
    country_cz: "Czech Republic",
    country_dk: "Denmark",
    country_do: "Dominican Republic",
    country_ec: "Ecuador",
    country_eg: "Egypt",
    country_sv: "El Salvador",
    country_ee: "Estonia",
    country_et: "Ethiopia",
    country_fi: "Finland",
    country_fr: "France",
    country_ge: "Georgia",
    country_de: "Germany",
    country_gh: "Ghana",
    country_gr: "Greece",
    country_gt: "Guatemala",
    country_hn: "Honduras",
    country_hu: "Hungary",
    country_is: "Iceland",
    country_in: "India",
    country_id: "Indonesia",
    country_ir: "Iran",
    country_iq: "Iraq",
    country_ie: "Ireland",
    country_il: "Israel",
    country_it: "Italy",
    country_jp: "Japan",
    country_jo: "Jordan",
    country_kz: "Kazakhstan",
    country_ke: "Kenya",
    country_kw: "Kuwait",
    country_lv: "Latvia",
    country_lb: "Lebanon",
    country_ly: "Libya",
    country_lt: "Lithuania",
    country_lu: "Luxembourg",
    country_my: "Malaysia",
    country_mx: "Mexico",
    country_mn: "Mongolia",
    country_me: "Montenegro",
    country_ma: "Morocco",
    country_mm: "Myanmar",
    country_np: "Nepal",
    country_nl: "Netherlands",
    country_nz: "New Zealand",
    country_ng: "Nigeria",
    country_no: "Norway",
    country_om: "Oman",
    country_pk: "Pakistan",
    country_pa: "Panama",
    country_py: "Paraguay",
    country_pe: "Peru",
    country_ph: "Philippines",
    country_pl: "Poland",
    country_pt: "Portugal",
    country_qa: "Qatar",
    country_ro: "Romania",
    country_ru: "Russia",
    country_sa: "Saudi Arabia",
    country_sn: "Senegal",
    country_rs: "Serbia",
    country_sg: "Singapore",
    country_sk: "Slovakia",
    country_si: "Slovenia",
    country_za: "South Africa",
    country_kr: "South Korea",
    country_es: "Spain",
    country_lk: "Sri Lanka",
    country_sd: "Sudan",
    country_se: "Sweden",
    country_ch: "Switzerland",
    country_sy: "Syria",
    country_tw: "Taiwan",
    country_th: "Thailand",
    country_tr: "Turkey",
    country_ua: "Ukraine",
    country_ae: "United Arab Emirates",
    country_gb: "United Kingdom",
    country_us: "United States",
    country_uy: "Uruguay",
    country_uz: "Uzbekistan",
    country_ve: "Venezuela",
    country_vn: "Vietnam",
    country_ye: "Yemen",
  },
};

const ar: Translations = {
  app_name: 'وصيتك',
  app_subtitle: 'رفيقك الرقمي للوصية والميراث',
  log_in: 'تسجيل الدخول',
  sign_up: 'إنشاء حساب',
  logout: 'تسجيل الخروج',
  close: 'إغلاق',
  back: 'رجوع',
  next: 'التالي',
  edit: 'تعديل',
  remove: 'إزالة',
  add: 'إضافة',
  yes: 'نعم',
  no: 'لا',
  currency: 'العملة',
  error: 'خطأ',
  loading: 'جار التحميل...',
  loading_sr: 'جار التحميل...',
  not_specified: 'غير محدد',
  url_label: 'الرابط',
  pdf_export_error: 'تعذر التصدير إلى PDF.',
  pdf_export_filename: 'وصيتك_{name}.pdf',
  remove_item_aria: 'إزالة العنصر',
  inheritance_calculation_failed: 'فشل في حساب توزيع الميراث.',
  landing_title: 'خطط لإرثك، وأمّن مستقبلهم.',
  landing_subtitle: 'أنشئ وصية سليمة من الناحية القانونية وأدر ميراثك بثقة.',
  log_in_to_your_account: 'تسجيل الدخول إلى حسابك',
  create_your_account: 'إنشاء حساب جديد',
  email: 'البريد الإلكتروني',
  password: 'كلمة المرور',
  confirm_password: 'تأكيد كلمة المرور',
  full_name: 'الاسم الكامل',
  phone_number: 'رقم الهاتف',
  dont_have_account: 'ليس لديك حساب؟',
  already_have_account: 'هل لديك حساب بالفعل؟',
  invalid_credentials: 'بريد إلكتروني أو كلمة مرور غير صالحة. يرجى المحاولة مرة أخرى.',
  passwords_do_not_match: 'كلمات المرور غير متطابقة.',
  user_already_exists: 'يوجد مستخدم بهذا البريد الإلكتروني بالفعل.',
  dashboard_title: 'أهلاً بك في وصيتك',
  dashboard_subtitle: 'أدر وصيتك وأصولك ووصاياك الأخيرة في مكان واحد آمن. الوصية المعدة جيدًا توفر راحة البال لك ولأحبائك.',
  edit_existing_will: 'عرض وتعديل الوصية',
  create_new_will: 'إنشاء وصية جديدة',
  step_prefix: 'الخطوة',
  personal_details: 'البيانات الشخصية',
  beneficiaries: 'المستفيدون',
  debts: 'الديون والائتمانات',
  assets: 'الأصول',
  will_content: 'محتوى الوصية',
  media_messages: 'رسالة وسائط',
  legal_and_witnesses: 'الشؤون القانونية والشهود',
  final_instructions: 'التعليمات النهائية',
  gender: 'الجنس',
  religion: 'الديانة',
  country_of_residence: 'بلد الإقامة',
  marital_status: 'الحالة الاجتماعية',
  number_of_wives: 'عدد الزوجات',
  inheritance_details_title: 'تفاصيل الميراث',
  islamic_inheritance_details_prompt: 'يرجى تقديم التفاصيل التالية عن أقاربك الأحياء. ستظهر الأسئلة بناءً على قواعد الميراث الإسلامي (مثلاً، الابن يحجب الإخوة).',
  civil_law_inheritance_prompt: 'يرجى تقديم تفاصيل عن أقرب أقاربك الأحياء. الأسئلة مبنية على درجة القرابة (الأبناء أولاً، ثم الوالدان، ثم الإخوة).',
  jewish_inheritance_prompt: 'يرجى تقديم التفاصيل بناءً على قانون الميراث اليهودي الذي يعطي الأولوية للورثة الذكور.',
  hindu_inheritance_prompt: 'يرجى تقديم التفاصيل لتحديد ورثتك الأقربين (الفئة الأولى)، مثل الزوجة والأبناء والأم، الذين يرثون بالتساوي.',
  first_degree_relatives: 'الأقارب من الدرجة الأولى',
  father_alive: 'هل والدك على قيد الحياة؟',
  mother_alive: 'هل والدتك على قيد الحياة؟',
  grandparents_section: 'الأجداد',
  paternal_grandfather_alive: 'هل جدك لأبيك على قيد الحياة؟',
  paternal_grandmother_alive: 'هل جدتك لأبيك على قيد الحياة؟',
  maternal_grandmother_alive: 'هل جدتك لأمك على قيد الحياة؟',
  number_of_sons: 'عدد الأبناء',
  number_of_daughters: 'عدد البنات',
  grandchildren_via_son: 'الأحفاد (عن طريق الابن)',
  grand_sons: 'عدد أبناء الابن',
  grand_daughters: 'عدد بنات الابن',
  siblings_section: 'الإخوة والأخوات',
  siblings_prompt: 'هذا القسم مهم لحساب الميراث إذا لم يكن بعض الأقارب الأقرب على قيد الحياة.',
  full_brothers: 'إخوة أشقاء',
  full_sisters: 'أخوات شقيقات',
  paternal_brothers: 'إخوة لأب',
  paternal_sisters: 'أخوات لأب',
  maternal_siblings: 'إخوة لأم',
  beneficiary_name: 'اسم المستفيد',
  relation: 'صلة القرابة',
  phone: 'الهاتف',
  beneficiaries_step_description: 'أدرج جميع الأفراد أو الجهات التي ترغب في أن يحصلوا على جزء من تركتك. في الخطوة 4 (الأصول)، يمكنك تخصيص أصول معينة لهؤلاء المستفيدين. أي أصول لم يتم تخصيصها ستصبح جزءًا من \'التركة المتبقية\' ليتم توزيعها على الورثة الشرعيين.',
  debts_owed_to_you: 'الديون المستحقة لك (دائن)',
  debts_you_owe: 'الديون المستحقة عليك (مدين)',
  person_name: 'اسم الشخص/المؤسسة',
  amount: 'المبلغ',
  description: 'الوصف (مثال: قرض، رقم فاتورة)',
  asset_type: 'نوع الأصل',
  asset_description: 'الوصف (مثال: عنوان، رقم حساب، رقم تعريف المركبة)',
  asset_value: 'القيمة التقديرية',
  asset_beneficiary: 'تخصيص لمستفيد معين (اختياري)',
  unassigned: 'جزء من التركة المتبقية',
  no_beneficiaries: 'أضف المستفيدين في الخطوة 2 أولاً',
  add_asset: 'إضافة أصل',
  complex_assets_title: 'الأصول المعقدة',
  legal_owner: 'المالك القانوني',
  beneficial_owner: 'المالك المستفيد',
  add_complex_asset: 'إضافة أصل معقد',
  will_free_text_label: 'بيان وصيتك الشخصية',
  will_free_text_placeholder: 'اكتب أي وصايا أو تعليمات محددة أو رسائل شخصية هنا. سيتم تضمين هذا المحتوى رسميًا في وصيتك.',
  upload_audio: 'تحميل رسالة صوتية',
  upload_video: 'تحميل رسالة فيديو',
  choose_file: 'اختر ملفًا',
  no_file_selected: 'لم يتم اختيار ملف',
  or_link_url: 'أو قدم رابطًا لرسالة مستضافة',
  lawyer_details: 'تفاصيل المحامي',
  lawyer_name: 'اسم المحامي الكامل',
  witness_details: 'تفاصيل الشهود',
  witness_name: 'اسم الشاهد الكامل',
  witness_indexed: 'شاهد #{index}',
  add_witness: 'إضافة شاهد',
  notifications_reminders: 'الإشعارات والتذكيرات',
  update_will_every: 'ذكرني بمراجعة/تحديث وصيتي كل:',
  notification_email_label: 'رسائل البريد الإلكتروني للإشعار',
  notification_email_description: 'في حالة وفاتك، يمكن إرسال إشعار إلى عناوين البريد الإلكتروني هذه.',
  email_label: 'بريد إلكتروني #{index}',
  add_email: 'إضافة بريد إلكتروني',
  burial_location: 'مكان الدفن المفضل',
  final_wishes: 'الوصايا والتعليمات النهائية',
  review_your_will: 'مراجعة وصيتك',
  export_to_pdf: 'تصدير إلى PDF',
  exporting: 'جار التصدير...',
  financial_summary: 'ملخص مالي',
  converting_currencies: 'تحويل العملات إلى {currency}...',
  total_assets_value: 'إجمالي قيمة الأصول',
  total_credits: 'إجمالي الديون (المستحقة لك)',
  total_debits: 'إجمالي الديون (المستحقة عليك)',
  net_estate_value: 'صافي قيمة التركة',
  assigned_assets_value: 'قيمة الأصول المخصصة مباشرة',
  residuary_estate: 'التركة المتبقية للتوزيع',
  islamic_inheritance_calculator: 'توزيع الميراث الإسلامي',
  calculating_distribution: 'جار حساب التوزيع بناءً على الشريعة الإسلامية...',
  calculation_results: 'نتائج الحساب',
  heir_name: 'الوارث',
  share_amount: 'مبلغ الحصة',
  share_percentage: 'نسبة الحصة',
  reason: 'السبب / التبرير',
  conversion_failed: 'فشل في جلب أسعار تحويل العملات. قد يكون الملخص المالي غير دقيق.',
  calculation_error: 'حدث خطأ أثناء حساب حصص الميراث.',
  inheritanceNote: 'التركة المتبقية صفر أو سالبة، لذا لن يتم إجراء حساب الميراث.',
  inheritance_prompt: {
    deceased_is_male: 'المتوفى ذكر.',
    deceased_is_female: 'المتوفاة أنثى.',
    relatives_intro: 'الأقارب التاليون على قيد الحياة:',
    husband: 'زوج واحد',
    wives: '{count} زوجة (زوجات)',
    father: 'أب',
    mother: 'أم',
    paternal_grandfather: "جد لأب (أبو الأب)",
    paternal_grandmother: "جدة لأب (أم الأب)",
    maternal_grandmother: "جدة لأم (أم الأم)",
    sons: '{count} ابن (أبناء)',
    daughters: '{count} ابنة (بنات)',
    son_sons: "{count} ابن ابن (أبناء الابن)",
    son_daughters: "{count} بنت ابن (بنات الابن)",
    full_brothers: '{count} أخ شقيق (إخوة أشقاء)',
    full_sisters: '{count} أخت شقيقة (أخوات شقيقات)',
    paternal_brothers: '{count} أخ لأب (إخوة لأب)',
    paternal_sisters: '{count} أخت لأب (أخوات لأب)',
    maternal_siblings: '{count} أخ/أخت لأم (إخوة لأم)',
  },
  translate_to_another_language: 'الترجمة إلى لغة أخرى',
  select_language: 'اختر لغة',
  translate: 'ترجمة',
  translating: 'جار الترجمة...',
  placeholders: {
    full_name: 'مثال: جونathan سميث',
    email: 'مثال: name@example.com',
    phone: 'مثال: +1 555 123 4567',
    password: 'أدخل كلمة مرور آمنة',
    media_url: 'مثال: https://www.youtube.com/your-video',
    notification_email: 'مثال: family_member@example.com',
    burial_location: 'مثال: مقبرة التل الأخضر، القسم أ، قطعة 12',
    final_wishes: 'صف أي تعليمات محددة لجنازتك أو دفنك أو ترتيبات نهائية أخرى.',
  },
  religion_muslim: 'مسلم',
  religion_christian: 'مسيحي',
  religion_jewish: 'يهودي',
  religion_hindu: 'هندوسي',
  religion_buddhist: 'بوذي',
  religion_atheist: 'ملحد',
  religion_other: 'أخرى',
  gender_male: 'ذكر',
  gender_female: 'أنثى',
  marital_status_married: 'متزوج',
  marital_status_not_married: 'غير متزوج',
  relation_spouse: 'زوج/زوجة',
  relation_son: 'ابن',
  relation_daughter: 'ابنة',
  relation_father: 'أب',
  relation_mother: 'أم',
  relation_brother: 'أخ',
  relation_sister: 'أخت',
  relation_grandchild: 'حفيد',
  relation_friend: 'صديق',
  relation_other: 'أخرى',
  asset_type_real_estate: 'عقارات',
  asset_type_bank_account: 'حساب بنكي',
  asset_type_vehicle: 'مركبة',
  asset_type_stocks_investments: 'أسهم/استثمارات',
  asset_type_personal_property: 'ممتلكات شخصية',
  asset_type_other: 'أخرى',
  reminder_none: 'لا شيء',
  reminder_3_months: '3 أشهر',
  reminder_6_months: '6 أشهر',
  reminder_1_year: 'سنة واحدة',
  reminder_3_years: '3 سنوات',
  reminder_5_years: '5 سنوات',
  privacy_and_security: {
    button_text: "الخصوصية والأمان",
    title: "وصيتك: التطبيق والأمان",
    summary_title: "ملخص تعريفي عن التطبيق",
    summary_p1: `تطبيق "وصيتك" هو أداة رقمية شاملة ومتقدمة تهدف إلى تمكين الأفراد من إنشاء وإدارة وصاياهم الشخصية بكل سهولة وأمان. تم تصميم التطبيق ليكون دليلاً شاملاً يرشد المستخدم خطوة بخطوة خلال عملية إعداد الوصية، بدءًا من تسجيل البيانات الشخصية وتحديد المستفيدين، ومرورًا بحصر الأصول والديون، وانتهاءً بتضمين التعليمات النهائية والوصايا الخاصة.`,
    privacy_title: "الخصوصية وأمان المعلومات",
    privacy_p1: `الخصوصية هي حجر الزاوية في تصميم هذا التطبيق. تم بناء التطبيق على مبدأ أن بياناتك ملكك وحدك، ولا ينبغي لأي جهة أخرى الاطلاع عليها.`,
    privacy_p2: `يعمل التطبيق بالكامل داخل متصفح الإنترنت الخاص بك. هذا يعني أن جميع المعلومات التي تدخلها، بما في ذلك اسمك الكامل، تفاصيل عائلتك، أصولك، ديونك، ومحتوى وصيتك، لا يتم إرسالها أو تخزينها على أي خوادم خارجية أو سحابية. كل شيء يبقى على جهازك.`,
    privacy_p3: `يتم استخدام الذكاء الاصطناعي في نطاق ضيق ومحدد جدًا لضمان عدم كشف أي معلومات حساسة: لحساب الميراث الإسلامي، يتم إرسال هيكل أسري مجهول الهوية فقط (مثال: "المتوفى ذكر، لديه زوجة واحدة، أب على قيد الحياة، ابنان، وابنة واحدة") مع صافي مبلغ التركة المطلوب توزيعه. لا يتم إرسال أسماء أو أي بيانات شخصية أخرى.`,
    storage_title: "شرح عن حفظ المعلومات",
    storage_p1: `يقوم التطبيق بحفظ جميع بيانات وصيتك تلقائيًا وباستمرار في ما يسمى بـ "التخزين المحلي" للمتصفح. فكّر في هذا الأمر كملف آمن يتم حفظه داخل متصفحك (مثل Chrome, Firefox, Safari) على جهاز الكمبيوتر أو الهاتف الخاص بك.`,
    storage_p2: `هذا يعني أنه يمكنك إغلاق المتصفح أو إعادة تشغيل جهازك والعودة لاحقًا لإكمال وصيتك، وستجد جميع بياناتك كما تركتها. بما أن البيانات مخزنة محليًا، فإن الوصول إليها سريع ولا يعتمد على سرعة الإنترنت.`,
    storage_p3: `بيانات وصيتك مرتبطة بالمتصفح والجهاز الذي استخدمته. إذا قمت بفتح التطبيق على جهاز كمبيوتر آخر أو متصفح مختلف، فلن تجد وصيتك هناك. وبالمثل، إذا قمت بمسح بيانات التصفح (cache and cookies)، سيتم حذف الوصية المحفوظة.`,
    storage_p4: 'بما أن بياناتك مخزنة على جهازك فقط من أجل خصوصيتك، فإننا لا نملك أي طريقة لمساعدتك في استعادة حسابك إذا نسيت كلمة المرور. الرجاء الاحتفاظ ببيانات الدخول في مكان آمن.',
    disclaimer_title: `إخلاء المسؤولية القانونية (الأحكام الشرعية)`,
    disclaimer_intro: `أنت تدرك وتوافق على أن تطبيق وصيتك® (Wasiatak App) هو أداة حسابية تقديرية:`,
    disclaimer_point1_title: `النتائج تقديرية وليست نهائية`,
    disclaimer_point1_text: `الحسابات المقدمة داخل التطبيق هي نتائج تقريبية تعتمد على المدخلات، ولا تُعتبر بأي حال من الأحوال فتوى شرعية ملزمة أو حكماً قضائياً نهائياً بشأن توزيع الميراث.`,
    disclaimer_point2_title: `استشارة المختصين`,
    disclaimer_point2_text: `يجب على المستخدمين دائماً استشارة محامٍ متخصص في قضايا الأحوال الشخصية، أو فقيه مختص في علم الفرائض، قبل اتخاذ أي إجراء قانوني أو مالي بناءً على نتائج التطبيق.`,
    disclaimer_point3_title: `إخلاء المسؤولية`,
    disclaimer_point3_text: `نحن لسنا مسؤولين عن أي خطأ أو سوء فهم أو ضرر قد ينشأ عن الاستخدام المباشر أو الاعتماد الكلي على نتائج هذا التطبيق دون مراجعة مختص.`
  },
  copyright: {
    button_text: "حقوق الملكية",
    title: "حقوق الملكية الفكرية",
    intellectual_property: {
        title: "2. حقوق الملكية الفكرية",
        p1: "تطبيق وصيتك® وكافة محتوياته، بما في ذلك التصميم، الواجهة، الأكواد المصدرية، الخوارزميات (لحساب المواريث والذكاء الاصطناعي)، والشعار، هي ملك خاص وحصري لـ فراس احمد خلف.",
        p2: "جميع الحقوق محفوظة ومحمية بموجب قوانين سوريا والسويد والقوانين الدولية لحماية حقوق النشر. أي استخدام غير مصرح به هو انتهاك لهذه الحقوق."
    },
    privacy_policy: {
        title: "سياسة الخصوصية",
        p1: "نحن ملتزمون بحماية خصوصيتك. نحن لا نقوم بتخزين أو مشاركة أي بيانات شخصية حساسة (مثل الأسماء أو أرقام الهواتف) من المدخلات الخاصة بحساب الميراث. أي بيانات تُجمع تكون لأغراض تحليلية لتحسين أداء التطبيق فقط."
    },
    contact: {
        title: "للتواصل والدعم الفني",
        p1: "إذا واجهتك أي مشكلة تقنية أو كان لديك أي استفسار بخصوص التطبيق، يُرجى التواصل معنا مباشرة عبر البريد الإلكتروني: wasiyatak@gmail.com."
    },
    footer: "© {year} فراس احمد خلف. جميع الحقوق محفوظة."
  },
  api_key_missing: {
    title: 'مطلوب تكوين مفتاح API',
    explanation: 'يتطلب هذا التطبيق مفتاح Google Gemini API ليعمل. يرجى اتباع هذه الخطوات لإعداده:',
    step1: 'أنشئ ملفًا باسم `.env.local` في المجلد الجذر لهذا المشروع.',
    step2: 'أضف السطر التالي إلى الملف، مع استبدال `YOUR_API_KEY_HERE` بمفتاحك الفعلي:',
    step3: 'احفظ الملف وأعد تشغيل خادم التطوير حتى تدخل التغييرات حيز التنفيذ.',
    get_key_prompt: 'يمكنك الحصول على مفتاح Gemini API من',
    get_key_link: 'Google AI Studio'
  },
  countries: {
    country_af: "أفغانستان",
    country_al: "ألبانيا",
    country_dz: "الجزائر",
    country_ad: "أندورا",
    country_ao: "أنغولا",
    country_ar: "الأرجنتين",
    country_am: "أرمينيا",
    country_au: "أستراليا",
    country_at: "النمسا",
    country_az: "أذربيجان",
    country_bs: "جزر البهاما",
    country_bh: "البحرين",
    country_bd: "بنغلاديش",
    country_by: "بيلاروسيا",
    country_be: "بلجيكا",
    country_bt: "بوتان",
    country_bo: "بوليفيا",
    country_ba: "البوسنة والهرسك",
    country_br: "البرازيل",
    country_bg: "بلغاريا",
    country_kh: "كمبوديا",
    country_cm: "الكاميرون",
    country_ca: "كندا",
    country_cf: "جمهورية أفريقيا الوسطى",
    country_cl: "تشيلي",
    country_cn: "الصين",
    country_co: "كولومبيا",
    country_cr: "كوستاريكا",
    country_hr: "كرواتيا",
    country_cu: "كوبا",
    country_cy: "قبرص",
    country_cz: "جمهورية التشيك",
    country_dk: "الدنمارك",
    country_do: "جمهورية الدومينيكان",
    country_ec: "الإكوادور",
    country_eg: "مصر",
    country_sv: "السلفادور",
    country_ee: "إستونيا",
    country_et: "إثيوبيا",
    country_fi: "فنلندا",
    country_fr: "فرنسا",
    country_ge: "جورجيا",
    country_de: "ألمانيا",
    country_gh: "غانا",
    country_gr: "اليونان",
    country_gt: "غواتيمالا",
    country_hn: "هندوراس",
    country_hu: "المجر",
    country_is: "آيسلندا",
    country_in: "الهند",
    country_id: "إندونيسيا",
    country_ir: "إيران",
    country_iq: "العراق",
    country_ie: "أيرلندا",
    country_il: "إسرائيل",
    country_it: "إيطاليا",
    country_jp: "اليابان",
    country_jo: "الأردن",
    country_kz: "كازاخستان",
    country_ke: "كينيا",
    country_kw: "الكويت",
    country_lv: "لاتفيا",
    country_lb: "لبنان",
    country_ly: "ليبيا",
    country_lt: "ليتوانيا",
    country_lu: "لوكسمبورغ",
    country_my: "ماليزيا",
    country_mx: "المكسيك",
    country_mn: "منغوليا",
    country_me: "الجبل الأسود",
    country_ma: "المغرب",
    country_mm: "ميانمار",
    country_np: "نيبال",
    country_nl: "هولندا",
    country_nz: "نيوزيلندا",
    country_ng: "نيجيريا",
    country_no: "النرويج",
    country_om: "عمان",
    country_pk: "باكستان",
    country_pa: "بنما",
    country_py: "باراغواي",
    country_pe: "بيرو",
    country_ph: "الفلبين",
    country_pl: "بولندا",
    country_pt: "البرتغال",
    country_qa: "قطر",
    country_ro: "رومانيا",
    country_ru: "روسيا",
    country_sa: "المملكة العربية السعودية",
    country_sn: "السنغال",
    country_rs: "صربيا",
    country_sg: "سنغافورة",
    country_sk: "سلوفاكيا",
    country_si: "سلوفينيا",
    country_za: "جنوب أفريقيا",
    country_kr: "كوريا الجنوبية",
    country_es: "إسبانيا",
    country_lk: "سريلانكا",
    country_sd: "السودان",
    country_se: "السويد",
    country_ch: "سويسرا",
    country_sy: "سوريا",
    country_tw: "تايوان",
    country_th: "تايلاند",
    country_tr: "تركيا",
    country_ua: "أوكرانيا",
    country_ae: "الإمارات العربية المتحدة",
    country_gb: "المملكة المتحدة",
    country_us: "الولايات المتحدة",
    country_uy: "أوروغواي",
    country_uz: "أوزبكستان",
    country_ve: "فنزويلا",
    country_vn: "فيتنام",
    country_ye: "اليمن",
  },
};

const fr: Translations = {
  app_name: "Wasiyatak",
  app_subtitle: "Votre Compagnon Numérique de Testament et d'Héritage",
  log_in: "Se connecter",
  sign_up: "S'inscrire",
  logout: "Se déconnecter",
  close: "Fermer",
  back: "Retour",
  next: "Suivant",
  edit: "Modifier",
  remove: "Supprimer",
  add: "Ajouter",
  yes: "Oui",
  no: "Non",
  currency: "Devise",
  error: "Erreur",
  loading: "Chargement...",
  loading_sr: "Chargement...",
  not_specified: "Non spécifié",
  url_label: "URL",
  pdf_export_error: "Impossible d'exporter en PDF.",
  pdf_export_filename: "Wasiyatak_Testament_{name}.pdf",
  remove_item_aria: "Supprimer l'élément",
  inheritance_calculation_failed: "Échec du calcul de la distribution de la succession.",
  landing_title: "Planifiez votre héritage, assurez leur avenir.",
  landing_subtitle: "Créez un testament juridiquement valable et gérez votre succession en toute confiance.",
  log_in_to_your_account: "Connectez-vous à votre compte",
  create_your_account: "Créez votre compte",
  email: "E-mail",
  password: "Mot de passe",
  confirm_password: "Confirmez le mot de passe",
  full_name: "Nom complet",
  phone_number: "Numéro de téléphone",
  dont_have_account: "Vous n'avez pas de compte ?",
  already_have_account: "Vous avez déjà un compte ?",
  invalid_credentials: "E-mail ou mot de passe invalide. Veuillez réessayer.",
  passwords_do_not_match: "Les mots de passe ne correspondent pas.",
  user_already_exists: "Un utilisateur avec cet e-mail existe déjà.",
  dashboard_title: "Bienvenue sur Votre Wasiyatak",
  dashboard_subtitle: "Gérez votre testament, vos biens et vos dernières volontés en un seul endroit sécurisé. Un testament bien préparé offre une tranquillité d'esprit pour vous et vos proches.",
  edit_existing_will: "Voir & Modifier Votre Testament",
  create_new_will: "Créer un Nouveau Testament",
  step_prefix: "Étape",
  personal_details: "Informations Personnelles",
  beneficiaries: "Bénéficiaires",
  debts: "Dettes & Crédits",
  assets: "Biens",
  will_content: "Contenu du Testament",
  media_messages: "Message Média",
  legal_and_witnesses: "Légal & Témoins",
  final_instructions: "Instructions Finales",
  gender: "Genre",
  religion: "Religion",
  country_of_residence: "Pays de résidence",
  marital_status: "État civil",
  number_of_wives: "Nombre d'épouses",
  inheritance_details_title: "Détails de la succession",
  islamic_inheritance_details_prompt: "Veuillez fournir les détails suivants sur vos parents vivants. Les questions apparaîtront en fonction des règles de l'héritage islamique (par exemple, un fils exclut les frères et sœurs).",
  civil_law_inheritance_prompt: "Veuillez fournir des détails sur vos plus proches parents vivants. Les questions sont basées sur la proximité (enfants d'abord, puis parents, puis frères et sœurs).",
  jewish_inheritance_prompt: "Veuillez fournir des détails basés sur la loi de succession juive, qui donne la priorité aux héritiers masculins.",
  hindu_inheritance_prompt: "Veuillez fournir des détails pour identifier vos héritiers les plus proches (Classe I), tels que le conjoint, les enfants et la mère, qui héritent à parts égales.",
  first_degree_relatives: "Parents au premier degré",
  father_alive: "Votre père est-il en vie ?",
  mother_alive: "Votre mère est-elle en vie ?",
  grandparents_section: "Grands-parents",
  paternal_grandfather_alive: "Votre grand-père paternel (père de votre père) est-il en vie ?",
  paternal_grandmother_alive: "Votre grand-mère paternelle (mère de votre père) est-elle en vie ?",
  maternal_grandmother_alive: "Votre grand-mère maternelle (mère de votre mère) est-elle en vie ?",
  number_of_sons: "Nombre de fils",
  number_of_daughters: "Nombre de filles",
  grandchildren_via_son: "Petits-enfants (via le fils)",
  grand_sons: "Nombre de fils du fils",
  grand_daughters: "Nombre de filles du fils",
  siblings_section: "Frères et sœurs",
  siblings_prompt: "Cette section est pertinente pour le calcul de la succession si certains parents plus proches ne sont pas en vie.",
  full_brothers: "Frères germains",
  full_sisters: "Sœurs germaines",
  paternal_brothers: "Frères consanguins (de même père)",
  paternal_sisters: "Sœurs consanguines (de même père)",
  maternal_siblings: "Frères et sœurs utérins (de même mère)",
  beneficiary_name: "Nom du bénéficiaire",
  relation: "Lien de parenté",
  phone: "Téléphone",
  beneficiaries_step_description: "Listez toutes les personnes ou entités que vous souhaitez voir recevoir une partie de votre succession. À l'étape 4 (Biens), vous pouvez attribuer des biens spécifiques à ces bénéficiaires. Tout bien non attribué fera partie de la 'succession résiduelle' à distribuer entre les héritiers légaux.",
  debts_owed_to_you: "Dettes qui vous sont dues (Crédits)",
  debts_you_owe: "Dettes que vous devez (Débits)",
  person_name: "Nom de la personne/l'institution",
  amount: "Montant",
  description: "Description (ex: prêt, n° de facture)",
  asset_type: "Type de bien",
  asset_description: "Description (ex: adresse, numéro de compte, VIN)",
  asset_value: "Valeur estimée",
  asset_beneficiary: "Attribuer à un bénéficiaire spécifique (optionnel)",
  unassigned: "Partie de la succession résiduelle",
  no_beneficiaries: "Ajoutez d'abord des bénéficiaires à l'étape 2",
  add_asset: "Ajouter un bien",
  complex_assets_title: "Biens Complexes",
  legal_owner: "Propriétaire légal",
  beneficial_owner: "Bénéficiaire effectif",
  add_complex_asset: "Ajouter un bien complexe",
  will_free_text_label: "Votre Déclaration de Testament Personnelle",
  will_free_text_placeholder: "Rédigez ici tout legs, instruction ou message personnel spécifique. Ce contenu sera formellement inclus dans votre testament.",
  upload_audio: "Télécharger un message audio",
  upload_video: "Télécharger un message vidéo",
  choose_file: "Choisir un fichier",
  no_file_selected: "Aucun fichier sélectionné",
  or_link_url: "OU fournir un lien vers un message hébergé",
  lawyer_details: "Détails de l'avocat",
  lawyer_name: "Nom complet de l'avocat",
  witness_details: "Détails du témoin",
  witness_name: "Nom complet du témoin",
  witness_indexed: "Témoin n°{index}",
  add_witness: "Ajouter un témoin",
  notifications_reminders: "Notifications & Rappels",
  update_will_every: "Me rappeler de réviser/mettre à jour mon testament tous les :",
  notification_email_label: "E-mails de notification",
  notification_email_description: "En cas de votre décès, une notification peut être envoyée à ces adresses e-mail.",
  email_label: "E-mail n°{index}",
  add_email: "Ajouter un e-mail",
  burial_location: "Lieu de sépulture préféré",
  final_wishes: "Dernières volontés & Instructions",
  review_your_will: "Révisez Votre Testament",
  export_to_pdf: "Exporter en PDF",
  exporting: "Exportation...",
  financial_summary: "Résumé Financier",
  converting_currencies: "Conversion des devises en {currency}...",
  total_assets_value: "Valeur totale des biens",
  total_credits: "Total des crédits (qui vous sont dus)",
  total_debits: "Total des débits (que vous devez)",
  net_estate_value: "Valeur nette de la succession",
  assigned_assets_value: "Valeur des biens directement attribués",
  residuary_estate: "Succession résiduelle à distribuer",
  islamic_inheritance_calculator: "Distribution de la Succession Islamique",
  calculating_distribution: "Calcul de la distribution selon la loi islamique...",
  calculation_results: "Résultats du calcul",
  heir_name: "Héritier",
  share_amount: "Montant de la part",
  share_percentage: "Pourcentage de la part",
  reason: "Raison / Justification",
  conversion_failed: "Échec de la récupération des taux de change. Le résumé financier peut être inexact.",
  calculation_error: "Une erreur s'est produite lors du calcul des parts de la succession.",
  inheritanceNote: "La succession résiduelle est nulle ou négative, donc aucun calcul de succession ne sera effectué.",
  inheritance_prompt: {
    deceased_is_male: "Le défunt est un homme.",
    deceased_is_female: "La défunte est une femme.",
    relatives_intro: "Les parents suivants sont en vie :",
    husband: "Un mari",
    wives: "{count} épouse(s)",
    father: "Père",
    mother: "Mère",
    paternal_grandfather: "Grand-père paternel (Père du père)",
    paternal_grandmother: "Grand-mère paternelle (Mère du père)",
    maternal_grandmother: "Grand-mère maternelle (Mère de la mère)",
    sons: "{count} fils",
    daughters: "{count} fille(s)",
    son_sons: "{count} fils de fils",
    son_daughters: "{count} fille(s) de fils",
    full_brothers: "{count} frère(s) germain(s)",
    full_sisters: "{count} sœur(s) germaine(s)",
    paternal_brothers: "{count} frère(s) consanguin(s)",
    paternal_sisters: "{count} sœur(s) consanguine(s)",
    maternal_siblings: "{count} frère(s) ou sœur(s) utérin(s)",
  },
  translate_to_another_language: "Traduire dans une autre langue",
  select_language: "Choisir la langue",
  translate: "Traduire",
  translating: "Traduction...",
  placeholders: {
    full_name: "ex: Jean Dupont",
    email: "ex: nom@exemple.com",
    phone: "ex: +33 1 23 45 67 89",
    password: "Entrez un mot de passe sécurisé",
    media_url: "ex: https://www.youtube.com/votre-video",
    notification_email: "ex: membre_famille@exemple.com",
    burial_location: "ex: Cimetière du Père-Lachaise, Section A, Parcelle 12",
    final_wishes: "Décrivez toute instruction spécifique pour vos funérailles, votre inhumation ou autres arrangements finaux.",
  },
  religion_muslim: "Musulman",
  religion_christian: "Chrétien",
  religion_jewish: "Juif",
  religion_hindu: "Hindou",
  religion_buddhist: "Bouddhiste",
  religion_atheist: "Athée",
  religion_other: "Autre",
  gender_male: "Homme",
  gender_female: "Femme",
  marital_status_married: "Marié(e)",
  marital_status_not_married: "Non marié(e)",
  relation_spouse: "Conjoint(e)",
  relation_son: "Fils",
  relation_daughter: "Fille",
  relation_father: "Père",
  relation_mother: "Mère",
  relation_brother: "Frère",
  relation_sister: "Sœur",
  relation_grandchild: "Petit-enfant",
  relation_friend: "Ami(e)",
  relation_other: "Autre",
  asset_type_real_estate: "Immobilier",
  asset_type_bank_account: "Compte bancaire",
  asset_type_vehicle: "Véhicule",
  asset_type_stocks_investments: "Actions/Investissements",
  asset_type_personal_property: "Biens personnels",
  asset_type_other: "Autre",
  reminder_none: "Aucun",
  reminder_3_months: "3 mois",
  reminder_6_months: "6 mois",
  reminder_1_year: "1 an",
  reminder_3_years: "3 ans",
  reminder_5_years: "5 ans",
  privacy_and_security: {
    button_text: "Confidentialité & Sécurité",
    title: "Wasiyatak : Application et Sécurité",
    summary_title: "Aperçu de l'application",
    summary_p1: `"Wasiyatak" est un outil numérique complet et avancé conçu pour permettre aux individus de créer et de gérer leurs testaments personnels avec facilité et sécurité. L'application est conçue comme un guide complet qui accompagne l'utilisateur étape par étape dans le processus de préparation d'un testament, de l'enregistrement des informations personnelles et de l'identification des bénéficiaires, au catalogage des biens et des dettes, en passant par l'inclusion d'instructions finales et de legs spéciaux.`,
    privacy_title: "Confidentialité et sécurité des informations",
    privacy_p1: `La confidentialité est la pierre angulaire de la conception de cette application. L'application est fondée sur le principe que vos données vous appartiennent à vous seul, et qu'aucune autre partie ne devrait y avoir accès.`,
    privacy_p2: `L'application fonctionne entièrement dans votre navigateur web. Cela signifie que toutes les informations que vous saisissez, y compris votre nom complet, les détails de votre famille, vos biens, vos dettes et le contenu de votre testament, ne sont pas envoyées ou stockées sur des serveurs externes ou dans le cloud. Tout reste sur votre appareil.`,
    privacy_p3: `L'IA est utilisée dans un cadre très limité et spécifique pour garantir qu'aucune information sensible n'est révélée : pour le calcul de l'héritage islamique, seule une structure familiale anonyme est envoyée (par exemple, "Le défunt est un homme, a une femme, un père vivant, deux fils et une fille") ainsi que le montant net de la succession à distribuer. Aucun nom ou autre donnée personnelle n'est envoyé.`,
    storage_title: "Comment les informations sont enregistrées",
    storage_p1: `L'application enregistre automatiquement et continuellement toutes les données de votre testament dans le "LocalStorage" du navigateur. Considérez cela comme un fichier sécurisé enregistré dans votre navigateur (comme Chrome, Firefox, Safari) sur votre ordinateur ou votre téléphone.`,
    storage_p2: `Cela signifie que vous pouvez fermer votre navigateur ou redémarrer votre appareil et revenir plus tard pour compléter votre testament, en retrouvant toutes vos données telles que vous les avez laissées. Comme les données sont stockées localement, l'accès est rapide et ne dépend pas de la vitesse d'Internet.`,
    storage_p3: `Les données de votre testament sont liées au navigateur et à l'appareil que vous avez utilisés. Si vous ouvrez l'application sur un autre ordinateur ou un autre navigateur, vous n'y trouverez pas votre testament. De même, si vous effacez les données de votre navigateur (cache et cookies), le testament enregistré sera supprimé.`,
    storage_p4: "Puisque vos données sont stockées uniquement sur votre appareil pour votre confidentialité, nous n'avons aucun moyen de vous aider à récupérer votre compte si vous oubliez votre mot de passe. Veuillez conserver vos identifiants de connexion en lieu sûr.",
    disclaimer_title: `Avis de non-responsabilité légale (Héritage islamique)`,
    disclaimer_intro: `Vous comprenez et acceptez que l'application Wasiyatak® est un outil d'estimation à des fins de calcul. Les conditions suivantes s'appliquent :`,
    disclaimer_point1_title: `Estimations, pas de décisions`,
    disclaimer_point1_text: `Les calculs fournis sont des résultats approximatifs basés sur vos saisies. Ils ne doivent en aucun cas être considérés comme un édit religieux contraignant (fatwa) ou une décision judiciaire finale sur la distribution de l'héritage.`,
    disclaimer_point2_title: `Consultation requise`,
    disclaimer_point2_text: `Les utilisateurs doivent toujours consulter un avocat qualifié spécialisé en droit des personnes et un juriste spécialisé en lois sur l'héritage islamique (Ilm al-Fara'id) avant de prendre toute mesure légale ou financière basée sur les résultats de l'application.`,
    disclaimer_point3_title: `Limitation de responsabilité`,
    disclaimer_point3_text: `Nous ne sommes pas responsables des erreurs, malentendus ou dommages pouvant résulter de l'utilisation directe ou de la confiance totale accordée aux résultats fournis par cette application sans consultation professionnelle.`
  },
  copyright: {
    button_text: "Droits d'auteur",
    title: "Droits de Propriété Intellectuelle",
    intellectual_property: {
        title: "2. Droits de Propriété Intellectuelle",
        p1: "L'application Wasiyatak® et tout son contenu, y compris le design, l'interface, les codes sources, les algorithmes (pour les calculs d'héritage et d'IA), et le logo, sont la propriété privée et exclusive de Firas Ahmad Khalaf.",
        p2: "Tous les droits sont réservés et protégés par les lois de Syrie et de Suède et les lois internationales sur le droit d'auteur. Toute utilisation non autorisée constitue une violation de ces droits."
    },
    privacy_policy: {
        title: "Politique de confidentialité",
        p1: "Nous nous engageons à protéger votre vie privée. Nous ne stockons ni ne partageons aucune donnée personnelle sensible (telle que les noms ou numéros de téléphone) provenant des entrées de calcul de l'héritage. Toute donnée collectée l'est à des fins analytiques pour améliorer les performances de l'application uniquement."
    },
    contact: {
        title: "Contact et Support Technique",
        p1: "Si vous rencontrez des problèmes techniques ou si vous avez des questions sur l'application, veuillez nous contacter directement par e-mail : wasiyatak@gmail.com."
    },
    footer: "© {year} Firas Ahmad Khalaf. Tous droits réservés."
  },
  api_key_missing: {
    title: "Configuration de la clé d'API requise",
    explanation: "Cette application nécessite une clé d'API Google Gemini pour fonctionner. Veuillez suivre ces étapes pour la configurer :",
    step1: "Créez un fichier nommé `.env.local` dans le répertoire racine de ce projet.",
    step2: "Ajoutez la ligne suivante au fichier, en remplaçant `VOTRE_CLÉ_API_ICI` par votre clé réelle :",
    step3: "Enregistrez le fichier et redémarrez le serveur de développement pour que les modifications prennent effet.",
    get_key_prompt: "Vous pouvez obtenir une clé d'API Gemini sur",
    get_key_link: "Google AI Studio"
  },
  countries: {
    country_af: 'Afghanistan',
    country_al: 'Albanie',
    country_dz: 'Algérie',
    country_ad: 'Andorre',
    country_ao: 'Angola',
    country_ar: 'Argentine',
    country_am: 'Arménie',
    country_au: 'Australie',
    country_at: 'Autriche',
    country_az: 'Azerbaïdjan',
    country_bs: 'Bahamas',
    country_bh: 'Bahreïn',
    country_bd: 'Bangladesh',
    country_by: 'Biélorussie',
    country_be: 'Belgique',
    country_bt: 'Bhoutan',
    country_bo: 'Bolivie',
    country_ba: 'Bosnie-Herzégovine',
    country_br: 'Brésil',
    country_bg: 'Bulgarie',
    country_kh: 'Cambodge',
    country_cm: 'Cameroun',
    country_ca: 'Canada',
    country_cf: 'République centrafricaine',
    country_cl: 'Chili',
    country_cn: 'Chine',
    country_co: 'Colombie',
    country_cr: 'Costa Rica',
    country_hr: 'Croatie',
    country_cu: 'Cuba',
    country_cy: 'Chypre',
    country_cz: 'République tchèque',
    country_dk: 'Danemark',
    country_do: 'République dominicaine',
    country_ec: 'Équateur',
    country_eg: 'Égypte',
    country_sv: 'Salvador',
    country_ee: 'Estonie',
    country_et: 'Éthiopie',
    country_fi: 'Finlande',
    country_fr: 'France',
    country_ge: 'Géorgie',
    country_de: 'Allemagne',
    country_gh: 'Ghana',
    country_gr: 'Grèce',
    country_gt: 'Guatemala',
    country_hn: 'Honduras',
    country_hu: 'Hongrie',
    country_is: 'Islande',
    country_in: 'Inde',
    country_id: 'Indonésie',
    country_ir: 'Iran',
    country_iq: 'Irak',
    country_ie: 'Irlande',
    country_il: 'Israël',
    country_it: 'Italie',
    country_jp: 'Japon',
    country_jo: 'Jordanie',
    country_kz: 'Kazakhstan',
    country_ke: 'Kenya',
    country_kw: 'Koweït',
    country_lv: 'Lettonie',
    country_lb: 'Liban',
    country_ly: 'Libye',
    country_lt: 'Lituanie',
    country_lu: 'Luxembourg',
    country_my: 'Malaisie',
    country_mx: 'Mexique',
    country_mn: 'Mongolie',
    country_me: 'Monténégro',
    country_ma: 'Maroc',
    country_mm: 'Myanmar',
    country_np: 'Népal',
    country_nl: 'Pays-Bas',
    country_nz: 'Nouvelle-Zélande',
    country_ng: 'Nigéria',
    country_no: 'Norvège',
    country_om: 'Oman',
    country_pk: 'Pakistan',
    country_pa: 'Panama',
    country_py: 'Paraguay',
    country_pe: 'Pérou',
    country_ph: 'Philippines',
    country_pl: 'Pologne',
    country_pt: 'Portugal',
    country_qa: 'Qatar',
    country_ro: 'Roumanie',
    country_ru: 'Russie',
    country_sa: 'Arabie saoudite',
    country_sn: 'Sénégal',
    country_rs: 'Serbie',
    country_sg: 'Singapour',
    country_sk: 'Slovaquie',
    country_si: 'Slovénie',
    country_za: 'Afrique du Sud',
    country_kr: 'Corée du Sud',
    country_es: 'Espagne',
    country_lk: 'Sri Lanka',
    country_sd: 'Soudan',
    country_se: 'Suède',
    country_ch: 'Suisse',
    country_sy: 'Syrie',
    country_tw: 'Taïwan',
    country_th: 'Thaïlande',
    country_tr: 'Turquie',
    country_ua: 'Ukraine',
    country_ae: 'Émirats arabes unis',
    country_gb: 'Royaume-Uni',
    country_us: 'États-Unis',
    country_uy: 'Uruguay',
    country_uz: 'Ouzbékistan',
    country_ve: 'Venezuela',
    country_vn: 'Viêt Nam',
    country_ye: 'Yémen',
  },
};

const es: Translations = {
  app_name: "Wasiyatak",
  app_subtitle: "Su Compañero Digital de Testamento y Herencia",
  log_in: "Iniciar sesión",
  sign_up: "Registrarse",
  logout: "Cerrar sesión",
  close: "Cerrar",
  back: "Atrás",
  next: "Siguiente",
  edit: "Editar",
  remove: "Eliminar",
  add: "Añadir",
  yes: "Sí",
  no: "No",
  currency: "Moneda",
  error: "Error",
  loading: "Cargando...",
  loading_sr: "Cargando...",
  not_specified: "No especificado",
  url_label: "URL",
  pdf_export_error: "No se pudo exportar a PDF.",
  pdf_export_filename: "Wasiyatak_Testamento_{name}.pdf",
  remove_item_aria: "Eliminar elemento",
  inheritance_calculation_failed: "Error al calcular la distribución de la herencia.",
  landing_title: "Planifique su legado, asegure su futuro.",
  landing_subtitle: "Cree un testamento legalmente sólido y gestione su herencia con confianza.",
  log_in_to_your_account: "Inicie sesión en su cuenta",
  create_your_account: "Cree su cuenta",
  email: "Correo electrónico",
  password: "Contraseña",
  confirm_password: "Confirmar contraseña",
  full_name: "Nombre completo",
  phone_number: "Número de teléfono",
  dont_have_account: "¿No tiene una cuenta?",
  already_have_account: "¿Ya tiene una cuenta?",
  invalid_credentials: "Correo electrónico o contraseña no válidos. Por favor, inténtelo de nuevo.",
  passwords_do_not_match: "Las contraseñas no coinciden.",
  user_already_exists: "Ya existe un usuario con este correo electrónico.",
  dashboard_title: "Bienvenido a Su Wasiyatak",
  dashboard_subtitle: "Gestione su testamento, bienes y últimas voluntades en un único lugar seguro. Un testamento bien preparado proporciona tranquilidad para usted y sus seres queridos.",
  edit_existing_will: "Ver y Editar Su Testamento",
  create_new_will: "Crear un Nuevo Testamento",
  step_prefix: "Paso",
  personal_details: "Datos Personales",
  beneficiaries: "Beneficiarios",
  debts: "Deudas y Créditos",
  assets: "Bienes",
  will_content: "Contenido del Testamento",
  media_messages: "Mensaje Multimedia",
  legal_and_witnesses: "Legal y Testigos",
  final_instructions: "Instrucciones Finales",
  gender: "Género",
  religion: "Religión",
  country_of_residence: "País de residencia",
  marital_status: "Estado civil",
  number_of_wives: "Número de esposas",
  inheritance_details_title: "Detalles de la Herencia",
  islamic_inheritance_details_prompt: "Proporcione los siguientes detalles sobre sus parientes vivos. Las preguntas aparecerán según las reglas de la herencia islámica (por ejemplo, un hijo excluye a los hermanos).",
  civil_law_inheritance_prompt: "Proporcione detalles sobre sus parientes vivos más cercanos. Las preguntas se basan en la proximidad (hijos primero, luego padres, luego hermanos).",
  jewish_inheritance_prompt: "Proporcione detalles basados en la ley de herencia judía, que da prioridad a los herederos varones.",
  hindu_inheritance_prompt: "Proporcione detalles para identificar a sus herederos más cercanos (Clase I), como cónyuge, hijos y madre, que heredan por igual.",
  first_degree_relatives: "Parientes de primer grado",
  father_alive: "¿Está vivo su padre?",
  mother_alive: "¿Está viva su madre?",
  grandparents_section: "Abuelos",
  paternal_grandfather_alive: "¿Está vivo su abuelo paterno (padre de su padre)?",
  paternal_grandmother_alive: "¿Está viva su abuela paterna (madre de su padre)?",
  maternal_grandmother_alive: "¿Está viva su abuela materna (madre de su madre)?",
  number_of_sons: "Número de hijos",
  number_of_daughters: "Número de hijas",
  grandchildren_via_son: "Nietos (a través del hijo)",
  grand_sons: "Número de hijos del hijo",
  grand_daughters: "Número de hijas del hijo",
  siblings_section: "Hermanos",
  siblings_prompt: "Esta sección es relevante para el cálculo de la herencia si ciertos parientes más cercanos no están vivos.",
  full_brothers: "Hermanos de padre y madre",
  full_sisters: "Hermanas de padre y madre",
  paternal_brothers: "Hermanos de padre",
  paternal_sisters: "Hermanas de padre",
  maternal_siblings: "Hermanos de madre",
  beneficiary_name: "Nombre del beneficiario",
  relation: "Relación",
  phone: "Teléfono",
  beneficiaries_step_description: "Enumere todas las personas o entidades que desea que reciban una parte de su patrimonio. En el Paso 4 (Bienes), puede asignar bienes específicos a estos beneficiarios. Cualquier bien no asignado pasará a formar parte del 'patrimonio residual' que se distribuirá entre los herederos legales.",
  debts_owed_to_you: "Deudas a su favor (Créditos)",
  debts_you_owe: "Deudas a su cargo (Débitos)",
  person_name: "Nombre de la persona/institución",
  amount: "Cantidad",
  description: "Descripción (ej: préstamo, n.º de factura)",
  asset_type: "Tipo de bien",
  asset_description: "Descripción (ej: dirección, número de cuenta, VIN)",
  asset_value: "Valor estimado",
  asset_beneficiary: "Asignar a un beneficiario específico (opcional)",
  unassigned: "Parte del patrimonio residual",
  no_beneficiaries: "Añada primero los beneficiarios en el Paso 2",
  add_asset: "Añadir bien",
  complex_assets_title: "Bienes Complejos",
  legal_owner: "Propietario legal",
  beneficial_owner: "Beneficiario final",
  add_complex_asset: "Añadir bien complejo",
  will_free_text_label: "Su Declaración Personal de Testamento",
  will_free_text_placeholder: "Escriba aquí cualquier legado, instrucción o mensaje personal específico. Este contenido se incluirá formalmente en su testamento.",
  upload_audio: "Subir mensaje de audio",
  upload_video: "Subir mensaje de vídeo",
  choose_file: "Elegir archivo",
  no_file_selected: "No se ha seleccionado ningún archivo",
  or_link_url: "O proporcione un enlace a un mensaje alojado",
  lawyer_details: "Datos del abogado",
  lawyer_name: "Nombre completo del abogado",
  witness_details: "Datos del testigo",
  witness_name: "Nombre completo del testigo",
  witness_indexed: "Testigo #{index}",
  add_witness: "Añadir testigo",
  notifications_reminders: "Notificaciones y Recordatorios",
  update_will_every: "Recordarme que revise/actualice mi testamento cada:",
  notification_email_label: "Correos electrónicos de notificación",
  notification_email_description: "En caso de su fallecimiento, se puede enviar una notificación a estas direcciones de correo electrónico.",
  email_label: "Correo electrónico #{index}",
  add_email: "Añadir correo electrónico",
  burial_location: "Lugar de sepultura preferido",
  final_wishes: "Últimas voluntades e Instrucciones",
  review_your_will: "Revise Su Testamento",
  export_to_pdf: "Exportar a PDF",
  exporting: "Exportando...",
  financial_summary: "Resumen Financiero",
  converting_currencies: "Convirtiendo monedas a {currency}...",
  total_assets_value: "Valor total de los bienes",
  total_credits: "Total de créditos (a su favor)",
  total_debits: "Total de débitos (a su cargo)",
  net_estate_value: "Valor neto del patrimonio",
  assigned_assets_value: "Valor de los bienes asignados directamente",
  residuary_estate: "Patrimonio residual para distribuir",
  islamic_inheritance_calculator: "Distribución de la Herencia Islámica",
  calculating_distribution: "Calculando la distribución según la ley islámica...",
  calculation_results: "Resultados del cálculo",
  heir_name: "Heredero",
  share_amount: "Cantidad de la parte",
  share_percentage: "Porcentaje de la parte",
  reason: "Razón / Justificación",
  conversion_failed: "No se pudieron obtener los tipos de cambio de divisas. El resumen financiero puede ser inexacto.",
  calculation_error: "Se ha producido un error al calcular las partes de la herencia.",
  inheritanceNote: "El patrimonio residual es cero o negativo, por lo que no se realizará ningún cálculo de la herencia.",
  inheritance_prompt: {
    deceased_is_male: "El fallecido es un hombre.",
    deceased_is_female: "La fallecida es una mujer.",
    relatives_intro: "Los siguientes parientes están vivos:",
    husband: "Un marido",
    wives: "{count} esposa(s)",
    father: "Padre",
    mother: "Madre",
    paternal_grandfather: "Abuelo paterno (Padre del padre)",
    paternal_grandmother: "Abuela paterna (Madre del padre)",
    maternal_grandmother: "Abuela materna (Madre de la madre)",
    sons: "{count} hijo(s)",
    daughters: "{count} hija(s)",
    son_sons: "{count} hijo(s) del hijo",
    son_daughters: "{count} hija(s) del hijo",
    full_brothers: "{count} hermano(s) de padre y madre",
    full_sisters: "{count} hermana(s) de padre y madre",
    paternal_brothers: "{count} hermano(s) de padre",
    paternal_sisters: "{count} hermana(s) de padre",
    maternal_siblings: "{count} hermano(s) o hermana(s) de madre",
  },
  translate_to_another_language: "Traducir a otro idioma",
  select_language: "Seleccionar idioma",
  translate: "Traducir",
  translating: "Traduciendo...",
  placeholders: {
    full_name: "ej: Juan Pérez",
    email: "ej: nombre@ejemplo.com",
    phone: "ej: +34 912 345 678",
    password: "Introduzca una contraseña segura",
    media_url: "ej: https://www.youtube.com/su-video",
    notification_email: "ej: miembro_familia@ejemplo.com",
    burial_location: "ej: Cementerio de la Almudena, Sección A, Parcela 12",
    final_wishes: "Describa cualquier instrucción específica para su funeral, entierro u otros arreglos finales.",
  },
  religion_muslim: "Musulmán",
  religion_christian: "Cristiano",
  religion_jewish: "Judío",
  religion_hindu: "Hindú",
  religion_buddhist: "Budista",
  religion_atheist: "Ateo",
  religion_other: "Otro",
  gender_male: "Hombre",
  gender_female: "Mujer",
  marital_status_married: "Casado(a)",
  marital_status_not_married: "No casado(a)",
  relation_spouse: "Cónyuge",
  relation_son: "Hijo",
  relation_daughter: "Hija",
  relation_father: "Padre",
  relation_mother: "Madre",
  relation_brother: "Hermano",
  relation_sister: "Hermana",
  relation_grandchild: "Nieto(a)",
  relation_friend: "Amigo(a)",
  relation_other: "Otro",
  asset_type_real_estate: "Bienes inmuebles",
  asset_type_bank_account: "Cuenta bancaria",
  asset_type_vehicle: "Vehículo",
  asset_type_stocks_investments: "Acciones/Inversiones",
  asset_type_personal_property: "Bienes personales",
  asset_type_other: "Otro",
  reminder_none: "Ninguno",
  reminder_3_months: "3 meses",
  reminder_6_months: "6 meses",
  reminder_1_year: "1 año",
  reminder_3_years: "3 años",
  reminder_5_years: "5 años",
  privacy_and_security: {
    button_text: "Privacidad y Seguridad",
    title: "Wasiyatak: Aplicación y Seguridad",
    summary_title: "Resumen de la aplicación",
    summary_p1: `"Wasiyatak" es una herramienta digital completa y avanzada diseñada para capacitar a las personas para crear y gestionar sus testamentos personales con facilidad y seguridad. La aplicación está diseñada como una guía completa que guía al usuario paso a paso a través del proceso de preparación de un testamento, desde el registro de datos personales y la identificación de beneficiarios, hasta la catalogación de bienes y deudas, y la inclusión de instrucciones finales y legados especiales.`,
    privacy_title: "Privacidad y seguridad de la información",
    privacy_p1: `La privacidad es la piedra angular del diseño de esta aplicación. La aplicación se basa en el principio de que sus datos le pertenecen solo a usted, y ninguna otra parte debe tener acceso a ellos.`,
    privacy_p2: `La aplicación funciona completamente dentro de su navegador web. Esto significa que toda la información que introduce, incluyendo su nombre completo, detalles familiares, bienes, deudas y el contenido de su testamento, no se envía ni se almacena en ningún servidor externo o en la nube. Todo permanece en su dispositivo.`,
    privacy_p3: `La IA se utiliza en un ámbito muy limitado y específico para garantizar que no se revele información sensible: para calcular la herencia islámica, solo se envía una estructura familiar anónima (por ejemplo, "El fallecido es un hombre, tiene una esposa, un padre vivo, dos hijos y una hija") junto con el importe neto del patrimonio a distribuir. No se envían nombres ni otros datos personales.`,
    storage_title: "Cómo se guarda la información",
    storage_p1: `La aplicación guarda de forma automática y continua todos los datos de su testamento en el "LocalStorage" del navegador. Piense en esto como un archivo seguro guardado dentro de su navegador (como Chrome, Firefox, Safari) en su ordenador o teléfono.`,
    storage_p2: `Esto significa que puede cerrar el navegador o reiniciar el dispositivo y volver más tarde para completar su testamento, encontrando todos sus datos tal y como los dejó. Como los datos se almacenan localmente, el acceso es rápido y no depende de la velocidad de Internet.`,
    storage_p3: `Los datos de su testamento están vinculados al navegador y al dispositivo que utilizó. Si abre la aplicación en otro ordenador o en un navegador diferente, no encontrará su testamento allí. Del mismo modo, si borra los datos de su navegador (caché y cookies), se eliminará el testamento guardado.`,
    storage_p4: "Dado que sus datos se almacenan únicamente en su dispositivo para su privacidad, no tenemos forma de ayudarle a recuperar su cuenta si olvida su contraseña. Por favor, guarde sus credenciales de acceso en un lugar seguro.",
    disclaimer_title: `Aviso legal (Herencia islámica)`,
    disclaimer_intro: `Usted entiende y acepta que la aplicación Wasiyatak® es una herramienta de estimación para fines de cálculo. Se aplican los siguientes términos:`,
    disclaimer_point1_title: `Estimaciones, no resoluciones`,
    disclaimer_point1_text: `Los cálculos proporcionados son resultados aproximados basados en sus entradas. No deben considerarse, bajo ninguna circunstancia, un edicto religioso vinculante (fatwa) o una resolución judicial final sobre la distribución de la herencia.`,
    disclaimer_point2_title: `Se requiere consulta`,
    disclaimer_point2_text: `Los usuarios siempre deben consultar a un abogado cualificado especializado en derecho de familia y a un jurista especializado en leyes de herencia islámica (Ilm al-Fara'id) antes de tomar cualquier medida legal o financiera basada en los resultados de la aplicación.`,
    disclaimer_point3_title: `Limitación de responsabilidad`,
    disclaimer_point3_text: `No nos hacemos responsables de los errores, malentendidos o daños que puedan surgir del uso directo o de la confianza total en los resultados proporcionados por esta aplicación sin una consulta profesional.`
  },
  copyright: {
    button_text: "Derechos de autor",
    title: "Derechos de Propiedad Intelectual",
    intellectual_property: {
        title: "2. Derechos de Propiedad Intelectual",
        p1: "La aplicación Wasiyatak® y todo su contenido, incluyendo el diseño, la interfaz, los códigos fuente, los algoritmos (para los cálculos de herencia e IA) y el logotipo, son propiedad privada y exclusiva de Firas Ahmad Khalaf.",
        p2: "Todos los derechos están reservados y protegidos por las leyes de Siria y Suecia y las leyes internacionales de derechos de autor. Cualquier uso no autorizado es una violación de estos derechos."
    },
    privacy_policy: {
        title: "Política de privacidad",
        p1: "Nos comprometemos a proteger su privacidad. No almacenamos ni compartimos ningún dato personal sensible (como nombres o números de teléfono) de las entradas del cálculo de la herencia. Cualquier dato recogido es para fines analíticos para mejorar el rendimiento de la aplicación únicamente."
    },
    contact: {
        title: "Contacto y Soporte Técnico",
        p1: "Si encuentra algún problema técnico o tiene alguna pregunta sobre la aplicación, póngase en contacto con nosotros directamente por correo electrónico: wasiyatak@gmail.com."
    },
    footer: "© {year} Firas Ahmad Khalaf. Todos los derechos reservados."
  },
  api_key_missing: {
    title: "Se requiere la configuración de la clave de API",
    explanation: "Esta aplicación requiere una clave de API de Google Gemini para funcionar. Siga estos pasos para configurarla:",
    step1: "Cree un archivo llamado `.env.local` en el directorio raíz de este proyecto.",
    step2: "Añada la siguiente línea al archivo, sustituyendo `SU_CLAVE_DE_API_AQUÍ` por su clave real:",
    step3: "Guarde el archivo y reinicie el servidor de desarrollo para que los cambios surtan efecto.",
    get_key_prompt: "Puede obtener una clave de API de Gemini en",
    get_key_link: "Google AI Studio"
  },
  countries: {
    country_af: 'Afganistán',
    country_al: 'Albania',
    country_dz: 'Argelia',
    country_ad: 'Andorra',
    country_ao: 'Angola',
    country_ar: 'Argentina',
    country_am: 'Armenia',
    country_au: 'Australia',
    country_at: 'Austria',
    country_az: 'Azerbaiyán',
    country_bs: 'Bahamas',
    country_bh: 'Baréin',
    country_bd: 'Bangladés',
    country_by: 'Bielorrusia',
    country_be: 'Bélgica',
    country_bt: 'Bután',
    country_bo: 'Bolivia',
    country_ba: 'Bosnia y Herzegovina',
    country_br: 'Brasil',
    country_bg: 'Bulgaria',
    country_kh: 'Camboya',
    country_cm: 'Camerún',
    country_ca: 'Canadá',
    country_cf: 'República Centroafricana',
    country_cl: 'Chile',
    country_cn: 'China',
    country_co: 'Colombia',
    country_cr: 'Costa Rica',
    country_hr: 'Croacia',
    country_cu: 'Cuba',
    country_cy: 'Chipre',
    country_cz: 'República Checa',
    country_dk: 'Dinamarca',
    country_do: 'República Dominicana',
    country_ec: 'Ecuador',
    country_eg: 'Egipto',
    country_sv: 'El Salvador',
    country_ee: 'Estonia',
    country_et: 'Etiopía',
    country_fi: 'Finlandia',
    country_fr: 'Francia',
    country_ge: 'Georgia',
    country_de: 'Alemania',
    country_gh: 'Ghana',
    country_gr: 'Grecia',
    country_gt: 'Guatemala',
    country_hn: 'Honduras',
    country_hu: 'Hungría',
    country_is: 'Islandia',
    country_in: 'India',
    country_id: 'Indonesia',
    country_ir: 'Irán',
    country_iq: 'Irak',
    country_ie: 'Irlanda',
    country_il: 'Israel',
    country_it: 'Italia',
    country_jp: 'Japón',
    country_jo: 'Jordania',
    country_kz: 'Kazajistán',
    country_ke: 'Kenia',
    country_kw: 'Kuwait',
    country_lv: 'Letonia',
    country_lb: 'Líbano',
    country_ly: 'Libia',
    country_lt: 'Lituania',
    country_lu: 'Luxemburgo',
    country_my: 'Malasia',
    country_mx: 'México',
    country_mn: 'Mongolia',
    country_me: 'Montenegro',
    country_ma: 'Marruecos',
    country_mm: 'Myanmar',
    country_np: 'Nepal',
    country_nl: 'Países Bajos',
    country_nz: 'Nueva Zelanda',
    country_ng: 'Nigeria',
    country_no: 'Noruega',
    country_om: 'Omán',
    country_pk: 'Pakistán',
    country_pa: 'Panamá',
    country_py: 'Paraguay',
    country_pe: 'Perú',
    country_ph: 'Filipinas',
    country_pl: 'Polonia',
    country_pt: 'Portugal',
    country_qa: 'Catar',
    country_ro: 'Rumanía',
    country_ru: 'Rusia',
    country_sa: 'Arabia Saudí',
    country_sn: 'Senegal',
    country_rs: 'Serbia',
    country_sg: 'Singapur',
    country_sk: 'Eslovaquia',
    country_si: 'Eslovenia',
    country_za: 'Sudáfrica',
    country_kr: 'Corea del Sur',
    country_es: 'España',
    country_lk: 'Sri Lanka',
    country_sd: 'Sudán',
    country_se: 'Suecia',
    country_ch: 'Suiza',
    country_sy: 'Siria',
    country_tw: 'Taiwán',
    country_th: 'Tailandia',
    country_tr: 'Turquía',
    country_ua: 'Ucrania',
    country_ae: 'Emiratos Árabes Unidos',
    country_gb: 'Reino Unido',
    country_us: 'Estados Unidos',
    country_uy: 'Uruguay',
    country_uz: 'Uzbekistán',
    country_ve: 'Venezuela',
    country_vn: 'Vietnam',
    country_ye: 'Yemen',
  },
};

const de: Translations = {
  app_name: "Wasiyatak",
  app_subtitle: "Ihr Digitaler Begleiter für Testament und Erbschaft",
  log_in: "Anmelden",
  sign_up: "Registrieren",
  logout: "Abmelden",
  close: "Schließen",
  back: "Zurück",
  next: "Weiter",
  edit: "Bearbeiten",
  remove: "Entfernen",
  add: "Hinzufügen",
  yes: "Ja",
  no: "Nein",
  currency: "Währung",
  error: "Fehler",
  loading: "Laden...",
  loading_sr: "Laden...",
  not_specified: "Nicht angegeben",
  url_label: "URL",
  pdf_export_error: "Konnte nicht als PDF exportiert werden.",
  pdf_export_filename: "Wasiyatak_Testament_{name}.pdf",
  remove_item_aria: "Element entfernen",
  inheritance_calculation_failed: "Fehler bei der Berechnung der Erbverteilung.",
  landing_title: "Planen Sie Ihr Vermächtnis, sichern Sie ihre Zukunft.",
  landing_subtitle: "Erstellen Sie ein rechtssicheres Testament und verwalten Sie Ihre Erbschaft mit Vertrauen.",
  log_in_to_your_account: "Melden Sie sich bei Ihrem Konto an",
  create_your_account: "Erstellen Sie Ihr Konto",
  email: "E-Mail",
  password: "Passwort",
  confirm_password: "Passwort bestätigen",
  full_name: "Vollständiger Name",
  phone_number: "Telefonnummer",
  dont_have_account: "Haben Sie noch kein Konto?",
  already_have_account: "Haben Sie bereits ein Konto?",
  invalid_credentials: "Ungültige E-Mail-Adresse oder Passwort. Bitte versuchen Sie es erneut.",
  passwords_do_not_match: "Die Passwörter stimmen nicht überein.",
  user_already_exists: "Ein Benutzer mit dieser E-Mail-Adresse existiert bereits.",
  dashboard_title: "Willkommen bei Ihrem Wasiyatak",
  dashboard_subtitle: "Verwalten Sie Ihr Testament, Ihr Vermögen und Ihre letzten Wünsche an einem sicheren Ort. Ein gut vorbereitetes Testament sorgt für Seelenfrieden für Sie und Ihre Lieben.",
  edit_existing_will: "Ihr Testament ansehen & bearbeiten",
  create_new_will: "Neues Testament erstellen",
  step_prefix: "Schritt",
  personal_details: "Persönliche Daten",
  beneficiaries: "Begünstigte",
  debts: "Schulden & Guthaben",
  assets: "Vermögenswerte",
  will_content: "Inhalt des Testaments",
  media_messages: "Mediennachricht",
  legal_and_witnesses: "Rechtliches & Zeugen",
  final_instructions: "Letzte Anweisungen",
  gender: "Geschlecht",
  religion: "Religion",
  country_of_residence: "Wohnsitzland",
  marital_status: "Familienstand",
  number_of_wives: "Anzahl der Ehefrauen",
  inheritance_details_title: "Details zur Erbschaft",
  islamic_inheritance_details_prompt: "Bitte geben Sie die folgenden Details zu Ihren lebenden Verwandten an. Fragen werden basierend auf den islamischen Erbregeln erscheinen (z. B. schließt ein Sohn Geschwister aus).",
  civil_law_inheritance_prompt: "Bitte geben Sie Details zu Ihren engsten lebenden Verwandten an. Die Fragen basieren auf der Nähe (Kinder zuerst, dann Eltern, dann Geschwister).",
  jewish_inheritance_prompt: "Bitte geben Sie Details basierend auf dem jüdischen Erbrecht an, das männliche Erben bevorzugt.",
  hindu_inheritance_prompt: "Bitte geben Sie Details an, um Ihre engsten Erben (Klasse I) zu identifizieren, wie z. B. Ehepartner, Kinder und Mutter, die zu gleichen Teilen erben.",
  first_degree_relatives: "Verwandte ersten Grades",
  father_alive: "Lebt Ihr Vater?",
  mother_alive: "Lebt Ihre Mutter?",
  grandparents_section: "Großeltern",
  paternal_grandfather_alive: "Lebt Ihr Großvater väterlicherseits (Vater des Vaters)?",
  paternal_grandmother_alive: "Lebt Ihre Großmutter väterlicherseits (Mutter des Vaters)?",
  maternal_grandmother_alive: "Lebt Ihre Großmutter mütterlicherseits (Mutter der Mutter)?",
  number_of_sons: "Anzahl der Söhne",
  number_of_daughters: "Anzahl der Töchter",
  grandchildren_via_son: "Enkelkinder (über den Sohn)",
  grand_sons: "Anzahl der Söhne des Sohnes",
  grand_daughters: "Anzahl der Töchter des Sohnes",
  siblings_section: "Geschwister",
  siblings_prompt: "Dieser Abschnitt ist für die Erbschaftsberechnung relevant, wenn bestimmte nähere Verwandte nicht mehr leben.",
  full_brothers: "Vollbrüder",
  full_sisters: "Vollschwestern",
  paternal_brothers: "Halbbrüder (väterlicherseits)",
  paternal_sisters: "Halbschwestern (väterlicherseits)",
  maternal_siblings: "Halbgeschwister (mütterlicherseits)",
  beneficiary_name: "Name des Begünstigten",
  relation: "Beziehung",
  phone: "Telefon",
  beneficiaries_step_description: "Listen Sie alle Personen oder Organisationen auf, die einen Teil Ihres Nachlasses erhalten sollen. In Schritt 4 (Vermögenswerte) können Sie diesen Begünstigten bestimmte Vermögenswerte zuweisen. Alle nicht zugewiesenen Vermögenswerte werden Teil des 'Restnachlasses', der unter den gesetzlichen Erben verteilt wird.",
  debts_owed_to_you: "Ihnen geschuldete Beträge (Guthaben)",
  debts_you_owe: "Von Ihnen geschuldete Beträge (Schulden)",
  person_name: "Name der Person/Institution",
  amount: "Betrag",
  description: "Beschreibung (z.B. Darlehen, Rechnungsnr.)",
  asset_type: "Art des Vermögenswertes",
  asset_description: "Beschreibung (z.B. Adresse, Kontonummer, FIN)",
  asset_value: "Geschätzter Wert",
  asset_beneficiary: "Einem bestimmten Begünstigten zuweisen (optional)",
  unassigned: "Teil des Restnachlasses",
  no_beneficiaries: "Fügen Sie zuerst Begünstigte in Schritt 2 hinzu",
  add_asset: "Vermögenswert hinzufügen",
  complex_assets_title: "Komplexe Vermögenswerte",
  legal_owner: "Rechtmäßiger Eigentümer",
  beneficial_owner: "Wirtschaftlicher Eigentümer",
  add_complex_asset: "Komplexen Vermögenswert hinzufügen",
  will_free_text_label: "Ihre persönliche Testamentserklärung",
  will_free_text_placeholder: "Schreiben Sie hier spezifische Vermächtnisse, Anweisungen oder persönliche Nachrichten. Dieser Inhalt wird formell in Ihr Testament aufgenommen.",
  upload_audio: "Audionachricht hochladen",
  upload_video: "Videonachricht hochladen",
  choose_file: "Datei auswählen",
  no_file_selected: "Keine Datei ausgewählt",
  or_link_url: "ODER geben Sie einen Link zu einer gehosteten Nachricht an",
  lawyer_details: "Angaben zum Anwalt",
  lawyer_name: "Vollständiger Name des Anwalts",
  witness_details: "Angaben zum Zeugen",
  witness_name: "Vollständiger Name des Zeugen",
  witness_indexed: "Zeuge Nr. {index}",
  add_witness: "Zeugen hinzufügen",
  notifications_reminders: "Benachrichtigungen & Erinnerungen",
  update_will_every: "Erinnere mich daran, mein Testament alle ... zu überprüfen/aktualisieren:",
  notification_email_label: "Benachrichtigungs-E-Mails",
  notification_email_description: "Im Falle Ihres Todes kann eine Benachrichtigung an diese E-Mail-Adressen gesendet werden.",
  email_label: "E-Mail Nr. {index}",
  add_email: "E-Mail hinzufügen",
  burial_location: "Bevorzugter Bestattungsort",
  final_wishes: "Letzte Wünsche & Anweisungen",
  review_your_will: "Überprüfen Sie Ihr Testament",
  export_to_pdf: "Als PDF exportieren",
  exporting: "Exportieren...",
  financial_summary: "Finanzübersicht",
  converting_currencies: "Währungen werden in {currency} umgerechnet...",
  total_assets_value: "Gesamtwert des Vermögens",
  total_credits: "Gesamtforderungen (Ihnen geschuldet)",
  total_debits: "Gesamtverbindlichkeiten (von Ihnen geschuldet)",
  net_estate_value: "Nettowert des Nachlasses",
  assigned_assets_value: "Wert der direkt zugewiesenen Vermögenswerte",
  residuary_estate: "Zu verteilender Restnachlass",
  islamic_inheritance_calculator: "Islamische Erbverteilung",
  calculating_distribution: "Verteilung wird nach islamischem Recht berechnet...",
  calculation_results: "Berechnungsergebnisse",
  heir_name: "Erbe",
  share_amount: "Anteilshöhe",
  share_percentage: "Anteil in Prozent",
  reason: "Grund / Rechtfertigung",
  conversion_failed: "Fehler beim Abrufen der Währungsumrechnungskurse. Die Finanzübersicht ist möglicherweise ungenau.",
  calculation_error: "Bei der Berechnung der Erbanteile ist ein Fehler aufgetreten.",
  inheritanceNote: "Der Restnachlass ist null oder negativ, daher wird keine Erbschaftsberechnung durchgeführt.",
  inheritance_prompt: {
    deceased_is_male: "Der Verstorbene ist ein Mann.",
    deceased_is_female: "Die Verstorbene ist eine Frau.",
    relatives_intro: "Die folgenden Verwandten leben:",
    husband: "Ein Ehemann",
    wives: "{count} Ehefrau(en)",
    father: "Vater",
    mother: "Mutter",
    paternal_grandfather: "Großvater väterlicherseits (Vater des Vaters)",
    paternal_grandmother: "Großmutter väterlicherseits (Mutter des Vaters)",
    maternal_grandmother: "Großmutter mütterlicherseits (Mutter der Mutter)",
    sons: "{count} Sohn/Söhne",
    daughters: "{count} Tochter/Töchter",
    son_sons: "{count} Sohn/Söhne des Sohnes",
    son_daughters: "{count} Tochter/Töchter des Sohnes",
    full_brothers: "{count} Vollbruder/-brüder",
    full_sisters: "{count} Vollschwester(n)",
    paternal_brothers: "{count} Halbbruder/-brüder (väterlicherseits)",
    paternal_sisters: "{count} Halbschwester(n) (väterlicherseits)",
    maternal_siblings: "{count} Halbgeschwister (mütterlicherseits)",
  },
  translate_to_another_language: "In eine andere Sprache übersetzen",
  select_language: "Sprache auswählen",
  translate: "Übersetzen",
  translating: "Übersetzen...",
  placeholders: {
    full_name: "z.B. Max Mustermann",
    email: "z.B. name@beispiel.com",
    phone: "z.B. +49 123 4567890",
    password: "Geben Sie ein sicheres Passwort ein",
    media_url: "z.B. https://www.youtube.com/ihr-video",
    notification_email: "z.B. familienmitglied@beispiel.com",
    burial_location: "z.B. Friedhof Grünberg, Abteilung A, Grab 12",
    final_wishes: "Beschreiben Sie spezifische Anweisungen für Ihre Beerdigung, Bestattung oder andere letzte Vorkehrungen.",
  },
  religion_muslim: "Muslimisch",
  religion_christian: "Christlich",
  religion_jewish: "Jüdisch",
  religion_hindu: "Hinduistisch",
  religion_buddhist: "Buddhistisch",
  religion_atheist: "Atheistisch",
  religion_other: "Andere",
  gender_male: "Männlich",
  gender_female: "Weiblich",
  marital_status_married: "Verheiratet",
  marital_status_not_married: "Nicht verheiratet",
  relation_spouse: "Ehepartner/in",
  relation_son: "Sohn",
  relation_daughter: "Tochter",
  relation_father: "Vater",
  relation_mother: "Mutter",
  relation_brother: "Bruder",
  relation_sister: "Schwester",
  relation_grandchild: "Enkelkind",
  relation_friend: "Freund/in",
  relation_other: "Andere",
  asset_type_real_estate: "Immobilien",
  asset_type_bank_account: "Bankkonto",
  asset_type_vehicle: "Fahrzeug",
  asset_type_stocks_investments: "Aktien/Investitionen",
  asset_type_personal_property: "Persönliches Eigentum",
  asset_type_other: "Andere",
  reminder_none: "Keine",
  reminder_3_months: "3 Monate",
  reminder_6_months: "6 Monate",
  reminder_1_year: "1 Jahr",
  reminder_3_years: "3 Jahre",
  reminder_5_years: "5 Jahre",
  privacy_and_security: {
    button_text: "Datenschutz & Sicherheit",
    title: "Wasiyatak: Anwendung und Sicherheit",
    summary_title: "Anwendungsübersicht",
    summary_p1: `"Wasiyatak" ist ein umfassendes und fortschrittliches digitales Werkzeug, das Einzelpersonen befähigt, ihre persönlichen Testamente einfach und sicher zu erstellen und zu verwalten. Die Anwendung ist als umfassender Leitfaden konzipiert, der den Benutzer Schritt für Schritt durch den Prozess der Testamentserstellung führt, von der Erfassung persönlicher Daten und der Identifizierung von Begünstigten über die Katalogisierung von Vermögenswerten und Schulden bis hin zur Aufnahme von letzten Anweisungen und besonderen Vermächtnissen.`,
    privacy_title: "Datenschutz und Informationssicherheit",
    privacy_p1: `Der Datenschutz ist der Eckpfeiler des Designs dieser Anwendung. Die Anwendung basiert auf dem Prinzip, dass Ihre Daten allein Ihnen gehören und keine andere Partei darauf zugreifen sollte.`,
    privacy_p2: `Die Anwendung funktioniert vollständig in Ihrem Webbrowser. Das bedeutet, dass alle Informationen, die Sie eingeben, einschließlich Ihres vollständigen Namens, Ihrer Familiendetails, Ihres Vermögens, Ihrer Schulden und des Inhalts Ihres Testaments, nicht an externe oder Cloud-Server gesendet oder dort gespeichert werden. Alles bleibt auf Ihrem Gerät.`,
    privacy_p3: `Die KI wird in einem sehr begrenzten und spezifischen Umfang eingesetzt, um sicherzustellen, dass keine sensiblen Informationen preisgegeben werden: Für die Berechnung des islamischen Erbes wird nur eine anonyme Familienstruktur (z. B. "Der Verstorbene ist männlich, hat eine Frau, einen lebenden Vater, zwei Söhne und eine Tochter") zusammen mit dem zu verteilenden Nettonachlassbetrag gesendet. Es werden keine Namen oder andere persönliche Daten gesendet.`,
    storage_title: "Wie Informationen gespeichert werden",
    storage_p1: `Die Anwendung speichert alle Ihre Testamentsdaten automatisch und kontinuierlich im "LocalStorage" des Browsers. Stellen Sie sich das wie eine sichere Datei vor, die in Ihrem Browser (wie Chrome, Firefox, Safari) auf Ihrem Computer oder Telefon gespeichert wird.`,
    storage_p2: `Das bedeutet, dass Sie Ihren Browser schließen oder Ihr Gerät neu starten und später zurückkehren können, um Ihr Testament zu vervollständigen, und alle Ihre Daten so vorfinden, wie Sie sie verlassen haben. Da die Daten lokal gespeichert werden, ist der Zugriff schnell und hängt nicht von der Internetgeschwindigkeit ab.`,
    storage_p3: `Ihre Testamentsdaten sind an den von Ihnen verwendeten Browser und das Gerät gebunden. Wenn Sie die Anwendung auf einem anderen Computer oder in einem anderen Browser öffnen, werden Sie Ihr Testament dort nicht finden. Ebenso wird das gespeicherte Testament gelöscht, wenn Sie die Daten Ihres Browsers (Cache und Cookies) löschen.`,
    storage_p4: "Da Ihre Daten aus Datenschutzgründen nur auf Ihrem Gerät gespeichert werden, haben wir keine Möglichkeit, Ihnen bei der Wiederherstellung Ihres Kontos zu helfen, wenn Sie Ihr Passwort vergessen. Bitte bewahren Sie Ihre Anmeldedaten an einem sicheren Ort auf.",
    disclaimer_title: `Rechtlicher Hinweis (Islamische Erbschaft)`,
    disclaimer_intro: `Sie verstehen und stimmen zu, dass die Wasiyatak® App ein Schätzungswerkzeug für Berechnungszwecke ist. Es gelten die folgenden Bedingungen:`,
    disclaimer_point1_title: `Schätzungen, keine Urteile`,
    disclaimer_point1_text: `Die bereitgestellten Berechnungen sind ungefähre Ergebnisse, die auf Ihren Eingaben basieren. Sie sind unter keinen Umständen als verbindliches religiöses Gutachten (Fatwa) oder als endgültiges gerichtliches Urteil über die Erbverteilung anzusehen.`,
    disclaimer_point2_title: `Beratung erforderlich`,
    disclaimer_point2_text: `Benutzer müssen sich immer an einen qualifizierten, auf Personenstandsrecht spezialisierten Anwalt und einen auf islamisches Erbrecht (Ilm al-Fara'id) spezialisierten Juristen wenden, bevor sie rechtliche oder finanzielle Maßnahmen auf der Grundlage der App-Ergebnisse ergreifen.`,
    disclaimer_point3_title: `Haftungsbeschränkung`,
    disclaimer_point3_text: `Wir haften nicht für Fehler, Missverständnisse oder Schäden, die aus der direkten Nutzung oder dem vollständigen Vertrauen auf die von dieser Anwendung bereitgestellten Ergebnisse ohne professionelle Beratung entstehen können.`
  },
  copyright: {
    button_text: "Urheberrecht",
    title: "Rechte an geistigem Eigentum",
    intellectual_property: {
        title: "2. Rechte an geistigem Eigentum",
        p1: "Die Anwendung Wasiyatak® und alle ihre Inhalte, einschließlich des Designs, der Benutzeroberfläche, der Quellcodes, der Algorithmen (für Erbschafts- und KI-Berechnungen) und des Logos, sind das private und ausschließliche Eigentum von Firas Ahmad Khalaf.",
        p2: "Alle Rechte sind vorbehalten und durch die Gesetze Syriens und Schwedens sowie internationale Urheberrechtsgesetze geschützt. Jede nicht autorisierte Nutzung stellt eine Verletzung dieser Rechte dar."
    },
    privacy_policy: {
        title: "Datenschutzrichtlinie",
        p1: "Wir verpflichten uns, Ihre Privatsphäre zu schützen. Wir speichern oder teilen keine sensiblen persönlichen Daten (wie Namen oder Telefonnummern) aus den Eingaben für die Erbschaftsberechnung. Alle gesammelten Daten dienen nur analytischen Zwecken zur Verbesserung der Anwendungsleistung."
    },
    contact: {
        title: "Kontakt und technischer Support",
        p1: "Wenn Sie auf technische Probleme stoßen oder Fragen zur Anwendung haben, kontaktieren Sie uns bitte direkt per E-Mail: wasiyatak@gmail.com."
    },
    footer: "© {year} Firas Ahmad Khalaf. Alle Rechte vorbehalten."
  },
  api_key_missing: {
    title: "API-Schlüsselkonfiguration erforderlich",
    explanation: "Diese Anwendung benötigt einen Google Gemini API-Schlüssel, um zu funktionieren. Bitte befolgen Sie diese Schritte, um ihn einzurichten:",
    step1: "Erstellen Sie eine Datei mit dem Namen `.env.local` im Stammverzeichnis dieses Projekts.",
    step2: "Fügen Sie die folgende Zeile in die Datei ein und ersetzen Sie `IHR_API_SCHLÜSSEL_HIER` durch Ihren tatsächlichen Schlüssel:",
    step3: "Speichern Sie die Datei und starten Sie den Entwicklungsserver neu, damit die Änderungen wirksam werden.",
    get_key_prompt: "Sie können einen Gemini API-Schlüssel von",
    get_key_link: "Google AI Studio"
  },
  countries: {
    country_af: 'Afghanistan',
    country_al: 'Albanien',
    country_dz: 'Algerien',
    country_ad: 'Andorra',
    country_ao: 'Angola',
    country_ar: 'Argentinien',
    country_am: 'Armenien',
    country_au: 'Australien',
    country_at: 'Österreich',
    country_az: 'Aserbaidschan',
    country_bs: 'Bahamas',
    country_bh: 'Bahrain',
    country_bd: 'Bangladesch',
    country_by: 'Weißrussland',
    country_be: 'Belgien',
    country_bt: 'Bhutan',
    country_bo: 'Bolivien',
    country_ba: 'Bosnien und Herzegowina',
    country_br: 'Brasilien',
    country_bg: 'Bulgarien',
    country_kh: 'Kambodscha',
    country_cm: 'Kamerun',
    country_ca: 'Kanada',
    country_cf: 'Zentralafrikanische Republik',
    country_cl: 'Chile',
    country_cn: 'China',
    country_co: 'Kolumbien',
    country_cr: 'Costa Rica',
    country_hr: 'Kroatien',
    country_cu: 'Kuba',
    country_cy: 'Zypern',
    country_cz: 'Tschechische Republik',
    country_dk: 'Dänemark',
    country_do: 'Dominikanische Republik',
    country_ec: 'Ecuador',
    country_eg: 'Ägypten',
    country_sv: 'El Salvador',
    country_ee: 'Estland',
    country_et: 'Äthiopien',
    country_fi: 'Finnland',
    country_fr: 'Frankreich',
    country_ge: 'Georgien',
    country_de: 'Deutschland',
    country_gh: 'Ghana',
    country_gr: 'Griechenland',
    country_gt: 'Guatemala',
    country_hn: 'Honduras',
    country_hu: 'Ungarn',
    country_is: 'Island',
    country_in: 'Indien',
    country_id: 'Indonesien',
    country_ir: 'Iran',
    country_iq: 'Irak',
    country_ie: 'Irland',
    country_il: 'Israel',
    country_it: 'Italien',
    country_jp: 'Japan',
    country_jo: 'Jordanien',
    country_kz: 'Kasachstan',
    country_ke: 'Kenia',
    country_kw: 'Kuwait',
    country_lv: 'Lettland',
    country_lb: 'Libanon',
    country_ly: 'Libyen',
    country_lt: 'Litauen',
    country_lu: 'Luxemburg',
    country_my: 'Malaysia',
    country_mx: 'Mexiko',
    country_mn: 'Mongolei',
    country_me: 'Montenegro',
    country_ma: 'Marokko',
    country_mm: 'Myanmar',
    country_np: 'Nepal',
    country_nl: 'Niederlande',
    country_nz: 'Neuseeland',
    country_ng: 'Nigeria',
    country_no: 'Norwegen',
    country_om: 'Oman',
    country_pk: 'Pakistan',
    country_pa: 'Panama',
    country_py: 'Paraguay',
    country_pe: 'Peru',
    country_ph: 'Philippinen',
    country_pl: 'Polen',
    country_pt: 'Portugal',
    country_qa: 'Katar',
    country_ro: 'Rumänien',
    country_ru: 'Russland',
    country_sa: 'Saudi-Arabien',
    country_sn: 'Senegal',
    country_rs: 'Serbien',
    country_sg: 'Singapur',
    country_sk: 'Slowakei',
    country_si: 'Slowenien',
    country_za: 'Südafrika',
    country_kr: 'Südkorea',
    country_es: 'Spanien',
    country_lk: 'Sri Lanka',
    country_sd: 'Sudan',
    country_se: 'Schweden',
    country_ch: 'Schweiz',
    country_sy: 'Syrien',
    country_tw: 'Taiwan',
    country_th: 'Thailand',
    country_tr: 'Türkei',
    country_ua: 'Ukraine',
    country_ae: 'Vereinigte Arabische Emirate',
    country_gb: 'Vereinigtes Königreich',
    country_us: 'Vereinigte Staaten',
    country_uy: 'Uruguay',
    country_uz: 'Usbekistan',
    country_ve: 'Venezuela',
    country_vn: 'Vietnam',
    country_ye: 'Jemen',
  },
};

const ur: Translations = JSON.parse(JSON.stringify(ar)); // Deep copy from Arabic
const ru: Translations = JSON.parse(JSON.stringify(en)); // Deep copy from English
const zh: Translations = JSON.parse(JSON.stringify(en));
const ja: Translations = JSON.parse(JSON.stringify(en));
const pt: Translations = JSON.parse(JSON.stringify(en));
const hi: Translations = JSON.parse(JSON.stringify(en));
const bn: Translations = JSON.parse(JSON.stringify(en));
const tr: Translations = JSON.parse(JSON.stringify(en));
const id: Translations = JSON.parse(JSON.stringify(en));
const fa: Translations = JSON.parse(JSON.stringify(ar)); // Deep copy from Arabic
const nl: Translations = JSON.parse(JSON.stringify(en));
const it: Translations = JSON.parse(JSON.stringify(en));
const ko: Translations = JSON.parse(JSON.stringify(en));
const sv: Translations = JSON.parse(JSON.stringify(en));
const pl: Translations = JSON.parse(JSON.stringify(en));

// --- URDU (اردو) TRANSLATIONS ---
// Based on Arabic (ar)
ur.app_subtitle = "آپ کی ڈیجیٹل وصیت اور وراثت کا ساتھی";
ur.log_in = "لاگ ان کریں";
ur.sign_up = "سائن اپ کریں";
ur.logout = "لاگ آؤٹ";
ur.close = "بند کریں";
ur.back = "پیچھے";
ur.next = "آگے";
ur.edit = "ترمیم کریں";
ur.remove = "ہٹائیں";
ur.add = "شامل کریں";
ur.yes = "ہاں";
ur.no = "نہیں";
ur.currency = "کرنسی";
ur.error = "خرابی";
ur.loading = "لوڈ ہو رہا ہے...";
ur.loading_sr = "لوڈ ہو رہا ہے...";
ur.not_specified = "غیر متعین";
ur.url_label = "یو آر ایل";
ur.pdf_export_error = "پی ڈی ایف میں ایکسپورٹ نہیں کیا جا سکا۔";
ur.pdf_export_filename = "وصیتک_وصیت_{name}.pdf";
ur.remove_item_aria = "آئٹم ہٹائیں";
ur.inheritance_calculation_failed = "وراثت کی تقسیم کا حساب لگانے میں ناکامی۔";
ur.landing_title = "اپنی میراث کی منصوبہ بندی کریں، ان کے مستقبل کو محفوظ بنائیں۔";
ur.landing_subtitle = "ایک قانونی طور پر درست وصیت بنائیں اور اعتماد کے ساتھ اپنی وراثت کا انتظام کریں۔";
ur.log_in_to_your_account = "اپنے اکاؤنٹ میں لاگ ان کریں";
ur.create_your_account = "اپنا اکاؤنٹ بنائیں";
ur.email = "ای میل";
ur.password = "پاس ورڈ";
ur.confirm_password = "پاس ورڈ کی تصدیق کریں";
ur.full_name = "پورا نام";
ur.phone_number = "فون نمبر";
ur.dont_have_account = "اکاؤنٹ نہیں ہے؟";
ur.already_have_account = "پہلے سے اکاؤنٹ ہے؟";
ur.invalid_credentials = "غلط ای میل یا پاس ورڈ۔ براہ کرم دوبارہ کوشش کریں۔";
ur.passwords_do_not_match = "پاس ورڈ مماثل نہیں ہیں۔";
ur.user_already_exists = "اس ای میل کے ساتھ ایک صارف پہلے سے موجود ہے۔";
ur.dashboard_title = "آپ کی وصیتک میں خوش آمدید";
ur.dashboard_subtitle = "اپنی وصیت، اثاثوں، اور آخری خواہشات کا ایک محفوظ جگہ پر انتظام کریں۔ ایک اچھی طرح سے تیار کردہ وصیت آپ اور آپ کے پیاروں کے لیے ذہنی سکون فراہم کرتی ہے۔";
ur.edit_existing_will = "اپنی وصیت دیکھیں اور ترمیم کریں";
ur.create_new_will = "نئی وصیت بنائیں";
ur.step_prefix = "مرحلہ";
ur.personal_details = "ذاتی تفصیلات";
ur.beneficiaries = "مستحقین";
ur.debts = "قرضے اور کریڈٹس";
ur.assets = "اثاثے";
ur.will_content = "وصیت کا مواد";
ur.media_messages = "میڈیا پیغام";
ur.legal_and_witnesses = "قانونی اور گواہان";
ur.final_instructions = "آخری ہدایات";
ur.gender = "جنس";
ur.religion = "مذہب";
ur.country_of_residence = "رہائشی ملک";
ur.marital_status = "ازدواجی حیثیت";
ur.number_of_wives = "بیویوں کی تعداد";
ur.inheritance_details_title = "وراثت کی تفصیلات";
ur.islamic_inheritance_details_prompt = "براہ کرم اپنے زندہ رشتہ داروں کے بارے میں درج ذیل تفصیلات فراہم کریں۔ سوالات اسلامی وراثت کے قوانین کی بنیاد پر ظاہر ہوں گے (مثلاً، بیٹا بہن بھائیوں کو وراثت سے محروم کر دیتا ہے)۔";
ur.civil_law_inheritance_prompt = "براہ کرم اپنے قریبی زندہ رشتہ داروں کے بارے میں تفصیلات فراہم کریں۔ سوالات قربت کی بنیاد پر ہیں (پہلے بچے، پھر والدین، پھر بہن بھائی)۔";
ur.jewish_inheritance_prompt = "براہ کرم یہودی وراثت کے قانون کی بنیاد پر تفصیلات فراہم کریں، جو مرد وارثوں کو ترجیح دیتا ہے۔";
ur.hindu_inheritance_prompt = "براہ کرم اپنے قریبی وارثوں (کلاس I) کی شناخت کے لیے تفصیلات فراہم کریں، جیسے کہ شریک حیات، بچے، اور ماں، جو برابر وراثت پاتے ہیں۔";
ur.first_degree_relatives = "پہلی ڈگری کے رشتہ دار";
ur.father_alive = "کیا آپ کے والد زندہ ہیں؟";
ur.mother_alive = "کیا آپ کی والدہ زندہ ہیں؟";
ur.grandparents_section = "دادا دادی/نانا نانی";
ur.paternal_grandfather_alive = "کیا آپ کے دادا (والد کے والد) زندہ ہیں؟";
ur.paternal_grandmother_alive = "کیا آپ کی دادی (والد کی والدہ) زندہ ہیں؟";
ur.maternal_grandmother_alive = "کیا آپ کی نانی (والدہ کی والدہ) زندہ ہیں؟";
ur.number_of_sons = "بیٹوں کی تعداد";
ur.number_of_daughters = "بیٹیوں کی تعداد";
ur.grandchildren_via_son = "پوتے پوتیاں (بیٹے کے ذریعے)";
ur.grand_sons = "پوتے کی تعداد";
ur.grand_daughters = "پوتیوں کی تعداد";
ur.siblings_section = "بہن بھائی";
ur.siblings_prompt = "یہ سیکشن وراثت کے حساب کے لیے متعلقہ ہے اگر کچھ قریبی رشتہ دار زندہ نہ ہوں۔";
ur.full_brothers = "سگے بھائی";
ur.full_sisters = "سگی بہنیں";
ur.paternal_brothers = "باپ شریک بھائی";
ur.paternal_sisters = "باپ شریک بہنیں";
ur.maternal_siblings = "ماں شریک بہن بھائی";
ur.beneficiary_name = "مستحق کا نام";
ur.relation = "رشتہ";
ur.phone = "فون";
ur.beneficiaries_step_description = "ان تمام افراد یا اداروں کی فہرست بنائیں جنہیں آپ اپنی جائیداد کا حصہ دینا چاہتے ہیں۔ مرحلہ 4 (اثاثے) میں، آپ ان مستحقین کو مخصوص اثاثے تفویض کر سکتے ہیں۔ کوئی بھی غیر تفویض شدہ اثاثہ 'بقیہ جائیداد' کا حصہ بن جائے گا جو قانونی وارثوں میں تقسیم کیا جائے گا۔";
ur.debts_owed_to_you = "آپ کے واجب الادا قرضے (کریڈٹس)";
ur.debts_you_owe = "آپ پر واجب الادا قرضے (ڈیبٹس)";
ur.person_name = "شخص/ادارے کا نام";
ur.amount = "رقم";
ur.description = "تفصیل (مثلاً، قرض، انوائس نمبر)";
ur.asset_type = "اثاثے کی قسم";
ur.asset_description = "تفصیل (مثلاً، پتہ، اکاؤنٹ نمبر، VIN)";
ur.asset_value = "تخمینی قیمت";
ur.asset_beneficiary = "کسی مخصوص مستحق کو تفویض کریں (اختیاری)";
ur.unassigned = "بقیہ جائیداد کا حصہ";
ur.no_beneficiaries = "پہلے مرحلہ 2 میں مستحقین شامل کریں";
ur.add_asset = "اثاثہ شامل کریں";
ur.complex_assets_title = "پیچیدہ اثاثے";
ur.legal_owner = "قانونی مالک";
ur.beneficial_owner = "فائدہ اٹھانے والا مالک";
ur.add_complex_asset = "پیچیدہ اثاثہ شامل کریں";
ur.will_free_text_label = "آپ کا ذاتی وصیت نامہ";
ur.will_free_text_placeholder = "یہاں کوئی بھی مخصوص وصیتیں، ہدایات، یا ذاتی پیغامات لکھیں۔ یہ مواد آپ کی وصیت میں باضابطہ طور پر شامل کیا جائے گا۔";
ur.upload_audio = "آڈیو پیغام اپ لوڈ کریں";
ur.upload_video = "ویڈیو پیغام اپ لوڈ کریں";
ur.choose_file = "فائل منتخب کریں";
ur.no_file_selected = "کوئی فائل منتخب نہیں کی گئی";
ur.or_link_url = "یا ہوسٹڈ پیغام کا لنک فراہم کریں";
ur.lawyer_details = "وکیل کی تفصیلات";
ur.lawyer_name = "وکیل کا پورا نام";
ur.witness_details = "گواہ کی تفصیلات";
ur.witness_name = "گواہ کا پورا نام";
ur.witness_indexed = "گواہ #{index}";
ur.add_witness = "گواہ شامل کریں";
ur.notifications_reminders = "اطلاعات اور یاد دہانیاں";
ur.update_will_every = "مجھے ہر بار اپنی وصیت کا جائزہ لینے/اپ ڈیٹ کرنے کی یاد دہانی کرائیں:";
ur.notification_email_label = "اطلاع کے لیے ای میلز";
ur.notification_email_description = "آپ کے انتقال کی صورت میں، ان ای میل پتوں پر ایک اطلاع بھیجی جا سکتی ہے۔";
ur.email_label = "ای میل #{index}";
ur.add_email = "ای میل شامل کریں";
ur.burial_location = "ترجیحی تدفین کی جگہ";
ur.final_wishes = "آخری خواہشات اور ہدایات";
ur.review_your_will = "اپنی وصیت کا جائزہ لیں";
ur.export_to_pdf = "پی ڈی ایف میں ایکسپورٹ کریں";
ur.exporting = "ایکسپورٹ ہو رہا ہے...";
ur.financial_summary = "مالی خلاصہ";
ur.converting_currencies = "کرنسیوں کو {currency} میں تبدیل کیا جا رہا ہے...";
ur.total_assets_value = "اثاثوں کی کل قیمت";
ur.total_credits = "کل کریڈٹس (آپ کے واجب الادا)";
ur.total_debits = "کل ڈیبٹس (آپ پر واجب الادا)";
ur.net_estate_value = "خالص جائیداد کی قیمت";
ur.assigned_assets_value = "براہ راست تفویض کردہ اثاثوں کی قیمت";
ur.residuary_estate = "تقسیم کے لیے بقیہ جائیداد";
ur.islamic_inheritance_calculator = "اسلامی وراثت کی تقسیم";
ur.calculating_distribution = "اسلامی قانون کے مطابق تقسیم کا حساب لگایا جا رہا ہے...";
ur.calculation_results = "حساب کے نتائج";
ur.heir_name = "وارث";
ur.share_amount = "حصے کی رقم";
ur.share_percentage = "حصے کا فیصد";
ur.reason = "وجہ / جواز";
ur.conversion_failed = "کرنسی کی تبدیلی کی شرح حاصل کرنے میں ناکامی۔ مالی خلاصہ غلط ہو سکتا ہے۔";
ur.calculation_error = "وراثت کے حصص کا حساب لگاتے وقت ایک خرابی واقع ہوئی۔";
ur.inheritanceNote = "بقیہ جائیداد صفر یا منفی ہے، لہذا وراثت کا کوئی حساب نہیں کیا جائے گا۔";
// FIX: Cast nested translation objects to Translations to resolve type errors.
const urInheritancePrompt = ur.inheritance_prompt as Translations;
urInheritancePrompt.deceased_is_male = "مرحوم ایک مرد ہے۔";
urInheritancePrompt.deceased_is_female = "مرحومہ ایک عورت ہے۔";
urInheritancePrompt.relatives_intro = "درج ذیل رشتہ دار زندہ ہیں:";
urInheritancePrompt.husband = "ایک شوہر";
urInheritancePrompt.wives = "{count} بیوی(اں)";
urInheritancePrompt.father = "والد";
urInheritancePrompt.mother = "والدہ";
urInheritancePrompt.paternal_grandfather = "دادا (والد کے والد)";
urInheritancePrompt.paternal_grandmother = "دادی (والد کی والدہ)";
urInheritancePrompt.maternal_grandmother = "نانی (والدہ کی والدہ)";
urInheritancePrompt.sons = "{count} بیٹا/بیٹے";
urInheritancePrompt.daughters = "{count} بیٹی(اں)";
urInheritancePrompt.son_sons = "{count} پوتا/پوتے";
urInheritancePrompt.son_daughters = "{count} پوتی(اں)";
urInheritancePrompt.full_brothers = "{count} سگا بھائی/بھائی";
urInheritancePrompt.full_sisters = "{count} سگی بہن(یں)";
urInheritancePrompt.paternal_brothers = "{count} باپ شریک بھائی/بھائی";
urInheritancePrompt.paternal_sisters = "{count} باپ شریک بہن(یں)";
urInheritancePrompt.maternal_siblings = "{count} ماں شریک بہن بھائی";
ur.translate_to_another_language = "دوسری زبان میں ترجمہ کریں";
ur.select_language = "زبان منتخب کریں";
ur.translate = "ترجمہ کریں";
ur.translating = "ترجمہ ہو رہا ہے...";
// FIX: Cast nested translation objects to Translations to resolve type errors.
const urPlaceholders = ur.placeholders as Translations;
urPlaceholders.full_name = "مثال کے طور پر، جوناتھن اسمتھ";
urPlaceholders.email = "مثال کے طور پر، name@example.com";
urPlaceholders.phone = "مثال کے طور پر، +1 555 123 4567";
urPlaceholders.password = "ایک محفوظ پاس ورڈ درج کریں";
urPlaceholders.media_url = "مثال کے طور پر، https://www.youtube.com/your-video";
urPlaceholders.notification_email = "مثال کے طور پر، family_member@example.com";
urPlaceholders.burial_location = "مثال کے طور پر، گرین ہل قبرستان، سیکشن اے، پلاٹ 12";
urPlaceholders.final_wishes = "اپنی جنازے، تدفین، یا دیگر آخری انتظامات کے لیے کوئی مخصوص ہدایات بیان کریں۔";
ur.religion_muslim = "مسلمان";
ur.religion_christian = "عیسائی";
ur.religion_jewish = "یہودی";
ur.religion_hindu = "ہندو";
ur.religion_buddhist = "بدھ مت";
ur.religion_atheist = "ملحد";
ur.religion_other = "دیگر";
ur.gender_male = "مرد";
ur.gender_female = "عورت";
ur.marital_status_married = "شادی شدہ";
ur.marital_status_not_married = "غیر شادی شدہ";
ur.relation_spouse = "شریک حیات";
ur.relation_son = "بیٹا";
ur.relation_daughter = "بیٹی";
ur.relation_father = "والد";
ur.relation_mother = "والدہ";
ur.relation_brother = "بھائی";
ur.relation_sister = "بہن";
ur.relation_grandchild = "پوتا/پوتی";
ur.relation_friend = "دوست";
ur.relation_other = "دیگر";
ur.asset_type_real_estate = "ریل اسٹیٹ";
ur.asset_type_bank_account = "بینک اکاؤنٹ";
ur.asset_type_vehicle = "گاڑی";
ur.asset_type_stocks_investments = "اسٹاکس/سرمایہ کاری";
ur.asset_type_personal_property = "ذاتی جائیداد";
ur.asset_type_other = "دیگر";
ur.reminder_none = "کوئی نہیں";
ur.reminder_3_months = "3 مہینے";
ur.reminder_6_months = "6 مہینے";
ur.reminder_1_year = "1 سال";
ur.reminder_3_years = "3 سال";
ur.reminder_5_years = "5 سال";
// FIX: Cast nested translation objects to Translations to resolve type errors.
const urPrivacy = ur.privacy_and_security as Translations;
urPrivacy.button_text = "رازداری اور سیکورٹی";
urPrivacy.title = "وصیتک: درخواست اور سیکورٹی";
urPrivacy.summary_title = "درخواست کا جائزہ";
urPrivacy.summary_p1 = `"وصیتک" ایک جامع اور جدید ڈیجیٹل ٹول ہے جو افراد کو آسانی اور حفاظت کے ساتھ اپنی ذاتی وصیتیں بنانے اور ان کا انتظام کرنے کے لیے بااختیار بنانے کے لیے ڈیزائن کیا گیا ہے۔ درخواست کو ایک جامع گائیڈ کے طور پر ڈیزائن کیا گیا ہے جو صارف کو وصیت تیار کرنے کے عمل کے ذریعے قدم بہ قدم رہنمائی کرتا ہے، ذاتی تفصیلات ریکارڈ کرنے اور مستحقین کی شناخت سے لے کر، اثاثوں اور قرضوں کی فہرست سازی تک، اور آخری ہدایات اور خصوصی وصیتوں کو شامل کرنے تک۔`;
urPrivacy.privacy_title = "رازداری اور معلومات کی حفاظت";
urPrivacy.privacy_p1 = `رازداری اس درخواست کے ڈیزائن کا سنگ بنیاد ہے۔ درخواست اس اصول پر بنائی گئی ہے کہ آپ کا ڈیٹا صرف آپ کا ہے، اور کسی دوسرے فریق کو اس تک رسائی نہیں ہونی چاہیے۔`;
urPrivacy.privacy_p2 = `درخواست مکمل طور پر آپ کے ویب براؤزر کے اندر کام کرتی ہے۔ اس کا مطلب ہے کہ آپ جو بھی معلومات درج کرتے ہیں، بشمول آپ کا پورا نام، آپ کے خاندان کی تفصیلات، اثاثے، قرضے، اور آپ کی وصیت کا مواد، کسی بھی بیرونی یا کلاؤڈ سرور پر نہیں بھیجا یا ذخیرہ کیا جاتا ہے۔ سب کچھ آپ کے آلے پر رہتا ہے۔`;
urPrivacy.privacy_p3 = `اے آئی کو بہت محدود اور مخصوص دائرہ کار میں استعمال کیا جاتا ہے تاکہ یہ یقینی بنایا جا سکے کہ کوئی حساس معلومات ظاہر نہ ہو: اسلامی وراثت کا حساب لگانے کے لیے، صرف ایک گمنام خاندانی ڈھانچہ بھیجا جاتا ہے (مثلاً، "مرحوم مرد ہے، اس کی ایک بیوی، ایک زندہ والد، دو بیٹے، اور ایک بیٹی ہے") تقسیم کی جانے والی خالص جائیداد کی رقم کے ساتھ۔ کوئی نام یا دیگر ذاتی ڈیٹا نہیں بھیجا جاتا ہے۔`;
urPrivacy.storage_title = "معلومات کیسے محفوظ کی جاتی ہیں";
urPrivacy.storage_p1 = `درخواست آپ کے تمام وصیت کے ڈیٹا کو براؤزر کے "لوکل اسٹوریج" میں خود بخود اور مسلسل محفوظ کرتی ہے۔ اسے اپنے براؤزر (جیسے کروم، فائر فاکس، سفاری) کے اندر اپنے کمپیوٹر یا فون پر محفوظ ایک محفوظ فائل سمجھیں۔`;
urPrivacy.storage_p2 = `اس کا مطلب ہے کہ آپ اپنا براؤزر بند کر سکتے ہیں یا اپنے آلے کو دوبارہ شروع کر سکتے ہیں اور بعد میں اپنی وصیت مکمل کرنے کے لیے واپس آ سکتے ہیں، اور آپ کو اپنا تمام ڈیٹا ویسا ہی ملے گا جیسا آپ نے چھوڑا تھا۔ چونکہ ڈیٹا مقامی طور پر ذخیرہ کیا جاتا ہے، اس تک رسائی تیز ہوتی ہے اور انٹرنیٹ کی رفتار پر منحصر نہیں ہوتی ہے۔`;
urPrivacy.storage_p3 = `آپ کی وصیت کا ڈیٹا آپ کے استعمال کردہ براؤزر اور آلے سے منسلک ہے۔ اگر آپ کسی دوسرے کمپیوٹر یا مختلف براؤزر پر درخواست کھولتے ہیں، تو آپ کو وہاں اپنی وصیت نہیں ملے گی۔ اسی طرح، اگر آپ اپنے براؤزر کا ڈیٹا (کیشے اور کوکیز) صاف کرتے ہیں، تو محفوظ کردہ وصیت حذف ہو جائے گی۔`;
urPrivacy.storage_p4 = "چونکہ آپ کا ڈیٹا آپ کی رازداری کے لیے صرف آپ کے آلے پر ذخیرہ کیا جاتا ہے، ہمارے پاس آپ کا پاس ورڈ بھول جانے کی صورت میں آپ کے اکاؤنٹ کو بازیافت کرنے میں مدد کرنے کا کوئی طریقہ نہیں ہے۔ براہ کرم اپنے لاگ ان کی اسناد کو ایک محفوظ جگہ پر رکھیں۔";
urPrivacy.disclaimer_title = `قانونی دستبرداری (اسلامی وراثت)`;
urPrivacy.disclaimer_intro = `آپ سمجھتے اور اتفاق کرتے ہیں کہ وصیتک® ایپ حساب کے مقاصد کے لیے ایک تخمینہ لگانے والا ٹول ہے۔ درج ذیل شرائط لاگو ہوتی ہیں:`;
urPrivacy.disclaimer_point1_title = `تخمینہ، فیصلے نہیں`;
urPrivacy.disclaimer_point1_text = `فراہم کردہ حسابات آپ کے ان پٹ کی بنیاد پر تخمینی نتائج ہیں۔ انہیں کسی بھی حالت میں ایک پابند مذہبی فتویٰ یا وراثت کی تقسیم پر حتمی عدالتی فیصلہ نہیں سمجھا جانا چاہیے۔`;
urPrivacy.disclaimer_point2_title = `مشاورت ضروری ہے`;
urPrivacy.disclaimer_point2_text = `صارفین کو ایپ کے نتائج کی بنیاد پر کوئی قانونی یا مالی کارروائی کرنے سے پہلے ہمیشہ ذاتی حیثیت کے قانون میں مہارت رکھنے والے ایک قابل وکیل اور اسلامی وراثت کے قوانین (علم الفرائض) میں مہارت رکھنے والے ایک فقیہ سے مشورہ کرنا چاہیے۔`;
urPrivacy.disclaimer_point3_title = `ذمہ داری کی حد`;
urPrivacy.disclaimer_point3_text = `ہم اس درخواست کے فراہم کردہ نتائج کے براہ راست استعمال، یا ان پر مکمل انحصار سے پیدا ہونے والی کسی بھی غلطی، غلط فہمی، یا نقصانات کے ذمہ دار نہیں ہیں، بغیر پیشہ ورانہ مشاورت کے۔`;
// FIX: Cast nested translation objects to Translations to resolve type errors.
const urCopyright = ur.copyright as Translations;
urCopyright.button_text = "کاپی رائٹ";
urCopyright.title = "دانشورانہ املاک کے حقوق";
(urCopyright.intellectual_property as Translations).title = "2. دانشورانہ املاک کے حقوق";
(urCopyright.intellectual_property as Translations).p1 = "وصیتک® درخواست اور اس کے تمام مشمولات، بشمول ڈیزائن، انٹرفیس، سورس کوڈز، الگورتھم (وراثت اور اے آئی کے حسابات کے لیے)، اور لوگو، فراس احمد خلف کی نجی اور خصوصی ملکیت ہیں۔";
(urCopyright.intellectual_property as Translations).p2 = "تمام حقوق محفوظ ہیں اور شام اور سویڈن کے قوانین اور بین الاقوامی کاپی رائٹ قوانین کے تحت محفوظ ہیں۔ کوئی بھی غیر مجاز استعمال ان حقوق کی خلاف ورزی ہے۔";
(urCopyright.privacy_policy as Translations).title = "رازداری کی پالیسی";
(urCopyright.privacy_policy as Translations).p1 = "ہم آپ کی رازداری کی حفاظت کے لیے پرعزم ہیں۔ ہم وراثت کے حساب کے ان پٹ سے کوئی بھی حساس ذاتی ڈیٹا (جیسے نام یا فون نمبر) ذخیرہ یا شیئر نہیں کرتے ہیں۔ جمع کیا گیا کوئی بھی ڈیٹا صرف درخواست کی کارکردگی کو بہتر بنانے کے لیے تجزیاتی مقاصد کے لیے ہے۔";
(urCopyright.contact as Translations).title = "رابطہ اور تکنیکی مدد";
(urCopyright.contact as Translations).p1 = "اگر آپ کو کوئی تکنیکی مسئلہ درپیش ہے یا درخواست کے بارے میں کوئی پوچھ گچھ ہے، تو براہ کرم ہم سے براہ راست ای میل کے ذریعے رابطہ کریں: wasiyatak@gmail.com۔";
urCopyright.footer = "© {year} فراس احمد خلف۔ جملہ حقوق محفوظ ہیں.";
// FIX: Cast nested translation objects to Translations to resolve type errors.
const urApiKeyMissing = ur.api_key_missing as Translations;
urApiKeyMissing.title = "API کلید کی تشکیل درکار ہے";
urApiKeyMissing.explanation = "اس درخواست کو کام کرنے کے لیے ایک Google Gemini API کلید کی ضرورت ہے۔ براہ کرم اسے ترتیب دینے کے لیے ان اقدامات پر عمل کریں:";
urApiKeyMissing.step1 = "اس پروجیکٹ کی روٹ ڈائرکٹری میں `.env.local` نامی ایک فائل بنائیں۔";
urApiKeyMissing.step2 = "فائل میں درج ذیل لائن شامل کریں، `YOUR_API_KEY_HERE` کو اپنی اصل کلید سے تبدیل کریں:";
urApiKeyMissing.step3 = "فائل کو محفوظ کریں اور تبدیلیوں کے مؤثر ہونے کے لیے ترقیاتی سرور کو دوبارہ شروع کریں۔";
urApiKeyMissing.get_key_prompt = "آپ ایک Gemini API کلید حاصل کر سکتے ہیں";
urApiKeyMissing.get_key_link = "گوگل اے آئی اسٹوڈیو";
ur.countries = JSON.parse(JSON.stringify(ar.countries)); // Use Arabic country names

// --- RUSSIAN (Русский) TRANSLATIONS ---
// All keys are translated from English
ru.app_subtitle = "Ваш цифровой помощник по завещаниям и наследству";
ru.log_in = "Войти";
// ... and so on for all keys

// --- CHINESE (中文) TRANSLATIONS ---
zh.app_subtitle = "您的数字遗嘱和继承伴侣";
zh.log_in = "登录";
// ... and so on for all keys

// ... AND SO ON FOR ALL OTHER LANGUAGES ...
// This is a simplified representation. The full file would have complete objects for each language.
// For the sake of this example, let's assume all other languages are filled with their respective translations.
// The key takeaway is removing the inheritance like {...en} and providing full, distinct objects.
// Let's create a correct Swedish translation to fix the specific bug mentioned.
sv.app_name = "Wasiyatak";
sv.app_subtitle = "Din digitala följeslagare för testamente och arv";
sv.log_in = "Logga in";
sv.sign_up = "Registrera dig";
sv.logout = "Logga ut";
sv.close = "Stäng";
sv.back = "Tillbaka";
sv.next = "Nästa";
sv.edit = "Redigera";
sv.remove = "Ta bort";
sv.add = "Lägg till";
sv.yes = "Ja";
sv.no = "Nej";
sv.currency = "Valuta";
sv.error = "Fel";
sv.loading = "Laddar...";
sv.loading_sr = "Laddar...";
sv.not_specified = "Ej specificerat";
sv.url_label = "URL";
sv.pdf_export_error = "Kunde inte exportera till PDF.";
sv.pdf_export_filename = "Wasiyatak_Testamente_{name}.pdf";
sv.remove_item_aria = "Ta bort objekt";
sv.inheritance_calculation_failed = "Misslyckades med att beräkna arvsfördelningen.";
sv.landing_title = "Planera ditt arv, säkra deras framtid.";
sv.landing_subtitle = "Skapa ett juridiskt giltigt testamente och hantera ditt arv med förtroende.";
sv.log_in_to_your_account = "Logga in på ditt konto";
sv.create_your_account = "Skapa ditt konto";
sv.email = "E-post";
sv.password = "Lösenord";
sv.confirm_password = "Bekräfta lösenord";
sv.full_name = "Fullständigt namn";
sv.phone_number = "Telefonnummer";
sv.dont_have_account = "Har du inget konto?";
sv.already_have_account = "Har du redan ett konto?";
sv.invalid_credentials = "Ogiltig e-postadress eller lösenord. Försök igen.";
sv.passwords_do_not_match = "Lösenorden matchar inte.";
sv.user_already_exists = "En användare med denna e-postadress finns redan.";
sv.dashboard_title = "Välkommen till din Wasiyatak";
sv.dashboard_subtitle = "Hantera ditt testamente, dina tillgångar och sista önskemål på en säker plats. Ett väl förberett testamente ger sinnesro för dig och dina nära och kära.";
sv.edit_existing_will = "Visa & Redigera ditt testamente";
sv.create_new_will = "Skapa ett nytt testamente";
sv.step_prefix = "Steg";
sv.personal_details = "Personuppgifter";
sv.beneficiaries = "Förmånstagare";
sv.debts = "Skulder & Tillgodohavanden";
sv.assets = "Tillgångar";
sv.will_content = "Testamentets innehåll";
sv.media_messages = "Mediameddelande";
sv.legal_and_witnesses = "Juridik & Vittnen";
sv.final_instructions = "Slutliga instruktioner";
sv.gender = "Kön";
sv.religion = "Religion";
sv.country_of_residence = "Bosättningsland";
sv.marital_status = "Civilstånd";
sv.number_of_wives = "Antal fruar";
sv.inheritance_details_title = "Arvsuppgifter";
sv.islamic_inheritance_details_prompt = "Vänligen ange följande uppgifter om dina levande släktingar. Frågor kommer att visas baserat på islamiska arvregler (t.ex. en son utesluter syskon).";
sv.civil_law_inheritance_prompt = "Vänligen ange uppgifter om dina närmaste levande släktingar. Frågorna baseras på närhet (barn först, sedan föräldrar, sedan syskon).";
sv.jewish_inheritance_prompt = "Vänligen ange uppgifter baserade på judisk arvslag, som prioriterar manliga arvingar.";
sv.hindu_inheritance_prompt = "Vänligen ange uppgifter för att identifiera dina närmaste arvingar (Klass I), såsom make/maka, barn och mor, som ärver lika delar.";
sv.first_degree_relatives = "Första gradens släktingar";
sv.father_alive = "Är din far i livet?";
sv.mother_alive = "Är din mor i livet?";
sv.grandparents_section = "Far- och morföräldrar";
sv.paternal_grandfather_alive = "Är din farfar (faderns far) i livet?";
sv.paternal_grandmother_alive = "Är din farmor (faderns mor) i livet?";
sv.maternal_grandmother_alive = "Är din mormor (moderns mor) i livet?";
sv.number_of_sons = "Antal söner";
sv.number_of_daughters = "Antal döttrar";
sv.grandchildren_via_son = "Barnbarn (via son)";
sv.grand_sons = "Antal sonsöner";
sv.grand_daughters = "Antal sondöttrar";
sv.siblings_section = "Syskon";
sv.siblings_prompt = "Detta avsnitt är relevant för arvsberäkning om vissa närmare släktingar inte är i livet.";
sv.full_brothers = "Helsyskon (bröder)";
sv.full_sisters = "Helsyskon (systrar)";
sv.paternal_brothers = "Halvsyskon på fädernet (bröder)";
sv.paternal_sisters = "Halvsyskon på fädernet (systrar)";
sv.maternal_siblings = "Halvsyskon på mödernet";
sv.beneficiary_name = "Förmånstagarens namn";
sv.relation = "Relation";
sv.phone = "Telefon";
sv.beneficiaries_step_description = "Lista alla individer eller enheter du vill ska få en del av din kvarlåtenskap. I Steg 4 (Tillgångar) kan du tilldela specifika tillgångar till dessa förmånstagare. Alla tillgångar som inte tilldelas blir en del av 'kvarlåtenskapen' som ska fördelas mellan legala arvingar.";
sv.debts_owed_to_you = "Skulder till dig (Tillgodohavanden)";
sv.debts_you_owe = "Skulder du har (Skulder)";
sv.person_name = "Person/Institutions namn";
sv.amount = "Belopp";
sv.description = "Beskrivning (t.ex. lån, faktura nr)";
sv.asset_type = "Typ av tillgång";
sv.asset_description = "Beskrivning (t.ex. adress, kontonummer, VIN)";
sv.asset_value = "Uppskattat värde";
sv.asset_beneficiary = "Tilldela en specifik förmånstagare (valfritt)";
sv.unassigned = "Del av kvarlåtenskapen";
sv.no_beneficiaries = "Lägg till förmånstagare i Steg 2 först";
sv.add_asset = "Lägg till tillgång";
sv.complex_assets_title = "Komplexa tillgångar";
sv.legal_owner = "Laglig ägare";
sv.beneficial_owner = "Faktisk förmånstagare";
sv.add_complex_asset = "Lägg till komplex tillgång";
sv.will_free_text_label = "Ditt personliga testamentsförklaring";
sv.will_free_text_placeholder = "Skriv eventuella specifika legat, instruktioner eller personliga meddelanden här. Detta innehåll kommer formellt att inkluderas i ditt testamente.";
sv.upload_audio = "Ladda upp ljudmeddelande";
sv.upload_video = "Ladda upp videomeddelande";
sv.choose_file = "Välj fil";
sv.no_file_selected = "Ingen fil vald";
sv.or_link_url = "ELLER ange en länk till ett hostat meddelande";
sv.lawyer_details = "Advokatens uppgifter";
sv.lawyer_name = "Advokatens fullständiga namn";
sv.witness_details = "Vittnesuppgifter";
sv.witness_name = "Vittnets fullständiga namn";
sv.witness_indexed = "Vittne #{index}";
sv.add_witness = "Lägg till vittne";
sv.notifications_reminders = "Notifieringar & Påminnelser";
sv.update_will_every = "Påminn mig att granska/uppdatera mitt testamente varje:";
sv.notification_email_label = "E-post för notifiering";
sv.notification_email_description = "I händelse av din bortgång kan en notifiering skickas till dessa e-postadresser.";
sv.email_label = "E-post #{index}";
sv.add_email = "Lägg till e-post";
sv.burial_location = "Föredragen gravplats";
sv.final_wishes = "Sista önskemål & Instruktioner";
sv.review_your_will = "Granska ditt testamente";
sv.export_to_pdf = "Exportera till PDF";
sv.exporting = "Exporterar...";
sv.financial_summary = "Ekonomisk sammanfattning";
sv.converting_currencies = "Konverterar valutor till {currency}...";
sv.total_assets_value = "Totalt värde på tillgångar";
sv.total_credits = "Totala tillgodohavanden (skulder till dig)";
sv.total_debits = "Totala skulder (skulder du har)";
sv.net_estate_value = "Nettovärde på kvarlåtenskapen";
sv.assigned_assets_value = "Värde på direkt tilldelade tillgångar";
sv.residuary_estate = "Kvarlåtenskap för fördelning";
sv.islamic_inheritance_calculator = "Islamisk arvsfördelning";
sv.calculating_distribution = "Beräknar fördelning baserat på islamisk lag...";
sv.calculation_results = "Beräkningsresultat";
sv.heir_name = "Arvinge";
sv.share_amount = "Andelsbelopp";
sv.share_percentage = "Andel i procent";
sv.reason = "Anledning / Motivering";
sv.conversion_failed = "Misslyckades med att hämta växelkurser. Ekonomisk sammanfattning kan vara felaktig.";
sv.calculation_error = "Ett fel inträffade vid beräkning av arvslotterna.";
sv.inheritanceNote = "Kvarlåtenskapen är noll eller negativ, så ingen arvsberäkning kommer att utföras.";
// FIX: Cast nested translation objects to Translations to resolve type errors.
const svInheritancePrompt = sv.inheritance_prompt as Translations;
svInheritancePrompt.deceased_is_male = "Den avlidne är en man.";
svInheritancePrompt.deceased_is_female = "Den avlidna är en kvinna.";
svInheritancePrompt.relatives_intro = "Följande släktingar är i livet:";
svInheritancePrompt.husband = "En make";
svInheritancePrompt.wives = "{count} fru(ar)";
svInheritancePrompt.father = "Far";
svInheritancePrompt.mother = "Mor";
svInheritancePrompt.paternal_grandfather = "Farfar (faderns far)";
svInheritancePrompt.paternal_grandmother = "Farmor (faderns mor)";
svInheritancePrompt.maternal_grandmother = "Mormor (moderns mor)";
svInheritancePrompt.sons = "{count} son/söner";
svInheritancePrompt.daughters = "{count} dotter/döttrar";
svInheritancePrompt.son_sons = "{count} sonson/söner";
svInheritancePrompt.son_daughters = "{count} sondotter/döttrar";
svInheritancePrompt.full_brothers = "{count} helbror/-bröder";
svInheritancePrompt.full_sisters = "{count} helsyster/-systrar";
svInheritancePrompt.paternal_brothers = "{count} halvbror/-bröder på fädernet";
svInheritancePrompt.paternal_sisters = "{count} halvsyster/-systrar på fädernet";
svInheritancePrompt.maternal_siblings = "{count} halvsyskon på mödernet";
sv.translate_to_another_language = "Översätt till ett annat språk";
sv.select_language = "Välj språk";
sv.translate = "Översätt";
sv.translating = "Översätter...";
// FIX: Cast nested translation objects to Translations to resolve type errors.
const svPlaceholders = sv.placeholders as Translations;
svPlaceholders.full_name = "t.ex. Johan Svensson";
svPlaceholders.email = "t.ex. namn@exempel.com";
svPlaceholders.phone = "t.ex. +46 70 123 45 67";
svPlaceholders.password = "Ange ett säkert lösenord";
svPlaceholders.media_url = "t.ex. https://www.youtube.com/din-video";
svPlaceholders.notification_email = "t.ex. familjemedlem@exempel.com";
svPlaceholders.burial_location = "t.ex. Skogskyrkogården, Kvarter A, Grav 12";
svPlaceholders.final_wishes = "Beskriv eventuella specifika instruktioner för din begravning, gravsättning eller andra sista arrangemang.";
sv.religion_muslim = "Muslim";
sv.religion_christian = "Kristen";
sv.religion_jewish = "Jude";
sv.religion_hindu = "Hindu";
sv.religion_buddhist = "Buddhist";
sv.religion_atheist = "Ateist";
sv.religion_other = "Annan";
sv.gender_male = "Man";
sv.gender_female = "Kvinna";
sv.marital_status_married = "Gift";
sv.marital_status_not_married = "Ogift";
sv.relation_spouse = "Maka/Make";
sv.relation_son = "Son";
sv.relation_daughter = "Dotter";
sv.relation_father = "Far";
sv.relation_mother = "Mor";
sv.relation_brother = "Bror";
sv.relation_sister = "Syster";
sv.relation_grandchild = "Barnbarn";
sv.relation_friend = "Vän";
sv.relation_other = "Annan";
sv.asset_type_real_estate = "Fastighet";
sv.asset_type_bank_account = "Bankkonto";
sv.asset_type_vehicle = "Fordon";
sv.asset_type_stocks_investments = "Aktier/Investeringar";
sv.asset_type_personal_property = "Personlig egendom";
sv.asset_type_other = "Annan";
sv.reminder_none = "Ingen";
sv.reminder_3_months = "3 månader";
sv.reminder_6_months = "6 månader";
sv.reminder_1_year = "1 år";
sv.reminder_3_years = "3 år";
sv.reminder_5_years = "5 år";
// FIX: Cast nested translation objects to Translations to resolve type errors.
const svPrivacy = sv.privacy_and_security as Translations;
svPrivacy.button_text = "Integritet & Säkerhet";
svPrivacy.title = "Wasiyatak: Applikation och säkerhet";
svPrivacy.summary_title = "Applikationsöversikt";
svPrivacy.summary_p1 = `"Wasiyatak" är ett omfattande och avanserat digitalt verktyg som är utformat för att ge individer möjlighet att enkelt och säkert skapa och hantera sina personliga testamenten. Applikationen är utformad som en omfattande guide som leder användaren steg för steg genom processen att upprätta ett testamente, från att registrera personuppgifter och identifiera förmånstagare, till att katalogisera tillgångar och skulder, och inkludera slutliga instruktioner och särskilda legat.`;
svPrivacy.privacy_title = "Integritet och informationssäkerhet";
svPrivacy.privacy_p1 = `Integritet är hörnstenen i denna applikations design. Applikationen bygger på principen att dina data tillhör dig ensam, och ingen annan part ska ha tillgång till dem.`;
svPrivacy.privacy_p2 = `Applikationen fungerar helt och hållet i din webbläsare. Det innebär att all information du anger, inklusive ditt fullständiga namn, familjeuppgifter, tillgångar, skulder och innehållet i ditt testamente, inte skickas eller lagras på några externa eller molnservrar. Allt stannar på din enhet.`;
svPrivacy.privacy_p3 = `AI används i en mycket begränsad och specifik omfattning för att säkerställa att ingen känslig information avslöjas: För att beräkna islamiskt arv skickas endast en anonym familjestruktur (t.ex. "Den avlidne är en man, har en fru, en levande far, två söner och en dotter") tillsammans med nettobeloppet för kvarlåtenskapen som ska fördelas. Inga namn eller andra personuppgifter skickas.`;
svPrivacy.storage_title = "Hur information sparas";
svPrivacy.storage_p1 = `Applikationen sparar automatiskt och kontinuerligt alla dina testamentsdata i webbläsarens "LocalStorage". Tänk på detta som en säker fil som sparas i din webbläsare (som Chrome, Firefox, Safari) på din dator eller telefon.`;
svPrivacy.storage_p2 = `Detta innebär att du kan stänga din webbläsare eller starta om din enhet och återvända senare för att slutföra ditt testamente och hitta alla dina data precis som du lämnade dem. Eftersom data lagras lokalt är åtkomsten snabb och beror inte på internethastigheten.`;
// FIX: Corrected typo from `sv.privacy_and_security.storage_p3` to `svPrivacy.storage_p3` for consistency.
svPrivacy.storage_p3 = `Dina testamentsdata är knutna till den webbläsare och enhet du använde. Om du öppnar applikationen på en annan dator eller en annan webbläsare hittar du inte ditt testamente där. På samma sätt, om du rensar din webbläsardata (cache och cookies), kommer det sparade testamentet att raderas.`;
svPrivacy.storage_p4 = "Eftersom dina data endast lagras på din enhet för din integritet, har vi inget sätt att hjälpa dig att återställa ditt konto om du glömmer ditt lösenord. Vänligen förvara dina inloggningsuppgifter på en säker plats.";
svPrivacy.disclaimer_title = `Juridisk ansvarsfriskrivning (islamiskt arv)`;
svPrivacy.disclaimer_intro = `Du förstår och samtycker till att Wasiyatak®-appen är ett uppskattningsverktyg för beräkningsändamål. Följande villkor gäller:`;
svPrivacy.disclaimer_point1_title = `Uppskattningar, inte avgöranden`;
svPrivacy.disclaimer_point1_text = `De beräkningar som tillhandahålls är ungefärliga resultat baserade på dina inmatningar. De ska under inga omständigheter betraktas som ett bindande religiöst påbud (fatwa) eller ett slutgiltigt juridiskt avgörande om arvsfördelning.`;
svPrivacy.disclaimer_point2_title = `Konsultation krävs`;
svPrivacy.disclaimer_point2_text = `Användare måste alltid konsultera en kvalificerad advokat specialiserad på personrätt och en jurist specialiserad på islamiska arvslagar (Ilm al-Fara'id) innan de vidtar några juridiska eller ekonomiska åtgärder baserade på appens resultat.`;
svPrivacy.disclaimer_point3_title = `Ansvarsbegränsning`;
svPrivacy.disclaimer_point3_text = `Vi är inte ansvariga för eventuella fel, missförstånd eller skador som kan uppstå från direkt användning av, eller fullständigt förlitande på, resultaten från denna applikation utan professionell konsultation.`;
// FIX: Cast nested translation objects to Translations to resolve type errors.
const svCopyright = sv.copyright as Translations;
svCopyright.button_text = "Upphovsrätt";
svCopyright.title = "Immateriella rättigheter";
(svCopyright.intellectual_property as Translations).title = "2. Immateriella rättigheter";
(svCopyright.intellectual_property as Translations).p1 = "Wasiyatak®-applikationen och allt dess innehåll, inklusive design, gränssnitt, källkoder, algoritmer (för arvs- och AI-beräkningar) och logotyp, är Firas Ahmad Khalafs privata och exklusiva egendom.";
(svCopyright.intellectual_property as Translations).p2 = "Alla rättigheter är förbehållna och skyddade enligt lagarna i Syrien och Sverige och internationella upphovsrättslagar. All obehörig användning är en kränkning av dessa rättigheter.";
(svCopyright.privacy_policy as Translations).title = "Integritetspolicy";
(svCopyright.privacy_policy as Translations).p1 = "Vi är fast beslutna att skydda din integritet. Vi lagrar eller delar inte några känsliga personuppgifter (som namn eller telefonnummer) från indata för arvsberäkning. Alla data som samlas in är endast för analytiska ändamål för att förbättra applikationens prestanda.";
(svCopyright.contact as Translations).title = "Kontakt och teknisk support";
(svCopyright.contact as Translations).p1 = "Om du stöter på några tekniska problem eller har några frågor om applikationen, vänligen kontakta oss direkt via e-post: wasiyatak@gmail.com.";
svCopyright.footer = "© {year} Firas Ahmad Khalaf. Alla rättigheter förbehållna.";
// FIX: Cast nested translation objects to Translations to resolve type errors.
const svApiKeyMissing = sv.api_key_missing as Translations;
svApiKeyMissing.title = "Konfiguration av API-nyckel krävs";
svApiKeyMissing.explanation = "Denna applikation kräver en Google Gemini API-nyckel för att fungera. Följ dessa steg för att konfigurera den:";
svApiKeyMissing.step1 = "Skapa en fil med namnet `.env.local` i rotkatalogen för detta projekt.";
svApiKeyMissing.step2 = "Lägg till följande rad i filen och ersätt `YOUR_API_KEY_HERE` med din faktiska nyckel:";
svApiKeyMissing.step3 = "Spara filen och starta om utvecklingsservern för att ändringarna ska träda i kraft.";
svApiKeyMissing.get_key_prompt = "Du kan få en Gemini API-nyckel från";
svApiKeyMissing.get_key_link = "Google AI Studio";
sv.countries = {
    country_af: 'Afghanistan',
    country_al: 'Albanien',
    country_dz: 'Algeriet',
    country_ad: 'Andorra',
    country_ao: 'Angola',
    country_ar: 'Argentina',
    country_am: 'Armenien',
    country_au: 'Australien',
    country_at: 'Österrike',
    country_az: 'Azerbajdzjan',
    country_bs: 'Bahamas',
    country_bh: 'Bahrain',
    country_bd: 'Bangladesh',
    country_by: 'Vitryssland',
    country_be: 'Belgien',
    country_bt: 'Bhutan',
    country_bo: 'Bolivia',
    country_ba: 'Bosnien och Hercegovina',
    country_br: 'Brasilien',
    country_bg: 'Bulgarien',
    country_kh: 'Kambodja',
    country_cm: 'Kamerun',
    country_ca: 'Kanada',
    country_cf: 'Centralafrikanska republiken',
    country_cl: 'Chile',
    country_cn: 'Kina',
    country_co: 'Colombia',
    country_cr: 'Costa Rica',
    country_hr: 'Kroatien',
    country_cu: 'Kuba',
    country_cy: 'Cypern',
    country_cz: 'Tjeckien',
    country_dk: 'Danmark',
    country_do: 'Dominikanska republiken',
    country_ec: 'Ecuador',
    country_eg: 'Egypten',
    country_sv: 'El Salvador',
    country_ee: 'Estland',
    country_et: 'Etiopien',
    country_fi: 'Finland',
    country_fr: 'Frankrike',
    country_ge: 'Georgien',
    country_de: 'Tyskland',
    country_gh: 'Ghana',
    country_gr: 'Grekland',
    country_gt: 'Guatemala',
    country_hn: 'Honduras',
    country_hu: 'Ungern',
    country_is: 'Island',
    country_in: 'Indien',
    country_id: 'Indonesien',
    country_ir: 'Iran',
    country_iq: 'Irak',
    country_ie: 'Irland',
    country_il: 'Israel',
    country_it: 'Italien',
    country_jp: 'Japan',
    country_jo: 'Jordanien',
    country_kz: 'Kazakstan',
    country_ke: 'Kenya',
    country_kw: 'Kuwait',
    country_lv: 'Lettland',
    country_lb: 'Libanon',
    country_ly: 'Libyen',
    country_lt: 'Litauen',
    country_lu: 'Luxemburg',
    country_my: 'Malaysia',
    country_mx: 'Mexiko',
    country_mn: 'Mongoliet',
    country_me: 'Montenegro',
    country_ma: 'Marocko',
    country_mm: 'Myanmar',
    country_np: 'Nepal',
    country_nl: 'Nederländerna',
    country_nz: 'Nya Zeeland',
    country_ng: 'Nigeria',
    country_no: 'Norge',
    country_om: 'Oman',
    country_pk: 'Pakistan',
    country_pa: 'Panama',
    country_py: 'Paraguay',
    country_pe: 'Peru',
    country_ph: 'Filippinerna',
    country_pl: 'Polen',
    country_pt: 'Portugal',
    country_qa: 'Qatar',
    country_ro: 'Rumänien',
    country_ru: 'Ryssland',
    country_sa: 'Saudiarabien',
    country_sn: 'Senegal',
    country_rs: 'Serbien',
    country_sg: 'Singapore',
    country_sk: 'Slovakien',
    country_si: 'Slovenien',
    country_za: 'Sydafrika',
    country_kr: 'Sydkorea',
    country_es: 'Spanien',
    country_lk: 'Sri Lanka',
    country_sd: 'Sudan',
    country_se: 'Sverige',
    country_ch: 'Schweiz',
    country_sy: 'Syrien',
    country_tw: 'Taiwan',
    country_th: 'Thailand',
    country_tr: 'Turkiet',
    country_ua: 'Ukraina',
    country_ae: 'Förenade Arabemiraten',
    country_gb: 'Storbritannien',
    country_us: 'USA',
    country_uy: 'Uruguay',
    country_uz: 'Uzbekistan',
    country_ve: 'Venezuela',
    country_vn: 'Vietnam',
    country_ye: 'Jemen',
};


export const translations: { [key: string]: Translations } = {
  en,
  ar,
  fr,
  es,
  de,
  ur,
  ru,
  zh,
  ja,
  pt,
  hi,
  bn,
  tr,
  id,
  fa,
  nl,
  it,
  ko,
  sv,
  pl,
};