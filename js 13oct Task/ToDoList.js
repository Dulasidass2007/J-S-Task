// function homepg(){
//                  document.getElementById("section1").style.display="none";
//                  document.getElementById("section2").style.display="block";
// document.getElementById("section3").style.display="block";
// document.getElementById("section4").style.display="block";

// document.getElementById("section5").style.display="none";
// document.getElementById("section6").style.display="none";

// }
// function addtask(){
//               document.getElementById("section1").style.display="none";
//                  document.getElementById("section2").style.display="block";
// document.getElementById("section3").style.display="block";
// document.getElementById("section5").style.display="block";
// document.getElementById("section4").style.display="none";

// document.getElementById("section6").style.display="none";
// }
// function mytask(){
//               document.getElementById("section1").style.display="none";
//                  document.getElementById("section2").style.display="block";
// document.getElementById("section3").style.display="block";
// document.getElementById("section5").style.display="none";
// document.getElementById("section4").style.display="none";
// document.getElementById("section6").style.display="block";


// } 


// let task =[];
//   function addinput() {
//     let task = document.getElementById("taskinut").value.trim();

//     if (task === "") {
//       alert("⚠️ Please enter a task before adding!");
//     } else {
//       alert("Task added successfully: ");
      
//     }
//          const task = {
//            id: Math.floor(Math.random() * 1000),
//             name: name,

//             completed: false,
//             createdAt: new Date().toLocaleString()
//           };

//    }


                    
                  

// function addinput(){

//  let taskinput = document.getElementById("taskinut");
//  let tasklist = document.getElementById("tasklist");
// }

// let task =[];
// function addinput(){
// const input= document.getElementById("addinput");
// const name= input.ValueMax.trim();

// new Promise((resolve, reject) => {
//    if(!name){
//       reject("Empty task name");
//    }else{
//       alert("Task added successfully");
//       resolve("Task added succesfully");
//    }
// })
// then(() => {
//           const task = {
//             id: Math.floor(Math.random() * 1000),
//             name: name,

//             completed: false,
//             createdAt: new Date().toLocaleString()
//           };
//           ;tasks.push(task);
//           input.value = "";

//           viewTasks()
//         })
//         .catch(error => {
//           alert(error);
//         });
//     }

//     function viewTasks() {
//       const list = document.getElementById("taskList");
//       list.innerHTML = "";

//       if (!tasks.length) {
//         list.innerHTML = "<li>No tasks found!</li>";
//         return;
//       }
//  for (let task of tasks) {
//         const li = document.createElement("li");
//         li.className = task.completed ? "completed" : "";

//         li.innerHTML = `
// <center>
//           <strong>${task.name}</strong>
         
//           <small>Created: ${task.createdAt}</small>
//           <button onclick="markCompleted(${task.id})"> Done</button>
//           <button onclick="deleteTask(${task.id})">Delete</button>
//           </center>
//         `;
//         list.appendChild(li);
//       }
//     }

//     function deleteTask(id) {
//       try {
//         const task1 = tasks.findIndex(task => task.id === id);
//         if (task1) throw new Error("Task not found!");
//         tasks.splice(task1, 1);
//         viewTasks();
//       } catch (error) {
//         alert(error.message);
//       }
//     }

//     function markCompleted(id) {
//       try {
//         const task = tasks.find(task => task.id === id);
//         if (!task) throw new Error("Task not found!");
//         task.completed = true;
//         viewTasks();
//   } catch (error) {
//         alert(error.message);
//       }
//     }





