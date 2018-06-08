const mockMessages = [
    {
        _id: 1,
        image: '../../assets/1.jpg',
        title: 'Markus Markusson',
        users: [
            2,
            1
        ],
        messages: [
            {
                image: '../../assets/1.jpg',
                user: 2,
                time: Date.now(),
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum lacinia leo non ultrices. Sed blandit velit a nulla efficitur, at fringilla nibh consectetur. Curabitur vel dolor _id felis fringilla fermentum.'
            }
        ]
    },
    {
        _id: 2,
        image: '../../assets/1.jpg',
        title: 'Anders Andersson',
        users: [
            3,
            1
        ],
        messages: [
            {
                image: '../../assets/1.jpg',
                user: 3,
                time: Date.now(),
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum lacinia leo non ultrices. Sed blandit velit a nulla efficitur, at fringilla nibh consectetur. Curabitur vel dolor _id felis fringilla fermentum.'
            },
            {
                image: '../../assets/1.jpg',
                user: 3,
                time: Date.now(),
                message: 'Donec dictum lacinia leo non ultrices. Sed blandit velit a nulla efficitur, at fringilla nibh consectetur.'
            }
        ]
    },
    {
        _id: 3,
        image: '../../assets/1.jpg',
        title: 'Magnus Magnusson',
        users: [
            4,
            1
        ],
        messages: [
            {
                image: '../../assets/1.jpg',
                user: 4,
                time: Date.now(),
                message: 'Curabitur vel dolor _id felis fringilla.'
            }
        ]
    }
];

export { mockMessages }