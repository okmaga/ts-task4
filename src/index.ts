const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface Comment {
  postId: 1;
  id: 1;
  name: string;
  email: string;
  body: string;
}

const getData = <T>(url: string): Promise<T> => {
  return fetch(url).then((response) => response.json() as T);
};

getData<Comment[]>(COMMENTS_URL).then((data: Comment[]) => {
  data.forEach((comment) => {
    console.log(`ID: ${comment.id}, Email: ${comment.email}`);
  });
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
