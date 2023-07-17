export function getPagesCount(totalPosts, limit) {
  return Math.ceil(totalPosts / limit);
}

export function getPagesArray(totalPages) {
  const result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
}
