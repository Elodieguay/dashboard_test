
export interface ProfileItem {
    id: number;
    firstName: string;
    name: string;
    CityCode: number;
    Adress: string;
    mail:string;
    phone: string;
    type: string;
    plug: string;
    quote: string;
    target: boolean;
  }


export const profileData: ProfileItem[]= [
    {
        id: 1,
        firstName: 'Ron',
        name: 'Valpres',
        CityCode: 64000,
        Adress: '20 rue Boulet, 64000 Pau ',
        mail:'v@v.com',
        phone: '0654789032',
        type: 'item',
        plug: "Borne Modèle 2",
        quote: "A234",
        target: true,
    },
    {
        id: 2,
        firstName: 'Jeanne',
        name: 'Antoine',
        CityCode: 72000,
        Adress: '90 rue Bosquet, 72000 Le Mans ',
        mail:'jantoine@lop.com',
        phone: '0754659032',
        type: 'item',
        plug: "Borne Modèle 1",
        quote: "A934",
        target: true,
    },
    {
        id: 3,
        firstName: 'Franck',
        name: 'Charles',
        CityCode: 75009,
        Adress: '3 av du trot, 75009 Paris ',
        mail:'v@v.com',
        phone: '0632145632',
        type: 'item',
        plug: "Borne Modèle 2",
        quote: "A256",
        target: true,
    },
    {
        id: 4,
        firstName: 'Agnès',
        name: 'Renard',
        CityCode: 64000,
        Adress: '2 rue Pascal, 56000 Vannes ',
        mail:'a.renard@mail.com',
        phone: '0754787032',
        type: 'item',
        plug: "Borne Modèle 3",
        quote: "A236",
        target: true,
    },
    
]