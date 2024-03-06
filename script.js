function calcBMI() {
    var weight = document.bmiform.kg.value, height = document.bmiform.inches.value;

    const value = ((weight * 703) / (height * height)).toFixed(2);

    document.bmiform.bmi.value = value;

    const result = document.getElementById("result");

    const inches = document.getElementById('inches').value;
    const kg = document.getElementById('kg').value;
    // needle code going here
    const needle = document.getElementById('needle');
    if (inches && kg) {
        if (value < 18.4) {
            result.innerHTML = '<h3>You are underweight hehe</h3>'
            needle.style.transform = 'rotate(-70deg)'
            result.style.color = 'green'
        }
        else if (value >= 18.4 && value <= 24.9) {
            result.innerHTML = '<h3>You are healthy!!</h3>'
            needle.style.transform = 'rotate(-50deg)'
            result.style.color = 'green'
        }
        else if (value >= 30.0) {
            result.innerHTML = '<h3>You are Obese lol</h3>'
            needle.style.transform = 'rotate(80deg)'
            result.style.color = '#fb2f0b'
        }
        else{
            result.textContent = ""
        }
    }
    else {
        const bmiinput = document.getElementById('bmi')
        bmiinput.textContent = ""
        alert("Enter some value!")
    }
}