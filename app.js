let tbody = document.getElementById('tbody');
let output = ``;

fetch('https://hwh-crawler.herokuapp.com/news')
  .then(res => {
    return res.json();
  })
  .then(result => {
    for (let i = 0; i < result.length; i++) {
      output += ` <tr><td scope="row">${result[i].date}</td>
            <td ><a href="${result[i].url}">${result[i].title}</a></td>
            <td>${result[i].unit}</td></tr>`;
      tbody.innerHTML=output;
    }
  });
