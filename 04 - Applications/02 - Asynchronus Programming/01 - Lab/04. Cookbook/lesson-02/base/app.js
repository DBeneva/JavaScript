async function getRecipes() {
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/recipes');
    
    if (response.ok == false) {
        throw new Error(response.statusText);
    }
    
    const recipes = await response.json();

    return Object.values(recipes);
}

async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/details/' + id);
    const recipe = await response.json();

    return recipe;
}

function createRecipePreview(recipe) {
    const preview = e('article', { className: 'preview', onClick: toggleCard },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return preview;

    async function toggleCard() {
        const fullRecipe = await getRecipeById(recipe._id);
        preview.replaceWith(createRecipeCard(fullRecipe));
    }
}

function createRecipeCard(recipe) {
    const recipeCard = e('article', {},
        e('h2', {}, recipe.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' },
                e('img', { src: recipe.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i)))
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation'),
            recipe.steps.map(s => e('p', {}, s))
        )
    );

    return recipeCard;
}

window.addEventListener('load', async () => {
    const main = document.querySelector('main');
    main.innerHTML = '';

    const recipes = await getRecipes();
    const previews = recipes.map(createRecipePreview);
    previews.forEach(p => main.appendChild(p));
});

function e(type, attributes, ...content) {
    let element = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.slice(0, 2) == 'on') {
            element.addEventListener(attr.slice(2).toLocaleLowerCase(), value);
        } else {
            element[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(c), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            element.appendChild(node);
        } else {
            element.appendChild(e);
        } 
    });

    return element;
}