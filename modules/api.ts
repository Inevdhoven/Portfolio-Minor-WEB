async function requestUser(username: string, repo?: string, followers?: string, following?: string){
    let url = `https://api.github.com/users/${username}`;

    if (repo) {
        url += `/repos`
    }

    if (followers) {
        url += `/followers`
    }

    if (following) {
        url += `/following`
    }

    const args = {'username': username, 'repo': repo, 'followers': followers, 'following': following};
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

async function dataDisplay () {
    try {
        const data = await requestUser('inevdhoven');
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
        console.log('ERROR')
        window.location.hash = "error"
    }
}

export default{
    requestUser,
    dataDisplay
}