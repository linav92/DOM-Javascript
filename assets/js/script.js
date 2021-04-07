/* Nodos en funciones */

function newNode(clases, id, type) {
  let node = document.createElement(type);
  if (clases != undefined) { node.className = clases; }
  if (id != undefined) { node.id = id; }
  return node
}

function nodeText(type, text, clases, id) {
  let node = newNode(clases, id, type);
  let txtTag = document.createTextNode(text);
  node.appendChild(txtTag);

  return node
}

function nodeImage(image, width, height, clases, id) {
  let node = newNode(clases, id, 'img');
  node.setAttribute('src', image)
  if (width != undefined) { node.width = width; }
  if (height != undefined) { node.height = height; }

  return node
}

function nodeDiv(clases, id, type, text) {
  if (type == undefined) { type = 'div' }
  let node = newNode(clases, id, type);
  if (text != undefined) {
    let txtTag = document.createTextNode(text);
    node.appendChild(txtTag);
  }

  return node
}

function nodeA(text, clases, id) {
  let node = newNode(clases, id, 'a');
  node.setAttribute('href', '#');
  let txtTag = document.createTextNode(text);
  node.appendChild(txtTag);

  return node
}

function nodeForm(clases, id, novalidate) {
  let node = newNode(clases, id, 'form');
  node.novalidate = novalidate;

  return node
}

function nodeInput(type, clases, placeholder, required, id, value, checked) {
  let node = newNode(clases, id, 'input');
  if (type != undefined) node.type = type;
  if (placeholder != undefined) node.placeholder = placeholder;
  if (required != undefined) node.required = required;
  if (value != undefined) node.value = value;
  if (checked != undefined) node.checked = checked;
  return node
}

function nodeSelect(clases, optionsArray, id, required) {
  let node = newNode(clases, id, 'select');
  if (required != undefined) node.required = required;
  first = true;
  optionsArray.forEach(element => {
    let optionNode = newNode(undefined, undefined, 'option')
    if (first) { optionNode.value = "" }
    optionNode.text = element;
    first = false;
    node.appendChild(optionNode);
  });

  return node
}

function nodeLabel(for_value, text, clases, id) {
  let node = newNode(clases, id, 'label');

  node.for = for_value;
  let txtTag = document.createTextNode(text);
  node.appendChild(txtTag);

  return node
}

function nodeButton(type, text, clases, id) {
  let node = newNode(clases, id, 'button');
  node.type = type;
  let txtTag = document.createTextNode(text);
  node.appendChild(txtTag);

  return node
}

function nodeUL(clases, id) {
  let node = newNode(clases, id, 'ul');

  return node
}

function nodeLi(contentArray, clases, id) {
  let node = newNode(clases, id, 'li');

  contentArray.forEach(element => {
    node.appendChild(element);
  });

  return node
}

/* Estructura */

function contentLi_01(text, number) {
  let contentArray = [];

  contentArray.push(nodeDiv());
  contentArray[0].appendChild(nodeText('h6', text, 'my-0'));
  contentArray[0].appendChild(nodeText('small', 'Brief description', 'text-muted'));

  contentArray.push(nodeText('span', '$' + (number), 'text-muted'));
  return contentArray
}

function contentLi_02(textArray) {
  let contentArray = [];
  contentArray.push(nodeDiv("text-success"));

  contentArray[0].appendChild(nodeText('h6', textArray[0], 'my-0'));
  contentArray[0].appendChild(nodeText('small', textArray[1]));

  contentArray.push(nodeText('span', textArray[2], 'text-success'));
  return contentArray
}

function contentLi_03(textArray) {
  let contentArray = [];
  contentArray.push(nodeText('span', textArray[0]));
  contentArray.push(nodeText('strong', textArray[1]));

  return contentArray
}

function contentLI_footer(text) {
  let contentArray = [];
  contentArray.push(nodeA(text))
  return contentArray
}

function inputStructure(fieldName, clases, inputType, placeHolder, errorMessage, optional, inputId, smallText) {
  capitalized = fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
  if (optional == undefined) { optional = false }
  if (inputId == undefined) { inputId = fieldName.replace(/ /g, ''); }

  let node = nodeDiv(clases);
  let labelNode = nodeLabel(fieldName, capitalized);
  if (optional) { labelNode.appendChild(nodeText('span', ' (Optional)', 'text-muted')); }
  node.appendChild(labelNode);
  if (inputType == 'text') { node.appendChild(nodeInput('text', 'form-control', placeHolder, !optional, inputId)); }
  if (smallText != undefined) { node.appendChild(nodeText('small', smallText, 'text-muted')); }
  if (errorMessage.length > 0) { node.appendChild(nodeDiv('invalid-feedback', undefined, undefined, errorMessage)); }

  return node
}

function radioStructure(fieldName, forAttribute, checked) {
  capitalized = fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
  let node = nodeDiv('custom-control custom-radio', 'customRadio');
  if (checked == undefined) { node.checked = false; }
  node.appendChild(nodeInput('radio', 'custom-control-input', undefined, true, forAttribute, undefined, checked));
  node.appendChild(nodeLabel(forAttribute, capitalized, 'custom-control-label'));

  return node
}

document.querySelector('body').appendChild(nodeDiv('container', 'div-01'));
// Header
document.getElementById('div-01').appendChild(nodeDiv('py-5 text-center', 'div-02'));
document.getElementById('div-02').appendChild(nodeImage('https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg', '72', '72', 'd-block mx-auto mb-4'));

document.getElementById('div-02').appendChild(nodeText('h2', "Checkout selector"));

document.getElementById('div-02').appendChild(nodeText('p', "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.", 'lead'));

// Carrito
document.getElementById('div-01').appendChild(nodeDiv('row', 'div-03'));
document.getElementById('div-03').appendChild(nodeDiv('col-md-4 order-md-2 mb-4', 'div-04'));
document.getElementById('div-04').appendChild(nodeText('h4', '', 'd-flex justify-content-between align-items-center mb-3', 'H4-01'));
document.getElementById('H4-01').appendChild(nodeText('span', 'Your Cart', 'text-muted'));
document.getElementById('H4-01').appendChild(nodeText('span', '3', 'badge badge-secondary badge-pill'));
document.getElementById('div-04').appendChild(nodeUL('list-group mb-3', 'UL-01'));
document.getElementById('UL-01').appendChild(nodeLi(contentLi_01('Product name', 12), 'list-group-item d-flex justify-content-between lh-condensed'));
document.getElementById('UL-01').appendChild(nodeLi(contentLi_01('Second product', 8), 'list-group-item d-flex justify-content-between lh-condensed'));
document.getElementById('UL-01').appendChild(nodeLi(contentLi_01('Third item', 5), 'list-group-item d-flex justify-content-between lh-condensed'));

document.getElementById('UL-01').appendChild(nodeLi(contentLi_02(['Promo code', 'EXAMPLECODE', '$5']), 'list-group-item d-flex justify-content-between bg-light'));

document.getElementById('UL-01').appendChild(nodeLi(contentLi_03(['Total (USD)', '$20']), 'list-group-item d-flex justify-content-between'));

document.getElementById('div-04').appendChild(nodeForm('card p-2', 'FRM', true));
document.getElementById('FRM').appendChild(nodeDiv('input-group', 'inputDiv'));
document.getElementById('inputDiv').appendChild(nodeInput('text', 'form-control', 'Promo code'));
document.getElementById('inputDiv').appendChild(nodeDiv('input-group-append', 'buttonDiv'));
document.getElementById('buttonDiv').appendChild(nodeButton('submit', 'Redeem', 'btn btn-secondary'));

//Formulario
document.getElementById('div-03').appendChild(nodeDiv('col-md-8 order-md-1', 'div-05'));
document.getElementById('div-05').appendChild(nodeText('h4', 'Billing Addess'));
document.getElementById('div-05').appendChild(nodeForm('needs-validation', 'billingFRM', true));
document.getElementById('billingFRM').appendChild(nodeDiv('row', 'div-06'));
document.getElementById('div-06').appendChild(inputStructure('first Name', 'col-md-6 mb-3', 'text', '', 'Valid first name is required.'))
document.getElementById('div-06').appendChild(inputStructure('last Name', 'col-md-6 mb-3', 'text', '', 'Valid last name is required.'))
document.getElementById('billingFRM').appendChild(nodeDiv('mb-3', 'usernameField'));
document.getElementById('usernameField').appendChild(nodeLabel('username', 'Username'));
document.getElementById('usernameField').appendChild(nodeDiv('input-group', 'inputGroup'));
document.getElementById('inputGroup').appendChild(nodeDiv('input-group-prepend', 'prepend'));
document.getElementById('prepend').appendChild(nodeText('span', '@', 'input-group-text'));
document.getElementById('inputGroup').appendChild(nodeInput('text', 'form-control', 'username', true, 'username'));
document.getElementById('inputGroup').appendChild(nodeDiv('invalid-feedback', undefined, undefined, 'Your Username is required', 'width: 100%;'))
document.getElementById('billingFRM').appendChild(inputStructure('email', 'mb-3', 'email', 'you@example.com', 'Please enter a valid email address for shiopping updates.', true))
document.getElementById('billingFRM').appendChild(inputStructure('address', 'mb-3', 'text', '123 Main St', 'Please enter your shippong address.'))
document.getElementById('billingFRM').appendChild(inputStructure('addres2', 'mb-3', 'text', 'Aparte or suite', '', true))
document.getElementById('billingFRM').appendChild(nodeDiv('row', 'countryRow'));
document.getElementById('countryRow').appendChild(nodeDiv('col-md-5 mb-3', 'countryField'));
document.getElementById('countryField').appendChild(nodeLabel('country', 'Country'));
document.getElementById('countryField').appendChild(nodeSelect('custom-select d-block w-100', ['Choose...', 'United States'], 'Country', true));
document.getElementById('countryField').appendChild(nodeDiv('invalid-feedback', undefined, undefined, 'Please select a valid country'));
document.getElementById('countryRow').appendChild(nodeDiv('col-md-4 mb-3', 'stateField'));
document.getElementById('stateField').appendChild(nodeLabel('state', 'State'));
document.getElementById('stateField').appendChild(nodeSelect('custom-select d-block w-100', ['Choose...', 'California'], 'State', true));
document.getElementById('stateField').appendChild(nodeDiv('invalid-feedback', undefined, undefined, 'Please select a valid state'));
document.getElementById('countryRow').appendChild(inputStructure('zip', 'col-md-3 mb-3', 'text', '', 'Zip code required'))
document.getElementById('billingFRM').appendChild(newNode('mb-4', undefined, 'hr'));
document.getElementById('billingFRM').appendChild(nodeDiv('custom-control custom-checkbox', 'checkboxDiv'))
document.getElementById('checkboxDiv').appendChild(nodeInput('checkbox', 'custom-control-input', undefined, undefined, 'same-adress'));
document.getElementById('checkboxDiv').appendChild(nodeLabel('save-info', 'Shipping address is the same as my billing address', 'custom-control-label'));
document.getElementById('billingFRM').appendChild(nodeDiv('custom-control custom-checkbox', 'checkbox2Div'))
document.getElementById('checkbox2Div').appendChild(nodeInput('checkbox', 'custom-control-input', undefined, undefined, 'same-info'));
document.getElementById('checkbox2Div').appendChild(nodeLabel('save-info', 'Save this information for next time', 'custom-control-label'));
document.getElementById('billingFRM').appendChild(newNode('mb-4', undefined, 'hr'));
document.getElementById('billingFRM').appendChild(nodeText('h4', 'Payment', 'mb-3'));
document.getElementById('billingFRM').appendChild(nodeDiv('d-block my-3', 'paymentDiv'));
document.getElementById('paymentDiv').appendChild(radioStructure('credit card', 'credit', true));
document.getElementById('paymentDiv').appendChild(radioStructure('debit card', 'debit'));
document.getElementById('paymentDiv').appendChild(radioStructure('paypal', 'paypal'));
document.getElementById('billingFRM').appendChild(nodeDiv('row', 'cardDiv'));
document.getElementById('cardDiv').appendChild(inputStructure('name on card', 'col-md-6 mb-3', 'text', '', 'Name on card is required', undefined, 'cc-name', 'Fullname as displayed on card'));
document.getElementById('cardDiv').appendChild(inputStructure('credit card number', 'col-md-6 mb-3', 'text', '', 'Credit card number is required', undefined, 'cc-number'));
document.getElementById('billingFRM').appendChild(nodeDiv('row', 'cardDiv2'));
document.getElementById('cardDiv2').appendChild(inputStructure('expiration', 'col-md-3 mb-3', 'text', '', 'Expiration date required', undefined, 'cc-expiration'));
document.getElementById('cardDiv2').appendChild(inputStructure('CVV', 'col-md-3 mb-3', 'text', '', 'Security code required', undefined, 'cc-ccv'));
document.getElementById('billingFRM').appendChild(newNode('mb-4', undefined, 'hr'));
document.getElementById('billingFRM').appendChild(nodeButton('submit', 'Continue to checkout', 'btn btn-primary btn-lg btn-block'));

//Footer
document.getElementById('div-01').appendChild(nodeDiv('my-5 pt-5 text-muted text-center text-small', 'footer', 'footer'));
document.getElementById('footer').appendChild(nodeText('p', '&copy; 2017-2019 Company Name', 'mb-1'));
document.getElementById('footer').appendChild(nodeUL('list-inline', 'ul-footer'));
document.getElementById('ul-footer').appendChild(nodeLi(contentLI_footer('Privacy'), 'list-inline-item'));
document.getElementById('ul-footer').appendChild(nodeLi(contentLI_footer('Terms'), 'list-inline-item'));
document.getElementById('ul-footer').appendChild(nodeLi(contentLI_footer('Support'), 'list-inline-item'));