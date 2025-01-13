const base_url = `https://api.github.com/`;
const token = import.meta.env.VITE_GITHUB_TOKEN;
const header = {
	headers: {
		Authorization: `token ${token}`,
	},
};

export const getProfile = async (username) => {
	const response = await fetch(`${base_url}users/${username}`, token ? { header } : "");
	return await response.json();
};

export const getRepos = async (username) => {
	const response = await fetch(`${base_url}users/${username}/repos`, token ? { header } : "");
	return await response.json();
};
