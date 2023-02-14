let temp = Number(prompt("Enter Temperature"));

if (temp < 0) {
    document.write("Freezing");
} else if (temp > 0 && temp < 10) {
    document.write("Very Cold Wether");
} else if (temp >= 10 && temp < 20) {
    document.write("Cold Wether");
} else if (temp >= 20 && temp < 30) {
    document.write("Normal Temp");
} else if (temp >= 30 && temp <= 40) {
    document.write("It's Hot");
} else {
    document.write("Very Hot");
}