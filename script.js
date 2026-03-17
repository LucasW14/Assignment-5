// const apiUrl = "https://api.github.com/users/LucasW14/repos";
// // Make a GET request using the Fetch API
// function getRepos() {
//     fetch(apiUrl)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then((repoData) => {
//             // Process the retrieved repo data
//             console.log("Repos resolved: My Repo Data:", repoData);
//         })
//         .catch((error) => {
//             console.error("Error:", error);
//         });
// }
// let myRepos = getRepos();
// console.log('Repos we just fetched: ', myRepos);

const form = document.getElementById("search");
form.addEventListener("submit", getRepos);
const gallery = document.getElementById("gallery");


// Make a GET request using the Fetch API
function getRepos(event) {

    event.preventDefault(); // stops page refresh


    let params = new FormData(document.getElementById("search"));
    let object = Object.fromEntries(params);
    let username = object.name;
    const apiUrl = "https://api.github.com/users/" + username + "/repos";

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            repos = response.json()

            return repos;
        })
        .then((data) => {console.log(data); return data;})
        .then((repos) => {

            repos.slice(0, 10).forEach(repo => {

                const card = document.createElement("div");
                card.classList.add("repo-card")


                card.innerHTML = `
            <h1><Strong>${repo.full_name}<Strong></h1>
            <Strong>Created: <Strong>${repo.created_at}
        `;


                gallery.appendChild(card);

            });

        })

        .then((repoData) => {
            // Process the retrieved repo data
            console.log("Repos resolved: My Repo Data:", repoData);
        })
        .catch((error) => {
            console.error("Error:", error);
        });


}


// const container = document.getElementById("posts");
// const button = document.getElementById("load");

// button.addEventListener("click", loadPosts);

// async function loadRepos(username) {

//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();

//     posts.slice(0, 5).forEach(post => {

//         const card = document.createElement("div");

//         card.innerHTML = `
//             <h3>${post.title}</h3>
//             <p>${post.body}</p>
//         `;

//         card.style.border = "1px solid gray";
//         card.style.padding = "10px";
//         card.style.margin = "10px";

//         container.appendChild(card);

//     });
// }






// let myRepos = getRepos();
// console.log("Repos we just fetched: ", myRepos);



// let url = 'https://crudcrud.com/api/175c688a490f47cc8d2206e70f4dd3c8/users';
// function submitForm() {
//     // pass in entire form tag
//     let params = new FormData(document.getElementById("input-form"));
//     let jsonBody = JSON.stringify(Object.fromEntries(params)); //make form data json string.
//     console.log(jsonBody);
//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Accept": "application/json, text/plain, */*",
//             "Content-Type": "application/json"
//         }
//         , body: jsonBody
//     })
//         .then((response) => {
//             if (!response.ok) {
//                 throw Error("Error in request: " + response.statusText);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((error) => {
//             console.error("Error: ", error);
//         });
// }
// document.getElementById("input-form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     submitForm();
// });

