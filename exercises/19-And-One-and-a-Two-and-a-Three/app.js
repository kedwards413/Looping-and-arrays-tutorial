let contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}
for(key in contact){
    
    console.log(`${key}: ${contact[key]}`);
}