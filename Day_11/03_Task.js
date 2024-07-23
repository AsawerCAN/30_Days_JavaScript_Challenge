// Activity 2: Chaining Promises

// Task 3:
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User data fetched");
      resolve("User123");
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Posts for ${userId} fetched`);
      resolve(["Post1", "Post2", "Post3"]);
    }, 1000);
  });
}

function fetchPostComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Comments for ${postId} fetched`);
      resolve(["Comment1", "Comment2", "Comment3"]);
    }, 1000);
  });
}

fetchUserData()
  .then((userId) => {
    return fetchUserPosts(userId);
  })
  .then((posts) => {
    return fetchPostComments(posts[0]);
  })
  .then((comments) => {
    console.log("All data fetched:", comments);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
