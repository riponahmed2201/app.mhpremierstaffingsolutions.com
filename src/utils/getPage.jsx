export const getPage = (query) => {
    const page = new URLSearchParams(query || window.location.search);
    return parseInt(page.get("page"));
};
