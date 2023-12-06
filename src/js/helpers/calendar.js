export default function calendar() {

    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
    const days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const date = new Date();

    document.getElementById('calendar').innerHTML = (
        days[date.getDate()] + ', ' + 
        date.getDate() + ' ' +
        months[date.getMonth()] + ' ' +
        date.getFullYear()
    );
};