<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Radhakrishna</title>
    <link rel="stylesheet" href="styles.css">
</head>
<style>
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #ffd700;
}

h1 {
    color: #ffd700;
}

button {
    font-size: 1.5rem;
    padding: 10px 20px;
    margin-top: 50px;
    cursor: pointer;
}
</style>
<body>
    <h1>Radhakrishna</h1>
    <button id="changeColor">Change Color</button>
    <script src="script.js"></script>
</body>
</html>

document.getElementById('changeColor').addEventListener('click', function() {
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color;
});