const base_url = `https://api.github.com/`;

export const getProfile = async (username) => {
	const response = await fetch(`${base_url}users/${username}`);
	return await response.json();
};

export const getRepos = async (username) => {
	const response = await fetch(`${base_url}users/${username}/repos`);
	return await response.json();
};
