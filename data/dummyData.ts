import { UserRole, Language, MigrantProfile, DoctorProfile, AdminProfile, Appointment, HealthRecord, Prescription, LabReport, Vaccination } from '../types';

// Using ui-avatars.com for consistent, name-based avatars
const getAvatarUrl = (name: string, background: string = '0067a3', color: string = 'ffffff') => {
  const formattedName = name.replace('Dr. ', '').replace(/ /g, '+');
  return `https://ui-avatars.com/api/?name=${formattedName}&background=${background}&color=${color}&bold=true`;
};


export const dummyMigrants: MigrantProfile[] = [
  {
    id: 'MIGRANT001',
    name: 'Baala',
    role: UserRole.MIGRANT,
    dateOfBirth: '1992-08-21',
    gender: 'Male',
    phone: '+91 91234 56780',
    address: 'Kochi, Kerala',
    preferredLanguage: Language.ML,
    avatarUrl: getAvatarUrl('Baala'),
  },
  {
    id: 'MIGRANT002',
    name: 'Ajith Kumar',
    role: UserRole.MIGRANT,
    dateOfBirth: '1989-03-10',
    gender: 'Male',
    phone: '+91 91234 56781',
    address: 'Thiruvananthapuram, Kerala',
    preferredLanguage: Language.ML,
    avatarUrl: getAvatarUrl('Ajith Kumar'),
  },
  {
    id: 'MIGRANT003',
    name: 'Manoj Kumar',
    role: UserRole.MIGRANT,
    dateOfBirth: '1995-12-01',
    gender: 'Male',
    phone: '+91 91234 56782',
    address: 'Kozhikode, Kerala',
    preferredLanguage: Language.HI,
    avatarUrl: getAvatarUrl('Manoj Kumar'),
  },
  {
    id: 'MIGRANT004',
    name: 'Gengu Raj',
    role: UserRole.MIGRANT,
    dateOfBirth: '1998-07-19',
    gender: 'Male',
    phone: '+91 91234 56783',
    address: 'Thrissur, Kerala',
    preferredLanguage: Language.HI,
    avatarUrl: getAvatarUrl('Gengu Raj'),
  },
  {
    id: 'MIGRANT005',
    name: 'Priya',
    role: UserRole.MIGRANT,
    dateOfBirth: '1996-05-25',
    gender: 'Female',
    phone: '+91 91234 56784',
    address: 'Kollam, Kerala',
    preferredLanguage: Language.BN,
    avatarUrl: getAvatarUrl('Priya'),
  },
];

export const dummyMigrant = dummyMigrants[0];

export const dummyDoctors: DoctorProfile[] = [
  {
    id: 'DOC001',
    name: 'Dr. Dhinesh Kumar',
    role: UserRole.DOCTOR,
    specialization: 'General Physician',
    hospital: 'General Hospital, Ernakulam',
    licenseNumber: 'KMC12345',
    avatarUrl: getAvatarUrl('Dr. Dhinesh Kumar', '00537f'),
  },
  {
    id: 'DOC002',
    name: 'Dr. Karthick',
    role: UserRole.DOCTOR,
    specialization: 'Cardiologist',
    hospital: 'City Hospital, Kochi',
    licenseNumber: 'KMC67890',
    avatarUrl: getAvatarUrl('Dr. Karthick', '00537f'),
  },
  {
    id: 'DOC003',
    name: 'Dr. Ashwin',
    role: UserRole.DOCTOR,
    specialization: 'Dermatologist',
    hospital: 'Skin Care Clinic, Thiruvananthapuram',
    licenseNumber: 'KMC11223',
    avatarUrl: getAvatarUrl('Dr. Ashwin', '00537f'),
  }
];

export const dummyDoctor: DoctorProfile = dummyDoctors[0];

export const dummyAdmins: AdminProfile[] = [
    {
      id: 'ADMIN001',
      name: 'Vijay Menon',
      role: UserRole.ADMIN,
      permissions: ['MANAGE_USERS', 'VIEW_ANALYTICS'],
      avatarUrl: getAvatarUrl('Vijay Menon', '343a40'),
    }
];

export const dummyAdmin: AdminProfile = dummyAdmins[0];

export const dummyAppointments: Appointment[] = [
    { id: 'APP001', patientId: 'MIGRANT001', doctorId: 'DOC001', doctorName: 'Dr. Dhinesh Kumar', specialization: 'General Physician', date: '2024-08-05', time: '10:00 AM', status: 'Upcoming' },
    { id: 'APP002', patientId: 'MIGRANT001', doctorId: 'DOC002', doctorName: 'Dr. Karthick', specialization: 'Cardiologist', date: '2024-07-20', time: '02:30 PM', status: 'Completed' },
    { id: 'APP003', patientId: 'MIGRANT002', doctorId: 'DOC003', doctorName: 'Dr. Ashwin', specialization: 'Dermatologist', date: '2024-06-15', time: '11:00 AM', status: 'Completed' },
    { id: 'APP004', patientId: 'MIGRANT001', doctorId: 'DOC001', doctorName: 'Dr. Dhinesh Kumar', specialization: 'General Physician', date: '2024-05-12', time: '09:00 AM', status: 'Cancelled' },
    { id: 'APP005', patientId: 'MIGRANT005', doctorId: 'DOC002', doctorName: 'Dr. Karthick', specialization: 'Cardiologist', date: '2024-08-10', time: '11:00 AM', status: 'Upcoming' },
];

export const dummyHealthRecords: HealthRecord[] = [
    { id: 'HR001', patientId: 'MIGRANT001', doctorId: 'DOC002', doctorName: 'Dr. Karthick', date: '2024-07-20', diagnosis: 'Mild Hypertension', notes: 'Advised lifestyle changes and regular monitoring.' },
    { id: 'HR002', patientId: 'MIGRANT001', doctorId: 'DOC001', doctorName: 'Dr. Dhinesh Kumar', date: '2024-05-10', diagnosis: 'Viral Fever', notes: 'Prescribed paracetamol and rest.' },
    { id: 'HR003', patientId: 'MIGRANT002', doctorId: 'DOC003', doctorName: 'Dr. Ashwin', date: '2024-06-15', diagnosis: 'Allergic Dermatitis', notes: 'Prescribed topical steroids and antihistamines.' },
    { id: 'HR004', patientId: 'MIGRANT005', doctorId: 'DOC002', doctorName: 'Dr. Karthick', date: '2024-07-28', diagnosis: 'Common Cold', notes: 'Advised rest and hydration.' },
];

export const dummyPrescriptions: Prescription[] = [
    { id: 'PRE001', patientId: 'MIGRANT001', doctorId: 'DOC001', date: '2024-05-10', medication: 'Paracetamol 500mg', dosage: '1 tablet', frequency: '3 times a day', duration: '3 days' },
    { id: 'PRE002', patientId: 'MIGRANT002', doctorId: 'DOC003', date: '2024-06-15', medication: 'Clobetasol Propionate Cream', dosage: 'Apply thin layer', frequency: 'Twice daily', duration: '7 days' },
    { id: 'PRE003', patientId: 'MIGRANT005', doctorId: 'DOC002', date: '2024-07-28', medication: 'Cetirizine 10mg', dosage: '1 tablet', frequency: 'Once a day', duration: '5 days' },
];

export const dummyLabReports: LabReport[] = [
    { id: 'LAB001', patientId: 'MIGRANT001', testName: 'Complete Blood Count (CBC)', date: '2024-07-21', result: 'All values within normal range.', fileUrl: '#' },
    { id: 'LAB002', patientId: 'MIGRANT002', testName: 'Allergy Panel', date: '2024-06-16', result: 'Positive for dust mites.', fileUrl: '#' },
];

export const dummyVaccinations: Vaccination[] = [
    { id: 'VAC001', patientId: 'MIGRANT001', vaccineName: 'COVID-19 (Covishield)', date: '2021-06-15', dose: 1 },
    { id: 'VAC002', patientId: 'MIGRANT001', vaccineName: 'COVID-19 (Covishield)', date: '2021-09-10', dose: 2 },
    { id: 'VAC003', patientId: 'MIGRANT002', vaccineName: 'Tetanus Toxoid', date: '2023-01-20', dose: 1 },
    { id: 'VAC004', patientId: 'MIGRANT005', vaccineName: 'COVID-19 (Covishield)', date: '2021-07-01', dose: 1 },
];