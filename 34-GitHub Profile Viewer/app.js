const url = `https://api.github.com/users`;
const searchInputEl = document.getElementById("searchInput");
const profileBox = document.getElementById("profileBox");
const loading = document.getElementById("loading");

const profileGenerator = (profile) => {
    return `<div class="inner_profile">
        <div class="profile_header">
            <div class="header_info">
                <div class="profile_image">
                    <img src="${profile.avatar_url}" alt="">
                </div>
                <div class="profile_info">
                    <h2>${profile.name} </h2>
                    <p class="username">@${profile.login}</p>
                </div>
            </div>
            <div class="profile_link">
                <a href="${profile.html_url}" target="_blank">Profile</a>
            </div>
        </div>
        <main>
            <div class="bio">${profile.bio}</div>
            <div class="more_profile_info">
                <div>
                    <h3>${profile.followers}</h3>
                    <h3>Followers</h3>
                </div>
                <div>
                    <h3>${profile.following}</h3>
                    <h3>Following</h3>
                </div>
                <div>
                    <h3>${profile.public_repos}</h3>
                    <h3>Repositories</h3>
                </div>
            </div>
            <div id="popular_repos">
                
            </div>
        </main>
    </div>`;
};

// Fetch user Profile from GitHub
const fetchProfile = async (event) => {
    const username = searchInputEl.value;
    if (event.key === "Enter") {
        try {
            loading.innerText = "Loading...";
            loading.style.color = "#efefef";
            const res = await fetch(`${url}/${username}`);
            const data = await res.json();

            if (data.name) {
                profileBox.innerHTML = profileGenerator(data);
                // getRepositories(username);
                getPopularRepositories(username)
                    .then((repositories) => {
                        const reposEl =
                            document.querySelector("#popular_repos");
                        repositories.forEach((repository, index) => {
                            const elem = document.createElement("a");
                            elem.classList.add("repo");
                            elem.href = repository.html_url;
                            elem.innerHTML = repository.name;

                            reposEl.appendChild(elem);
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                loading.innerText = "";
            } else {
                loading.innerHTML = data.message;
                loading.style.color = "red";
                loading.style.marginTop = "60px";
                profileBox.innerHTML = "";
            }
        } catch (error) {
            console.log({ error });
        }
    }
};

async function getPopularRepositories(username) {
    try {
        const response = await fetch(
            `${url}/${username}/repos?sort=stars&per_page=6`
        );
        const repositories = await response.json();

        return repositories;
    } catch (error) {
        throw new Error(
            `Failed to fetch popular repositories: ${error.message}`
        );
    }
}

// Usage

searchInputEl.addEventListener("keypress", fetchProfile);
// END
