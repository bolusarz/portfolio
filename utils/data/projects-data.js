import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Head Office (Cinema management portal)',
        description: "I and my team designed a Cinema Management Solution, its first of its kind by a Nigerian company. I was tasked with creating a responsive and intuitive user interface. It also supports multiple currencies and some other languages. ",
        tools: ['ReactJs', 'NextJs', 'Typescript', 'Tailwind', 'Redux', 'RTK-Query', 'DigitalOcean Spaces'],
        role: 'Frontend Engineer',
        code: '',
        demo: 'office.reachcinema.io',
        image: crefin,
    },
    {
        id: 2,
        name: 'Kiosk',
        description: 'This is a self service ticketing software that is meant to reduce long queues. Users walk up to a screen, select the tickets and concessions and pay for it without the influence of a cinema operator. ',
        tools: ['ReactJs', 'NextJs', 'Typescript', 'Tailwind', 'Redux', 'RTK-Query'],
        role: 'Frontend Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Ebonylife Cinemas Website',
        description: 'I was tasked with developing a site that enables the cinema to sell tickets and concessions online thereby increasing their revenue',
        tools: ['ReactJs', 'NextJs', 'Tailwind', ],
        code: '',
        role: 'Frontend Engineer',
        demo: 'https://ebonylifecinemas.com/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Cinemax Website',
        description: 'I was tasked with developing a site that enables the cinema to sell tickets and concessions online thereby increasing their revenue',
        tools: ['ReactJs', 'NextJs', 'Tailwind', ],
        code: '',
        role: 'Frontend Engineer',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },