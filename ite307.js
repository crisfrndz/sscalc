function computeSampleSize() {
  let n = parseFloat(document.getElementById("ps").value);
  let z = parseFloat(document.getElementById("zscore").value);
  let e = parseFloat(document.getElementById("moe").value / 100);
  let p = parseFloat(document.getElementById("sd").value);
  if (n == 0) {
    let ss = (z * z * p * (1 - p)) / (e * e);
    document.getElementById("ss").innerHTML = "Sample size: "+ ss.toFixed(2);
    document.getElementById("rss").innerHTML = "Rounded Sample size: "+ Math.round(ss);
    document.getElementById("xzscore").innerHTML = z;
    document.getElementById("xsd").innerHTML = p;
    document.getElementById("xsd2").innerHTML = p;
    document.getElementById("xmoe").innerHTML = e; 
    document.getElementById("solution1").style.display = "block";
    document.getElementById("solution2").style.display = "none";

    alert(
      "Sample size: " +
        ss.toFixed(2) +
        "\n Rounded Sample size: " +
        Math.round(ss)
    );
  } else if (n > 0) {
    let top = ((z * z) * p * (1 - p)) / (e * e);
    let bot = (1 + (z * z) * p * (1 - p)) / ((e * e) * n);
    let ss = top / bot;
    document.getElementById("ss").innerHTML = "Sample size: "+ ss.toFixed(2);
    document.getElementById("rss").innerHTML = "Rounded Sample size: "+ Math.round(ss);
    document.getElementById("xzscore3").innerHTML = z;
    document.getElementById("xzscore4").innerHTML = z;
    document.getElementById("xsd5").innerHTML = p;
    document.getElementById("xsd6").innerHTML = p;
    document.getElementById("xsd3").innerHTML = p;
    document.getElementById("xsd4").innerHTML = p;
    document.getElementById("xmoe10").innerHTML = e; 
    document.getElementById("xmoe11").innerHTML = e; 
    document.getElementById("xp").innerHTML = n;
    document.getElementById("line").style.width = "80%"
    document.getElementById("solution1").style.display = "none";
    document.getElementById("solution2").style.display = "block";
    

    alert(
      "Sample size: " +
        ss.toFixed(2) +
        "\nRounded Sample size: " +
        Math.round(ss)
    );
  } else {alert("Invalid please try again")}
}
