
document.getElementById("loginBtn").addEventListener("click", async function (event) {
    event.preventDefault(); 

    const username = document.getElementById("usernameInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    try {
        const response = await fetch("https://localhost:7227/api/Users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });
            const data = await response.json();
            console.log("Login response data:", data)
            
        if (response.ok) {

             sessionStorage.setItem("userId", data.userId);
             sessionStorage.setItem("username", data.username);
           
            alert("Login successful!");
             
window.location.href = "(Account)HomePage.html";
           
        } else if (response.status === 401) {
            alert("Invalid username or password.");
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error(error);
        alert("Error connecting to server.");
    }
});
