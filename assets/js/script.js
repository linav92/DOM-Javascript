//Header

function headerDiv() {
  let body = document.querySelector('body')
  let divHeader = document.createElement("div")
  divHeader.classList.add("container")
  body.classList.add("bg-light", "container")
  body.appendChild(divHeader)

  divIntHeader = document.createElement("div")
  divIntHeader.classList.add("py-5", "text-center")
  divHeader.appendChild(divIntHeader)
  
}

function headerImage() {
  let headerImage = document.createElement("img")
  headerImage.src = "https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg"
  headerImage.alt = ""
  headerImage.width = "72"
  headerImage.height = "72"
  return headerImage
}

function headerTitle() {
  let headerTitle = document.createElement("h2")
  let titleText = document.createTextNode(`Checkout form`);
  headerTitle.appendChild(titleText)
  return headerTitle
}

function headerText() {
  let headerText = document.createElement("p")
  headerText.classList.add("lead")
  let paragraphText = document.createTextNode(`Below is an example form built entirely with Bootstrap’s
  form controls. Each required form group has a validation state that can be
  triggered by attempting to submit the form without completing it.`);
  headerText.appendChild(paragraphText)
  return headerText
}

function headerContent() {
  headerDiv()
  let intDiv = document.querySelector('div.text-center.py-5' )
  intDiv.appendChild(headerImage())
  intDiv.appendChild(headerTitle())
  intDiv.appendChild(headerText())
}

//Formulario

function mainFormDiv() {
  let body = document.querySelector('body')
  let mainFormDiv = document.createElement("div")
  mainFormDiv.classList.add("row")
  body.appendChild(mainFormDiv)

  let intFormDiv = document.createElement("div")
  intFormDiv.classList.add("col-md-4", "order-md-2", "mb-4")

  mainFormDiv.appendChild(intFormDiv)

  let infoFormDiv = document.createElement("div")
  infoFormDiv.classList.add("col-md-8", "order-md-1")
  mainFormDiv.appendChild(infoFormDiv)

  let title = document.createElement("h4")
  title.classList.add("mb-3")
  let titleText = document.createTextNode("Billing address");
  title.appendChild(titleText)
  infoFormDiv.appendChild(title)

  let infoForm = document.createElement("form")
  infoForm.classList.add("needs-validation")
  infoFormDiv.appendChild(infoForm)

  return mainFormDiv
}

function cartTitle() {
  let cartTitle = document.createElement("h4")
  cartTitle.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-3")

  let firstTitleSpan = document.createElement("span")
  firstTitleSpan.classList.add("text-muted")
  let firstTextTitleSpan = document.createTextNode("Your cart");
  firstTitleSpan.appendChild(firstTextTitleSpan)
  
  cartTitle.appendChild(firstTitleSpan)

  let secondTitleSpan = document.createElement("span")
  secondTitleSpan.classList.add("badge", "badge-secondary", "badge-pill")
  let secondTextTitleSpan = document.createTextNode(`3`);
  secondTitleSpan.appendChild(secondTextTitleSpan)

  cartTitle.appendChild(secondTitleSpan)
  return cartTitle
}

function createLi(title, amount, promo, total) {

  let productDescription = document.createElement("li")
  productDescription.classList.add("list-group-item", "d-flex", "justify-content-between", "lh-condensed")
  let contentDiv = document.createElement("div")

  if (promo){
      contentDiv.classList.add("text-success")
  }
      
  productName = document.createElement("h6")
  productName.classList.add("my-0")
  let productTextname = document.createTextNode(title);
  productName.appendChild(productTextname)
  contentDiv.appendChild(productName)

  productDef = document.createElement("small")
  let descriptionText = "EXAMPLECODE"
  if (!promo) {
      productDef.classList.add("text-muted")
      descriptionText = "Brief description"
  }
  if (total) {
      descriptionText = ""
  }
  
  let productTextDef = document.createTextNode(descriptionText);
  productDef.appendChild(productTextDef)
  contentDiv.appendChild(productDef)

  let productAmount = document.createElement("span")
  productAmount.classList.add("text-muted")
  if (promo) {
      productAmount.className = "text-success"
  }
  let productTotalAmount = document.createTextNode(amount);
  productAmount.appendChild(productTotalAmount)

  productDescription.appendChild(contentDiv)
  productDescription.appendChild(productAmount)

  if (total){
      productAmount.className = ""
      let totalAmount = document.createElement("span")
      productDescription.appendChild(totalAmount)
  }
  return productDescription
}

function productList() {
  let productList = document.createElement("ul")
  productList.classList.add("list-group", "mb-3")

  productList.appendChild(createLi("Product name", "$12"))
  productList.appendChild(createLi("Second product", "$8"))
  productList.appendChild(createLi("Third item", "$5"))
  productList.appendChild(createLi("Promo code", "$5", true ))
  productList.appendChild(createLi("Total (USD)", "$20", false, true ))
  return productList

}

function promoForm(){
  let promoForm = document.createElement("form")
  promoForm.classList.add("card", "p-2")
  let promoFormDiv = document.createElement("div")
  promoFormDiv.classList.add("input-group")
  promoForm.appendChild(promoFormDiv)

  let formInput = document.createElement("input")
  formInput.classList.add("form-control")
  formInput.type = "text"
  formInput.placeholder = "Promo code"
  promoFormDiv.appendChild(formInput)

  let intformDiv = document.createElement("div")
  intformDiv.classList.add("input-group-append")
  promoFormDiv.appendChild(intformDiv)

  let promoButton = document.createElement("button")
  promoButton.classList.add("btn", "btn-secondary")
  promoButton.type = "submit"
  let promoButtonText = document.createTextNode("Redeem");
  promoButton.appendChild(promoButtonText)
  intformDiv.appendChild(promoButton)
  return promoForm
}

function firstRowName() {
  
  let firstRowDiv = document.createElement("div")
  firstRowDiv.classList.add("row")

  let firstNameDiv = document.createElement("div")
  firstNameDiv.classList.add("col-md-6", "mb-3")
  firstRowDiv.appendChild(firstNameDiv)

  let firstNameLabel = document.createElement("label")
  firstNameLabel.for = "firstName"
  let firstNameLabelText = document.createTextNode("First name");
  firstNameLabel.appendChild(firstNameLabelText)
  firstNameDiv.appendChild(firstNameLabel)

  let firstNameInput = document.createElement("input")
  firstNameInput.classList.add("form-control")
  firstNameInput.type = "text"
  firstNameInput.id = "firstName"
  firstNameInput.placeholder = ""
  firstNameDiv.appendChild(firstNameInput)

  let feedBackDiv = document.createElement("div")
  feedBackDiv.classList.add("invalid-feedback")
  let feedBacktext =  document.createTextNode("Valid first name is required.");
  feedBackDiv.appendChild(feedBacktext)
  firstNameDiv.appendChild(feedBackDiv)

  let lastNameDiv = document.createElement("div")
  lastNameDiv.classList.add("col-md-6", "mb-3")
  firstRowDiv.appendChild(lastNameDiv)

  let lastNameLabel = document.createElement("label")
  lastNameLabel.for = "lastName"
  let lastNameLabelText = document.createTextNode("Last name");
  lastNameLabel.appendChild(lastNameLabelText)
  lastNameDiv.appendChild(lastNameLabel)

  let lastNameInput = document.createElement("input")
  lastNameInput.classList.add("form-control")
  lastNameInput.type = "text"
  lastNameInput.id = "lastName"
  lastNameInput.placeholder = ""
  lastNameDiv.appendChild(lastNameInput)

  let lastFeedBackDiv = document.createElement("div")
  lastFeedBackDiv.classList.add("invalid-feedback")
  let lastfeedBacktext =  document.createTextNode("Valid last name is required.");
  lastFeedBackDiv.appendChild(lastfeedBacktext)
  lastNameDiv.appendChild(lastFeedBackDiv)

  return firstRowDiv
}

function personalInfo(username, email, address1, address2) {
  let usernameDiv = document.createElement("div")
  usernameDiv.classList.add("mb-3")
  
  let usernameLabel = document.createElement("label")
  usernameLabel.for = "username"
  let usernameTextLabe = "Username"

  if(email) {
      let innerSpan = document.createElement("span")
      innerSpan.classList.add("text-muted")
      let spanText = document.createTextNode(" (Optional)");
      innerSpan.appendChild(spanText)
      let usernameTextLabe = "Email"
      usernameLabel.for = "email"

      let usernameTextLabe =  document.createTextNode(usernameTextLabe);
      usernameLabel.appendChild(usernameTextLabe)
      usernameDiv.appendChild(usernameLabel)
      usernameLabel.appendChild(innerSpan)

      let inputInfo = document.createElement("input")
      inputInfo.classList.add("form-control") 
      inputInfo.type = "email"
      inputInfo.id = "email"
      inputInfo.placeholder = "you@example.com"
      usernameDiv.appendChild(inputInfo)

      let validationDiv = document.createElement("div")
      validationDiv.classList.add("invalid-feedback")
      let validText = document.createTextNode("Please enter a valid email address for shipping updates.");
      validationDiv.appendChild(validText)
      usernameDiv.appendChild(validationDiv)
      

  }

  if(address1) {

      let usernameTextLabe = "Address"
      usernameLabel.for = "address"

      let adressTextLabe =  document.createTextNode(usernameTextLabe);
      usernameLabel.appendChild(adressTextLabe)
      usernameDiv.appendChild(usernameLabel)

      let inputInfo = document.createElement("input")
      inputInfo.classList.add("form-control") 
      inputInfo.type = "text"
      inputInfo.id = "address"
      inputInfo.placeholder = "1234 Main St"
      usernameDiv.appendChild(inputInfo)

      let validationDiv = document.createElement("div")
      validationDiv.classList.add("invalid-feedback")
      let validText = document.createTextNode("Please enter your shipping address.");
      validationDiv.appendChild(validText)
      usernameDiv.appendChild(validationDiv)
      

  }

  if(address2) {

      let innerSpan = document.createElement("span")
      innerSpan.classList.add("text-muted")
      let spanText = document.createTextNode(" (Optional)");
      innerSpan.appendChild(spanText)
      let usernameTextLabe = "Address 2"
      usernameLabel.for = "address2"
      
      

      let adressTextLabe =  document.createTextNode(usernameTextLabe);
      usernameLabel.appendChild(adressTextLabe)
      usernameDiv.appendChild(usernameLabel)
      usernameLabel.appendChild(innerSpan)

      let inputInfo = document.createElement("input")
      inputInfo.classList.add("form-control") 
      inputInfo.type = "text"
      inputInfo.id = "address2"
      inputInfo.placeholder = "Apartment or suite"
      usernameDiv.appendChild(inputInfo)

      let validationDiv = document.createElement("div")
      validationDiv.classList.add("invalid-feedback")
      let validText = document.createTextNode("Please enter your shipping address.");
      validationDiv.appendChild(validText)
      usernameDiv.appendChild(validationDiv)
      

  }

  if (username){

      let intDivUsername = document.createElement("div")
      intDivUsername.classList.add("input-group")

      let usernameTextLabe =  document.createTextNode(usernameTextLabe);
      usernameLabel.appendChild(usernameTextLabe)
      usernameDiv.appendChild(usernameLabel)

      usernameDiv.appendChild(usernameLabel)
      usernameDiv.appendChild(intDivUsername)

      let spanDivUsername = document.createElement("div")
      spanDivUsername.classList.add("input-group-prepend")
      intDivUsername.appendChild(spanDivUsername)

      let spanUsername = document.createElement("span")
      spanUsername.classList.add("input-group-text") 
      let spanText = document.createTextNode("@");
      spanUsername.appendChild(spanText)
      intDivUsername.appendChild(spanUsername)

      let inputInfo = document.createElement("input")
      inputInfo.classList.add("form-control") 
      inputInfo.type = "text"
      inputInfo.id = "username"
      inputInfo.placeholder = "Username"
      intDivUsername.appendChild(inputInfo)

      let validationDiv = document.createElement("div")
      validationDiv.classList.add("invalid-feedback")
      validationDiv.style = "width: 100%;"
      let validText = document.createTextNode("Your username is required.");
      validationDiv.appendChild(validText)
      intDivUsername.appendChild(validationDiv)

  }

  return usernameDiv

}

function locationInfo(state) {

  let locationsDiv = document.createElement("div")
  locationDivClass = "col-md-5 mb-3"
  

  let locationLabel = document.createElement("label")
  let locationLabelFor = "country"
  let LabelText = "Country"
  
  let locationSelect = document.createElement("select")
  locationSelectClass = "custom-select", "d-block", "w-100"
  locationSelect.className = locationSelectClass
  let locationSelectId = "country"
  
  let firstInnerOption = document.createElement("option")
  firstInnerOption.value = ""
  let innerOptionText = "Choose..."
  let firstOptionText = document.createTextNode(innerOptionText);

  let secondInnerOption = document.createElement("option")
  let secondInnerOptionText = "United States"
  
  let validationDiv = document.createElement("div")
  validationDiv.classList.add("invalid-feedback")
  let validationText = "Please select a valid country."
  

  if (state) {
      locationDivClass = "col-md-4 mb-3"
      locationLabelFor = "state"
      LabelText = "State"
      locationSelectId = "state"
      secondInnerOptionText = "California"
      validationText = "Please provide a valid state."
  }

  locationsDiv.className = locationDivClass
  locationLabel.for = locationLabelFor
  let locationLabelForLabelText  = document.createTextNode(LabelText);
  locationSelect.id = locationSelectId
  let secondOptionText = document.createTextNode(secondInnerOptionText);
  let validText = document.createTextNode(validationText);
  
  locationLabel.appendChild(locationLabelForLabelText)
  locationsDiv.appendChild(locationLabel)
  locationsDiv.appendChild(locationSelect)
  firstInnerOption.appendChild(firstOptionText)
  locationSelect.appendChild(firstInnerOption)
  secondInnerOption.appendChild(secondOptionText)
  locationSelect.appendChild(secondInnerOption)
  validationDiv.appendChild(validText)
  locationsDiv.appendChild(validationDiv)

  return locationsDiv
}

function zip(){
  let locationDiv = document.createElement("div")
  let locationDivClass = "col-md-3 mb-3"
  locationDiv.className = locationDivClass

  let locationLabel = document.createElement("label")
  let locationLabelFor = "zip"
  locationLabel.for = locationLabelFor
  let zipLabelText = document.createTextNode("Zip");
  locationLabel.appendChild(zipLabelText)
  locationDiv.appendChild(locationLabel)

  let inputZip = document.createElement("input")
  inputZip.classList.add("form-control") 
  inputZip.type = "text"
  inputZip.id = "zip"
  inputZip.placeholder = ""
  locationDiv.appendChild(inputZip)
  
  let validationDiv = document.createElement("div")
  validationDiv.classList.add("invalid-feedback")
  let validationText = document.createTextNode("Zip code required.");
  validationDiv.appendChild(validationText) 
  locationDiv.appendChild(validationDiv)

  return locationDiv
}


function locationInfoList() {
  let mainRow = document.createElement("div")
  mainRow.classList.add("row")

  mainRow.appendChild(locationInfo())
  mainRow.appendChild(locationInfo(true))
  mainRow.appendChild(zip())
  return mainRow
}

function hr(){
  let hr = document.createElement("hr")
  hr.classList.add("mb-4")
  return hr
}

function customCheckboxes(secondCheckBox){
  let checkBoxDiv = document.createElement("div")
  checkBoxDiv.classList.add("custom-control", "custom-checkbox")

  let checkBoxInput = document.createElement("input")
  checkBoxInput.classList.add("custom-control-input")
  let checkBoxId = "same-address"

  let checkBoxLabel = document.createElement("label")
  checkBoxLabel.classList.add("custom-control-label")
  let checkBoxLabelFor = "same-address"
  let LabelText = "Shipping address is the same as my billing address"
  
  

  if(secondCheckBox) {
      checkBoxId = "save-info"
      checkBoxLabelFor = "save-info"
      LabelText = "Save this information for next time"
  }

  checkBoxInput.id = checkBoxId
  checkBoxDiv.appendChild(checkBoxInput)

  checkBoxLabel.for = checkBoxLabelFor
  let checkBoxLabelText = document.createTextNode(LabelText);
  checkBoxLabel.appendChild(checkBoxLabelText)
  checkBoxDiv.appendChild(checkBoxLabel)

  return checkBoxDiv
}

function paymentTitle(){
  let title = document.createElement("h4")
  title.classList.add("mb-3")
  let titleText = document.createTextNode("Payment");
  title.appendChild(titleText)

  return title
}

function paymentMethod(debit, paypal) {
  let paymentDiv = document.createElement("div")
  paymentDiv.classList.add("d-block", "my-3")

  let innerPayDiv = document.createElement("div")
  innerPayDiv.classList.add("custom-control", "custom-radio")
  paymentDiv.appendChild(innerPayDiv)


  let paymentInput = document.createElement("input")
  paymentInput.classList.add("custom-control-input")
  let inputId = "credit"
  paymentInput.name = "paymentMethod"
  paymentInput.type = "radio"


  let paymentLabel = document.createElement("label")
  paymentLabel.classList.add("custom-control-label")
  let payLabelFor = "credit"
  let payLabelText = "Credit card"

  if(debit) {
      inputId = "debit"
      payLabelFor = "debit"
      payLabelText = "Debit card"
  }

  if(paypal) {
      inputId = "paypal"
      payLabelFor = "paypal"
      payLabelText = "PayPal"
  }

  paymentInput.id = inputId
  innerPayDiv.appendChild(paymentInput)

  paymentLabel.for = payLabelFor
  let paymentLabelText = document.createTextNode(payLabelText);
  paymentLabel.appendChild(paymentLabelText)
  innerPayDiv.appendChild(paymentLabel)

  return paymentDiv

}

function creditCardInfo(cardName){

  let innerCreditDiv = document.createElement("div")
  innerCreditDiv.classList.add("col-md-6", "mb-3")

  let creditLabel = document.createElement("label")
  let creditLabelFor = "cc-number"
  let LabelText = "Credit card number"

  let creditInput = document.createElement("input")
  creditInput.classList.add("form-control")
  creditInput.type = "text"
  let inputId = "cc-number"
  creditInput.placeholder = ""

  if (cardName) {
      creditLabelFor = "cc-name"
      LabelText = "Name on card"
      inputId = "cc-name" 
  }

  creditLabel.for = creditLabelFor
  let creditLabelText = document.createTextNode(LabelText)
  creditLabel.appendChild(creditLabelText)
  innerCreditDiv.appendChild(creditLabel)

  creditInput.id = inputId
  innerCreditDiv.appendChild(creditInput)

  validDivText = "Credit card number is required"
  if (cardName) {
      let cardSmall = document.createElement("small")
      cardSmall.classList.add("text-muted")
      let cardSmallText = document.createTextNode("Full name as displayed on card")
      cardSmall.appendChild(cardSmallText)
      innerCreditDiv.appendChild(cardSmall)

      validDivText = "Name on card is required"
  }

  let validationDiv = document.createElement("div")
  validationDiv.classList.add("invalid-feedback")
  let validDivTextNode = document.createTextNode(validDivText)
  validationDiv.appendChild(validDivTextNode)

  innerCreditDiv.appendChild(validationDiv)

  return innerCreditDiv
}

function creaditCardInfoList(){

  let mainRowCredit = document.createElement("div")
  mainRowCredit.classList.add("row")

  mainRowCredit.appendChild(creditCardInfo(true))
  mainRowCredit.appendChild(creditCardInfo())

  return mainRowCredit
}

function CardSecretInfo(ccv) {

  let innerCreditSecretDiv = document.createElement("div")
  innerCreditSecretDiv.classList.add("col-md-3", "mb-3")

  let creditSecretLabel = document.createElement("label")
  let creditSecretLabelFor = "cc-expiration"
  let creditSecretLabelText = "Expiration"

  let creditSecretInput = document.createElement("input")
  creditSecretInput.classList.add("form-control")
  creditSecretInput.type = "text"
  creditSecretInput.placeholder = ""
  let secretInputId = "cc-expiration"

  let validDivText = "Expiration date required"
  
  if (ccv) {
      creditSecretLabelFor = "cc-cvv"
      creditSecretLabelText = "CVV"
      secretInputId = "cc-cvv"
      validDivText = "Security code required"
  }
  
  let SecretLabelText = document.createTextNode(creditSecretLabelText)
  creditSecretLabel.for = creditSecretLabelFor
  creditSecretLabel.appendChild(SecretLabelText)

  creditSecretInput.id = secretInputId

  let validationDiv = document.createElement("div")
  validationDiv.classList.add("invalid-feedback")
  let validDivTextNode = document.createTextNode(validDivText)
  validationDiv.appendChild(validDivTextNode)

  innerCreditSecretDiv.appendChild(creditSecretLabel)
  innerCreditSecretDiv.appendChild(creditSecretInput)
  innerCreditSecretDiv.appendChild(validationDiv)

  return innerCreditSecretDiv
}

function cardSecretInfoList(){
  
  let mainRowSecretCredit = document.createElement("div")
  mainRowSecretCredit.classList.add("row")

  mainRowSecretCredit.appendChild(CardSecretInfo())
  mainRowSecretCredit.appendChild(CardSecretInfo(true))

  return mainRowSecretCredit
}

function checkoutButton(){
  let checkoutButton = document.createElement("button")
  checkoutButton.type = "submit"
  checkoutButton.classList.add("btn", "btn-primary", "btn-lg", "btn-block")
  let checkoutButtonText = document.createTextNode("Continue to checkout")
  checkoutButton.appendChild(checkoutButtonText)

  return checkoutButton
}

//Footer

function footerListLinks (terms, support){

  let footerIntElement = document.createElement("li")
  footerIntElement.className = "list-inline-item"

  let footerLink = document.createElement("a")
  footerLink.href = "#"

  let LinkText = "Privacy"

  if (terms) {
      LinkText = "Terms"
  }

  if (support) {
      LinkText = "Support"
  }
  
  let footerLinkText = document.createTextNode(LinkText)
  footerLink.appendChild(footerLinkText)

  footerIntElement.appendChild(footerLink)

  return footerIntElement

}

function footerInnerList() {
  let footerList = document.createElement("ul")
  footerList.className = "list-inline"

  footerList.appendChild(footerListLinks ())
  footerList.appendChild(footerListLinks (true))
  footerList.appendChild(footerListLinks (false, true))

  return footerList
}

function footerList(){
  let footer = document.createElement("footer")
  footer.classList.add("my-5", "pt-5", "text-muted", "text-center", "text-small")

  let footerTitle = document.createElement("p")
  footerTitle.className = "mb-1"
  let footerTitleText = document.createTextNode("\u00A9 2017-2019 Company Name")
  footerTitle.appendChild(footerTitleText)

  footer.appendChild(footerTitle)
  footer.appendChild(footerInnerList()) 
  
  return footer
}

function mainFormContent(){
  mainFormDiv()
  let productIntFormDiv = document.querySelector(".col-md-4.order-md-2.mb-4")
  productIntFormDiv.appendChild(cartTitle())
  productIntFormDiv.appendChild(productList())
  productIntFormDiv.appendChild(promoForm())

  let intFormDiv = document.querySelector(".needs-validation")
  intFormDiv.appendChild(firstRowName())
  intFormDiv.appendChild(personalInfo(true))
  intFormDiv.appendChild(personalInfo(false, true))
  intFormDiv.appendChild(personalInfo(false, false, true))
  intFormDiv.appendChild(personalInfo(false, false, false, true))

  intFormDiv.appendChild(locationInfoList())
  intFormDiv.appendChild(hr())

  intFormDiv.appendChild(customCheckboxes())
  intFormDiv.appendChild(customCheckboxes(true))
  intFormDiv.appendChild(hr())

  intFormDiv.appendChild(paymentTitle())
  intFormDiv.appendChild(paymentMethod())
  intFormDiv.appendChild(paymentMethod(true, false))
  intFormDiv.appendChild(paymentMethod(false, true))

  intFormDiv.appendChild(creaditCardInfoList())

  intFormDiv.appendChild(cardSecretInfoList())
  intFormDiv.appendChild(hr())
  intFormDiv.appendChild(checkoutButton())
}

function appendFooter(){
  let body = document.querySelector("body")
  body.appendChild(footerList())
}

headerContent()
mainFormContent()
appendFooter()
