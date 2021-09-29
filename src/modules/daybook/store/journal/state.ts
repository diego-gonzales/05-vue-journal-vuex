
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quod suscipit minima voluptatem magni, iste pariatur esse placeat corrupti. Est nobis omnis expedita praesentium officia enim blanditiis maxime consequuntur, earum pariatur, quos reprehenderit. Ad quasi corrupti commodi praesentium adipisci dolor?',
            image: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Magna nulla ipsum magna et velit sunt velit pariatur nisi. Aute consequat et labore esse occaecat in qui voluptate aliqua deserunt non sunt duis. Ullamco minim sint anim dolor dolore cillum laboris in aute. Esse eu et pariatur esse irure do cupidatat laborum. Commodo sint velit commodo aute. Et aliqua ut labore nisi sunt eu eiusmod. Ipsum sunt anim deserunt aliquip esse incididunt in.',
            image: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Ad minim Lorem dolor laborum do deserunt non in ad. Enim amet non et laboris et enim nostrud labore culpa consequat. Velit cupidatat eu qui non et magna commodo magna dolore esse eu laborum.',
            image: null,
        },
    ]
})