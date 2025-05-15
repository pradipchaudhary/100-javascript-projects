const blogPosts = [
    { title: "First Post", content: "This is the content of the first post." },
    {
        title: "Second Post",
        content: "This is the content of the second post.",
    },
    // Add more posts as needed
];

function displayBlogPosts() {
    const blogPostsElement = document.getElementById("blogPosts");

    blogPosts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
              <h2>${post.title}</h2>
              <p>${post.content}</p>
          `;

        blogPostsElement.appendChild(postElement);
    });
}

window.onload = displayBlogPosts;
