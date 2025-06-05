const checkValidData = (email, name) => {

    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    // const isValidPhone = 

    if(email == "") return "Email ID is required!"
    if(!isValidEmail) return "Email ID is not valid!";

    if(name == "") return "Please fill the name!";

    return null;
}

export default checkValidData;