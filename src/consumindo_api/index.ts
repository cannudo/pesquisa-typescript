const form: HTMLFormElement = document.querySelector('.find-form')! // asserção não nula
const postSection = document.querySelector('.posts') as HTMLDivElement // declaração de tipo
const url: string = 'https://jsonplaceholder.typicode.com/posts'

interface PostProperties {
    userId: string,
    id: number,
    title: string,
    body: string,
}

async function getPosts(): Promise< Array<PostProperties> > {
    const posts: Array<PostProperties> = await fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err))

    return posts
}

async function getOnePost(id: number): Promise<PostProperties> {
    const post: PostProperties = await fetch(url + '/' + id)
        .then(res => res.json())
        .catch(err => console.log(err))
    
    return post
}

async function showPosts() {
    const posts: Array<PostProperties> = await getPosts()

    posts.forEach(post => {
        const currentPost: HTMLDivElement = createPost(post)
        postSection.appendChild(currentPost)
    });
}

async function showOnePost(id: any) {
    if (id === '') {
        showPosts()
        return
    }

    const post = await getOnePost(id)

    if (!post) showPosts()
    
    postSection.appendChild(createPost(post))

    isInvalidInput(id)
}

function cleanPostSection(): void {
    postSection.innerHTML = ''
}

function isInvalidInput(id: Number): void {
    if (id > 100 || id < 0) 
        postSection.innerHTML = '<br/><h1 class="flag">Post não encontrado!</h1>'
}

function createPost(post: PostProperties): HTMLDivElement {
    const createdPost: HTMLDivElement = document.createElement('div')

    createdPost.classList.add('post')
    createdPost.innerHTML = `
        <p class="id">${post.id}</p>
        <h3 class="title">${post.title}</h3>
        <p class="description">${post.body}</p>
    `

    return createdPost
}

showPosts()

form.addEventListener('input', async () => {
    const input: HTMLInputElement = form.querySelector('input')!
    const inputValue: any = input.value

    cleanPostSection();
    isInvalidInput(inputValue);
    showOnePost(inputValue)
})
