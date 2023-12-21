export default function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randInt;
}