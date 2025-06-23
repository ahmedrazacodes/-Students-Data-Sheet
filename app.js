
const students = [
  {
    name: "Ahmed Raza",
    class: "10th",
    age: 15,
    email: "ahmed.raza@example.com",
    contact: "03123456789",
    address: "Jacobabad, Sindh"
  },
  {
    name: "Ali Nawaz",
    class: "9th",
    age: 14,
    email: "ali.nawaz@example.com",
    contact: "03222333444",
    address: "Larkana, Sindh"
  },
  {
    name: "Bilal Ahmed",
    class: "8th",
    age: 13,
    email: "bilal.ahmed@example.com",
    contact: "03001112233",
    address: "Sukkur, Sindh"
  },
  {
    name: "Umer Saeed",
    class: "10th",
    age: 15,
    email: "umer.saeed@example.com",
    contact: "03666777888",
    address: "Shikarpur, Sindh"
  },
  {
    name: "Tariq Mehmood",
    class: "7th",
    age: 12,
    email: "tariq.mehmood@example.com",
    contact: "03888999000",
    address: "Khairpur, Sindh"
  },
  {
    name: "Hassan Ali",
    class: "9th",
    age: 14,
    email: "hassan.ali@example.com",
    contact: "03455667788",
    address: "Karachi, Sindh"
  },
  {
    name: "Zain Abbas",
    class: "8th",
    age: 13,
    email: "zain.abbas@example.com",
    contact: "03119998877",
    address: "Nawabshah, Sindh"
  },
  {
    name: "Fahad Khan",
    class: "10th",
    age: 15,
    email: "fahad.khan@example.com",
    contact: "03214445566",
    address: "Mirpurkhas, Sindh"
  },
  {
    name: "Rehan Siddiqui",
    class: "7th",
    age: 12,
    email: "rehan.siddiqui@example.com",
    contact: "03334446655",
    address: "Hyderabad, Sindh"
  },
  {
    name: "Hamza Sheikh",
    class: "8th",
    age: 13,
    email: "hamza.sheikh@example.com",
    contact: "03009998877",
    address: "Thatta, Sindh"
  }
];

let show = document.querySelector(".show")
let currentindex

        render()
function render(){
    show.innerHTML = "";
    for(let i = 0; i <students.length; i++){
        show.innerHTML += `<tr>
                <td>${students[i].name}</td>
                <td>${students[i].class}</td>
                <td>${students[i].age}</td>
                <td>${students[i].email}</td>
                <td>${students[i].contact}</td>
                <td>${students[i].address}</td>
                <td><button class="edit" onclick="editFun(${[i]})">Edit</button></td>
                </tr>`
    }}

    let editBtn = document.querySelector(".edit")
    let updateBtn = document.querySelector(".update-btn")

    let formName = document.querySelector(".name-input")
    let formClass = document.querySelector(".class-input")
    let formAge = document.querySelector(".age-input")
    let formEmail = document.querySelector(".email-input")
    let formContact = document.querySelector(".contact-input")
    let formAddress = document.querySelector(".address-input")


    let editingForm = document.querySelector(".editing-form")
    function editFun(index){
        currentindex = index;
        console.log(currentindex)
        formName.value = students[index].name;
        formClass.value = students[index].class;
        formAge.value = students[index].age;
        formEmail.value = students[index].email;
        formContact.value = students[index].contact;
        formAddress.value = students[index].address;

        editingForm.style.display = "block";                                          
    }

    updateBtn.addEventListener("click", function(){
        editingForm.style.display = "none"; 
        students[currentindex].name = formName.value;    
        students[currentindex].class = formClass.value;    
        students[currentindex].age = formAge.value;    
        students[currentindex].email = formEmail.value;    
        students[currentindex].contact = formContact.value;    
        students[currentindex].address = formAddress.value;
        render()
    })