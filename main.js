howOld = () => {
    let age = prompt("How old are you?");
    alert(`Привіт, мені ${age} років.`)
}
birthYear = () => {
    const year = 2020;
    let birthYear = prompt("What is your birth year?");
    let age = year - birthYear;
    alert(`You are ${age} years old.`);
}
rectangle = () => {
    let a = prompt("Input side a");
    let b = prompt("Input side b");
    let square = a * b;
    alert(`Square is ${square}.`);
}
circle = () => {
    let r = prompt("Input radius.");
    let square = Math.PI * r * r;
    alert(`Square is ${square}.`);
}
distance = () => {
    const speed = 50;
    let time = prompt(`Input time in hours`);
    let distance = speed * time;
    alert(`Your distance is ${distance} km`);
}
kmMile = () => {
    let a = +prompt(`What do you want to convert? Input "1" for kilometers or "2" for miles`);
    let distance = prompt(`Input distance`);
    let result;
    if (a == 1) {
        result = 0.62137 * distance;
        alert(`Distance is ${result} miles`);
    } else if (a == 2) {
        result = distance / 0.62137;
        alert(`Distance is ${result} kilometers`);
    } else {
        alert(`Wrong input`);
    }
}
money = () => {
    let money = +prompt(`Input the amount of funds`);
    let price = +prompt(`Input the price of gasoline`);
    let rest = money % price;
    let quantity = Math.trunc(money / price);
    alert(`You can buy ${quantity} litres of gasoline and you will have ${rest} rest.`);
}