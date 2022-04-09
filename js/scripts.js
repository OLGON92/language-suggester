$(document).ready(function() {
  $("form#language-suggester").submit(function(event) {
    event.preventDefault();
    const userFavoriteAnimal=$("#favorite-animal").val();
    const userMorningOrNight=$("input:radio[name=morning-or-night]:checked").val();
    const userMathOrReader=$("input:radio[name=math-or-reader]:checked").val();
    const userPulse=$("input:radio[name=pulse]:checked").val();
    const userCardioOrLifting=$("input:radio[name=cardio-or-lift]:checked").val();

    let result;
    if (userFavoriteAnimal === "Snake" || userFavoriteAnimal === "Bear") {
      result = "Go";
    } else if (userMorningOrNight === "Night") {
      result = "C#";
    } else if (userMathOrReader === "Math") {
      result = "JavaScript";
    } else if (userPulse === "Yes") {
      result = "Rust";
    } else if (userCardioOrLifting === "Lift") {
      result = "Python";
    }

    $("results").text(result);
    $("results-now").show();

  });
});
