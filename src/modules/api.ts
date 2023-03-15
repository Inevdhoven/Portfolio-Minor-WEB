async function requestUser(username: string, repo?: string){
    let url = `https://api.github.com/users/${username}`;

    if (repo) {
        url += `/repos`
    }

    const args = {'username': username, 'repo': repo};
    const response = await fetch(url);

    if ( response.ok ) {
        let result = await response.json();
        result.apiArguments = args;
        return result;
    } else {
        console.log(response);
        throw new Error('HTTP ERROR!!!')
        window.location.hash = "error"
    }
}

async function displayData() {
    try {
        const data = await requestUser('inevdhoven');
        // console.log(data)
        return data;
    } catch (error) {
        console.log(error)
        console.log('ERROR')
        window.location.hash = "error"
    }
}

async function displayMyWork() {
    try {
        const data = await requestUser('inevdhoven', 'repos');
        // console.log(data)
        return data;
    } catch (error) {
        console.log(error)
        console.log('ERROR')
        window.location.hash = "error"
    }
}

export default{
    requestUser,
    displayData,
    displayMyWork
}