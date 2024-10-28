document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postInput = document.getElementById('post-input');
    const postsContainer = document.getElementById('posts-container');

    const posts = [
        { author: 'Fulano da Silva', role: 'Software Developer', content: 'Learn JavaScript before starting React!' }, 
        { author: 'Fulano da Silva', role: 'Software Developer', content: 'With parallax you can design beautiful sites.' },
        { author: 'Fulano da Silva', role: 'Software Developer', content: 'Which method do you think is the most underrated?' }
    ];

    function createPostElement(post) {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <div class="post_header">
                <i class="material-icons"> account_circle </i>
                <div class="post_info">
                    <h2>${post.author}</h2>
                    <p>${post.role}</p>
                </div>
            </div>
            <div class="post_body">
                <p>${post.content}</p>
            </div>
            <div class="feed_inputOptions">
                <div class="inputOption">
                    <i style="color: gray" class="material-icons">thumb_up</i>
                    <h4>Like</h4>
                </div>
                <div class="inputOption">
                    <i style="color: gray" class="material-icons">comment</i>
                    <h4>Comment</h4>
                </div>
                <div class="inputOption">
                    <i style="color: gray" class="material-icons">share</i>
                    <h4>Share</h4>
                </div>
                <div class="inputOption">
                    <i style="color: gray" class="material-icons">send</i>
                    <h4>Send</h4>
                </div>
            </div>
        `;
        return postElement;
    }

    function renderPosts() {
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            postsContainer.prepend(createPostElement(post));
        });
    }

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const content = postInput.value.trim();
        if (content) {
            const newPost = {
                author: 'Fulano da Silva',
                role: 'Software Developer',
                content: content
            };
            posts.unshift(newPost);
            renderPosts();
            postInput.value = '';
        }
    });

    renderPosts();
});
