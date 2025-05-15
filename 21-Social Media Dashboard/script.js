// Mock user data
const user = {
    name: "John Doe",
    username: "john_doe",
    posts: [
        { title: "Post 1", content: "This is the content of the first post." },
        { title: "Post 2", content: "This is the content of the second post." },
        // Add more posts as needed
    ],
};

// Display user profile information
function displayProfile() {
    const profileElement = document.getElementById("profile");
    profileElement.innerHTML = `
          <h2>${user.name}</h2>
          <p>@${user.username}</p>
      `;
}

// Display social media posts
function displayPosts() {
    const postsElement = document.getElementById("posts");

    user.posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
              <h2>${post.title}</h2>
              <p>${post.content}</p>
          `;

        postsElement.appendChild(postElement);
    });
}

// Logout function (placeholder)
function logout() {
    alert("User logged out.");
    // Implement actual logout logic here
}

// Initial function calls
window.onload = function () {
    displayProfile();
    displayPosts();
};
