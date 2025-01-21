function capToFront(text) {
    let bigText = [...text].filter(l => l === l.toUpperCase())
    let smallText = [...text].filter(l => l === l.toLowerCase())
    return[...bigText , ...smallText].join("")
}
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
