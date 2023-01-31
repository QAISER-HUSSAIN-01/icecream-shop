

const stocks = {
    fruits: ["Strawberry", "Grapes", "banana", "Apple"],
    liquid: ["Water", "Ice"],
    holder: ["Cone", "Cup", "Stick"],
    toppings: ["Chocolate", "Peanuts"]
}

const isOpen = true;



function time(ms) {
    return new Promise((resolve, reject) => {
        if (isOpen) {
            setTimeout(() => {
                resolve()

            }, ms)
        }
        else { reject() }
    })
}


async function handleSubmit() {
    event.preventDefault();
    const status = document.querySelector('.status');
    const fruit = document.querySelector('.fruits').value;
    const liquid = document.querySelector('.liquid').value;
    const holder = document.querySelector('.holder').value;
    const topping = document.querySelector('.toppings').value;

    await time(0000);
    stocks.fruits.map(i => {
        if (fruit === i) {
            status.classList.add('active')
            status.innerHTML = `selected item is ${i} <br> cutting fruit is in progress...`
        }
    });


    await time(4000)
    stocks.liquid.map(i => {
        if (liquid === i) {
            status.innerHTML = `adding ${i}`;
        }
    });

    await time(2000)
    status.innerHTML = 'start machine...';

    await time(6000)
    stocks.holder.map(i => {
        if (holder === i) {
            status.innerHTML = `selected holder is ${i}`
        }
    });
    await time(3000)
    stocks.toppings.map(i => {
        if (topping === i) {
            status.innerHTML = `your selected topping is ${i}`
        }
    });

    await time(2000)
    stocks.toppings.map(i => {
        if (topping === i) {
            status.innerHTML = `hurrayyy!!! enjoy your day with cold ice cream`
        }
    });

    await time(0000)
    const image = document.createElement('img');
    image.setAttribute('src',"https://media.giphy.com/media/6wFnRJIxSrzRezJHN4/giphy.gif");
    image.setAttribute('class',"image")
    status.appendChild(image)


}