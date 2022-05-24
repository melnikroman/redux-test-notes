export async function fetchNotes(search) {
    return await fetch(`https://www.reddit.com/r/${search}.json`)
        .then((response) => response.json())
        .catch(() => [])
}
