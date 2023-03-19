const dateEl = document.querySelector('.date');

    const hourEl = document.querySelector('.hour');


const minuteEl = document.querySelector('.minute');
    
const secondEl = document.querySelector('.second');
    
const mode = document.querySelector('.toggle');
    
const timeEl  = document.querySelector('.time');
  
const year = document.querySelector('.old-format')
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    mode.addEventListener("click", (e) =>
    {
        const html = document.querySelector("html");
        if(html.classList.contains('dark')){
            html.classList.remove('dark');
            e.target.innerHTML = "Light mode"
        }
        else{
           html.classList.add('dark');
            e.target.innerHTML = "Dark mode"
        } 
        });
        
        
        function setTime(){
            const time = new Date();
            const month = time.getMonth()
            const date = time.getDate()
            const day = time.getDay()
            const hours = time.getHours()
            const years = time.getFullYear()
            const hoursForClock = hours % 12;
           const ampm = hours >= 12 ? 'PM' : 'AM';
            const minutes = time.getMinutes()
            const seconds = time.getSeconds()
            
            hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg) `
            minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg) `

secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg) `
            
   
   
   
   timeEl.innerHTML = ` ${hoursForClock}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds} ${ampm}`        
        
    dateEl.innerHTML = ` ${days[day]}, ${Months[month]} <span class= "circle" >${date}</span>`
    year.innerHTML = ` ${years}  `
}
    
    const scale = (num, in_min, in_max, out_min, out_max) => {

        return(num - in_min) * (out_max -out_min) / (in_max - in_min) + out_min;

    }

    
    
    setTime()
    
    setInterval(setTime, 1000)
