const print_results = () => {
  
  document.getElementById("col-res-1").innerHTML = "";
  document.getElementById("col-res-2").innerHTML = "";
  document.getElementById("col-res-3").innerHTML = "";
  document.getElementById("num1").style.border = "1px solid #ced4da";
  document.getElementById("num2").style.border = "1px solid #ced4da";

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const num_arr = [num1, num2];

  if (num1 < 1 || num1 > 50 || num2 < 1 || num2 > 50) {
    let message_num1 = "";
    let message_num2 = "";
    let messages = "";
    if(num1 < 1 || num1 > 50) {
      document.getElementById("num1").style.border = "2px solid red";
      message_num1 = `<p>El primer número introduït <b>${num1}</b> no està dins del rang permès (1-50).</p>`;
    } else {
      document.getElementById("num1").style.border = "1px solid #ced4da";
    }

    if(num2 < 1 || num2 > 50) {
      document.getElementById("num2").style.border = "2px solid red";
      message_num2 = `<p>El segon número introduït <b>${num2}</b> no està dins del rang permès (1-50).</p>`;
    } else {
      document.getElementById("num2").style.border = "1px solid #ced4da";
    }

    if( message_num1 != "" && message_num2 != "")
      messages = message_num1 + message_num2;
    else if( message_num1 != "" && message_num2 == "")
      messages = message_num1;
    else if( message_num1 == "" && message_num2 != "")
      messages = message_num2;
    
    document.getElementById("col-res-1").innerHTML = `
    <h5>CHECKING...</h5>
    ${messages}
    <p>Si us plau, torna a introduir-los.</p>`;
    return;
  }

  document.getElementById("col-res-1").innerHTML = sum_numbers(num1, num2);

  document.getElementById("col-res-2").innerHTML = prime_numbers(num_arr);

  document.getElementById("col-res-3").innerHTML = even_odd_numbers(num_arr);

  document.getElementById("col-res-1").innerHTML += list_even_numbers(num1, num2);

  document.getElementById("col-res-2").innerHTML += list_odd_numbers(num1, num2);

  document.getElementById("col-res-3").innerHTML += equal_numbers(num1, num2);
};

/*NOTE: Si num1 == num2 -> imprimir si és primer, si és parell*/
const equal_numbers = (num1, num2) => {
  let message = '<h4>Punt 6</h4><p><i><b>Resposta:</b><br>';
  if (num1 === num2) {
    if (is_prime(num1) || is_even(num1)) {
      message += `El primer número introduit <b>${num1}</b> és `;
      if (is_prime(num1)) {
        message += `primer `;
      }
      if (is_even(num1)) {
        if (is_prime(num1)) {
          message += `, `;
        }
        message += `parell `;
      }
      message += `i `;
    }
    message += `és igual a segon número <b>${num2}</b>.`;
  } else {
    message += `Els nombres <b>${num1}</b> i <b>${num2}</b> no són iguals.`;
  }
  message += '</i></p><br>';
  return message;
}

/*NOTE: llista nombres senars si num1 > num2*/
const list_odd_numbers = (num1, num2) => {
  let message = '<h4>Punt 5</h4><p><i><b>Resposta:</b><br>';
  let nums_list = [];
  if (num1 > num2) {
    for (let i = num1; i >= num2; i--) {
      if (!is_even(i)) {
        nums_list.push(i);
      }
    }
  }

  if(nums_list.length === 0) {
    message += `No hi ha cap nombre senar entre ${num1} i ${num2}.`;
  } else if (nums_list.length === 1) {
    message += `El nombre senar entre ${num1} i ${num2} és: <b>${nums_list}.`;
  } else {
    message += `Els nombres senars entre ${num1} i ${num2} són: <b>${nums_list}</b>.`;
  }
  message += '</i></p><br>';
  return message;
}

/*NOTE: llista nombres parells si num1 < num2*/
const list_even_numbers = (num1, num2) => {
  let message = '<h4>Punt 4</h4><p><i><b>Resposta:</b><br>';
  let nums_list = [];
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      if (is_even(i)) {
        nums_list.push(i);
      }
    }
  }

  if(nums_list.length === 0) {
    message += `No hi ha cap nombre parell entre ${num1} i ${num2}.`;
  } else if (nums_list.length === 1) {
    message += `El nombre parell entre ${num1} i ${num2} és: <b>${nums_list}.`;
  } else {
    message += `Els nombres parells entre ${num1} i ${num2} són: <b>${nums_list}</b>.`;
  }
  message += '</i></p><br>';
  return message;
}

/*NOTE: nombres parells*/
const even_odd_numbers = (nums) => {
  let message = '<h4>Punt 3</h4><p><i><b>Resposta:</b>';
  for (let i = 0; i < nums.length; i++) {
    message += '<br>';
    if (is_even(nums[i])) {
      message += `El <b>${nums[i]}</b> és un número parell.`;
    } else {
      message += `El <b>${nums[i]}</b> és un número senar.`;
    }
  }
  message += '</i></p><br>';
  return message;
}
const is_even = (num) => {
  return num % 2 === 0;
}

/*NOTE: nombres primers*/
const prime_numbers = (nums) => {
  let message = '<h4>Punt 2</h4><p><i><b>Resposta:</b>';
  for (let i = 0; i < nums.length; i++) {
    message += '<br>';
    if (is_prime(nums[i])) {
      message += `El <b>${nums[i]}</b> és un número primer.`;
    } else {
      message += `El <b>${nums[i]}</b> NO és un número primer.`;
    }
  }
  message += '</i></p><br>';
  return message;
}
const is_prime = (num) => {
  let prime = true;
  for (let i = 2; i < num; i++) {
   if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

/*NOTE: Suma dels nombres*/
const sum_numbers = (num1, num2) => {
  const sum = num1 + num2;
  return `<h4>Punt 1</h4>
  <p>${num1} + ${num2} = <b>${sum}</b></p>
  <p><i><b>Resposta:</b> La suma de ${num1} i ${num2} és <b>${sum}</b></i></p><br>`;
}

/*NOTE: netejar la vista*/
const clean_results = () => {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("col-res-1").innerHTML = "";
  document.getElementById("col-res-2").innerHTML = "";
  document.getElementById("col-res-3").innerHTML = "";
  document.getElementById("num1").style.border = "1px solid #ced4da";
  document.getElementById("num2").style.border = "1px solid #ced4da";
}
