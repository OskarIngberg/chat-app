const mockMessages = [
    {
        id: 1,
        image: '../../assets/1.jpg',
        title: 'Markus Markusson',
        users: [
            2,
            1
        ],
        messages: [
            {
                image: '../../assets/1.jpg',
                user: 'Markus Markusson',
                time: Date.now(),
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum lacinia leo non ultrices. Sed blandit velit a nulla efficitur, at fringilla nibh consectetur. Curabitur vel dolor id felis fringilla fermentum.'
            }
        ]
    },
    {
        id: 2,
        image: '../../assets/1.jpg',
        title: 'Anders Andersson',
        users: [
            3,
            1
        ],
        messages: [
            {
                image: '../../assets/1.jpg',
                user: 'Anders Andersson',
                time: Date.now(),
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum lacinia leo non ultrices. Sed blandit velit a nulla efficitur, at fringilla nibh consectetur. Curabitur vel dolor id felis fringilla fermentum.'
            },
            {
                image: '../../assets/1.jpg',
                user: 'Anders Andersson',
                time: Date.now(),
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum lacinia leo non ultrices.'
            }
        ]
    },
    {
        id: 3,
        image: '../../assets/1.jpg',
        title: 'Magnus Magnusson',
        users: [
            4,
            1
        ],
        messages: [
            {
                image: '../../assets/1.jpg',
                user: 'Magnus Magnusson',
                time: Date.now(),
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum lacinia leo non ultrices. Sed blandit velit a nulla efficitur, at fringilla nibh consectetur.'
            }
        ]
    }
];

export { mockMessages }