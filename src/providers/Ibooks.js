const url = "https://api-ibooks.mybluemix.net/ebooks/"

const token = 'dbe62952defb9bb128e0aeadfed3d247';

const headers = {
  'Content-Type': 'application/json'
}

export const getIbooks = () => fetch(
  `${url}?token=${token}`,
  {
    headers: headers,
  }
).then(res => res.json()).then(data => data);
