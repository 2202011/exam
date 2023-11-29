let score = prompt("Ingrese el puntaje del estudiante:")


if (score >= 9 && score <= 10) {
    document.write("Outstanding")
} 

else if (score >= 7 && score < 9) {
    document.write("Remarkable")
}

else if (score >= 6 && score < 7) {
    document.write("Okay")
}

else if (score >= 3 && score < 5) {
    document.write("Enough")
}

else if (score >= 0 && score < 3) {
    document.write("Very poor")
}


