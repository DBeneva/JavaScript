// input .value=${searchParam}
// button @click=${onSearch}

export async function dashboardPage(ctx) {
  const searchParam = ctx.querystring.split('=')[1];
  const data = await getFurniture(searchParam);
  ctx.render.dashboardTemplate(data, searchParam, onSearch);
  
  function onSearch(ev) {
    const search = encodeURIComponent(document.getElementById('searchInput').value);
    ctx.page.redirect('/?search=' + search);
  }
}

async function getFurniture(search) {
  if (search) {
    return await api.get(host + '/data/catalog?where=' + encodeURIComponent(`make LIKE "${search}"`));
  } else {
    
  }
}