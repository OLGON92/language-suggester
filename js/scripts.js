$(document).ready(function() {
  $("form#language-suggester").submit(function(event) {
    event.preventDefault();
    const userFavoriteAnimal=$("#favorite-animal").val();
    const userMorningOrNight=$("input:radio[name=morning-or-night]:checked").val();
    const userMathOrReader=$("input:radio[name=math-or-reader]:checked").val();
    const userPulse=$("input:radio[name=pulse]:checked").val();
    const userCardioOrLifting=$("input:radio[name=cardio-or-lift]:checked").val();
    