$(document).ready(function() {
  $("#stress").submit(function(event) {
    event.preventDefault();
    let symptomArray = [];
    let warningArray = [];
    let suggestion;
    $("input:checkbox[name=stress-survey]:checked").each(function() {
      let i = $(this).val();
      symptomArray.push(i);
    });
    $("input:checkbox[name=warningSign]:checked").each(function() {
      let i = $(this).val();
      warningArray.push(i);
    });
    if (symptomArray.length > 2) {
      for (let i = 0; i < warningArray.length; i++) {
        if (warningArray[i] === "happy" || warningArray[i] === "relaxed") {
          suggestion = "Try to meditate more";
        } else {
          suggestion = "Probably you need more rest!";
        }
      }
    } else {
      suggestion = "Maybe you can go for a walk";
    }
    $(".output").text(suggestion);
  });
});