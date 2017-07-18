function setHead(title, description, keywords) {
  document.querySelector("title").innerHTML = title;
  document.querySelector('meta[name="description"]').setAttribute("content", description);
  document.querySelector('meta[name="keywords"]').setAttribute("content", keywords);
}

export default setHead;
