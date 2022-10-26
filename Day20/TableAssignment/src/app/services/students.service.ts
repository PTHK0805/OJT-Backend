import { Student } from './students';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  student_data: Student[] = [{
    no: 1,
    profile: "https://i.pravatar.cc/150?img=1",
    name: "Celeste Fitzgerald",
    address: "Ap #492-8793 Inceptos Avenue",
    phone: 12318976646,
    year: "First Year",
    date_of_birth: "15/05/1990"
  },
  {
    no: 2,
    profile: "https://i.pravatar.cc/150?img=2",
    name: "Hiram Shepherd",
    address: "882-2549 Nibh Ave",
    phone: 15092058487,
    year: "Third Year",
    date_of_birth: "10/05/1984"
  },
  {
    no: 3,
    profile: "https://i.pravatar.cc/150?img=3",
    name: "Thor Jacobs",
    address: "Ap #153-7726 Nulla Rd.",
    phone: 13963169743,
    year: "Fifth Year",
    date_of_birth: "21/04/2001"
  },
  {
    no: 4,
    profile: "https://i.pravatar.cc/150?img=4",
    name: "Hiram Knapp",
    address: "Ap #172-2184 Ipsum St.",
    phone: 18943247206,
    year: "Second Year",
    date_of_birth: "17/09/2000"
  },
  {
    no: 5,
    profile: "https://i.pravatar.cc/150?img=5",
    name: "Abdul Byrd",
    address: "232-4477 Cum Rd.",
    phone: 8421633180,
    year: "First Year",
    date_of_birth: "10/08/1998"
  },
  {
    no: 6,
    profile: "https://i.pravatar.cc/150?img=6",
    name: "Keith Hinton",
    address: "Ap #895-9623 Maecenas Street",
    phone: 18272276324,
    year: "Third Year",
    date_of_birth: "11/09/2001"
  },
  {
    no: 7,
    profile: "https://i.pravatar.cc/150?img=7",
    name: "Yasir Giles",
    address: "691-6748 Rutrum Road",
    phone: 6772697241,
    year: "First Year",
    date_of_birth: "07/07/2001"
  },
  {
    no: 8,
    profile: "https://i.pravatar.cc/150?img=8",
    name: "Felicia Kidd",
    address: "982-6802 Suscipit Avenue",
    phone: 18415411478,
    year: "Second Year",
    date_of_birth: "18/03/2001"
  },
  {
    no: 9,
    profile: "https://i.pravatar.cc/150?img=9",
    name: "Diana Mueller",
    address: "Ap #965-3319 Ultrices Avenue",
    phone: 11756617578,
    year: "Fourth Year",
    date_of_birth: "19/12/1998"
  },
  {
    no: 10,
    profile: "https://i.pravatar.cc/150?img=10",
    name: "Lani Kelley",
    address: "Ap #641-3545 Pede Rd.",
    phone: 19188400295,
    year: "Third Year",
    date_of_birth: "21/10/1999"
  },

  {
    no: 11,
    profile: "https://i.pravatar.cc/150?img=11",
    name: "Brianna Kline",
    address: "823-1096 In Av.",
    phone: 5512826207,
    year: "First Year",
    date_of_birth: "04/10/2000"
  },
  {
    no: 12,
    profile: "https://i.pravatar.cc/150?img=12",
    name: "Lucius Gregory",
    address: "Ap #926-2261 Ullamcorper Av.",
    phone: 1703254351,
    year: "Fifth Year",
    date_of_birth: "07/09/1999"
  },
  {
    no: 13,
    profile: "https://i.pravatar.cc/150?img=13",
    name: "Oleg Vega",
    address: "6972 Ac, St.",
    phone: 3008705226,
    year: "Second Year",
    date_of_birth: "14/07/2002"
  },
  {
    no: 14,
    profile: "https://i.pravatar.cc/150?img=14",
    name: "Charde Hickman",
    address: "Ap #415-4311 Et Ave",
    phone: 15857428318,
    year: "Fourth Year",
    date_of_birth: "30/01/1999"
  },
  {
    no: 15,
    profile: "https://i.pravatar.cc/150?img=15",
    name: "Macaulay Manning",
    address: "P.O. Box 717, 9991 Viverra. St.",
    phone: 15634674626,
    year: "First Year",
    date_of_birth: "16/04/2002"
  },
  {
    no: 16,
    profile: "https://i.pravatar.cc/150?img=16",
    name: "Iola Woodard",
    address: "678-5837 Mi Road",
    phone: 8634331854,
    year: "Third Year",
    date_of_birth: "27/02/1999"
  },
  {
    no: 17,
    profile: "https://i.pravatar.cc/150?img=17",
    name: "Hanae Shaw",
    address: "207-6793 Ut Av.",
    phone: 4726774875,
    year: "Fourth Year",
    date_of_birth: "27/12/1997"
  },
  {
    no: 18,
    profile: "https://i.pravatar.cc/150?img=18",
    name: "Hollee Hopper",
    address: "6326 Dis St.",
    phone: 8611617271,
    year: "First Year",
    date_of_birth: "08/04/2002"
  },
  {
    no: 19,
    profile: "https://i.pravatar.cc/150?img=19",
    name: "Hiram Massey",
    address: "Ap #140-7234 Vitae, Av.",
    phone: 6624235199,
    year: "Third Year",
    date_of_birth: "01/11/2002"
  },
  {
    no: 20,
    profile: "https://i.pravatar.cc/150?img=20",
    name: "Raven Drake",
    address: "Ap #148-6273 Rhoncus. Avenue",
    phone: 14738888131,
    year: "Third Year",
    date_of_birth: "01/02/2003"
  }

  ]

  constructor() { }
}
