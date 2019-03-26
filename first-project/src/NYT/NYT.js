const mockBooks = [
    {
        rank: 1,
        title: "GATHERING PREY",
        author: "John Sandford",
        book_image: "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg"
    },
    {
        rank: 2,
        title: "MEMORY MAN",
        author: "David Baldacci",
        book_image: "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg"
    },
];

function fetchBooks() {
  return mockBooks;
}

export default { fetchBooks: fetchBooks };