async function getHours(){
    try {
        const response = await fetch("data.json");
        const hours = await response.json();

        return hours;
    }

    catch (error) {
        console.error("Error : ", error);
    }
}

let data = []

const time_spent_current = document.querySelectorAll(".time-spent-current");
const time_spent_previous = document.querySelectorAll(".time-spent-previous");
const time_spent_contanier = document.querySelectorAll(".time-spent");
const nav_links = document.querySelectorAll(".nav-element");

nav_links.forEach((element) => {
    element.addEventListener("click", () => {
        const element_index = parseInt(element.getAttribute("data-index")); //get the index of the clicked elemet
        element.classList.add("active");
        // remove active from other links
        for(let i = 0; i < nav_links.length; i++){
            if(i === element_index) continue;
            nav_links[i].classList.remove("active");
        }
    })

    element.addEventListener("click", async () => {
        data = await getHours();
        const element_index = parseInt(element.getAttribute("data-index")); //get the index of the clicked elemet
        // if clicked on daily
        if(element_index === 0){
            //  trying to set each container with respect to their correlated data

            for(let q = 0; q < time_spent_contanier.length; q++){
                const cur = time_spent_contanier[q].querySelector("h2");
                const pre = time_spent_contanier[q].querySelector("p");
                let str_current = data[q].timeframes.daily.current.toString();
                let str_previous = data[q].timeframes.daily.previous.toString();
                
                cur.classList.add("changing");
                pre.classList.add("changing");

                setTimeout(() => {
                    console.log("day", str_current, str_previous);
                    cur.innerText = `${str_current}hrs`;
                    pre.innerText = `Yesterday - ${str_previous}hrs`;
                },1000)

                setTimeout(() => {
                    cur.classList.remove("changing");
                    pre.classList.remove("changing");
                }, 1100)
            }
        }
        // if clicked on weekly
        else if (element_index === 1) {
            for(let q = 0; q < time_spent_contanier.length; q++){
                const cur = time_spent_contanier[q].querySelector("h2");
                const pre = time_spent_contanier[q].querySelector("p");
                let str_current = data[q].timeframes.weekly.current.toString();
                let str_previous = data[q].timeframes.weekly.previous.toString();
    
                cur.classList.add("changing");
                pre.classList.add("changing");

                setTimeout(() => {
                    console.log("week", str_current, str_previous);
                    cur.innerText = `${str_current}hrs`;
                    pre.innerText = `Last week - ${str_previous}hrs`;
                },1000);
                

                setTimeout(() => {
                    cur.classList.remove("changing");
                    pre.classList.remove("changing");
                }, 1100)
            }
        }
        // if clicked on monthly
        else if (element_index === 2) {
            for(let q = 0; q < time_spent_contanier.length; q++){
                const cur = time_spent_contanier[q].querySelector("h2");
                const pre = time_spent_contanier[q].querySelector("p");
                let str_current = data[q].timeframes.monthly.current.toString();
                let str_previous = data[q].timeframes.monthly.previous.toString();
    
                cur.classList.add("changing");
                pre.classList.add("changing");

                setTimeout(() => {
                    console.log("month", str_current, str_previous);
                    cur.innerText = `${str_current}hrs`;
                    pre.innerText = `Last Month - ${str_previous}hrs`;
                },1000)

                setTimeout(() => {
                    cur.classList.remove("changing");
                    pre.classList.remove("changing");
                }, 1100)
            }
        }
    })

})