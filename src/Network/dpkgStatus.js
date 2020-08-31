const api = "https://hoang-reaktor2020.herokuapp.com/api/dpkg";

const getDpkg = () => {
  return fetch(api);
};

export default { getDpkg };
