// Defines the core data structures for the application.

export enum Religion {
    MUSLIM = 'Muslim',
    CHRISTIAN = 'Christian',
    JEWISH = 'Jewish',
    HINDU = 'Hindu',
    BUDDHIST = 'Buddhist',
    ATHEIST = 'Atheist',
    OTHER = 'Other',
}

export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
}

export enum MaritalStatus {
    MARRIED = 'Married',
    NOT_MARRIED = 'Not Married',
}

export enum BeneficiaryRelation {
    SPOUSE = 'Spouse',
    SON = 'Son',
    DAUGHTER = 'Daughter',
    FATHER = 'Father',
    MOTHER = 'Mother',
    BROTHER = 'Brother',
    SISTER = 'Sister',
    GRANDCHILD = 'Grandchild',
    FRIEND = 'Friend',
    OTHER = 'Other',
}

export enum AssetType {
    REAL_ESTATE = 'Real Estate',
    BANK_ACCOUNT = 'Bank Account',
    VEHICLE = 'Vehicle',
    STOCKS = 'Stocks/Investments',
    PERSONAL_PROPERTY = 'Personal Property',
    OTHER = 'Other',
}

export interface Person {
    id: string;
    name: string;
    phone: string;
    email: string;
}

export interface MuslimDetails {
    wivesCount: number;
}

export interface Siblings {
    fullBrothers: number;
    fullSisters: number;
    paternalBrothers: number;
    paternalSisters: number;
    maternalSiblings: number; // Maternal brothers and sisters inherit equally
}

export interface PersonalDetails {
    fullName: string;
    gender: Gender;
    religion: Religion;
    countryOfResidence: string;
    maritalStatus?: MaritalStatus;
    muslimDetails?: MuslimDetails;
    
    // Core Family for Inheritance
    fatherAlive: 'Yes' | 'No';
    motherAlive: 'Yes' | 'No';
    sonsCount: number;
    daughtersCount: number;

    // Grandparents
    paternalGrandfatherAlive: 'Yes' | 'No';
    paternalGrandmotherAlive: 'Yes' | 'No';
    maternalGrandmotherAlive: 'Yes' | 'No';

    // Grandchildren through son
    sonSonsCount: number;
    sonDaughtersCount: number;

    // Siblings (relevance depends on religion and other heirs)
    siblings?: Siblings;
}


export interface Beneficiary extends Person {
    relation: BeneficiaryRelation;
}

export interface Debt {
    id: string;
    person: string;
    amount: number;
    description: string;
    currency: string;
}

export interface Asset {
    id: string;
    type: AssetType;
    description: string;
    estimatedValue: number;
    beneficiaryId?: string;
    currency: string;
}

export interface ComplexAsset {
    id: string;
    description: string;
    estimatedValue: number;
    legalOwner: string;
    beneficialOwner: string;
    currency: string;
}

export interface MediaMessage {
    audio?: File | null;
    video?: File | null;
    url?: string;
}

export interface LegalDetails {
    lawyer: Person;
    witnesses: Person[];
}

export interface FinalInstructions {
    reminders: string;
    notificationEmails: string[];
    burialLocation: string;
    instructions: string;
}

export interface Will {
    personalDetails: PersonalDetails;
    beneficiaries: Beneficiary[];
    debtsOwedToTestator: Debt[];
    debtsOwedByTestator: Debt[];
    assets: Asset[];
    complexAssets: ComplexAsset[];
    willContent: string;
    mediaMessage: MediaMessage;
    legal: LegalDetails;
    finalInstructions: FinalInstructions;
}

export interface InheritanceResult {
    heirName: string;
    heirRelation: string;
    shareAmount: number;
    sharePercentage: string;
    reason: string;
}

// Represents a registered user in the application.
export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  password?: string; // Password should not be stored in active state
}

// Represents the different top-level views the app can be in.
export enum AppStatus {
    LOADING,
    LANDING,
    LOGGING_IN,
    SIGNING_UP,
    AUTHENTICATED,
}