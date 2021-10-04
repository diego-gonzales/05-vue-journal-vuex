
const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']
const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']


const getDayMonthYear = (dateString: string) => {
    const date = new Date(dateString)

    return {
        day: date.getDate(),
        month: months[date.getMonth()],
        yearAndDayOfTheWeek: `${date.getFullYear()}, ${days[date.getDay()]}`
    }
}


export default getDayMonthYear