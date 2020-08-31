const api = "https://dpkg-api.herokuapp.com/api/dpkg";

const getDpkg = () => {
  return fetch(api);
};

export default { getDpkg };
