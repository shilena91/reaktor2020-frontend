const api = "api/dpkg";

const getDpkg = () => {
  return fetch(api);
};

export default { getDpkg };
